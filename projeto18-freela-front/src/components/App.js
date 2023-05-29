import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";
import UserContext from "../contexts/UserContext";

import User from "./User";
import Followers from "./Followers";
import Home from "./Home";
import SearchUsers from "./SearchUsers";
import NewPost from "./NewPost";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
import YouFollow from "./YouFollow";

export default function App() {
  const initState=[];
  const [user,setUser]=useState(initState)
  return (
    <Content>
      <BrowserRouter>
      <Navbar/>
      <UserContext.Provider value={{user,setUser}}>
      <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/followers" element={<Followers/>}/>
      <Route path="/youFollow" element={<YouFollow/>}/>
      <Route path="/users" element={<SearchUsers/>}/> 
      <Route path="/users/:id" element={<User/>}/>
      <Route path="/newPost" element={<NewPost/>}/>
      </Routes>     
      </UserContext.Provider>   
   </BrowserRouter>
   </Content>
  )
}
const Content=styled.div`

`