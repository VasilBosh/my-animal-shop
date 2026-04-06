import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    { title: 'Твърде много екрани', description: 'Децата прекарват средно 7 часа на ден пред екрани' },
    { title: 'Загуба на креативност', description: 'Дигиталните игри ограничават въображението' },
    { title: 'Липса на социални умения', description: 'Недостатъчно време за игра с други деца и родители' },
  ];

  return (
    <section ref={sectionRef} className="py-8 lg:py-20 bg-[#FDFBF6]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal opacity-0 relative order-2 lg:order-1">
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <img src="/real-1.jpg" alt="Майка и дете" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 lg:-bottom-6 lg:-right-6 bg-white rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-xl max-w-[180px] lg:max-w-[240px]">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#E4F22B] rounded-full flex items-center justify-center text-base lg:text-xl">💡</div>
                <div>
                  <p className="font-bold text-[#0C6D3E] text-xs lg:text-base">Решението?</p>
                  <p className="text-[10px] lg:text-sm text-[#0C6D3E]/70">Игра, която сближава!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <div className="reveal opacity-0">
              <span className="inline-block bg-[#F6A377]/20 text-[#F6A377] px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium mb-2 lg:mb-3">
                Проблемът
              </span>
              <h2 
                className="text-xl lg:text-4xl xl:text-5xl leading-tight font-bold text-[#0C6D3E]"
                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
              >
                Твърде Много Екрани,
                <span className="block text-[#F6A377]">Твърде Малко Игра?</span>
              </h2>
            </div>
            
            <p className="reveal opacity-0 text-sm lg:text-lg text-[#0C6D3E]/80 stagger-1">
              В днешния дигитален свят децата прекарват все повече време пред таблети и телефони. Това ограничава тяхната креативност, фината моторика и социалните умения.
            </p>
            
            <div className="reveal opacity-0 space-y-2 lg:space-y-3 stagger-2">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-2.5 lg:gap-4 p-2.5 lg:p-4 bg-white rounded-lg lg:rounded-xl shadow-sm">
                  <div className="w-7 h-7 lg:w-10 lg:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0C6D3E] text-xs lg:text-base">{problem.title}</h3>
                    <p className="text-[11px] lg:text-sm text-[#0C6D3E]/70">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
