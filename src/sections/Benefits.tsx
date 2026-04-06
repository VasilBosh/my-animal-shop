import { useEffect, useRef } from 'react';
import { Hand, Brain, BookOpen, Heart, Sparkles, Lightbulb, Target, Smile } from 'lucide-react';

export default function Benefits() {
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

  const benefits = [
    { icon: Hand, title: 'Фината Моторика', desc: 'Развива координацията между ръце и очи' },
    { icon: Brain, title: 'Въображението', desc: 'Създават собствени истории' },
    { icon: BookOpen, title: 'Учене', desc: 'Запознава с различни животни' },
    { icon: Heart, title: 'Семейно', desc: 'Време заедно с децата' },
    { icon: Sparkles, title: 'Търпение', desc: 'Внимание и постоянство' },
    { icon: Lightbulb, title: 'Логика', desc: 'Части се съединяват в цяло' },
    { icon: Target, title: 'Постижение', desc: 'Гордост и увереност' },
    { icon: Smile, title: 'Удоволствие', desc: 'Радост и забавление' },
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-8 lg:py-20 bg-[#FDFBF6]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-10">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#0C6D3E]/10 text-[#0C6D3E] px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
              Предимства
            </span>
            <h2 
              className="text-xl lg:text-4xl xl:text-5xl leading-tight font-bold text-[#0C6D3E] mb-3 lg:mb-4"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Защо Децата
              <span className="text-[#F6A377]"> Обожават</span> Животинки?
            </h2>
            <p className="text-sm lg:text-lg text-[#0C6D3E]/80">
              Нашата игра е създадена с грижа за развитието на вашето дете
            </p>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 mb-6 lg:mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="reveal opacity-0 group bg-[#E4F22B]/10 rounded-lg lg:rounded-xl p-3 lg:p-5 hover:shadow-md transition-all">
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#E4F22B] rounded-lg lg:rounded-xl flex items-center justify-center mb-2 lg:mb-3 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-4 h-4 lg:w-6 lg:h-6 text-[#0C6D3E]" />
              </div>
              <h3 className="font-semibold text-[#0C6D3E] text-xs lg:text-base mb-0.5 lg:mb-1">{benefit.title}</h3>
              <p className="text-[10px] lg:text-sm text-[#0C6D3E]/70 leading-tight">{benefit.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="reveal opacity-0 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
          {[
            { value: '50+', label: 'Уникални животни' },
            { value: '3+', label: 'Годишна възраст' },
            { value: '1000+', label: 'Доволни семейства' },
            { value: '100%', label: 'Еко материали' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 lg:p-5 bg-white rounded-lg lg:rounded-xl shadow-sm">
              <p className="text-xl lg:text-3xl font-bold text-[#E4F22B] mb-0.5 lg:mb-1" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-[10px] lg:text-sm text-[#0C6D3E]/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
