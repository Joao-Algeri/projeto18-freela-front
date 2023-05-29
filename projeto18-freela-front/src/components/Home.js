import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate=useNavigate();
    function Navigate(path){
        navigate(path);
    }
  return (
    <Content>
      <div className="page">
        <div className="user-box">
            <img className="user-image" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="user photo"/>
            <div className="user-info">
            <div className="user-name">Nome da pessoa</div>
            <div className="user-bio">Biografia da pessoa</div>
            <div className="user-buttons">
            <div onClick={()=>Navigate("/followers")}className="user-button">ver seguidores</div>
            <div onClick={()=>Navigate("/youFollow")}className="user-button">ver quem eu sigo</div>
            </div>
            </div>
        </div>
        <div className="posts">
            <div className="post">
                <img className="post-img" src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt="placeholder"/>
                <div className="post-details">
                <img className="heart-icon" src="https://cdn-icons-png.flaticon.com/512/105/105220.png" alt="heart"/>
                <div>22 pessoas curtiram sua foto!</div>
                <div>22/02/22 às 22:22</div>
                </div>
                <div>Descricao do post</div>
            </div>
        </div>
        <img onClick={()=>Navigate("/newpost")} className="create-post-icon" src="https://cdn-icons-png.flaticon.com/512/32/32360.png" alt="create post"/>
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
    height:100vh;
    width: 100vw;
    background:lightgrey;
}
.user-box{
    margin-top: 5vh;
    width: 70%;
    height: 20vh;
    border: 2px solid black;

}
.user-box{
    display:flex;
    align-items: center;    
}
.user-box>img{
    height: 70%;
    margin:5% 5% 5% 5%;
    border-radius: 50%;
    border:2px solid black;
}
.user-info{
    margin-left: 5%;
    width: 60%;
}
.user-buttons{
    display: flex;    
}
.user-button{
 margin-top: 4%;
 border: 2px solid black;
 width: 40%;
 margin-right: 15%;
}
.posts{
    width: 70%;    
}
.post{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    width: 100%;
    height: 60vw;
    border: 2px solid black;
}
.post-img{
    margin-top: 2%;
    height: 70%;
    width: 95%;
}
.post-details{
    display: flex;
    justify-content: space-around;
}
.heart-icon{
    height: 10px;
}
.create-post-icon{
    width: 40px;
    position: fixed;
    bottom:30px;
    right:30px;
}
`
