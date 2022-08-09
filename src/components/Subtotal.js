import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
import { total } from './reducer'

function Subtotal() {

    const navigate = useNavigate();
    const [{ basket }, ] = useStateValue();

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
        <button onClick={(e) => navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal