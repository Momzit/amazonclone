import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {
    const [{ basket }, ] = useStateValue();
    
    //This can be replaced with a reducer function that does the total in one line :)
    //Which is in the reducer.js
    const total = (basket) => {
        let Sum = 0;
        for (const product of basket) {
            Sum += product.price
        }
        return Sum
    }

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>Subtotal ({basket?.length} items) : 
                    <strong> {`${ value }`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' />This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={total(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'R'}
        />
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal