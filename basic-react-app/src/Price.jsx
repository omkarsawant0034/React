function Price({oldPrice,newPrice}){
    let oldStyles = {   
        textDecorationLine : "line-through",
    }

    let newStyles = {
        fontWeight : "bold",
    }

    let styles = {
        backgroundColor : "#D6C0B3",
        borderBottomLeftRadius : "10px",
        height : "30px",
        borderBottomRightRadius : "10px",
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}

export default Price;