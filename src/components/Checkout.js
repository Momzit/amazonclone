import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

    const [{ basket, user }, ] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
                className='checkout__ad'
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt='checkout banner'
            />

            <div>
                <h3 className='checkout__title1'>Hello, { user ? user?.email : 'Guest'}</h3>
                <h2 className='checkout__title'>
                    Your shopping busket
                </h2>
                {
                    basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        />
                    ))
                }
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout