
function ProductCard({addToCart}: any){
    return(
        <div data-testid="ProductCard" className="ProductCard">
        <img src="" alt="ProductImage"/>
        <div title="productName">Title</div>
        <div data-testid="price"></div>
        <div data-testid='description'>description</div>
        <button onClick={()=>addToCart()} aria-label="Add To Cart">+</button>
        </div>
    ) 

};



export default ProductCard;
export {ProductCard};