import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Followers() {
    const navigate=useNavigate()
    function Navigate(path){
        navigate(path)
    }
  return (
    <Content>
        <div className="page">
        <div className="title">Meus seguidores</div>
        <div className="follower-box">
            <div onClick={()=>Navigate("/users/1")} className="follower">
            <img className="user-image" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="user photo"/>
            <div className="user-Info-box">
                <div>Ciclano de Tal</div>
                <div>Descricao de usuario</div>
            </div>
            </div>
            <div onClick={()=>Navigate("/users/1")} className="follower">
            <img className="user-image" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="user photo"/>
            <div className="user-Info-box">
                <div>Ciclano de Tal</div>
                <div>Descricao de usuario</div>
            </div>
            </div>
            <div onClick={()=>Navigate("/users/1")} className="follower">
            <img className="user-image" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="user photo"/>
            <div className="user-Info-box">
                <div>Ciclano de Tal</div>
                <div>Descricao de usuario</div>
            </div>
            </div>
            <div onClick={()=>Navigate("/users/1")} className="follower">
            <img className="user-image" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="user photo"/>
            <div className="user-Info-box">
                <div>Ciclano de Tal</div>
                <div>Descricao de usuario</div>
            </div>
            </div>
        </div>
        </div>
      
   </Content>
  )
}
const Content=styled.div`
.page{
    margin-top:10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: lightgrey;
}
.title{
    margin-top:5vh;
    margin-bottom:5vh;
    font-size: 42px;
}
.follower-box{
    width: 70%;
}
.follower{
    margin-bottom: 2vh;
    display:flex;
    align-items: center;
    width: 100%;
    height: 15vh;
    border:2px solid black;

}
img{
    height: 70%;
    border-radius: 50%;
    border:2px solid black;
    margin: 0% 5% 0% 5%;
}
`