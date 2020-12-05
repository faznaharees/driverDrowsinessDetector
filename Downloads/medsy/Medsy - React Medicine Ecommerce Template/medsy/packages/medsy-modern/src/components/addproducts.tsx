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
import Button from './button';
interface Props {
  data: any;
}
const AddProducts = React.forwardRef(
  ({ data }: Props, ref: React.RefObject<HTMLDivElement>) => {
    const [category_value,setCatVal] = React.useState(1)
    const [name,setName] = React.useState(String);
    const [image,setImage] = React.useState(String);
    const [desc,setDescp] = React.useState(String);
    const [price,setPrice] = React.useState(Number);
    const temperature = ['Input','Output','Accuracy','Display/Interface','Range','Power','Features']
    const pressure = ['Output','Range','Accuracy','Power','Material']
    const onChangeTempintoArray = (thearray) => {
      let newarray = []
      thearray.map(item => newarray.push({key:item,value:""}))
      return newarray;
    }
    const array = [
      {id:1,name:"Temperature transmitter",inputs:onChangeTempintoArray(temperature)},
      {id:2,name:"Pressure transmitter",inputs:onChangeTempintoArray(pressure)},

      
    ]
   
    const onInputChange = (id,key,value) => {
      let inp = inputvalues
      inp[id].key= key
      inp[id].value = value
      setInputvalues(inp)
    }
    const [inputvalues,setInputvalues] = React.useState([{id:0,key:"",value:""},
    {id:1,key:"",value:""},{id:2,key:"",value:""},{id:3,key:"",value:""},{id:4,key:"",value:""},{id:5,key:"",value:""},{id:6,key:"",value:""}
    ,{id:7,key:"",value:""},{id:8,key:"",value:""},{id:9,key:"",value:""},{id:10,key:"",value:""}])

    
  const changeInputValues = () => {
    let newinput;
   
    newinput =inputvalues.filter(item => item.key!=="")
    // newinput.map(item => inputvalues.splice(item,1))
    console.log(newinput)
    return newinput
  }  

  const [text,setText] = React.useState('empty')
  const changetextToArray = (val) => {
    setText(val.split(','))
    let arr = val.split(',')
    console.log(arr)
  }

  const submitValue = async () => {
   
    let newinput = changeInputValues()

    const res = await fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category_ids:category_value,
        name:name,
        image:image,
        description:desc,
        price:price,
        listofitems:JSON.stringify(newinput)
        
      }),
    });
    if (res.status === 200) {
      console.log("success")
      alert('successfull')
      //clear
    } else {
      //error message
      console.log("error")
    }
  };
    return (
      <div>
          <select onChange={(e)=>setCatVal(parseInt(e.target.value))}>
            {data?.map((current) => (
            <option value={current.id}>{current.name}</option>
          ))}
          </select>
          <div> <input placeholder="Name"  onChange={(e)=>setName(e.target.value)}></input><br/></div>
          <div> <input placeholder="Image Link" onChange={(e)=>setImage(e.target.value)}></input><br/></div>
          <div> <input placeholder="Price" type="number" onChange={(e)=>setPrice(parseInt(e.target.value))}></input><br/></div>
          <div> <input placeholder="Description" onChange={(e)=>setDescp(e.target.value)}></input><br/></div>



            {array.map(arrayval => arrayval.id===category_value && arrayval.inputs.map(
              (item,index) =><div> <input placeholder={item.key} onChange={(e)=>onInputChange(index,item.key,e.target.value)}></input><br/></div>
            ))}
          
          <Button onClick={()=>submitValue()}>Submit </Button>

          <h2>Change text to Array</h2>
          <h6>Enter comma separated values</h6>
          <input type="text" placeholder="value" onChange={(e)=>setText(e.target.value)}/><br/>
          <h2> {JSON.stringify(text)}</h2><br/>
          
          <button onClick={()=>changetextToArray(text)}>Convert</button><br/>
      </div>
    );
  }
);

export default AddProducts;
