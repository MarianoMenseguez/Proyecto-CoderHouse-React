import React from "react";
import Item from "./Item";

export default function ItemList(props) {

  let items = props.items;

  return(
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-12">
        <h2 id="products" className="text-2xl font-bold tracking-tight text-gray-900">Productos destacados</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.filter( item => item.category === 'camisetas').map((item) => (
            <Item
              key={item.id}
              item={item}
            />
          ))
          }
          {items.filter( item => item.category === 'shores').map((item) => (
            <Item
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}