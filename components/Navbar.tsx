import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';
import CartDrawer from './CartDrawer.tsx';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Shop All', href: '#/shop' },
    { name: 'Men', href: '#/shop?cat=Men' },
    { name: 'Women', href: '#/shop?cat=Women' },
    { name: 'Kids', href: '#/shop?cat=Kids' },
    { name: 'Sale', href: '#/shop?cat=Sale' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-indigo-950/10">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-indigo-950" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <a href="#/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-950 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-900/20">
              <span className="text-white font-black text-xl">U</span>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase hidden sm:block text-indigo-950">Urban Sole</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black uppercase tracking-widest text-indigo-950/60 hover:text-indigo-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-indigo-50 rounded-full transition-colors hidden sm:block text-indigo-950/60 hover:text-indigo-950">
              <Search className="w-5 h-5" />
            </button>
            <a href="#/wishlist" className="p-2 hover:bg-indigo-50 rounded-full transition-colors hidden sm:block text-indigo-950/60 hover:text-indigo-950">
              <Heart className="w-5 h-5" />
            </a>
            <a href="#/login" className="p-2 hover:bg-indigo-50 rounded-full transition-colors text-indigo-950/60 hover:text-indigo-950">
              <User className="w-5 h-5" />
            </a>
            <button 
              className="p-2 hover:bg-indigo-50 rounded-full transition-colors relative text-indigo-950/60 hover:text-indigo-950"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-950 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-indigo-950/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
          <div 
            className={`w-[80%] max-w-sm h-full bg-white transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 flex items-center justify-between border-b border-indigo-50">
              <span className="text-xl font-black uppercase tracking-tighter text-indigo-950">Urban Sole</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-black uppercase tracking-tight text-indigo-950 hover:pl-4 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-indigo-50" />
              <div className="flex flex-col gap-4">
                <a href="#/wishlist" className="flex items-center gap-3 font-medium text-slate-500 uppercase tracking-wide hover:text-indigo-950">
                  <Heart className="w-5 h-5" /> Wishlist
                </a>
                <a href="#/account" className="flex items-center gap-3 font-medium text-slate-500 uppercase tracking-wide hover:text-indigo-950">
                  <User className="w-5 h-5" /> My Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="h-20"></div> {/* Spacer */}
    </>
  );
};

export default Navbar;