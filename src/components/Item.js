import React from "react";
import {Link} from "react-router-dom";

export default function Item({item}) {
  return (
    <div className="flex flex-col">
      <div className="group relative">
        <Link to={`/item/${item.id}`}>
          <div
            className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0"/>
                  {item.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${item.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}