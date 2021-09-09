
function ProductCard({addToCart}: any){
    return(
        <div data-testid="ProductCard" className="ProductCard">
        <img src="" alt="ProductImage"/>
        <div data-testid="price"></div>
        <button onClick={()=>addToCart()} aria-label="Add To Cart">+</button>
        </div>
    ) 

};



export default ProductCard;
export {ProductCard};