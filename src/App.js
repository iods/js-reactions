
import Header from './components/Layout/Header';
import AppComponent from "./components/Basics/AppComponent";

import './styles/index.css'

const App = () => {
  return (

      <>
          <Header />
          <section className="text-gray-700">
              <AppComponent />
          </section>
      </>
  );
}

export default App;
