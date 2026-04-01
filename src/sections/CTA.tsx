import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Truck, Shield, RotateCcw, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: ''
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
    
    // 1. ВЕДНАГА превключваме към благодарственото съобщение
    setOrderSubmitted(true);
    
    try {
      // 2. Изпращаме данните без 'await', за да не блокираме интерфейса
      fetch("https://script.google.com/macros/s/AKfycbw5HmFM60dRB7HhasylH-oaxNRU1RSwwjWFE7nilZId-VQGLUx5UkaoX35uwBQsOwDKRA/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 3. След 5 секунди затваряме всичко автоматично
      setTimeout(() => {
        setShowOrderModal(false);
        setOrderSubmitted(false);
        setFormData({ name: '', phone: '', email: '', address: '', city: '' });
      }, 5000);

    } catch (error) {
      console.error("Грешка при изпращане:", error);
      // Ако има грешка, връщаме формата за нов опит
      setOrderSubmitted(false);
      alert("Възникна грешка. Моля, опитайте пак.");
    }
  };

  const benefits = [
    { icon: Truck, text: 'Безплатна доставка' },
    { icon: Shield, text: '14 дни връщане' },
    { icon: RotateCcw, text: 'Гаранция качество' }
  ];

  return (
    <section id="order" ref={sectionRef} className="section-padding bg-[#FDFBF6] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-48 h-48 bg-[#E4F22B]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#F6A377]/20 rounded-full blur-3xl" />
      
      <div className="absolute top-1/4 left-10 opacity-10 animate-float">
        <Sparkles className="w-16 h-16 text-[#0C6D3E]" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-20 h-20 text-[#F6A377]" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="reveal opacity-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-gradient-to-br from-[#E4F22B]/20 to-[#F6A377]/20 p-8 flex items-center justify-center">
                <img 
                  src="/product-box.jpg" 
                  alt="Кутия Животинки"
                  className="w-full max-w-xs object-contain drop-shadow-xl"
                />
                <div className="absolute top-6 left-6 bg-[#E4F22B] rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-3xl font-bold text-black">59.99</p>
                  <p className="text-sm text-black/70">лв.</p>
                </div>
                <div className="absolute top-6 right-6 bg-red-500 rounded-full px-3 py-1">
                  <p className="text-sm text-white line-through">79.99 лв.</p>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0C6D3E] mb-4">
                  Готови ли сте за Приключение?
                </h2>
                <p className="text-[#0C6D3E]/70 mb-6">
                  Поръчайте сега и получете безплатна доставка до 2 работни дни!
                </p>
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#E4F22B]/20 rounded-full flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-[#0C6D3E]" />
                      </div>
                      <span className="text-sm text-[#0C6D3E]/80">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                <Button onClick={() => setShowOrderModal(true)} className="w-full btn-primary text-lg animate-pulse-scale">
                  Поръчай Сега - 59.99 лв.
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={showOrderModal} onOpenChange={setShowOrderModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#0C6D3E]">
              {orderSubmitted ? 'Благодарим ви!' : 'Завършете поръчката'}
            </DialogTitle>
          </DialogHeader>
          {orderSubmitted ? (
            <div className="text-center py-8">
              <Check className="w-20 h-20 text-[#0C6D3E] bg-[#E4F22B] rounded-full p-4 mx-auto mb-4" />
              <p className="text-lg text-[#0C6D3E]">Вашата поръчка е приета!</p>
              <p className="text-sm text-[#0C6D3E]/70 mt-2">Ще се свържем с вас скоро.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Име и фамилия" />
              <Input name="phone" required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="Телефон" />
              <Input name="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Имейл" />
              <Input name="city" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} placeholder="Град" />
              <Input name="address" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} placeholder="Адрес за доставка" />
              <Button type="submit" className="w-full btn-primary">Потвърди поръчката</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}