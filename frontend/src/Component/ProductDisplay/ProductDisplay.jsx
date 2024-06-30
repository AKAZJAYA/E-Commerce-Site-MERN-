import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'


const ProductDisplay = (props) => {

    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">
        <div className='productdisplay_img_list'>

            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>

        <div className="productdisplay_image">
            <img className='productdisplay_main_img' src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay_right">

        <h1>{product.name}</h1>
        <div className="productdisplay_right_star">

            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
