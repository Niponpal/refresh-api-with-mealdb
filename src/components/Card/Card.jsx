const Card = ({ image, title, description, price }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
      
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${price}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;