import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { listProducts } from "../action/productActions";
const Category = ({ item }) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const categ=item.category
  const category=categ
  const handleClick=()=>{
    dispatch(listProducts())
    setTimeout(() => {
      navigate('/category')
    }, 1000);
  }
  return (
    <div className="w-[25rem] mobile:w-[100%] m-2 mobile:m-0 shadow-lg rounded-md overflow-hidden relative">
      <img src={item.src} className="w-[100%]" alt="category_img" />
      <div className="transition-all duration-500 ease-in-out hover:bg-black hover:bg-opacity-50 flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-[30px]">{item.title}</h2>
        <div className="btn">
          <div className="cursor-pointer" onClick={handleClick}>See more</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
