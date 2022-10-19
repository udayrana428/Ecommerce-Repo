import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { detailsProduct } from "../action/productActions";
import {addToCart} from '../action/cartActions'
import { useDispatch } from "react-redux";

const Product = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  const [disable, setdisable] = useState(false);
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  const dispatch = useDispatch();
  const productId=product._id
  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }
  const handleAddToCart=()=>{
    dispatch(addToCart(productId))
  }
  return (
    <div
      className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg mobile:max-w-[15rem] mobile:max-h-[14rem] mobile:min-w-[7rem] mobile:min-h-[7rem] relative box-border"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={product.image} className="max-w-[10rem]" alt="product" />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle} onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <button
          disabled={disable}
          className={iconStyle}
          onClick={() => {
            console.log('hello')
            setdisable(true);
            dispatch(detailsProduct(product._id));
            localStorage.setItem("productId", product._id);
            setTimeout(() => {
              navigate("../product");
            }, 1500);
          }}
        >
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
};

export default Product;
