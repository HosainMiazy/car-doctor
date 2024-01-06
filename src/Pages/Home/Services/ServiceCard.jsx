const ServiceCard = ({service}) => {
    const {title,img,price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="w-[314px]">
        <img 
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-between gap-20">
            
        <p className="text-red-500 font-bold">Price: ${price}</p>
        <button variant="text" className="flex items-center gap-2 text-red-500 font-bold">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
