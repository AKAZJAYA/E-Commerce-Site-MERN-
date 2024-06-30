import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const {gettotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartItems_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{

        if(cartItems[e.id]>0)
            {
                return <div>
                            <div className="cartitems_format cartItems_format_main">

                                <img src={e.image} alt="" className='carticon_product_icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitem_remove_icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
      })}
      <div className="cartitems_down">
        <div className="cartitems_total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems_total_item">
                    <p>Subtotal</p>
                    <p>${gettotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems_total_item'>
                    <p>Shippping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems_total_item'>
                    <h3>Total</h3>
                    <h3>${gettotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems_promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems_promobox">
                <input type="text" placeholder='Promocode' name="" id="" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
