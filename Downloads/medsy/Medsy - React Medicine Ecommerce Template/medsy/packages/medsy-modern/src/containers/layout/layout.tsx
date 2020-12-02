import Footer from './footer';
import { Drawer, CartDrawer } from 'containers/drawer/drawer';
import React from 'react';
import Header from './header';
import { useRouter } from 'next/router';
import HeaderSearchLess from './header-searchless';
interface Props {
  data:any;
  children:any;
}
const Layout =  React.forwardRef(
  ({data,children}:Props, ref: React.RefObject<HTMLDivElement>) => {
    const router = useRouter();
    return (
  <main
    className="relative min-h-screen flex-grow "
    style={{
      minHeight: '-webkit-fill-available',
      WebkitOverflowScrolling: 'touch',
     
    }}
  >
  
    <Drawer />
    {/* <button onClick={()=>console.log(router.query)}>Click</button> */}
    {
      router.query.slug!==undefined ? <HeaderSearchLess  data={data} ref={ref}/> : <Header data={data} ref={ref}/>
    }
    
    <div className="flex flex-col w-full h-full flex-grow">
      <div className="pt-90px px-3 pb-50px flex-auto md:px-35px">
        {children}
      </div>
      <Footer />
    </div>
    <CartDrawer />
  </main>
)});

export default Layout;
