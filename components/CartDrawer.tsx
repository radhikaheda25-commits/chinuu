import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-indigo-950/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-indigo-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-950 flex items-center justify-center">
                 <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-black uppercase tracking-widest text-indigo-950">Your Bag</h2>
              <span className="text-xs font-black text-indigo-950/30 uppercase tracking-widest">({cart.length})</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-indigo-50 rounded-none text-indigo-950/20 hover:text-indigo-950 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="text-indigo-950/20 font-black uppercase tracking-[0.3em] italic mb-10">Nothing here yet</p>
                <button 
                  onClick={onClose}
                  className="px-10 py-4 bg-indigo-950 text-white font-black uppercase tracking-widest hover:bg-white hover:text-indigo-950 border border-indigo-950 transition-all shadow-2xl"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 group">
                  <div className="w-24 h-24 bg-slate-50 shrink-0 overflow-hidden border border-indigo-950/5">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black uppercase tracking-tight leading-none text-indigo-950">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)} className="text-indigo-950/10 hover:text-rose-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[10px] text-indigo-950/30 font-black uppercase tracking-widest mb-6">Size {item.selectedSize} | Color {item.selectedColor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-indigo-950/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, Math.max(1, item.quantity - 1))}
                          className="px-3 py-1 hover:bg-indigo-50 text-indigo-950 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 py-1 text-xs font-black text-indigo-950">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-indigo-50 text-indigo-950 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-black tracking-tighter text-indigo-950">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-8 border-t border-indigo-50 bg-slate-50">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-950/30 uppercase text-[10px] tracking-widest font-black">Subtotal</span>
                <span className="text-2xl font-black tracking-tighter text-indigo-950">₹{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-indigo-950/20 mb-8 font-black uppercase tracking-[0.2em]">Shipping — Complimentary</p>
              <a 
                href="#/checkout" 
                onClick={onClose}
                className="block w-full text-center py-6 bg-indigo-950 text-white font-black uppercase tracking-[0.4em] hover:bg-white hover:text-indigo-950 border border-indigo-950 transition-all shadow-2xl"
              >
                Checkout Now
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;