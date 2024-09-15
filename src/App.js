import './App.css';
import {useState} from "react";
import FurnitureItem from "./FurnitureItem";
import furnitures from "./furnitures";
import clsx from "clsx";

const App = () => {

  const [index, setIndex] = useState(0);
  const PAGE_SIZE = 5;
  const buttons = [];
  const buttonNumber = Math.ceil(furnitures.length/PAGE_SIZE);
 
  for(let i = 0; i<buttonNumber ; i++){
    buttons.push(<button
                   className={clsx("w-4 m-1 border border-rose-600 text-white ",index === i ? "bg-rose-400": "bg-stone-400")}
                   onClick={()=>setIndex(i)}
                   key={i}  >{i+1}</button>)
  }


  const furnitureItems = furnitures
    .slice(index*PAGE_SIZE ,   PAGE_SIZE*(index+1) )
    .map((furniture, idx) => (
    <FurnitureItem furniture={furniture} key={idx} />
  ));

  console.log(furnitureItems)
  
  return (
    <div className="flex flex-col items-center py-64 bg-stone-100">
      
      
      
      <div className="mx-4 mb-10 text-4xl text-stone-600 ">Autumn's Fabulous Furniture</div>

      <div className="flex justify-end border-b-2 border-black px-8 w-full max-w-3xl " >{buttons}</div>
      
      <div className="w-full max-w-2xl">{furnitureItems}</div>
    </div>
  );
};

export default App;
