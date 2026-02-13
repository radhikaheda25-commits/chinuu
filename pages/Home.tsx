import React from 'react';
import { ArrowRight, Star, Quote, Mail } from 'lucide-react';
import { PRODUCTS } from '../constants.ts';
import ProductCard from '../components/ProductCard.tsx';

const Home: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-indigo-950 flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements for Minimalism */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-white text-indigo-950 font-black uppercase tracking-widest text-[10px] mb-6 shadow-xl">
              New Collection 2024
            </span>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 drop-shadow-2xl">
              Step Into <br /> <span className="text-transparent border-t-2 border-b-2 border-white inline-block">Style</span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-lg opacity-80 leading-relaxed italic text-indigo-50">
              Experience the perfect blend of performance engineering and high-fashion aesthetics. Built for the urban vanguard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#/shop" 
                className="px-10 py-5 bg-white text-indigo-950 font-black uppercase tracking-widest hover:bg-indigo-900 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl text-center"
              >
                Shop Collection
              </a>
              <a 
                href="#/shop?cat=Sports" 
                className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest hover:bg-white hover:text-indigo-950 transition-all text-center"
              >
                Performance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-indigo-950">Explore Categories</h2>
            <div className="w-20 h-2 bg-indigo-950 mt-2"></div>
          </div>
          <a href="#/shop" className="group flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-indigo-950 hover:pr-2 transition-all">
            View All Shop <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Men', img: 'https://i.ibb.co/j9yG5NND/Black-Leather-Oxford.png', count: 124 },
            { name: 'Women', img: 'https://i.ibb.co/gbZtP5dT/Suede-Chelsea-Boot.png', count: 156 },
            { name: 'Kids', img: 'https://i.ibb.co/8LyQtGCS/Memphis-Style-Color-Blocking.png', count: 82 },
            { name: 'Sports', img: 'https://i.ibb.co/jkkk4yrZ/Waterproof-Hiking-Boot.png', count: 94 },
          ].map((cat) => (
            <a 
              key={cat.name} 
              href={`#/shop?cat=${cat.name}`}
              className="group relative h-[500px] overflow-hidden bg-slate-50 block border border-indigo-950/5"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-indigo-950/10 group-hover:bg-indigo-950/30 transition-colors"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{cat.name}</h3>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-[0.2em]">{cat.count} Items</p>
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-none text-indigo-950 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white border-y border-indigo-950/5">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-indigo-950">Best Sellers</h2>
            <p className="text-slate-400 font-bold max-w-xl mx-auto uppercase tracking-[0.2em] text-[10px]">
              Our most-loved silhouettes, refined for every urban occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            { name: "Alex Rivers", text: "The Velocity Prime X changed my morning runs. I've never felt this level of support and bounce.", rating: 5 },
            { name: "Jordan M.", text: "Urban Sole is my go-to for street style. Minimalist designs that just work with everything.", rating: 5 },
            { name: "Sarah K.", text: "Quality is top-notch. Shipping was incredibly fast even for standard delivery.", rating: 5 }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 border border-indigo-950/5 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-indigo-950/[0.03] group-hover:rotate-12 transition-transform" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-indigo-950 text-indigo-950" />)}
              </div>
              <p className="text-lg font-medium italic mb-8 leading-relaxed text-indigo-950/80">"{item.text}"</p>
              <p className="font-black uppercase tracking-widest text-[10px] text-indigo-950">- {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Join the <br /> <span className="text-white/40">Sole Syndicate</span>
            </h2>
            <p className="text-lg text-indigo-100/60 font-medium mb-12 italic">
              Subscribe to get exclusive early access to drops, limited editions, and curated styling guides.
            </p>
            <form className="flex flex-col sm:flex-row gap-0 group" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="flex-1 h-16 bg-white/5 border border-white/10 px-6 text-white font-bold tracking-widest focus:bg-white/10 focus:border-white transition-all uppercase text-sm outline-none"
              />
              <button className="h-16 px-12 bg-white text-indigo-950 font-black uppercase tracking-[0.2em] hover:bg-indigo-100 transition-all">
                Subscribe
              </button>
            </form>
            <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">
              By subscribing you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;