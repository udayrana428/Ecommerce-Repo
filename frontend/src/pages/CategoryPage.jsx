import React, { createFactory, useState,useEffect } from "react";
import Annoucne from "../components/Annoucne";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { listProducts } from "../action/productActions";
import {useSelector,useDispatch} from "react-redux"
import {Search} from "@material-ui/icons"
const CategoryPage = () => {
    const dispatch=useDispatch()
    const listProductsReducer=state=>state.listProductsReducer
    const {products,loading,error}=listProductsReducer || {}

  const [category, setcategory] = useState("");
  const [sortOrder, setsortOrder] = useState("");
  const [searchKeyword, setsearchKeyword] = useState("");
  const sortHandle = (e) => {
    e.preventDefault()
    setsortOrder(e.target.value);
  };
  const categoryHandle = (e) => {
    e.preventDefault()
    setcategory(e.target.value);
  };
  const searchHandle=(e)=>{
    e.preventDefault()
    setcategory("")
    setsortOrder("")
    setsearchKeyword(e.target.value)
  }
  useEffect(() => {
    const timeout=setTimeout(() => {
      dispatch(listProducts(category,searchKeyword,sortOrder))
    }, 500);
  
    return () => clearTimeout(timeout)
  }, [category,sortOrder,searchKeyword])
  
  return (
    <div>
      <Annoucne />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's</h1>
        <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] ">
            <input
              value={searchKeyword}
              type="search"
              className="border-none w-[100%] p-1 mr-1"
              placeholder="Search"
              onChange={searchHandle}
            />
            <Search className="text-[#8a4af3]" style={{ fontSize: "25px"}} />
          </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select
              className="ml-3 border-2 border-silver mobile:ml-0"
              onChange={categoryHandle}
            >
              <option selected disabled>
                Category
              </option>
              <option value={"smartphones"}>Smartphones</option>
              <option value={"electronics"}>Electronics</option>
              <option value={"fashion"}>Fashion</option>
              <option value={"homeappliances"}>Home Appliance</option>
              <option value={"sports"}>Sports</option>
            </select>
            {/* <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Color</option>
                      <option>Yellow</option>
                      <option>Blue</option>
                      <option>Red</option>
                      <option>Green</option>
                  </select> */}
          </div>
          <div className="flex mobile:flex-col mobile:items-end">
            <p>Sort by</p>
            <select
              className="ml-3 border-2 border-silver"
              onChange={sortHandle}
            >
              <option value={"lowest"}>Lowest</option>
              <option value={"highest"}>Highest</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
