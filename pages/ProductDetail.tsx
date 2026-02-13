
import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RefreshCcw, Heart, Share2, Plus, Minus } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!product) return <div className="p-20 text-center font-black text-indigo-950">Product Not Found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    for(let i=0; i<quantity; i++) {
        addToCart(product, selectedSize, selectedColor);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-24">
        
        {/* Gallery */}
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <div className="hidden md:flex flex-col gap-6 w-24">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`aspect-square bg-slate-50 overflow-hidden border transition-all ${activeImageIdx === idx ? 'border-indigo-950' : 'border-indigo-950/5'}`}
              >
                <img src={img} className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all" />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-square bg-slate-50 overflow-hidden relative group border border-indigo-950/5">
            <img src={product.images[activeImageIdx]} className="w-full h-full object-cover transition-transform duration-1000 cursor-zoom-in" />
            <button className="absolute top-6 right-6 p-4 bg-white text-indigo-950 shadow-2xl hover:bg-indigo-950 hover:text-white transition-all">
                <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-[500px]">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-950/30 mb-4">{product.category}</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6 italic text-indigo-950">{product.name}</h1>
          
          <div className="flex items-center gap-6 mb-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-indigo-950 text-indigo-950' : 'text-slate-100'}`} />
              ))}
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase text-indigo-950/40">{product.reviewsCount} Verified Reviews</span>
          </div>

          <p className="text-4xl font-black tracking-tighter mb-10 text-indigo-950">₹{product.price.toFixed(2)}</p>

          <p className="text-indigo-950/60 font-medium leading-relaxed mb-12 italic border-l-4 border-indigo-950/10 pl-6">
            {product.description}
          </p>

          <div className="space-y-10 mb-16">
            {/* Color Select */}
            <div>
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950">Color</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950/30">{selectedColor || 'Select...'}</span>
              </div>
              <div className="flex gap-6">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 border-2 transition-all p-1 ${selectedColor === color ? 'border-indigo-950 scale-110' : 'border-transparent'}`}
                  >
                    <div className="w-full h-full shadow-inner" style={{ backgroundColor: color.toLowerCase() }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Select */}
            <div>
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950">Size</span>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] underline underline-offset-4 text-indigo-950/30">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-14 border font-black text-[10px] uppercase transition-all ${selectedSize === size ? 'bg-indigo-950 text-white border-indigo-950' : 'bg-white text-indigo-950/30 border-slate-100 hover:border-indigo-950 hover:text-indigo-950'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950">Quantity</span>
              <div className="flex items-center border border-indigo-950">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-indigo-50 text-indigo-950"><Minus className="w-4 h-4" /></button>
                <span className="px-8 font-black text-indigo-950 text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-indigo-50 text-indigo-950"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-16">
            <button 
                onClick={handleAddToCart}
                className="w-full py-6 bg-indigo-950 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-indigo-950 border border-indigo-950 transition-all shadow-2xl shadow-indigo-900/10"
            >
              Add To Bag
            </button>
            <button className="w-full h-16 border border-indigo-950/10 flex items-center justify-center hover:bg-indigo-950 hover:text-white transition-all text-indigo-950 font-black uppercase tracking-widest text-[10px]">
              <Share2 className="w-4 h-4 mr-3" /> Share Product
            </button>
          </div>

          <div className="space-y-6 pt-10 border-t border-indigo-950/5">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950/40">
              <Truck className="w-4 h-4" />
              <span>Complimentary Express Delivery</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950/40">
              <RefreshCcw className="w-4 h-4" />
              <span>30-Day Bespoke Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 italic text-indigo-950">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;