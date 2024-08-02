import { useState } from "react"
import { BoardContext } from "../context/BoardContext"
import Header from "./Header"
import Main from "./Main"
import Sidebar from "./SideBar"



const Browse = () => {
    const boardData = {
        active:0,
        boards:[
          {
            name:'My Trello Board',
            bgcolor:'#069',
            list:[
              {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
              {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
              {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
            ]
          }
        ]
      }
      const [allboard,setAllBoard] = useState(boardData); 
      
      return (
        <>
        <Header></Header>
        <BoardContext.Provider value={{allboard,setAllBoard}}>
          <div className='content flex'>
            <Sidebar></Sidebar>
            <Main></Main>
          </div>
        </BoardContext.Provider>
        </>
      )
}

export default Browse