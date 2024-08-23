import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catlog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/Products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log('ERROROOEROEROE AMIT' + err))
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}