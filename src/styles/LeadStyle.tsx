import styled from "styled-components";

const LeadStyle = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100dvh;
 width: 100dvw;
 margin-top: 60px;
 align-items: center;
 align-content: center;
 .title{
    display: flex;
    width: 60dvw;
    justify-content: flex-start;
    height: 15%;
 }
 .logo{
    width: 95%;
 }
 .button{
    all: unset;
    background-color: #2797B9;
    color: white;
    width: 20%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    height: 30px;
    border-radius: 4px;
 }
 .button:hover{
    transform: scale(1.4);
 }
 .space{
    width: 60dvw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-bottom: 2%;
    padding-top: 2%;
 }
 
 .selectCell{
    cursor: grab;
    span:hover{
    text-decoration: underline;
    color: #001E5E;
    z-index: 3;
    }
 }
 table {
    width: 60dvw;
    border: 2px solid #ddd;
    .withoutBorder{
        border: transparent
    }
        }
        th, td {
            padding: 8px;
            text-align: left;
            
            
        }
        th {
            background-color: #f2f2f2;
            color: black;
            grid-column: auto;
            justify-content: center;
            display: flex;
            

        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #ddd;
        }
        tr{
            width: 100%;
        }
        .tdTitle{
            border: 2px solid #ddd;
        }
`
export default LeadStyle