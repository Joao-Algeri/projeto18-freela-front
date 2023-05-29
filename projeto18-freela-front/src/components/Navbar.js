import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Navbar(){
    const [searchName,setSearchName]=useState("")
    const navigate=useNavigate();
    function Navigate(path){
        navigate(path)
     }
    // const setSearchName=setSearchName

    const SearchName=(e)=>{
        setSearchName({...searchName, [e.target.name]: e.target.value});
        // console.log(searchName)
        // navigate("/users")
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            navigate("/users")
            setSearchName("")
        }
    }
    return(
        <Content>           
            <div onClick={()=>Navigate("/home")} className="name">Fomebook</div> 
                    
            <input placeholder="Buscar" name="name" type="text" value={searchName.name || ""}  onChange={SearchName} onKeyDown={handleKeyDown} />
            
            
        </Content>
    )
}
const Content=styled.div`
display: flex;
align-items:center;
position: fixed;
top:0px;
left:0px;
height: 10vh;
width: 100vw;
border: 2px solid black;

.name{
    margin-left: 1%;
}
input{
    margin-left: 20%;
    height: 20%;
    width: 30%;
}
`
