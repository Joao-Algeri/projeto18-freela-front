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
              
        //   setUser(userData);  
        //   navigate("/home")
        
    }
    return (
        <Content>
            <div className="page">
                <div className="title">Login</div>
                <div className="signIn-box">
                <div className="input-box">
                <form onSubmit={SendForm}>
                    <div className="input-title">E-mail</div>
                    <input required placeholder="Insira seu email" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
                    <div className="input-title" >Senha</div>
                    <input required placeholder="Insira sua senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
                    <button>ENTRAR</button>
                </form>
                <Link to="/signup">
                <div className="signup-title">Não possui conta? Cadastre-se!</div>                
                </Link>
                </div>
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
.signIn-box{
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 70%;
    border: 2px solid black;
    display:flex;
    align-items: center;
}
.input-box{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
}
.input-title{
    margin: 3% 0px 5px 0px;
}
input{
    box-sizing: border-box;
    width: 100%;
    height: 30px;
}
button{
    width:70%;
    height: 50px;
    margin:12% 15% 0% 15%;
}
.signup-title{
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
