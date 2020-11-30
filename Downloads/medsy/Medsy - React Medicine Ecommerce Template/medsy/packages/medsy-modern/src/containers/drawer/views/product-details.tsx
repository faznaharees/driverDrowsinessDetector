import React, { useState, useContext } from 'react';
import { Scrollbar } from 'components/scrollbar';
import Button from 'components/button';
import { CURRENCY } from 'helpers/constants';
import { useCart } from 'contexts/cart/cart.provider';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import ArrowLeft from 'assets/icons/arrow-left';
import Counter from 'components/counter';
import Link from 'next/link';

export default function ProductDetails({item}) {
  const [visibility, setVisibility] = useState(false);
  const { addItem, getItem, removeItem } = useCart();
  const { state, dispatch } = useContext(DrawerContext);

  const count = getItem(item.id)?.quantity;

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  

  const addToCart = () => {
    addItem(item);
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true,
      }});
      dispatch({
        type: 'SLIDE_CART',
        payload: {
          open: true,
        },
      });

  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex justify-center relative px-30px py-20px">
        
        <Link href="/"><button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          
          aria-label="close"
        >
          <ArrowLeft />
        </button>
        </Link>
        <h2 className="font-bold text-24px m-0">{item.name}</h2>
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-row p-30px pt-0 pb-0">
          <div className="flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px">
            <img src={item.image} alt={`${item.name}-img`} />
          </div>

          <div className="flex w-full relative h-360px flex-col  p-30px pt-0 pb-0">
          <div className="flex">

          <h2 className="font-bold text-16px m-0">DETAILS</h2>
          </div>
            {item.description}
          <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-16px mb-2">Price</span>
              <span className="font-normal text-15px text-gray-900 capitalize">
             <b> {CURRENCY}  {item.price}</b>
              </span>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="flex flex-col pt-30px">
        {/* {count > 0 ? (
          <Counter
            value={count}
            className="ml-auto w-full big"
            size="big"
            onIncrement={() => {
              addItem(item);
            }}
            onDecrement={() => removeItem(item)}
          />
        ) : (
          <Button className="w-full big" onClick={addToCart}>
            Add To Cart
          </Button>
        )} */}
       
      </div>
            {/* <p className="flex items-center mb-5">
              <span className=" text-gray-500 text-11px capitalize">
                {item.type}
              </span>
              <span className="flex bg-gray-500 w-3px h-3px rounded mx-3" />
              <span className=" text-gray-500 text-11px">
                {item.quantity}{' '}
                {item.quantity > 1 ? 'pieces' : 'piece'}
              </span>
            </p>

            
            {item.description} */}
            <div className=" bottom-0 w-full flex flex-col align-baseline mb-0">
           <Button className="w-full  align-baseline big" onClick={addToCart}>
            Add To Cart
          </Button>  
          </div>
          </div>

          {/* <div className="flex w-full flex-col p-30px">
            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">Dosages Form</span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {item.type}
              </span>
            </div>

            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">Dosages</span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {item.dosage}
              </span>
            </div>

            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">
                Active Substance
              </span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {item.substance}
              </span>
            </div>

            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">Manufacturer</span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {item.manufacturer}
              </span>
            </div>
          </div> */}
        </div>
      </div>
              <br/>
     
    </div>
  );
}
