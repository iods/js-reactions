
import github from '../../assets/img/github.svg';
import favicon from '../../assets/img/favicon.svg';

const Header = () => {

    return (

        <header className="text-gray-700">

            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <nav className="flex flex-wrap md:ml-auto lg:w-2/5 items-center">
                    <a className="mr-5 hover:text-gray-900" href="/">Basics</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img alt="The Dark Society" className="w-10 h-10 p-2" src={ favicon } />
                    <span className="ml-3 mt-1 text-3xl text-darkstar">Reactions</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <a className="mr-5 hover:text-gray-900">
                        <img alt="The Dark Society" className="w-10 h-10 p-2" src={ github } />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;