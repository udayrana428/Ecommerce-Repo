import React from "react";
import { Send } from "@material-ui/icons";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]">
      <h1 className="text-[30px] font-bold">Contact Us</h1>
      <h2 className="text-[20px] mobile:text-center mobile:p-3">
        Always in touch with us, for your favourite Products.
      </h2>
      <div className="flex flex-col item-center justify-between min-w-[30rem] min-h-[2rem] border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        <input
          className="border-none pl-[20px] m-1 flex-[8]"
          type="text"
          placeholder="name"
        />
        <input
          className="border-none pl-[20px] m-1 flex-[8]"
          type="email"
          placeholder="email"
        />
        <textarea
          name=""
          className="border-none pl-[20px] m-1"
          placeholder="your message"
          id=""
          cols="10"
          rows="5"
        ></textarea>
        <button className="bg-[#4caf50] flex-1">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
