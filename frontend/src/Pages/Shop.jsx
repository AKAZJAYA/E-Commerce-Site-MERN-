import React from "react";
import Hero from "../Component/Hero/Hero";
import Popular from "../Component/Popular/popular";
import Offers from "../Component/Offers/Offers";
import NewCollenction from "../Component/NewCollenction/NewCollection";
import NewsLetter from "../Component/NewsLetter/NewsLetter";


const Shop = () =>{

    return(

        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollenction/>
            <NewsLetter/>
        </div>
    )
}

export default Shop;