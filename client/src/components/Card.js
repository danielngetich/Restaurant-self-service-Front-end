function Card({menu}) {
    return (
      <div className="column">
        <div className="card">
          <img src={menu.image_url}></img>
          <h4 id="name">Name:{menu.food_name}</h4>
          <h5>Price: Ksh {menu.price}</h5>
          <p>Ingredient : {menu.description}</p>
          <button id="btnf">Order</button>
        </div>
      </div>
    );
  }
  export default Card;
  