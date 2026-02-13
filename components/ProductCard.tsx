import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types.ts';
import { useCart } from '../context/CartContext.tsx';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // For quick add, we pick first size and color
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  return (
    <a 
      href={`#/product/${product.id}`}
      className="group block relative"
    >
      <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden border border-indigo-950/5">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-indigo-950 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 shadow-md">Best Seller</span>
          )}
          {product.isNewArrival && (
            <span className="bg-white text-indigo-950 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 shadow-md">New Arrival</span>
          )}
        </div>
        
        {/* Main Image */}
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
        />

        {/* Action Overlays */}
        <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2">
             <button 
                onClick={handleQuickAdd}
                className="w-12 h-12 bg-indigo-950 text-white flex items-center justify-center hover:bg-white hover:text-indigo-950 transition-all shadow-2xl"
                title="Quick Add"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button 
                className="w-12 h-12 bg-white text-indigo-950 flex items-center justify-center hover:bg-indigo-950 hover:text-white transition-all shadow-2xl"
                title="View Product"
              >
                <Eye className="w-5 h-5" />
              </button>
          </div>
        </div>

        {/* Favorite Icon */}
        <button className="absolute top-4 right-4 p-2 bg-transparent text-indigo-950/20 hover:text-rose-500 transition-all group-hover:text-indigo-950">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase font-black text-indigo-950/30 tracking-[0.2em] mb-2">{product.category}</p>
          <h3 className="font-black text-base uppercase tracking-tight text-indigo-950 group-hover:underline underline-offset-8 transition-all">{product.name}</h3>
          <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">{product.colors.length} Colors Available</p>
        </div>
        <p className="font-black text-lg tracking-tighter text-indigo-950">₹{product.price.toFixed(2)}</p>
      </div>
    </a>
  );
};

export default ProductCard;