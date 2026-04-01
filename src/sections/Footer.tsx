import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C6D3E] text-white">
      <div className="container-custom py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E4F22B] rounded-full flex items-center justify-center">
                <span className="text-2xl">🦁</span>
              </div>
              <span 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
              >
                Животинки
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              50 картонени животни за сглобяване, които развиват въображението и моториката на вашето дете.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4F22B] hover:text-[#0C6D3E] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4F22B] hover:text-[#0C6D3E] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4F22B] hover:text-[#0C6D3E] transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Бързи връзки
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Начало', href: '#' },
                { label: 'За продукта', href: '#product' },
                { label: 'Предимства', href: '#benefits' },
                { label: 'Галерия', href: '#gallery' },
                { label: 'Поръчай', href: '#order' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-[#E4F22B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Информация
            </h3>
            <ul className="space-y-3">
              {[
                'Условия за ползване',
                'Политика за поверителност',
                'Доставка и връщане',
                'Често задавани въпроси',
                'За нас'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-[#E4F22B] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Контакти
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E4F22B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Телефон</p>
                  <a href="tel:+359888123456" className="hover:text-[#E4F22B] transition-colors">
                    +359 888 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E4F22B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Имейл</p>
                  <a href="mailto:info@jivotinki.bg" className="hover:text-[#E4F22B] transition-colors">
                    info@jivotinki.bg
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E4F22B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Адрес</p>
                  <p>гр. София, ул. Примерна 123</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              {currentYear} Животинки. Всички права запазени.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">Начин на плащане:</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'PayPal'].map((method, index) => (
                  <div 
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded text-xs text-white/70"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
