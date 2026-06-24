const Hero = () => {
    return (
        <div
            className="hero min-h-screen relative overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-110 transition-transform duration-700"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/XxR2Gknb/photo-1537047902294-62a40c20a6ae-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg)",
                }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/30"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center text-center text-white px-4">
                <div className="max-w-2xl">
                    
                    <h1 className="mb-4 text-4xl md:text-6xl font-extrabold leading-tight">
                        Welcome to Our Restaurant 🍽️
                    </h1>

                    <p className="mb-2 text-lg md:text-xl text-gray-200">
                        Freshly prepared meals made with love
                    </p>

                    <p className="mb-6 text-sm md:text-base text-gray-300">
                        From traditional favorites to modern flavors, we serve food that brings
                        people together. Experience taste, comfort, and hospitality in every bite.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button className="btn btn-primary px-6 hover:scale-105 transition">
                            Explore Menu
                        </button>

                        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-6 transition">
                            Book Table
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;