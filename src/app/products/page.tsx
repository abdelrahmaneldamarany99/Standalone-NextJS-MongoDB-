import ProductDetails from "./[productId]/page";

type Product = {
  id: number;
  productName: string;
  seller: string;
};

const getProducts = async () => {
  const response = await fetch("@/productsData.json");
  const products = await response.json();
  return products;
};

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: Product) => {
          <li key={product.id}>
            <ProductDetails product={product} />
          </li>;
        })}
      </ul>
      <br />
    </div>
  );
};

export default Products;
