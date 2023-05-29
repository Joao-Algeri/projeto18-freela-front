import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseForm } from "./UseForm";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
export default function NewPost() {
    const [form, handleForm] = UseForm({})
    const navigate=useNavigate();

    function SendForm(event) {
        event.preventDefault();
        CreatePost()
    }
    function CreatePost(){
        navigate("/home")
    }
  return (
    <Content>
      <div className="page">
        <div className="title">Novo Post</div>
        <div className="post-box">
        <div className="input-box">
        <form onSubmit={SendForm}>
                    <div  className="input-title">Foto</div>
                    <input className="input1" required placeholder="Insira url da foto" type={"text"} name="url" value={form.url || ""} onChange={handleForm} />
                    <div className="input-title">Descrição</div>
                    <input  className="input2" required placeholder="Insira a descrição" type={"text"} name="description" value={form.description || ""} onChange={handleForm} />
                    <button>Criar post</button>
                </form>
        </div>
        </div>
      </div>

   </Content>
  )
}
const Content=styled.div`
.page{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    height: 100vh;
    background-color: lightgrey;
}
.title{
    font-size: 35px;
    margin-top: 5vh;
    margin-bottom: 5vh;
}
.post-box{
  display: flex;
  flex: column;
  justify-content: center;
    width: 70%;
    height: 60%;
    border: 2px solid black;
}
.input-box{
  margin-top: 5%;
  width: 90%;
}
.input-title{
  margin: 15px 0px 5px 0px;
}
input{
  box-sizing: border-box;
  height: 35px;
  width: 100%; 
}
.input2{
  
  height:100px;
}
button{
  width: 60%;
  height: 50px;
  margin: 20% 20% 0px 20%
}
`