import { useState } from "react"
import MenuStyle from "./../../styles/menuStyle"
import {Link} from "react-router-dom"
import logo from "../../assets/logoDark.png"


export default  function Menu(){
    const [navbar,setNavbar] = useState("navbar-links")
    const [mobileMenu,setMobileMenu] = useState("mobile-button")
    const [overButton,setOverButton] = useState("overButton disabled")
    function toogleNavbar(){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        navbar==="navbar-links"?setNavbar("navbar-links show"):setNavbar("navbar-links")
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        mobileMenu==="mobile-button"?setMobileMenu("mobile-button isOpen"):setMobileMenu("mobile-button")
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        overButton==="overButton"?setOverButton("overButton disabled"):setOverButton("overButton")
    }

    return (
        <MenuStyle>
            <div className="menu">
                <div className="logo">
                <img src={logo} alt="logoin dark mode" />
                </div>
                <ol className={navbar}>
                    <li>
                        <Link to={'/leads'}>
                        Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                        Register
                        </Link>
                    </li><li>
                        <Link to={"/Login"}>
                        Login
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contatos"}>
                        Contatos
                        </Link>
                    </li>
                </ol>
                <div className={mobileMenu} onClick={()=>{
                    toogleNavbar()
                }}>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                </div>
                <button className={overButton} onClick={()=>{
                    toogleNavbar()}}></button>
            </div>
        </MenuStyle>
    )
}
