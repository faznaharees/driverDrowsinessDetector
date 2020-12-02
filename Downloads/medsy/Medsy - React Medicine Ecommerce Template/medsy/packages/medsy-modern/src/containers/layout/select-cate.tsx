import CategoryCard from 'components/category-card';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import {
  ArrowButtonBase,
  ButtonGroupBase,
  NextButtonRadius,
  PrevButtonRadius,
} from 'components/utils/theme';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import { getProducts } from 'helpers/get-products';
import { getCategories } from 'helpers/get-categories';
import { useCategory } from 'contexts/category/use-category';

interface Props {
  data: any;
}
SwiperCore.use([Navigation]);
const breakpoints = {
  600: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 6,
  },
  1400: {
    slidesPerView: 8,
  },
  1900: {
    slidesPerView: 10,
  },
};
const SelectCategory = React.forwardRef(
  ({ data }: Props, ref: React.RefObject<HTMLDivElement>) => {
    const { category, setCategory } = useCategory();
    function handleCategoryClick(id) {
      if (category !== id) {
        setCategory(id);
      } else {
        setCategory('');
      }
    }
    return (
      <div  ref={ref}>
        <select style={{appearance:"none",MozAppearance:"none"}} className="h-12 pl-3 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7  border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900" onChange={(e)=>handleCategoryClick(e.target.value)}>
          {data?.map((current) => (
           
              <option className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 h-12 px-4 bg-gray-f7 h-12 pl-3 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7  border-transparent"
                value={current.id}
              >
                
           {current.name}
        
            </option>
          ))}
       </select>
      
      </div>
    );
  }
);

export default SelectCategory;
