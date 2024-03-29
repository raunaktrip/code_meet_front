import React from "react";
import '../styles/newRoom.css'
import {v4 as uuidV4} from 'uuid'
import { useState } from 'react';
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
function NewRoom(){
  const navigate = useNavigate();
  const [roomId,setRoomId]= useState('');
  const [userName,setuserName]= useState('');
  const createNewRoom=(e)=>{
       e.preventDefault(); 
       const id= uuidV4();
       setRoomId(id);
       toast.success('Created a new Room');
       
  }
  const copyRoomId=()=>{
    if(!roomId) {
      toast.error("Please create a room id first");
      return;
    }
    navigator.clipboard.writeText(roomId);
    toast.success("Room Id copied to clipboard");

  }
  const joinRoom=()=>{
    if(!(roomId && userName)){
      toast.error('Room Id and Username are required');
      return;
    }
    // Redirect
    navigate(`/editor/${roomId}`,{
      state:{
        userName
      }
    })

  }
    return (
      
        <>
        <div className="homePageWrapper">
          <div className="formWrapper">
            <h4 className="mainLabel">Paste Room Id</h4>
            <div className="inputGroups">
               <input className="inputBox" type ="text" placeholder="ROOM ID"
               onChange={(e)=>{setRoomId(e.target.value)}}
               value={roomId}
               ></input>
               <input className="inputBox" type ="text" placeholder="USERNAME"
                onChange={(e)=>{setuserName(e.target.value)} }
                value={userName}
               ></input>
               <div style={{display: "flex"}}>
               <button className="btn btn-copy-code" onClick={copyRoomId}>Copy RoomId</button>
               <button className="btn btn-join" onClick={joinRoom}>Join</button>
               </div>
               <span className="createInfo">
                  If you don't have an invite create a &nbsp;
                  <a onClick={createNewRoom} href="" className="createNewRoomBtn">new room</a>  
               </span>
            </div>
          </div>
          <footer>
            <h6>Made with love 💛 </h6>
        </footer>
        </div>
        </>
    );
}
export default NewRoom;