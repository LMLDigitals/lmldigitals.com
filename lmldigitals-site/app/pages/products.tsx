// app/products/page.tsx

import Head from 'next/head';

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products - My Website</title>
        <meta name="description" content="Products page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold text-center mt-12">Our Products</h1>
      </main>
    </div>
  );
};

export default Products;
