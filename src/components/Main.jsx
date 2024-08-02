import { BiUserPlus } from "react-icons/bi"
import { FiEdit2, FiMoreHorizontal } from "react-icons/fi"
import AddCard from "./AddCard"

const Main = () => {
  return (
    <div className="flex flex-col bg-slate-900 text-gray-200 w-full ">
       <div className="p-3   border flex justify-between w-full opacity-50">
        <h2 className="text-lg font-bold pl-4">My Trello Board</h2>
        <div className="flex items-center justify-center">
          <button className="bg-white h-8 text-gray-900 hover:shadow-lg px-2 py-1 mr-2 rounded flex justify-center items-center">
           <BiUserPlus className="mr-2 h-8 " size={16}/> Share</button>
          <button className="mr-2 hover:bg-gray-500 px-2 py-1 h-8 rounded">
            <FiMoreHorizontal size={16} />
          </button>
        </div>
       </div>


       <div className="flex flex-col w-full flex-grow relative">
        <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden">
       
        <div className="mr-3 w-60 h-fit rounded-md p-2 bg-black flex-shrink-0">
          <div className="list-body">
          <div className="flex justify-between p-1">
            <span>Todo</span>
            <button><FiMoreHorizontal className="hover:bg-gray-500  rounded-sm" size={16}/></button>
          </div>

          <div className="item flex justify-between items-center bg-zinc-400 p-1 cursor-pointer rounded-lg border border-zinc-900 hover:border-gray-500">
            <span>Project Description</span>
            <span className="flex justify-start items-start p-1">
              <button><FiEdit2 className="hover:bg-gray-600  rounded-sm" size={16} /></button>
            </span>
          </div>

            <AddCard />

          </div>
        </div>

        </div>
       </div>
    </div>
  )
}

export default Main