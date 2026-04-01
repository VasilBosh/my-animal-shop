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
    {
      icon: Puzzle,
      title: '50 Уникални Животни',
      description: 'От слон до пеперуда - всяко животно е различно и интересно'
    },
    {
      icon: Leaf,
      title: 'Еко-приятелски Картон',
      description: 'Изработени от рециклируем, безопасен за околната среда материал'
    },
    {
      icon: Shield,
      title: 'Безопасно за Деца 3+',
      description: 'Закръглени ръбове и нетоксични бои, одобрени за деца'
    }
  ];

  const animals = [
    { name: 'Лъв', image: '/animal-lion.jpg' },
    { name: 'Жираф', image: '/animal-giraffe.jpg' },
    { name: 'Слон', image: '/animal-elephant.jpg' },
    { name: 'Зебра', image: '/animal-zebra.jpg' },
    { name: 'Костенурка', image: '/animal-turtle.jpg' },
    { name: 'Крокодил', image: '/animal-crocodile.jpg' },
    { name: 'Пингвин', image: '/animal-penguin.jpg' },
    { name: 'Кенгуру', image: '/animal-kangaroo.jpg' },
  ];

  return (
    <section id="product" ref={sectionRef} className="section-padding bg-[#FDFBF6] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E4F22B]/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#E4F22B]/30 text-[#0C6D3E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Решението
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C6D3E] leading-tight mb-6"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Животинки: Игра,
              <span className="text-[#F6A377]"> Която Развива</span>
            </h2>
            <p className="text-lg text-[#0C6D3E]/80">
              Нашият комплект от 50 картонени животни е проектиран да стимулира въображението, докато развива фината моторика и познавателните умения. Всяко животно е лесно за сглобяване, без нужда от ножици или лепило.
            </p>
          </div>
        </div>
        
        {/* Product Box & Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image */}
          <div className="reveal opacity-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8">
              <img 
                src="/product-box.jpg" 
                alt="Кутия с играта Животинки" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Price tag */}
            <div className="absolute -top-4 -right-4 bg-[#E4F22B] rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl animate-pulse-scale">
              <span className="text-2xl font-bold text-black">59.99</span>
              <span className="text-sm text-black/70">лв.</span>
            </div>
          </div>
          
          {/* Features */}
          <div className="reveal opacity-0 space-y-6 stagger-1">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 bg-[#E4F22B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-[#0C6D3E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0C6D3E] mb-2">{feature.title}</h3>
                  <p className="text-[#0C6D3E]/70">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#0C6D3E]" />
                <span className="text-sm text-[#0C6D3E]/80">Безплатна доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#0C6D3E]" />
                <span className="text-sm text-[#0C6D3E]/80">14 дни право на връщане</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animals Grid */}
        <div className="reveal opacity-0">
          <h3 
            className="text-2xl font-bold text-[#0C6D3E] text-center mb-8"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Открийте Някои от Животните
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {animals.map((animal, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0C6D3E] to-transparent p-4">
                  <p className="text-white font-semibold">{animal.name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#0C6D3E]/60 mt-6">
            ...и още 42 уникални животни в комплекта!
          </p>
        </div>
      </div>
    </section>
  );
}
