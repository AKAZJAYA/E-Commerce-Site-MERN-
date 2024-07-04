import React from "react";
import Hero from "../Component/Hero/Hero";
import Popular from "../Component/Popular/Popular";
import Offers from "../Component/Offers/Offers";
import NewCollenction from "../Component/NewCollenction/NewCollection";
import NewsLetter from "../Component/NewsLetter/NewsLetter";



const Shop = () =>{
    
    //     async function fetch_data(){           
    //         const request = await fetch("https://jsonplaceholder.typicode.com/post",{method: "GET"});
    //         if(request.status === 200){

    //             const result = await request.json();
    //             console.log(result);
    //             setPost(result);
    //         }
    //         if(request.status === 404){

    //             console.log("Error");
    //         }
    //     }
    //     fetch_data();
    // },[]);
    
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