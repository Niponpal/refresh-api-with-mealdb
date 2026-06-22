const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/XxR2Gknb/photo-1537047902294-62a40c20a6ae-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Our Restaurant</h1>
                    <p className="mb-5">
                        change the content, freshly prepared meals made with the finest ingredients.
                        From traditional favorites to modern flavors, we serve food that brings
                        people together. Come with family or friends and experience taste,
                        comfort, and hospitality in every bite.
                    </p>
                    <button className="btn btn-outline">Explore Our Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;