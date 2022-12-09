import "./Food.css";
import React from 'react';
function Food({ menu}) {
  function handleDelete(){
    fetch(`/menus/${menu.id}`,{
      method: "DELETE",
    }).then(res=>res.json()).then((data)=>console.log(data))
  }
  return (
    <div className="column">
      <div className="card">
        <img src={menu.image_url}></img>
        <h4 id="name">Name:{menu.food_name}</h4>
        <h5>Price: Ksh {menu.price}</h5>
        <p>Ingredient : {menu.description}</p>
        <button id="btnf" >Update</button>
        <button id="btnf" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
export default Food;
