import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, MapPin, Phone, User, Mail, Truck, Package, MessageSquare } from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'speedy' | 'econt'>('speedy');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    officeAddress: '',
    notes: ''
  });

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



const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Подготвяме данните от формата за изпращане
    const orderData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      courier: deliveryType === 'speedy' ? 'Speedy' : 'ЕКОНТ',
      city: formData.city,
      address: formData.officeAddress,
      extraInfo: formData.notes
    };

    try {
      // 2. Изпращаме ги към твоя Google Script URL
      await fetch('https://script.google.com/macros/library/d/1qO79rmfqRxM2jetKpMmWf4MSuC-uEKeEiFrncikA_-a7g1ynMHMogilS/7', {
        method: 'POST',
        mode: 'no-cors', // Важно за работа с Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      // 3. Ако всичко е наред, показваме съобщението за успех
      setOrderSubmitted(true);
      
      // Изчистваме формата след 5 секунди
      setTimeout(() => {
        setOrderSubmitted(false);
        setFormData({ name: '', phone: '', email: '', city: '', officeAddress: '', notes: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Грешка при изпращане:', error);
      alert('Възникна грешка. Моля, опитайте пак!');
    }
  };



  return (
    <section id="order" ref={sectionRef} className="py-8 lg:py-20 bg-[#FDFBF6]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left - Product Info */}
          <div className="reveal opacity-0">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden mb-4 lg:mb-6">
              <div className="relative">
                <img src="/real-2.jpg" alt="Комплект Животинки" className="w-full h-auto" />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-[#E4F22B] rounded-lg px-3 py-1.5 lg:px-4 lg:py-2 shadow-lg">
                  <p className="text-xl lg:text-2xl font-bold text-black">14,99€</p>
                </div>
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-[#0C6D3E] mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  Комплект "Животинки"
                </h3>
                <p className="text-xs lg:text-sm text-[#0C6D3E]/70 mb-3 lg:mb-4">
                  50 картонени животни за сглобяване + инструкции + красива кутия
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 bg-[#E4F22B]/20 px-2 py-1 rounded-full text-[10px] lg:text-xs text-[#0C6D3E]">
                    <Check className="w-3 h-3" /> 14 дни връщане
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#E4F22B]/20 px-2 py-1 rounded-full text-[10px] lg:text-xs text-[#0C6D3E]">
                    <Check className="w-3 h-3" /> Гаранция качество
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#E4F22B]/20 px-2 py-1 rounded-full text-[10px] lg:text-xs text-[#0C6D3E]">
                    <Check className="w-3 h-3" /> Безопасни материали
                  </span>
                </div>
              </div>
            </div>
            
            {/* Delivery Info */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6">
              <h4 className="text-sm lg:text-base font-bold text-[#0C6D3E] mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 lg:w-5 lg:h-5" /> Информация за доставка
              </h4>
              <ul className="space-y-2 text-xs lg:text-sm text-[#0C6D3E]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#E4F22B]">•</span>
                  Доставка до 2 работни дни
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E4F22B]">•</span>
                  Наложен платеж (плащате при получаване)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E4F22B]">•</span>
                  Цената на доставката се заплаща отделно
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E4F22B]">•</span>
                  Доставка до избран от вас офис
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right - Checkout Form */}
          <div className="reveal opacity-0 stagger-1">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 lg:p-8">
              {orderSubmitted ? (
                <div className="text-center py-8 lg:py-12">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#E4F22B] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Check className="w-8 h-8 lg:w-10 lg:h-10 text-[#0C6D3E]" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#0C6D3E] mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                    Благодарим за поръчката!
                  </h3>
                  <p className="text-sm lg:text-base text-[#0C6D3E]/70 mb-4">
                    Ще се свържем с вас за потвърждение в рамките на 24 часа.
                  </p>
                  <Button onClick={() => setOrderSubmitted(false)} className="btn-primary">
                    Нова поръчка
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                  <h3 className="text-lg lg:text-2xl font-bold text-[#0C6D3E] mb-4 lg:mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                    Поръчай сега
                  </h3>
                  
                  {/* Personal Info */}
                  <div className="space-y-3 lg:space-y-4">
                    <div>
                      <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-1 lg:mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Три имена *
                      </label>
                      <Input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов Иванов"
                        className="border-[#0C6D3E]/20 focus:border-[#E4F22B] focus:ring-[#E4F22B] text-sm lg:text-base h-10 lg:h-12"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-1 lg:mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Телефон *
                        </label>
                        <Input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="08xxxxxxxx"
                          className="border-[#0C6D3E]/20 focus:border-[#E4F22B] focus:ring-[#E4F22B] text-sm lg:text-base h-10 lg:h-12"
                        />
                      </div>
                      <div>
                        <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-1 lg:mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Имейл
                        </label>
                        <Input 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="email@example.com"
                          className="border-[#0C6D3E]/20 focus:border-[#E4F22B] focus:ring-[#E4F22B] text-sm lg:text-base h-10 lg:h-12"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Delivery Selection */}
                  <div className="border-t border-gray-100 pt-4 lg:pt-5">
                    <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-2 lg:mb-3 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Изберете куриер *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDeliveryType('speedy')}
                        className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                          deliveryType === 'speedy' 
                            ? 'border-[#E4F22B] bg-[#E4F22B]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-xl lg:text-2xl">🚚</span>
                        <span className="font-semibold text-[#0C6D3E] text-xs lg:text-sm">Speedy</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryType('econt')}
                        className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                          deliveryType === 'econt' 
                            ? 'border-[#E4F22B] bg-[#E4F22B]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-xl lg:text-2xl">📦</span>
                        <span className="font-semibold text-[#0C6D3E] text-xs lg:text-sm">ЕКОНТ</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Address Info */}
                  <div className="space-y-3 lg:space-y-4">
                    <div>
                      <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-1 lg:mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Град *
                      </label>
                      <Input 
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="Например: София, Пловдив, Варна..."
                        className="border-[#0C6D3E]/20 focus:border-[#E4F22B] focus:ring-[#E4F22B] text-sm lg:text-base h-10 lg:h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-1 lg:mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Адрес на офис {deliveryType === 'speedy' ? 'Speedy' : 'ЕКОНТ'} *
                      </label>
                      <Input 
                        required
                        value={formData.officeAddress}
                        onChange={(e) => setFormData({...formData, officeAddress: e.target.value})}
                        placeholder={`Например: Офис ${deliveryType === 'speedy' ? 'Speedy' : 'ЕКОНТ'} - Център`}
                        className="border-[#0C6D3E]/20 focus:border-[#E4F22B] focus:ring-[#E4F22B] text-sm lg:text-base h-10 lg:h-12"
                      />
                    </div>
                  </div>
                  
                  {/* Additional Notes */}
                  <div>
                    <label className="text-xs lg:text-sm font-medium text-[#0C6D3E] mb-1 lg:mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Допълнителна информация
                    </label>
                    <Textarea 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Например: Подходящо време за доставка, бележка за куриера..."
                      className="border-[#0C6D3E]/20 focus:border-[#E4F22B] focus:ring-[#E4F22B] text-sm lg:text-base min-h-[80px] lg:min-h-[100px] resize-none"
                    />
                  </div>
                  
                  {/* Payment Info */}
                  <div className="bg-[#E4F22B]/10 rounded-lg lg:rounded-xl p-3 lg:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg lg:text-xl">💵</span>
                      <span className="font-semibold text-[#0C6D3E] text-sm lg:text-base">Наложен платеж</span>
                    </div>
                    <p className="text-[11px] lg:text-sm text-[#0C6D3E]/70">
                      Плащате при получаване на пакета в избрания от вас офис.
                    </p>
                  </div>
                  
                  {/* Total & Submit */}
                  <div className="border-t border-gray-100 pt-4 lg:pt-5">
                    <div className="flex justify-between items-center mb-3 lg:mb-4">
                      <div>
                        <p className="text-[11px] lg:text-sm text-[#0C6D3E]/70">Цена на продукт:</p>
                        <p className="text-xs lg:text-sm text-[#0C6D3E]/70">Доставка:</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg lg:text-xl font-bold text-[#0C6D3E]">14,99€</p>
                        <p className="text-[11px] lg:text-sm text-[#0C6D3E]/70">Според куриера</p>
                      </div>
                    </div>
                    <Button type="submit" className="w-full btn-primary text-sm lg:text-base py-3 lg:py-4">
                      Потвърди поръчката
                    </Button>
                    <p className="text-center text-[10px] lg:text-xs text-[#0C6D3E]/50 mt-2">
                      * Ще се свържем с вас за потвърждение на поръчката
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
