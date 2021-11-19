import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import CartTable from '@/components/cart/CartTable'
import CheckOutButton from '@/components/CheckOutButton'
import BackToProductButton from '@/components/products/BackToProductButton'
import {useCartContext} from '@/context/Store'
import {createCheckout, getPreference} from "../services/productService";
import React, {useEffect, useState} from "react";
import MercadoPago from "@/components/mercadoPago/MercadoPago";
import Loading from "@/components/utils/Loading";


function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`  
  const [cart, checkoutUrl] = useCartContext()
  const [preference, setPreference] = useState();
  const [checkout, setCheckout] = useState(null);
  const [loading, isLoading] = useState(false);

  const preparePreference = () => {
      isLoading(true);
      getPreference(cart).then((res) => {
          setPreference(res.data);
          isLoading(false);
      });
  }

  const handleCheckout = () => {
      isLoading(true);
      createCheckout(cart).then((res) => {
          setCheckout(res.data);
          isLoading(false);
      });
  }
  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <PageTitle text="Tu Compra" />
        {
            cart.length == 0
            ?
                <h1 className="leading-relaxed font-primary font-extrabold text-3xl text-center text-palette-primary mt-4 py-2 sm:py-4">
                    No hay Art&iacute;culos por aqu&iacute;
                </h1>
            :
                <>
                    <CartTable
                        cart={cart}
                    />
                    <div className="max-w-sm mx-auto space-y-4 px-2">
                        <BackToProductButton />
                        {
                            preference != null
                                ?
                                <MercadoPago preference={preference}/>
                                :
                                <>
                                    <a onClick={preparePreference}
                                       aria-label="checkout-products"
                                       className="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex
                      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
                                    >Generar Pago de Meracado Pago</a>
                                </>
                        }
                        {
                            checkout == null
                                ?
                                <a onClick={handleCheckout}
                                   aria-label="checkout-products"
                                   className="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex
                              justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
                                >Checkout</a>
                                :
                                <CheckOutButton checkout={checkout}/>
                        }
                        {
                            loading
                                ?
                                <Loading message={"Espere un segundo por favor"} />
                                :
                                <></>
                        }

                    </div>
                </>
        }
    </div>
  )
}

export default CartPage