
import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { PRODUCTS, SIZES, COLORS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(20000);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price <= selectedPrice);

    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedSizes, sortBy]);

  const toggleSize = (size: number) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Sidebar / Filters */}
        <aside className={`fixed inset-0 z-50 bg-white p-8 md:relative md:inset-auto md:z-0 md:p-0 md:block md:w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} transition-transform duration-300`}>
          <div className="flex md:hidden items-center justify-between mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-indigo-950">Filters</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400"><X className="w-6 h-6" /></button>
          </div>

          <div className="space-y-12">
            {/* Category Filter */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-indigo-950/20">Category</h3>
              <div className="flex flex-col gap-4">
                {['Men', 'Women', 'Kids', 'Sports'].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className={`text-left font-black uppercase tracking-widest text-[10px] transition-all ${selectedCategory === cat ? 'translate-x-2 text-indigo-950' : 'text-slate-300 hover:text-indigo-950'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-950/20">Max Price</h3>
                <span className="font-black text-xs tracking-tighter text-indigo-950">₹{selectedPrice}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="25000" 
                step="500"
                value={selectedPrice}
                onChange={e => setSelectedPrice(parseInt(e.target.value))}
                className="w-full h-1 bg-indigo-50 rounded-none appearance-none cursor-pointer accent-indigo-950"
              />
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-indigo-950/20">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {SIZES.map(size => (
                  <button 
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`h-10 border font-black text-[10px] flex items-center justify-center transition-all ${selectedSizes.includes(size) ? 'bg-indigo-950 text-white border-indigo-950' : 'bg-white text-indigo-950/30 border-slate-100 hover:border-indigo-950 hover:text-indigo-950'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-indigo-950/20">Color</h3>
              <div className="flex flex-wrap gap-3">
                {COLORS.map(color => (
                  <button 
                    key={color}
                    className="w-6 h-6 rounded-none border border-indigo-50 hover:scale-110 transition-transform shadow-sm"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-indigo-950">
                {selectedCategory ? `${selectedCategory} Shoes` : 'All Shoes'}
              </h1>
              <p className="text-slate-300 font-black tracking-[0.2em] text-[10px] uppercase">{filteredProducts.length} Results Found</p>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="flex md:hidden flex-1 items-center justify-center gap-2 h-14 border border-indigo-950 px-8 font-black uppercase tracking-widest text-[10px] text-indigo-950"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <div className="relative group flex-1 sm:flex-none">
                <select 
                  className="w-full h-14 bg-white border border-indigo-950/10 px-8 pr-12 font-black uppercase tracking-widest text-[10px] appearance-none cursor-pointer outline-none text-indigo-950 focus:border-indigo-950"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                >
                  <option value="newest">Sort By: Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-indigo-950/40" />
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border border-dashed border-indigo-950/10">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-indigo-950">No matching products</h3>
              <p className="text-slate-400 mb-10 uppercase tracking-[0.2em] font-black text-[10px]">Try adjusting your filters or category.</p>
              <button 
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedPrice(25000);
                  setSelectedSizes([]);
                }}
                className="px-10 py-5 bg-indigo-950 text-white font-black uppercase tracking-widest hover:bg-white hover:text-indigo-950 border border-indigo-950 transition-all shadow-xl"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;