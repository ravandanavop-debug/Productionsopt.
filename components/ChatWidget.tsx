import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/gemini';
import { Content } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your Photono assistant. How can I help you capture your next moment?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Convert local message format to Google GenAI Content format for history
    const history: Content[] = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText || "I'm having trouble responding right now." }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black transition-all hover:scale-110"
        >
          <span className="material-icons text-3xl">chat</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <h3 className="font-display tracking-wide text-lg">Productionspot. AI</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <span className="material-icons text-sm">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/50 no-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-black text-white dark:bg-white dark:text-black rounded-tr-none'
                      : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 bg-gray-100 dark:bg-zinc-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="w-9 h-9 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-primary dark:hover:bg-primary transition-colors"
              >
                <span className="material-icons text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;