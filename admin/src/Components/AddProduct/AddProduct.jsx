import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    old_price:"",
    new_price:"",
  })

  const imageHandler = (e)=>{

    setImage(e.target.files[0]);
  }

  const changeHandle = (e)=>{

    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async ()=>{

    // console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json'
      },
      body:formData,
    }).then((res)=>res.json()).then((date)=>{responseData=date});

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);

      await fetch('http://localhost:4000/addproduct',{
        method:'post',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Product Added Failed");
      })
    }
  }

  return (
    <div className='addproduct'>
      <div className='addproduct_itemfield'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandle} type="text" name='name' placeholder='Item Name'/>
      </div>
      <div className="addproduct_price">
        <div className="addproduct_itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandle} type="text" name='old_price' placeholder='Old Price'/>
        </div>
        <div className="addproduct_itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandle} type="text" name='new_price' placeholder='New Price'/>
        </div>
      </div>
      <div className="addproduct_itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandle} name="category" className='addproduct_selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct_itemfield">
        <label htmlFor="file_input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct_thumnail_img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file_input' hidden />
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct_btn'>ADD</button>
    </div>
  )
}

export default AddProduct
