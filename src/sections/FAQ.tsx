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
    {
      question: 'За каква възраст е подходяща играта?',
      answer: 'Животинки е подходяща за деца на възраст 3+ години. Частите са достатъчно големи, за да не представляват опасност от задавяне, а сглобяването е лесно дори за най-малките ръце.'
    },
    {
      question: 'От какъв материал са изработени животните?',
      answer: 'Всички животни са изработени от висококачествен, рециклируем картон с дебелина 2мм. Използваме само нетоксични, водни бои, които са безопасни за децата.'
    },
    {
      question: 'Нужни ли са ножици или лепило за сглобяване?',
      answer: 'Не! Всички части са предварително изрязани и имат специални процепи, които позволяват лесно сглобяване без допълнителни инструменти. Децата могат да сглобяват и разглобяват животните многократно.'
    },
    {
      question: 'Колко време отнема доставката?',
      answer: 'Доставката отнема 1-2 работни дни за цяла България. За поръчки над 50 лв. доставката е безплатна! При поръчка днес, пакетът ще бъде изпратен още утре.'
    },
    {
      question: 'Имате ли право на връщане?',
      answer: 'Да! Имате 14 дни право на връщане от датата на получаване, ако продуктът не е използван и е в оригинална опаковка. Връщаме парите в пълен размер.'
    },
    {
      question: 'Мога ли да поръчам като подарък?',
      answer: 'Разбира се! Можем да опаковаме продукта в подаръчна опаковка и да добавим картичка с ваше лично послание. Просто отбележете това при поръчката.'
    },
    {
      question: 'Колко животни има в комплекта?',
      answer: 'В пълния комплект има 50 различни животни - от домашни любимци до екзотични видове. Всяко животно има уникален дизайн и различен брой части за сглобяване.'
    },
    {
      question: 'Подходяща ли е за детска градина или училище?',
      answer: 'Абсолютно! Много детски градини и училища вече използват Животинки за занимания по изобразително изкуство и развитие на моториката. Имаме специални отстъпки за институции.'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-[#FDFBF6] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="reveal opacity-0 lg:sticky lg:top-32">
            <span className="inline-block bg-[#E4F22B]/30 text-[#0C6D3E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Често Задавани Въпроси
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C6D3E] leading-tight mb-6"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Имате
              <span className="text-[#F6A377]"> Въпроси</span>?
            </h2>
            <p className="text-lg text-[#0C6D3E]/80 mb-8">
              Тук сме събрали най-често задаваните въпроси. Ако не намерите отговора си, не се колебайте да се свържете с нас!
            </p>
            
            <div className="flex items-center gap-4 p-6 bg-[#E4F22B]/10 rounded-2xl">
              <div className="w-14 h-14 bg-[#E4F22B] rounded-xl flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-[#0C6D3E]" />
              </div>
              <div>
                <p className="font-semibold text-[#0C6D3E]">Все още имате въпроси?</p>
                <p className="text-sm text-[#0C6D3E]/70">
                  Пишете ни на <a href="mailto:info@jivotinki.bg" className="text-[#F6A377] hover:underline">info@jivotinki.bg</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - FAQ List */}
          <div className="reveal opacity-0 space-y-4 stagger-1">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#0C6D3E] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#0C6D3E] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-[#0C6D3E]/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
