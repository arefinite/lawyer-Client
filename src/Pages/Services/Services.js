import React, { useEffect, useState } from 'react';
import Service from './Service';
   
const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <>
         <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Lawyer Mark's Services</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">We are here to help you all kind of law supports.</p>
          </div>
          </div>
          </section>
          <div className='grid grid-col-1 md:grid-cols-4 gap-4 px-4'>
           {
               services.map(service=><Service
                   key={service.id}
                   service={service}
               />)
           }
           </div>
       </>
    );
};

export default Services;