import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('services.json')
        .then (res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h2 className="text-3xl text-red-500 font-bold"> Services</h2>
                <h2 className="text-5xl"> Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable.  </p>
            </div>
            <div>
                <p className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6">
                    {
                   
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </p>
            </div>
        </div>
    );
};

export default Services;