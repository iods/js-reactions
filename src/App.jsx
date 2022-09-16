
import MensCategory from './assets/img/category_mens.jpg';
import WomensCategory from './assets/img/category_womens.jpg';
import ClubsCategory from './assets/img/category_clubs.jpg';
import ShoesCategory from './assets/img/category_shoes.jpg';
import AccessoriesCategory from './assets/img/category_accessories.jpg';


const App = () => {
  return (
      <section className="text-neutral-600">
          <div className="container container-categories mx-auto px-5 py-24 flex flex-wrap">
              <div className="px-2 lg:w-1/2">
                  <div className="flex flex-wrap w-full relative mb-4 px-10 py-32 bg-neutral-100">
                      <img alt="category" className='absolute inset-0 w-full h-full object-cover object-center block opacity-25' src={ MensCategory } />
                      <div className="w-full relative z-10 text-center">
                          <span className="mb-2 text-2xl text-neutral-900 font-medium">Mens</span>
                          <p className="leading-relaxed">Clothing and Outerwear</p>
                      </div>
                  </div>
              </div>
              <div className="px-2 lg:w-1/2">
                  <div className="flex flex-wrap w-full relative mb-4 px-10 py-32 bg-neutral-100">
                      <img alt="category" className='absolute inset-0 w-full h-full object-cover object-center block opacity-25' src={ WomensCategory } />
                      <div className="w-full relative z-10 text-center">
                          <span className="mb-2 text-2xl text-neutral-900 font-medium">Womens</span>
                          <p className="leading-relaxed">Clothing and Outerwear</p>
                      </div>
                  </div>
              </div>
              <div className="flex flex-wrap w-full">
                  <div className="px-2 sm:w-1/2 lg:w-1/3">
                      <div className="flex relative bg-neutral-100">
                          <img alt="category" className="absolute inset-0 w-full h-full object-cover object-center opacity-25" src={ ClubsCategory } />
                          <div className="relative px-6 py-8 w-full z-10">
                              <span className="mb-1 tracking-widest text-sm text-neutral-500">Drivers, Irons, &amp; Putters</span>
                              <p className="mb-3 text-2xl text-neutral-900">Golf Clubs</p>
                          </div>
                      </div>
                  </div>
                  <div className="px-2 sm:w-1/2 lg:w-1/3">
                      <div className="flex relative">
                          <img alt="category" className="absolute inset-0 w-full h-full object-cover object-center opacity-25" src={ ShoesCategory } />
                          <div className="relative px-6 py-8 w-full z-10">
                              <span className="mb-1 tracking-widest text-sm text-neutral-500">Mens &amp; Womens</span>
                              <p className="mb-3 text-2xl text-neutral-900">Golf Shoes</p>
                          </div>
                      </div>
                  </div>
                  <div className="px-2 sm:w-1/2 lg:w-1/3">
                      <div className="flex relative">
                          <img alt="category" className="absolute inset-0 w-full h-full object-cover object-center opacity-25" src={ AccessoriesCategory } />
                          <div className="relative px-6 py-8 w-full z-10">
                              <span className="mb-1 tracking-widest text-sm text-neutral-500">Tees, Balls, and More!</span>
                              <p className="mb-3 text-2xl text-neutral-900">Balls &amp; Accessories</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default App;
