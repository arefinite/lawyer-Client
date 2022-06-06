import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,price,description,id,image} = service
    return (
      
          
            <div>
                <div className="bg-gray-100 shadow-lg p-6 rounded-lg col-span-1">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content"/>
                <h3 className="tracking-widest text-indigo-500 text-2xl font-bold title-font">{price}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{name}</h2>
                <p className="leading-relaxed text-base">{description}</p>
                <div className='mt-4'>
                <Link className='bg-slate-200 p-2 rounded-md' to='/checkout' >Click For Order</Link>
                </div>
                </div>
            </div>
            
        
     
    );
};

export default Service;