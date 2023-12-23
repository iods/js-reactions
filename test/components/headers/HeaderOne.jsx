import React from "react";

import logo from '../../assets/img/favicon.svg';

const HeaderOne = () => {

    return (
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="relative flex items-center justify-between lg;justify-center lg:space-x-16">

                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a href="/"
                           aria-label="API Tests"
                           title="API Tests"
                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-100">
                            API Tests
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           aria-label="Documentation"
                           title="Documentation"
                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-100">
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           aria-label="Resources"
                           title="Resources"
                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-100">
                            Resources
                        </a>
                    </li>
                </ul>
                <a href="/"
                   aria-label="The Dark Society"
                   title="The Dark Society"
                   className="inline-flex items-center">
                    <img src={ logo } className="w-8" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        The Dark Society
                    </span>
                </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a href="/"
                           aria-label="API Tests"
                           title="API Tests"
                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-100">
                            API Tests
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           aria-label="Documentation"
                           title="Documentation"
                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-100">
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           aria-label="Resources"
                           title="Resources"
                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-100">
                            Resources
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderOne;