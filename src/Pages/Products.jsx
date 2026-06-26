import React from "react";
import { productCategories } from "../components/Product";
import ProductCard from "../components/ProductCard";

 
const Products = () => (
  <section id="products" className="bg-[#0d0d0d] py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase text-center mb-3">
        Product Range
      </p>
      <h2 className="text-white text-center font-black text-3xl sm:text-4xl tracking-tight mb-16">
        Product Categories
      </h2>
 
      {productCategories.map(({ category, accentClass, bar, borderHover, btnColor, eyebrow, products }) => (
        <div key={category} className="mb-16">
          {/* Category header */}
          <div className="flex items-center gap-4 mb-7">
            <div className={`w-1 h-7 rounded-sm flex-shrink-0 ${bar}`} />
            <h3 className="text-white text-lg font-bold">{category}</h3>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(p => (
              <ProductCard key={p.name} {...p}
                eyebrow={eyebrow} category={category}
                btnColor={btnColor} borderHover={borderHover} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Products