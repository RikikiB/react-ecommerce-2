type Product = {
  price: number;
  name: string;
  description: string;
};
interface iProductCard {
  addToCart?: Function;
  product: Product;
}
function ProductCard({ addToCart, product }: iProductCard) {
  return (
    <div data-testid="ProductCard" className="ProductCard">
      <img src="" alt="ProductImage" />
      <div title="productName">Title</div>
      <div data-testid="price">{product?.price}</div>
      <div data-testid="description">description</div>
      <button
        onClick={() => {
          if (typeof addToCart === "function") {
            addToCart();
          }
        }}
        aria-label="Add To Cart"
      >
        +
      </button>
    </div>
  );
}

export default ProductCard;
export { ProductCard };
