import "./Product.css"
import Price from "./Price";

function Product({title,idx}){

    let oldPrices = ['10,499','8,999','1,599','799'];
    let newPrices = ['9,499','6,999','1,299','699'];
    let Description = ['8000 DPI','Intuitive Surface','Desiged for Ipad Pro','Wireless']

    return (
        
        <div className="Product">
            <h4>{title }</h4>
            <p>{Description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    )
} 

export default Product;