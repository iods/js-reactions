
import Header from './components/headers/Header';
import Search from "./components/form/Search";

import './styles/index.css'

const App = () => {
  return (

      <>
          <Header />
          <section className="text-gray-700">
              <Search />
          </section>
      </>
  );
}

export default App;
