import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catlog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //GET ALL PRODUCTS DATA  
    agent.Catalog.list()
      .then(prod => setProducts(prod))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));    
  }, [])

  if (loading) return <LoadingComponent message='Please Wait' />

  return (
    <>
      <ProductList products={products} />
    </>
  )
}