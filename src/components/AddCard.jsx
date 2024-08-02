import React, { useState } from "react";
import { BiPlus, BiX } from "react-icons/bi";

const AddCard = () => {
  const [show, setShow] = useState(false);
  const [card, setCard] = useState("");
  return (
    <div className="flex flex-col">
     {show && <div>
        <textarea
          className="p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900"
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Enter Card Title..."
        ></textarea>
        <div className="flex p-1">
          <button className="bg-sky-400 text-white p-1 rounded">
            {" "}
            Add Card
          </button>
          <button>
            <BiX  onClick={() => setShow(!show)} size={28} className="ml-2  rounded hover:bg-gray-600" />
          </button>
        </div>
      </div>}

      {!show &&<button onClick={() => setShow(!show)} className="flex w-full justify-start p-1 hover:bg-gray-500 h-8 rounded mt-1">
        <BiPlus size={24} /> Add a card{" "}
      </button>}
    </div>
  );
};

export default AddCard;
