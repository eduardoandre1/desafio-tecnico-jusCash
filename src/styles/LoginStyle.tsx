import styled from "styled-components";

const LoginStyle = styled.section`
height: max-content;
min-height: 100dvh;
width: 100dvw;
display: flex;
flex-direction: column;

.form{
    height: 80dvh;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 90dvw;
    margin: 0 auto;
    
}
.inputBlock{
    height: 10%;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.passwordBlock{
    position: relative;
}
.icon{
    all:unset;
    position: absolute;
    z-index: 1;
    display: flex;
    height: 20px;
    width: 20px;
    padding: 2px;
    right: 10px;
    top: 50%;
    cursor: pointer;
    
}
input{
    all: unset;
    width: calc(100% - 2px);
    height: 100%;
    border: 1px solid gray;
    border-radius: 2px;
    margin-top: 5px;
}
p{
    width: 100%;
    text-align: end;
    color: #001E5E;

}
span{
    color: red
}
label{
    color:darkblue;
    width: 100%;

}
.Submit{
    all:unset;
    background-color: #28BE60;
    border-radius: 2px;
    color: white;
    font-size: 1rem;
    margin: 35px auto 0 auto;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5%;
}
h1{
    font-size: 5rem;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    display: flex;
    color: #001E5E;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
img{
    height: 50%;
}
div{
    height: 15dvh;
    width: 100dvw;
    justify-content: center;
    align-items: end;
    display: flex;
    margin-bottom: 10dvh;
}
`

export default LoginStyle