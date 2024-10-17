import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const idOfProduct = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${props.params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${idOfProduct}`,
  };
};

// return {
//   title: {
//     absolute:`Product ${idOfProduct}`,
//   }
// };

const ProductDetails = (props: {
  params: { productId: string; seller: string };
}) => {
  //   {
  //     console.log("params", params);
  //   }
  if (
    parseInt(props.params.productId) > 100 ||
    Number.isNaN(parseInt(props.params.productId))
  ) {
    notFound();
  }

  return (
    <div>
      <h1>ProductDetails : </h1>
      <h2>Product Name : {props.product.productName}</h2>
      <span>Seller : </span>{" "}
      <Link
        href={`/products/${props.params.productId}/${props.params.seller}`}
        replace
      >
        Seller details
      </Link>
    </div>
  );
};

export default ProductDetails;
