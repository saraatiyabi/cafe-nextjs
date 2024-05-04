import React from 'react'
import styles from "@/styles/product.module.css";
import WithNavigation from '@/components/HOC/WithNavigation';
import ProductDetails from '@/components/templates/Product/ProductDetails';
import ProductComments from '@/components/templates/Product/ProductComments';

const Product = ({ data }) => {
  const { productData, productComments } = data;
  console.log(productComments)
  return (
    <div className={`${styles.product} w-full flex justify-center items-center flex-col `}>
      <ProductDetails {...productData} />
      <div className='bg-light w-full flex justify-center items-center'>
        <ProductComments productComments={productComments} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/menu")
  const products = await res.json();

  const paths = products?.map(product => ({ params: { id: String(product.id) } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  const navbarRes = await fetch("http://localhost:4000/menuItems")
  const productRes = await fetch(`http://localhost:4000/menu/${params.id}`);
  const commentRes = await fetch("http://localhost:4000/clients");

  const commentData = await commentRes.json()
  console.log("comments", commentData)
  const productComments = commentData.filter(comment => comment.productId == params.id)
  console.log("productsComments", productComments)
  const productData = await productRes.json();
  const navbarItems = await navbarRes.json();

  return {
    props: {
      data: {
        productData,
        navbarItems,
        productComments
      },
      revalidate: 12 * 60 * 60
    }
  }
}

export default WithNavigation(Product);