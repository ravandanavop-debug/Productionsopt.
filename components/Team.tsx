import React from 'react';

const Team: React.FC = () => {
  const members = [
    {
      id: "01",
      name: "LESLIE ALEXANDER",
      date: "8/2/23",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTdqQp-YAIfH7p36OgdWZDhk3PMb3nRSuZIvuBmL9ViW0kp0t6vpQ888Efn_KivKQI6L3w2MKFWoLUhGk2lEpIlVrkYJSQvKNXCw26xY6NAAGmSRwiV5hJCx3fZ9TXsCcRVRfVVG-TzkhEJN9PZeG50L-IazYOkMH_2w-2F55QSOgdULEMj_ZRGAfJK97NQsurjs5QHmCJoSzZZM_XLIM2Ukx2QAvSDyFIClkuU-7Ltpf0XPawxZodqyReGWiC1UZCQevAD0hwlns"
    },
    {
      id: "02",
      name: "KATHRYN MURPHY",
      date: "8/15/23",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOE-s7EjuuT9qoNzowR1a-YaUjIFjdnz_Yy89T9ZiC_gDrUyWP6mQzgD312Ov0QW0kLX4k-nnMOuXbeS5TQ6FUm-gKG7GpPIjQB91Z2gzyWQPKSJiHu60Lh6eeqvDt48hnBcdyChL_hsX14X0Icz7jT75rsvt8ecbkdJruyySWV09K0CglkCa-e71ICTG3AlVhaDipOU3vi-xXxjdiThU3dF8QNK9lp-jzx3IwIuiCIroH_3_AY2Xzkkxdh3x0zhQzV5u7bHng_UA"
    },
    {
      id: "03",
      name: "DIANNE RUSSELL",
      date: "5/27/23",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXWL8Wk17O5cwfzIgd44rfg3h1-SjDtrFXFXju1weaXygsrnoEbfy0BFCnz5VsLq2a-3DwecTKgglDb4ljhB-5W-qyXnlF4J6216uq_4OE1zKPn22uTxew10uvapkDZWZLgVoEBXvPAESnvqgYMAvIHSIP7sCd6daGz0gRZ_DXeGFrFx9qZF3iB99yB4M_l9avF4SwrHBs_AUSR9h_HuJOcOMM2e98y74XT_I_oLDE2BW253jihBxf7GcKbA9bI-YZrBtZUafLq8k"
    },
    {
      id: "04",
      name: "ELEANOR PENA",
      date: "5/30/23",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp0oN9j-85LPwD_ZBcNykGN3EJ3RiXA7ycyVQjA3LpI5mEIwUiQeq3HK8R2uYTVkUNpxgYzQ_JGpoApQuptmM4Z21JByP0XI5dSOZhC8JtsYI0DOWk88t3OOyrsI9SYrtm_YtMyOsY1Vqu5u36Tg1ZwtM2AmXUnldnTtRAVmo4mgNg4HwWpDJvbr1ggTHVGIg3OpVT4bYpoy65U9MkexXdTlZoviLJgbQkXw82hmT74dva8NX5lAMQg3iQOhggf7yxqeQq-DqCCgM",
      className: "hidden lg:block"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <div key={member.id} className={`space-y-2 group cursor-pointer ${member.className || ''}`}>
            <span className="text-xs font-mono group-hover:text-primary transition-colors">{member.id}</span>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <p className="font-semibold group-hover:text-primary transition-colors">{member.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{member.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;