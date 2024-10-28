import Product from "./Product";
import Price from "./Price";

function ProductTab(){

    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center"
    }

    return(
        <div style={styles}>
            <Product title="Logitech MX Master" idx={0} /> 
            <Product title="Apple Pencil" idx={1} /> 
            <Product title="Zebronics Zeb-Transform" idx={2} /> 
            <Product title="Potronics Tod-23" idx={3} /> 
        </div>
    )
}

export default ProductTab;