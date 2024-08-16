import styled from "styled-components";

const LeadStyle = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100dvh;
 width: 100dvw;
 margin-top: 60px;
 align-items: center;
 align-content: center;
.flex-start{
    justify-content: flex-start;
}
.center{
    justify-content: center;
    display: flex;
}
.flex-end{
    justify-content: flex-end;
}
 .title{
    display: flex;
    width: 100%;
    justify-content: center;
    height: 15%;
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

h2{
    font-size: 4rem;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    display: flex;
    color: #001E5E;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
 .space{
    width: 80dvw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-bottom: 2%;
    padding-top: 2%;
 }
 table {
    width: 80dvw;
        }
        th, td {
            border: 1px solid #ddd;
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
`
export default LeadStyle