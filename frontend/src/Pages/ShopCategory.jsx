import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Component/Assets/dropdown_icon.png';
import Item from '../Component/Item/Item';

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop_category'>
      <img className='shopcategory_banner' src={props.banner} alt="" />
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span> out pf 36 products
        </p>
        <div className="shopcategory_sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_product">
        {all_product.map((item,i)=>{

          if(props.category===item.category){

            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{

            return null;
          }
        })}
      </div>
      <div className="shopcatageroy_loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
