import { useEffect, useRef } from 'react';
import { Smartphone, Brain, Users, X } from 'lucide-react';

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
    {
      icon: Smartphone,
      title: 'Твърде много екрани',
      description: 'Децата прекарват средно 7 часа на ден пред екрани'
    },
    {
      icon: Brain,
      title: 'Загуба на креативност',
      description: 'Дигиталните игри ограничават въображението'
    },
    {
      icon: Users,
      title: 'Липса на социални умения',
      description: 'Недостатъчно време за игра с други деца и родители'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-[#FDFBF6] relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FDFBF6] to-transparent" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="reveal opacity-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/gallery-3.jpg" 
                alt="Майка и дете играят заедно" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C6D3E]/30 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#E4F22B] rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <p className="font-bold text-[#0C6D3E]">Решението?</p>
                  <p className="text-sm text-[#0C6D3E]/70">Игра, която сближава!</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E4F22B] rounded-full opacity-30 blur-2xl" />
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="reveal opacity-0">
              <span className="inline-block bg-[#F6A377]/20 text-[#F6A377] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Проблемът
              </span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C6D3E] leading-tight"
                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
              >
                Твърде Много Екрани,
                <span className="block text-[#F6A377]">Твърде Малко Игра?</span>
              </h2>
            </div>
            
            <p className="reveal opacity-0 text-lg text-[#0C6D3E]/80 stagger-1">
              В днешния дигитален свят, децата прекарват все повече време пред таблети и телефони. Това ограничава тяхната креативност, фината моторика и социалните умения. Нуждаят се от нещо реално, нещо, което могат да докоснат и създадат със собствените си ръце.
            </p>
            
            <div className="reveal opacity-0 space-y-4 stagger-2">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0C6D3E] mb-1">{problem.title}</h3>
                    <p className="text-sm text-[#0C6D3E]/70">{problem.description}</p>
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
