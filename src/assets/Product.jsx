import "./Product.css";
import Price from "./Price.jsx";
import Description from "./Description.jsx";
function Product({ title, idx }) {
    let oldPrice = ["3599", "8999", "1999", "2499"];
    let newPrice = ["1999", "5999", "999", "1499"];
    let description = [
        ["8000 Dpi,"," 5 Programmable Buttons"],
        ["Intuitive touch surface", "Designed for ipad-pro"],
        ["black color", "1stfor PC/PS4/Android"],
        [" 1000 DPI, RGB Lighting", "USB-C Rechargeable"]
    ];
    return (
        <div className="Product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}
export default Product;
