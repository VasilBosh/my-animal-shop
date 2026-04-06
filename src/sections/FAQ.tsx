import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    { q: 'За каква възраст е подходяща играта?', a: 'Животинки е подходяща за деца на възраст 3+ години. Частите са достатъчно големи, за да не представляват опасност от задавяне, а сглобяването е лесно дори за най-малките ръце.' },
    { q: 'От какъв материал са изработени животните?', a: 'Всички животни са изработени от висококачествен, рециклируем картон с дебелина 2мм. Използваме само нетоксични, водни бои, които са безопасни за децата.' },
    { q: 'Нужни ли са ножици или лепило за сглобяване?', a: 'Не! Всички части са предварително изрязани и имат специални процепи, които позволяват лесно сглобяване без допълнителни инструменти. Децата могат да сглобяват и разглобяват животните многократно.' },
    { q: 'Колко време отнема доставката?', a: 'Доставката отнема 1-2 работни дни за цяла България. При поръчка днес, пакетът ще бъде изпратен още утре. Цената на доставката се заплаща от купувача при получаване.' },
    { q: 'Имате ли право на връщане?', a: 'Да! Имате 14 дни право на връщане от датата на получаване, ако продуктът не е използван и е в оригинална опаковка. Връщаме парите в пълен размер.' },
    { q: 'Мога ли да поръчам като подарък?', a: 'Разбира се! Можем да опаковаме продукта в подаръчна опаковка и да добавим картичка с ваше лично послание. Просто отбележете това при поръчката.' },
    { q: 'Колко животни има в комплекта?', a: 'В пълния комплект има 50 различни животни - от домашни любимци до екзотични видове. Всяко животно има уникален дизайн и различен брой части за сглобяване.' },
    { q: 'Подходяща ли е за детска градина или училище?', a: 'Абсолютно! Много детски градини и училища вече използват Животинки за занимания по изобразително изкуство и развитие на моториката. Имаме специални отстъпки за институции.' },
  ];

  return (
    <section ref={sectionRef} className="py-8 lg:py-20 bg-[#FDFBF6]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left - Header */}
          <div className="reveal opacity-0 lg:sticky lg:top-24">
            <span className="inline-block bg-[#E4F22B]/30 text-[#0C6D3E] px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
              Често Задавани Въпроси
            </span>
            <h2 
              className="text-xl lg:text-4xl xl:text-5xl leading-tight font-bold text-[#0C6D3E] mb-3 lg:mb-4"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Имате
              <span className="text-[#F6A377]"> Въпроси</span>?
            </h2>
            <p className="text-sm lg:text-lg text-[#0C6D3E]/80 mb-4 lg:mb-6">
              Тук сме събрали най-често задаваните въпроси. Ако не намерите отговора си, не се колебайте да се свържете с нас!
            </p>
            
            <div className="flex items-center gap-3 p-3 lg:p-4 bg-[#E4F22B]/10 rounded-lg lg:rounded-xl">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#E4F22B] rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#0C6D3E]" />
              </div>
              <div>
                <p className="font-semibold text-[#0C6D3E] text-sm lg:text-base">Все още имате въпроси?</p>
                <p className="text-[10px] lg:text-sm text-[#0C6D3E]/70 break-all">
                  bulgariaherbal@gmail.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Right - FAQ List */}
          <div className="reveal opacity-0 space-y-2 lg:space-y-3 stagger-1">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg lg:rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-3 lg:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#0C6D3E] text-xs lg:text-base pr-2">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 lg:w-5 lg:h-5 text-[#0C6D3E] flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${openIndex === i ? 'max-h-32 lg:max-h-40' : 'max-h-0'}`}>
                  <p className="px-3 lg:px-4 pb-3 lg:pb-4 text-[11px] lg:text-sm text-[#0C6D3E]/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
