import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  const shippingCost = 0.00; // Free express delivery as per detail page

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto py-40 px-8 text-center">
        <div className="w-20 h-20 bg-indigo-950 text-white flex items-center justify-center mx-auto mb-10 shadow-2xl">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-6 italic text-indigo-950">Success.</h1>
        <p className="text-indigo-950/40 font-bold uppercase tracking-[0.2em] text-xs leading-relaxed mb-16 italic">
          Your order has been encrypted and processed. Welcome to the Urban Sole vanguard.
        </p>
        <a href="#/" className="inline-block px-12 py-5 bg-indigo-950 text-white font-black uppercase tracking-widest hover:bg-white hover:text-indigo-950 border border-indigo-950 transition-all shadow-2xl">
          Continue Exploration
        </a>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-indigo-950">Your bag is currently empty</h2>
        <a href="#/shop" className="px-12 py-5 bg-indigo-950 text-white font-black uppercase tracking-widest shadow-2xl">Return To Shop</a>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-24">
        
        {/* Checkout Form */}
        <div className="flex-1">
          <a href="#/shop" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-950/30 hover:text-indigo-950 mb-12 transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to bag
          </a>
          
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-20 italic text-indigo-950">Checkout</h1>
          
          <form onSubmit={handleCheckout} className="space-y-16">
            {/* Contact Information */}
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-indigo-950/20">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required type="email" placeholder="EMAIL ADDRESS" className="h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                <input required type="tel" placeholder="PHONE NUMBER" className="h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-indigo-950/20">Delivery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="FIRST NAME" className="h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                <input required placeholder="LAST NAME" className="h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                <input required placeholder="STREET ADDRESS" className="md:col-span-2 h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                <input required placeholder="CITY" className="h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                <input required placeholder="ZIP CODE" className="h-16 border-slate-100 border bg-slate-50/50 px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
              </div>
            </section>

            {/* Payment */}
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-indigo-950/20">Payment</h3>
              <div className="bg-slate-50 p-10 border border-indigo-950/5">
                <div className="flex items-center gap-4 mb-10 font-black uppercase tracking-widest text-[10px] text-indigo-950">
                    <CreditCard className="w-5 h-5" /> Secured Transaction
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required placeholder="CARD NUMBER" className="md:col-span-2 h-16 border-slate-100 border bg-white px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                    <input required placeholder="EXP (MM/YY)" className="h-16 border-slate-100 border bg-white px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                    <input required placeholder="CVC" className="h-16 border-slate-100 border bg-white px-8 font-black tracking-widest focus:border-indigo-950 transition-all outline-none text-indigo-950 text-xs" />
                </div>
              </div>
            </section>

            <button type="submit" className="w-full py-8 bg-indigo-950 text-white font-black uppercase tracking-[0.4em] hover:bg-white hover:text-indigo-950 border border-indigo-950 transition-all shadow-2xl">
              Complete Purchase — ₹{ (totalPrice + shippingCost).toFixed(2) }
            </button>
          </form>
        </div>

        {/* Summary Card */}
        <div className="lg:w-[450px]">
          <div className="bg-white border border-indigo-950/10 p-12 sticky top-32 shadow-2xl shadow-indigo-900/5">
            <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-12 pb-6 border-b border-indigo-950/5 text-indigo-950">Order Summary</h2>
            
            <div className="space-y-8 mb-12 overflow-y-auto max-h-[350px] pr-4 custom-scrollbar">
              {cart.map(item => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 group">
                  <div className="w-24 h-24 bg-slate-50 overflow-hidden flex-shrink-0 border border-indigo-950/5">
                    <img src={item.images[0]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black uppercase tracking-tight leading-none mb-2 text-indigo-950">{item.name}</h4>
                    <p className="text-[10px] text-indigo-950/30 font-black uppercase tracking-widest mb-4">Size {item.selectedSize} | Color {item.selectedColor}</p>
                    <div className="flex justify-between items-center font-black">
                        <span className="text-[10px] text-indigo-950/20 uppercase tracking-widest">Qty {item.quantity}</span>
                        <span className="text-sm tracking-tighter">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-10 border-t border-indigo-950/5">
              <div className="flex justify-between text-indigo-950/40 font-black uppercase tracking-widest text-[10px]">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-indigo-950/40 font-black uppercase tracking-widest text-[10px]">
                <span>Shipping</span>
                <span className="text-emerald-500 uppercase">Complimentary</span>
              </div>
              <div className="flex justify-between text-2xl font-black tracking-tighter pt-8 text-indigo-950">
                <span>Total</span>
                <span>₹{(totalPrice + shippingCost).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 p-5 bg-indigo-950 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
              <ShieldCheck className="w-5 h-5 text-white" />
              Verified Transaction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;