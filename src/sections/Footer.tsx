import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C6D3E] text-white">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-6 lg:mb-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 lg:gap-3 mb-3">
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#E4F22B] rounded-full flex items-center justify-center">
                <span className="text-base lg:text-xl">🦁</span>
              </div>
              <span className="text-lg lg:text-2xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                Животинки
              </span>
            </div>
            <p className="text-white/70 text-xs lg:text-sm mb-3 lg:mb-4">
              50 картонени животни за сглобяване, които развиват въображението и моториката на вашето дете.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-7 h-7 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4F22B] hover:text-[#0C6D3E] transition-all">
                <Facebook className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="w-7 h-7 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4F22B] hover:text-[#0C6D3E] transition-all">
                <Instagram className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="w-7 h-7 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4F22B] hover:text-[#0C6D3E] transition-all">
                <Youtube className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Бързи връзки
            </h3>
            <ul className="space-y-1.5 lg:space-y-2">
              {[
                { label: 'Начало', href: '#' },
                { label: 'За продукта', href: '#product' },
                { label: 'Предимства', href: '#benefits' },
                { label: 'Галерия', href: '#gallery' },
                { label: 'Поръчай', href: '#order' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-[#E4F22B] transition-colors text-xs lg:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Информация
            </h3>
            <ul className="space-y-1.5 lg:space-y-2">
              {[
                'Условия за ползване',
                'Политика за поверителност',
                'Доставка и връщане',
                'Често задавани въпроси',
                'За нас'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-[#E4F22B] transition-colors text-xs lg:text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Контакти
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-[#E4F22B] flex-shrink-0" />
                <a href="tel:+359896783751" className="hover:text-[#E4F22B] transition-colors text-xs lg:text-sm break-all">
                  +359 896 783 751
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-[#E4F22B] flex-shrink-0" />
                <a href="mailto:bulgariaherbal@gmail.com" className="hover:text-[#E4F22B] transition-colors text-xs lg:text-sm break-all">
                  bulgariaherbal@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-[#E4F22B] flex-shrink-0" />
                <p className="text-xs lg:text-sm">гр. София, България</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-4 lg:pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-[10px] lg:text-sm text-center md:text-left">
              {currentYear} Животинки. Всички права запазени.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-white/50 text-[10px] lg:text-sm">Начин на плащане:</span>
              <div className="flex gap-1">
                {['Visa', 'Mastercard', 'PayPal'].map((method, index) => (
                  <div key={index} className="px-2 py-0.5 lg:px-3 lg:py-1 bg-white/10 rounded text-[10px] lg:text-xs text-white/70">
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
