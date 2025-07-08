function Header(){
    return(
        <div className="heading">
          <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png?w=640" height='80px' width="80px"/>
          <div className="option">
            <button className="but">Men</button>
            <button className="but">women</button>
            <button className="but">Kids</button>
            <button className="but">Home and Living</button>
            <button className="but">Beauty</button>
            <button className="but">Studio</button>
          </div>

          <input className="searchbar" placeholder="Search for product brands and more "></input>

          <div className="profiling">
            <button className="btn">profile</button>
            <button className="btn">Wishlist</button>
            <button className="btn">Bag</button>
          </div>
        </div>
    )
}
export default Header;