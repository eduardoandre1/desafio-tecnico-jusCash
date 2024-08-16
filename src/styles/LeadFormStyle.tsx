import styled from "styled-components"
const LeadFormStyle = styled.div`
.overflow{
    background:rgb(0,0,0,0.7);
    width: 100dvw;
    height: 100dvh;
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 2;
}
h4{
    font-size: 1rem;
    margin-bottom: 1rem;
}
.LeadForm{
    background-color: white;
    width: 45%;
    height: 70%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
}
.close{
    display:none;
}
.titleForm{
    height: 15%;
    font-size: 2em;
    padding-left: 0.5em;
    margin-top: 1rem;
    
}
button{
    all: unset;
    position: absolute;
    right: 7px;
    top: 7px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
button:hover{
    background-color: darkred;
}
form{
    display: flex;
    flex-direction: column;
}
.inputText{
    width: 80%;
    height: 20px;
    margin-bottom: 9px;
    padding: 5px;
    margin-top: 5px;
}
p{
    font-size: 1rem;
    font-style: oblique;
    margin-bottom: 0.5rem;
}
`
export default LeadFormStyle