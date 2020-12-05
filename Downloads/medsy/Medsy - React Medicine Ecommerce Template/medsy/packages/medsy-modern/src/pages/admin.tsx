import React,{ useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import HeroBlock from 'containers/hero-block';
import Products from 'containers/products';
import CallToAction from 'containers/call-to-action';
import HowItWorks from 'containers/how-it-works';
import { useRefScroll } from 'helpers/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';
import { getProducts } from 'helpers/get-products';
import { getCategories } from 'helpers/get-categories';
import Categories from 'containers/categories';
import { useCategory } from 'contexts/category/use-category';
import AddProducts from 'components/addproducts';

export default function Admin({ products, categories }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const [login,setLogin] = React.useState(false)
  const { searchTerm } = useSearch();
  const { category } = useCategory();
  const [username,setusername] = React.useState('hello');
  const [pswd,setpswd] = React.useState('pswd')
  useEffect(() => {
    if (searchTerm || category) return scroll();
  }, [searchTerm, category]);
  const onSubmit = () => {
      username==="social@infohe.com" && pswd==="password@infohe.com" && setLogin(true)
  }
  return (
    <Layout data={categories} ref={elRef} >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>Medsy</title>
      </Head>

     {login===false && <div><h1>Login</h1>
      <input onChange={(e)=>setusername(e.target.value)} placeholder="Username"></input><br/>
      <input onChange={(e)=>setpswd(e.target.value)} placeholder="Password" type="password"></input><br/><br/>
      <button onClick={()=>onSubmit()}>Submit</button>
      </div>
}
        {login===true &&
        <div>
            <h1>Add data</h1>
            <AddProducts data={categories} ref={elRef} />

        </div>}
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const categories = await getCategories();

  return {
    props: {
      products,
      categories,
    },
  };
}
