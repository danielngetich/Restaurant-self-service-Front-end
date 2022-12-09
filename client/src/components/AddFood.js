import { useState } from "react";
import {Link} from "react-router-dom"
import "./AddFood.css";
function AddFood({ menu }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    const food={
      food_name:name,
      image_url:image,
      description:description,
      price:price
    }
    e.preventDefault();
    fetch("/menus",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(food)
    })
  }
  function handleUpdate() {
    fetch(`/menus/${menu.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  }
  return (
    <div className="testbox">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Name</label>
          <input type="text" value={name} placeholder="Enter food Name"
          onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label>Image Url</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter Image Url"
          ></input>
        </div>
        <div>
          <label>Food description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Food description"
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input value={price} type="integer" placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div>
          <button type="submit">Add Menu</button>
          <span/>
          <Link to="/menu"><button>View Menu</button></Link>
        </div>
      </form>
    </div>
  );
}
export default AddFood;
