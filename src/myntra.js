import React, { useState } from "react";
import ReactDOM from "react-dom/client.js";
import Card from "./component/card";
import Footer from "./component/footer";
import Header from "./component/Header";
import arr from "./utils/dummy.js";



function App(){

    let [A,setA] = useState(arr);

    function sortArray(){
       A.sort((a,b)=>a.price - b.price);
       setA([...A]);
    }

    function priceAbove499(){
        const B =arr.filter((value) =>value.price>499);
        setA(B);
    }

        return(<>
         
            <Header/>
            <button onClick={sortArray}>Sort by Price</button>
            <button onClick={priceAbove499}>Price above 499</button>
                <div className="middle" style={{display:"flex" , gap:"10px", flexWrap:"wrap"}}>
                    {
                        A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
                    }
                    
                </div>
            <Footer/>
        </>
        )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);