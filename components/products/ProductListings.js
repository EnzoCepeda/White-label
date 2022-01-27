import ProductCard from '@/components/products/ProductCard'
import {useState} from "react";
import FilterComponent from '../filter/FilterComponent';

function ProductListings({ products }) {

  const [filter, isShowFilter] = useState(false)
  const [productsToShow, setProductsToShow] = useState(products)

  const open = () => {
    isShowFilter(!filter)
  }

    const close = () => {
        isShowFilter(false)
    }

  return (
          <>
                  <button className="text-purple-500
                                    bg-transparent
                                    border border-solid border-purple-500
                                    hover:bg-purple-500 hover:text-white
                                    active:bg-purple-600
                                    font-bold
                                    uppercase
                                    text-xs
                                    px-4
                                    py-2
                                    ml-24
                                    mt-4
                                    mb-4
                                    rounded-full
                                    outline-none
                                    focus:outline-none
                                    mr-1
                                    mb-1
                                    ease-linear
                                    transition-all
                                    duration-150"
                                    type="button"
                                    onClick={open}>
                      {filter ? "Cerrar" : "Filtros" }
              </button>

              <input type="search" className="w-2/3 ml-12 bg-purple-white shadow rounded border-0 p-3"
                     placeholder="Buscar"/>

              <div className="flex flex-row">
                  <div className={`rounded-md bg-white flex-shrink shadow-lg border-gray-600 shadow-2xl
                    inset-y-0 left-0 transform  transition duration-200 ease-in-out
                      ${filter ? "translate-x-0  w-1/4  py-10 pl-4 px-20 border border-t-4" : "-translate-x-full w-0 h-0" }`}>
                        <FilterComponent products={setProductsToShow}/>
                  </div>
                  <div className={`transition duration-200 ease-in-out flex flex-col flex-wrap	 md:flex-row
                                    ${filter ? " -translate-x-full w-3/4" : "translate-x-full w-full xl:3/4"} `}>
                      <div className={`py-2 contents`}>
                          {
                              productsToShow
                              ?
                              productsToShow.map((product, index) => (
                                  <ProductCard key={index} product={product} />
                              ))
                              :
                              <></>
                          }
                      </div>
                  </div>
              </div>

          </>
  )
}

export default ProductListings
