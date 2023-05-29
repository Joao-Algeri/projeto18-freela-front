import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseForm } from "./UseForm";
import UserContext from "../contexts/UserContext";

export default function Signin() {
    const [form, handleForm] = UseForm({})
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();

    function Navigate(path){
        navigate(path)
    }
    function SendForm(event) {
        event.preventDefault();
        SigningIn()
    }
    function SigningIn() {
        console.log(form)
        Navigate("/home")
        // const promise = axios.post("", form)
        // promise.then(HandleSucess)
        // promise.catch(HandleError)
        
    }
    function HandleSucess(request) {
        // if () {   
        //   const userData={}

        //   setUser(userData);  

        //   navigate("/subscriptions/")      
        // }
        // else {
        //   const userData={}
        //   setUser(userData);  
        //   navigate("/home")
        // }
    }
    return (
        <Content>
            <div className="page">
                <div className="title">Login</div>
                <div className="input-box">
                <form onSubmit={SendForm}>
                    <div>E-mail</div>
                    <input required placeholder="Insira seu email" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
                    <div>Senha</div>
                    <input required placeholder="Insira sua senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
                    <button>ENTRAR</button>
                </form>
                <Link to="/signup">
                <div>Não possui conta? Cadastre-se!</div>                
                </Link>
                </div>
            </div>
        </Content>
    )

}
const Content=styled.div`
.page{ 
    margin-top: 10vh;   
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
    height: 100vh;
    width: 100vw;
}
.title{
    margin-top: 3vh;
    margin-bottom: 3vh;
    font-size: 30px;

}
.input-box{
    height: 60%;
    width: 70%;
    border: 2px solid black;    
}
.input{
    
}
`
