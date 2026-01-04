import Product from "./Product.jsx";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"centerr",
        alignItems:"center",
        borderRadius:"25px",
        
    }
    return(
    <div style={styles}>
    <Product title="Logitech MS Master 3x" idx={0}/>
    <Product title="Apple Pencil (2nd Gen)" idx={1}/>
    <Product title="Zebronics ZEb-Controller" idx={2}/>
    <Product title="PortTronics Wireless Mouse" idx={3}/>
    </div>
    )
}
export default ProductTab;