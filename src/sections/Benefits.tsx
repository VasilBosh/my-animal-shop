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
    {
      icon: Hand,
      title: 'Подобрява Фината Моторика',
      description: 'Сглобяването на малки части развива координацията между ръце и очи',
      color: 'bg-[#E4F22B]',
      bgColor: 'bg-[#E4F22B]/10'
    },
    {
      icon: Brain,
      title: 'Стимулира Въображението',
      description: 'Децата създават свои собствени истории и приключения с животните',
      color: 'bg-[#F6A377]',
      bgColor: 'bg-[#F6A377]/10'
    },
    {
      icon: BookOpen,
      title: 'Учи Животните',
      description: 'Запознава децата с различни видове животни от целия свят',
      color: 'bg-[#0C6D3E]',
      bgColor: 'bg-[#0C6D3E]/10'
    },
    {
      icon: Heart,
      title: 'Семейно Забавление',
      description: 'Идеална възможност за родители и деца да прекарат време заедно',
      color: 'bg-pink-400',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Sparkles,
      title: 'Развива Търпението',
      description: 'Сглобяването изисква внимание и постоянство',
      color: 'bg-purple-400',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Lightbulb,
      title: 'Стимулира Логиката',
      description: 'Децата разбират как частите се съединяват в цяло',
      color: 'bg-blue-400',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Target,
      title: 'Усещане за Постижение',
      description: 'Завършеното животно носи гордост и увереност',
      color: 'bg-orange-400',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Smile,
      title: 'Чисто Удоволствие',
      description: 'Играта носи радост и забавление на всяко дете',
      color: 'bg-teal-400',
      bgColor: 'bg-teal-100'
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="section-padding bg-[#FDFBF6] relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#0C6D3E]/10 text-[#0C6D3E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Предимства
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C6D3E] leading-tight mb-6"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Защо Децата
              <span className="text-[#F6A377]"> Обожават</span> Животинки?
            </h2>
            <p className="text-lg text-[#0C6D3E]/80">
              Нашата игра е създадена с грижа за развитието на вашето дете, комбинирайки забавлението с обучението
            </p>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`reveal opacity-0 group p-6 rounded-2xl ${benefit.bgColor} hover:shadow-lg transition-all duration-300 card-hover stagger-${(index % 4) + 1}`}
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C6D3E] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#0C6D3E]/70">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="reveal opacity-0 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Уникални животни' },
            { value: '3+', label: 'Годишна възраст' },
            { value: '1000+', label: 'Доволни семейства' },
            { value: '100%', label: 'Еко материали' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#E4F22B] mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-sm text-[#0C6D3E]/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
