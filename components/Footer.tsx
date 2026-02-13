
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-indigo-950/5 pt-32 pb-16">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-1">
            <a href="#/" className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-indigo-950 flex items-center justify-center">
                <span className="text-white font-black text-sm">U</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-indigo-950">Urban Sole</span>
            </a>
            <p className="text-indigo-950/40 font-medium mb-12 max-w-xs leading-relaxed italic">
              Redefining movement through minimalist aesthetics and performance engineering. Based in London, worldwide shipping.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-indigo-950/20 hover:text-indigo-950 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-indigo-950/20 hover:text-indigo-950 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-indigo-950/20 hover:text-indigo-950 transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-indigo-950">Shop</h4>
            <ul className="space-y-6 font-black uppercase tracking-[0.2em] text-[10px] text-indigo-950/30">
              <li><a href="#/shop?cat=Men" className="hover:text-indigo-950 transition-colors">Men's Collection</a></li>
              <li><a href="#/shop?cat=Women" className="hover:text-indigo-950 transition-colors">Women's Collection</a></li>
              <li><a href="#/shop?cat=Kids" className="hover:text-indigo-950 transition-colors">Kids' Line</a></li>
              <li><a href="#/shop?cat=Sports" className="hover:text-indigo-950 transition-colors">Performance Wear</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-indigo-950">Service</h4>
            <ul className="space-y-6 font-black uppercase tracking-[0.2em] text-[10px] text-indigo-950/30">
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Bespoke Returns</a></li>
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Shipping Information</a></li>
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Concierge Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-indigo-950">House</h4>
            <ul className="space-y-6 font-black uppercase tracking-[0.2em] text-[10px] text-indigo-950/30">
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Our Manifesto</a></li>
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-indigo-950 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-950 transition-colors">The Journal</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-indigo-950/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] text-indigo-950/10 font-black uppercase tracking-[0.5em]">
            © 2024 Urban Sole. Established for the vanguard.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] text-indigo-950/10 font-black uppercase tracking-[0.3em] hover:text-indigo-950 transition-colors">Privacy</a>
            <a href="#" className="text-[10px] text-indigo-950/10 font-black uppercase tracking-[0.3em] hover:text-indigo-950 transition-colors">Terms</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-950 hover:text-indigo-950/40 transition-colors"
            >
              To Top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;