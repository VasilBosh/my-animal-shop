import { useEffect, useRef } from 'react';
import { Check, Leaf, Shield, Puzzle } from 'lucide-react';

export default function Product() {
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

  const features = [
    { icon: Puzzle, title: '50 Уникални Животни', description: 'От лъв до динозавър - всяко животно е различно и интересно' },
    { icon: Leaf, title: 'Еко-приятелски Картон', description: 'Изработени от рециклируем, безопасен за околната среда материал' },
    { icon: Shield, title: 'Безопасно за Деца 3+', description: 'Закръглени ръбове и нетоксични бои, одобрени за деца' },
  ];

  const animals = [
    { name: 'Лъв', emoji: '🦁' },
    { name: 'Слон', emoji: '🐘' },
    { name: 'Тигър', emoji: '🐯' },
    { name: 'Панда', emoji: '🐼' },
    { name: 'Пингвин', emoji: '🐧' },
    { name: 'Хипопотам', emoji: '🦛' },
    { name: 'Крокодил', emoji: '🐊' },
    { name: 'Маймуна', emoji: '🐵' },
  ];

  return (
    <section id="product" ref={sectionRef} className="py-8 lg:py-20 bg-[#FDFBF6]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#E4F22B]/30 text-[#0C6D3E] px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
              Решението
            </span>
            <h2 
              className="text-xl lg:text-4xl xl:text-5xl leading-tight font-bold text-[#0C6D3E] mb-3 lg:mb-4"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Животинки: Игра,
              <span className="text-[#F6A377]"> Която Развива</span>
            </h2>
            <p className="text-sm lg:text-lg text-[#0C6D3E]/80">
              Нашият комплект от 50 картонени животни е проектиран да стимулира въображението, докато развива фината моторика и познавателните умения.
            </p>
          </div>
        </div>
        
        {/* Product & Features */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-10 lg:mb-16">
          {/* Image */}
          <div className="reveal opacity-0 relative">
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <img 
              src="/real-4.jpg" 
              alt="Комплект" 
              className="w-full h-auto object-cover"
              loading="eager"
              decoding="async"
              width="800"
              height="600"
            />
            </div>
            <div className="absolute top-3 left-3 lg:top-6 lg:left-6 bg-[#E4F22B] rounded-lg lg:rounded-xl px-3 lg:px-4 py-1.5 lg:py-2 shadow-lg">
              <p className="text-xl lg:text-2xl font-bold text-black">14,99€</p>
            </div>
          </div>
          
          {/* Features */}
          <div className="reveal opacity-0 space-y-3 lg:space-y-4 stagger-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 lg:gap-4 p-3 lg:p-5 bg-white rounded-lg lg:rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-[#E4F22B] rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 lg:w-7 lg:h-7 text-[#0C6D3E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0C6D3E] text-sm lg:text-lg mb-0.5 lg:mb-1">{feature.title}</h3>
                  <p className="text-[11px] lg:text-sm text-[#0C6D3E]/70">{feature.description}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <Check className="w-4 lg:w-5 h-4 lg:h-5 text-[#0C6D3E]" />
              <span className="text-xs lg:text-sm text-[#0C6D3E]/80">14 дни право на връщане</span>
            </div>
          </div>
        </div>
        
        {/* Animals Grid */}
        <div className="reveal opacity-0">
          <h3 
            className="text-base lg:text-xl font-bold text-[#0C6D3E] text-center mb-4 lg:mb-6"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Открийте Някои от Животните
          </h3>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-4">
            {animals.map((animal, index) => (
              <div key={index} className="group bg-orange-50 rounded-lg lg:rounded-xl p-2 lg:p-4 text-center hover:shadow-md transition-all">
                <div className="text-2xl lg:text-4xl mb-1 lg:mb-2 group-hover:scale-110 transition-transform">{animal.emoji}</div>
                <p className="font-semibold text-[#0C6D3E] text-[10px] lg:text-sm">{animal.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] lg:text-sm text-[#0C6D3E]/60 mt-3 lg:mt-4">
            ...и още 42 уникални животни в комплекта!
          </p>
        </div>
      </div>
    </section>
  );
}
