import React from 'react';

const Navbar = () => {
    return (
        <div className="flex items-center justify-center h-16">
            <div class="p-4 border">
                <nav className="fixed top-0 left-0 w-full z-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex justify-center items-center h-16">
                            <ul className="flex space-x-8 items-center">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                                    >
                                        Gyan Dev
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;


/* <nav className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-center items-center h-16">
                    <ul className="flex space-x-8 items-center">
                        <li>
                            <a
                                href="#home"
                                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Gyan Dev
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */