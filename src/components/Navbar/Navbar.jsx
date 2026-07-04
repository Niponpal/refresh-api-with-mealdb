const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/40">
            <div className="navbar max-w-7xl mx-auto px-4 text-white">

                {/* LEFT */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                                <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-black/90 rounded-box w-52 space-y-2"
                        >
                            <li><a className="hover:text-primary">Home</a></li>
                            <li><a className="hover:text-primary">About</a></li>
                            <li><a className="hover:text-primary">Menu</a></li>
                            <li><a className="hover:text-primary">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="text-2xl font-bold tracking-wide">
                        🍽️ N-Restaurant
                    </a>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-lg">

                        <li>
                            <a className="relative group">
                                Home
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        </li>

                        <li>
                            <a className="relative group">
                                About
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        </li>

                        <li>
                            <a className="relative group">
                                Menu
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        </li>

                        <li>
                            <a className="relative group">
                                Contact
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        </li>

                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end gap-3">

                    <button className="btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-black transition">
                        Login
                    </button>

                    <button className="btn btn-primary btn-sm px-5 hover:scale-105 transition">
                        Order Now Here
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;