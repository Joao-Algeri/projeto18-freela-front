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
        <form onSubmit={SendForm}>
                    <div>Foto</div>
                    <input required placeholder="Insira url da foto" type={"text"} name="url" value={form.url || ""} onChange={handleForm} />
                    <div>Descrição</div>
                    <input required placeholder="Insira a descrição" type={"text"} name="description" value={form.description || ""} onChange={handleForm} />
                    <button>ENTRAR</button>
                </form>
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
    width: 70%;
    height: 60%;
    border: 2px solid black;
}
`