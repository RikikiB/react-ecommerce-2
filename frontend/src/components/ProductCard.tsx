
function ProductCard({addToCart}){
    return(
        <div data-testid="ProductCard" className="ProductCard">
        <img src="" alt="ProductImage"/>
        <div></div>
        <button onClick={()=>addToCart()} aria-label="Add To Cart">+</button>
        </div>
    ) 

};



export default ProductCard;
export {ProductCard};