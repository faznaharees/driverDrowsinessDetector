import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import TermsPageContent from 'containers/term/terms';
import { getCategories } from 'helpers/get-categories';
import { getProducts } from 'helpers/get-products';

export default function FAQ({categories,elRef}) {
  return (
    <Layout  data={categories} ref={elRef} >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>Terms &amp; Condition</title>
      </Head>

      <div className="px-0">
        <TermsPageContent />
      </div>
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
