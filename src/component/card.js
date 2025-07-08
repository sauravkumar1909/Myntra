function Card(props){
    return (
         <div className="card"  style ={{border:"2px solid black",padding:"2px"}}>
            <img src ="https://assets.ajio.com/medias/sys_master/root/20230621/fczF/64922f0342f9e729d75c7721/-1117Wx1400H-463430808-green-MODEL.jpg"  height="200px" width="200px" />
            <div style = {{textAlign :"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <h2>Price: {props.price}</h2>
            </div>
         </div>
    )  
}
export default Card;