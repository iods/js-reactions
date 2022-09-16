import Header from './components/headers/Header';
import SearchInput from "./components/form/SearchInput";

import './styles/index.css'

const App = () => {
    return (

        <>
            <Header />
            <section className="text-gray-700">
                <SearchInput />
            </section>
        </>
    );
}

export default App;