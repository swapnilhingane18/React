import "./price.css";

export default function Price({oldPrice,newPrice}){
    let styles={
        textDecoration:"line-through",
        color:"blue",
    }
    let stylesNew={
        fontWeight:"bold",
        color:"red",
    }
    let stylesOld={
        marginRight:"10px",
        backgroundColor:"#ffe75eff",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px",
        height:"20px",
        width:"180px",
    }

    return(
    <div className="price" style={stylesOld}>

    <span style={styles}> {oldPrice}</span>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <span style={stylesNew}> {newPrice}</span>

    </div>
    
    
        
    )
}