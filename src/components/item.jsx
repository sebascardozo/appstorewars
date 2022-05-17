
import { Link } from "react-router-dom"
import ItemCounter from "../components/ItemCounter/ItemCounter"
import './styles/item.css';


function Item({product}) {
  return (
   <div className="card" >
    <Link to ={`imgine3d/detail/${product.id}`}>
          <img className="card-image" src={product.image} alt="Imagen del producto"></img>  
          <div>{product.name}</div>
    </Link>
    
          <div>{product.price}</div>
          <ItemCounter stock={product.stock} initial={product.initial} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
    </div>
    
  )
}

export default Item

 