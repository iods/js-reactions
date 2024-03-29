import React from "react";

import favicon from '../../assets/img/favicon.svg';

const HeaderTwo = () => {
    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-50 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Reactions</span>
                            <img className="h-8 w-auto sm:h-10" src={ favicon }  alt="" />
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">API Tests</a>
                        <a href="https://github.com/iods/js-reactions/wiki" className="text-base font-medium text-gray-500 hover:text-gray-900" target="_blank">Documentation</a>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="https://github.com/iods/js-reactions/wiki" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" target="_blank">Resources</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTwo;