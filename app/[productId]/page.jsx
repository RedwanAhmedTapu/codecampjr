// "use client"
import { useRouter } from 'next/navigation';
const Product = () => {
    const router=useRouter();
    // const pageNumber=router.query.productId;
  return (
    <div>{pageNumber}</div>
  )
}

export default Product;