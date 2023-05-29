import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UseForm } from "./UseForm";

export default function Signup() {

    const [form, handleForm] = UseForm({})
    const navigate = useNavigate();
    function SendForm(event) {
      event.preventDefault();
      SigningUp()
    }
    function SendForm(e) {
        console.log(e)
        e.preventDefault();
        SigningUp()
      }
      function SigningUp() {
        console.log(form)
        const newForm = [{  name: form.name,email: form.email, image: form.url, biography: form.bio,password:form.password }]
        console.log(newForm)
        // const promise = axios.post("", newForm[0])
        // promise.then(HandleSucess)
        // promise.catch(HandleError)
        navigate("/home")
      }
      function HandleSucess() {
        navigate("/home")
      }
      function HandleError() {
        alert("Ocorreu um problema, tente mais tarde")
      }
  return (
    <Content>
        <div className="page">
            <div className="title">Cadastro</div>
            <div className="signup-box">
            <form onSubmit={SendForm}>
                <div className="signup-title" >Nome</div>
                <input required placeholder="Insira seu nome" type={"name"} name="name" value={form.name || ""} onChange={handleForm} />
                <div className="signup-title">E-mail</div>
                <input required placeholder="Insira seu E-mail" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
                <div className="signup-title">Foto de perfil</div>
                <input required placeholder="Insira url de imagem" type={"text"} name="url" value={form.url || ""} onChange={handleForm} />
                <div className="signup-title">Biografia (ate 200 caracteres)</div>
                <input required placeholder="Insira bio" type={"text"} name="bio" value={form.bio || ""} onChange={handleForm} />
                <div className="signup-title">Senha</div>
                <input required placeholder="Insira sua senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
                <div className="signup-title">Confirme</div>
                <input required placeholder="Insira novamente sua senha" type={"password"} name="newPassword" value={form.newPassword || ""} onChange={handleForm} />
                <button>CADASTRAR</button>
      </form>
            <Link to="/">
            <div>Já é cadastrado? Entre!</div>
            </Link>
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
    font-size: 42px;
    margin-top: 5vh;
    margin-bottom: 5vh;
}
.signup-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:70%;
    height: 60%;
    border:2px solid black;
}
input{
    margin-left: 5%;
}
.signup-title{
    margin-left:5%;
}
button{
    margin-top: 1%;
}
`
