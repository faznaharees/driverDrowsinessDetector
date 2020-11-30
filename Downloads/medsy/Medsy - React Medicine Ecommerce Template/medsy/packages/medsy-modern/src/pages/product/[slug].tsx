import React from 'react';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import Button from 'components/button';
import Counter from 'components/counter';
import { Scrollbar } from 'components/scrollbar';
import ArrowLeft from 'assets/icons/arrow-left';
import { useRouter } from 'next/router';
import { getProducts } from 'helpers/get-products';

const ProductPage = (item) => {
    const [visibility, setVisibility] = React.useState(false);
const count =1;
const router = useRouter();
  return (
    <>
         <div className="flex flex-col w-full h-full">
      <div className="w-full flex justify-center relative px-30px py-20px">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
           onClick={()=>router.push('/')}
          aria-label="close"
        >
          <ArrowLeft />
        </button>

        <h2 className="font-bold text-24px m-0">Details</h2>
      </div>

      <Scrollbar className="details-scrollbar flex-grow">
        <div className="flex flex-col p-30px pt-0">
          <div className="flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px">
            <img src={item.image} alt={`${item.name}-img`} />
          </div>

          <div className="flex flex-col items-start mb-4">
            <span className="text-gray-900 font-semibold mb-2">
              Currency
              {item.price}
            </span>
            <span className="mb-3">{item.name}</span>
            <p className="flex items-center mb-5">
              <span className=" text-gray-500 text-11px capitalize">
                {item.type}
              </span>
              <span className="flex bg-gray-500 w-3px h-3px rounded mx-3" />
              <span className=" text-gray-500 text-11px">
                {item.quantity}{' '}
                {item.quantity > 1 ? 'pieces' : 'piece'}
              </span>
            </p>

            {visibility === true ? (
              <p className="my-5">{item.description}</p>
            ) : (
              ''
            )}

            {item.description && (
              <button
                className="font-semibold text-11px text-gray-800 mt-2 focus:outline-none"
                // onClick={toggleVisibility}
                aria-label="details"
              >
                {visibility === true ? 'Less Details' : 'More Details'}
              </button>
            )}
          </div>

          <div className="flex w-full flex-col">
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
          </div>
        </div>
      </Scrollbar>

      <div className="flex flex-col p-30px">
        {count > 0 ? (
          <Counter
            value={count}
            className="ml-auto w-full big"
            size="big"
            onIncrement={() => {
            //   addItem(item);
            }}
            onDecrement={() => {}
                // removeItem(item)
            }
          />
        ) : (
          <Button className="w-full big" onClick={()=> {}}>
            Add To Cart
          </Button>
        )}
      </div>
    </div>
    </>
  );
};
// export async function getServerSideProps({ params }) {

//   return {
//     props: {
      
//     },
//   };
// }
export default ProductPage;
