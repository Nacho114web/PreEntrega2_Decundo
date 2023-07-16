import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, author, cover, price }) => {
    return (
        <div className="cardContainer">
            <p className="cardTitle">{ title.toUpperCase() }</p>
            <p className="cardAuthor">{ author }</p>
            <img className="cardCover" src={ `../images/${cover}` } alt={ title } />
            <p className="cardPrice">${ price }</p>            
            <Link to= { `/item/${ id }` } className="cardButton">Ver Detalle </Link> 
        </div>
    );
}

export default Item;