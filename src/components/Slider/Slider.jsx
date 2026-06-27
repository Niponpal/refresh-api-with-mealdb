import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Welcome to Our Aura",
    desc: "Discover amazing products and deals.",
    image: "https://picsum.photos/id/1018/1000/600",
  },
  {
    id: 2,
    title: "Best Quality Products",
    desc: "We ensure top quality for our customers.",
    image: "https://picsum.photos/id/1015/1000/600",
  },
  {
    id: 3,
    title: "Fast Delivery",
    desc: "Get your order delivered quickly.",
    image: "https://picsum.photos/id/1019/1000/600",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    const para = 2;
    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-100 overflow-hidden rounded-xl">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="mb-4">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;