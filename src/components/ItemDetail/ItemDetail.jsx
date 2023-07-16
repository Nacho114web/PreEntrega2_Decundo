import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ title, author, cover, price, language, stock, category }) => {
    return (
        <div className="cardDetContainer">
            <p className="cardDetTitle">{title}</p>
            <p className="cardDetAuthor">{author}</p>
            <div className="cardDetails">
                <img className="cardDetCover" src={`../images/${cover}`} alt={title} />
                <div className="bookDetails">
                    <p className="cardDetPrice">${price}</p>
                    <p className="cardDetLang"><b>Idioma:</b> {language}</p>
                    <p className="cardDetCateg"><b>Categoría:</b> {category}</p>
                    <p className="cardDetStock">Stock disponible: {stock}</p>
                    <ItemCount minimum={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
                </div>
            </div>
        </div>
    )
};

export default ItemDetail