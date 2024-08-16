import styled from "styled-components";

const MenuStyle = styled.header`
width: 100dvw ;
background: #010028;
position: fixed;
z-index: 15;
top: 0;
h1{
  display: flex;
  text-align: center;
  align-items: center;
  font-size: clamp(0.5em, 2px + 3vw, 1.5em);
  color:  white;
  margin-left: 1dvw;
  font-family: "Rubik Mono One";
}
.logo{
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 100%;
}
img {
  height:2.5em;
  width: min-content;
  border-radius: 50%;
  overflow: hidden;
  border-style: groove;
  border: 3px solid lightblue;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 90dvw;
  margin: 0 auto;
  padding: 16px;
}

.navbar-links {
  display: flex;
  gap: 16px;
}

li {
  color: white;
  font-size: 15px;
  font-family: 'Inter', Courier, monospace;

  transition: color 0.1s;
}

li.active,
li:hover {
  color: #FFFFFD;
}

li a{
  all: unset;
  padding: 8px;
}
.overButton{
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 0.2;
  z-index: 2;
}
.disabled{
  display: none;
}
@media (min-width: 960px) {
    .mobile-button {display: none;}
}
@media (max-width: 960px) {  
  .navbar-links {
    opacity: 0;
    transform: translateY(-140%);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    flex-direction: column;
    background-color: black;
    box-shadow: rgb(0 0 0 / 75%) 0px 13px 30px -12px;
    gap: 0;
    z-index: -1;
  
    transition: 0.5s;
  }

  .navbar-links.show {
    opacity: 1;
    top: 100%;
    transform: translateY(0);
    z-index: 3;
    margin-top: 8px;
  }

  .navbar-links li {
    text-align: center;
  }

  .navbar-links li a {
    line-height: 40px;
    width: 100%;
    display: block;
  }

  .mobile-button {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .mobile-button:hover{
    transform: scale(1.2);
  }

  .mobile-button-line {
    width: 24px;
    height: 3px;
    background: #e1e1e6;
    transition: 0.3s;
  }
  .mobile-button.isOpen .mobile-button-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-button.isOpen .mobile-button-line:nth-child(2) {
    opacity: 0;
  }

  .mobile-button.isOpen .mobile-button-line:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }
  .menu-overlay {
    position: unset;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .menu-overlay.show {
    position: fixed;
  }

}
`
export default MenuStyle