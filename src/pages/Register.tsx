import { useState } from "react"
import LoginStyle from "../styles/LoginStyle"
import { Link } from "react-router-dom"
import logo from "./../assets/image.png"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [type, setType] = useState('password')

    return (
        <LoginStyle>
            <div><img src={logo} alt="clock with money'slogo" /><h1>JustCash</h1></div>
            <form>
                <div className="inputBlock">
                    <label htmlFor="name">Seu nome completo:<span>*</span></label>
                    <input type="text" id="name" name="name" value={name} onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div className="inputBlock">
                    <label htmlFor="email">Email:<span>*</span></label>
                    <input type="email" id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="inputBlock passwordBlock">
                    <label htmlFor="password">Senha:<span>*</span> </label>
                    <input type={type} id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    <div className="icon" onClick={() => { setType(type === "password" ? 'text' : 'password') }}>
                        {type === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>
                <div className="inputBlock passwordBlock">
                    <label htmlFor="confirmPassword">Confirme sua Senha:<span>*</span> </label>
                    <input type={type} id="password" name="confirmPassword" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
                    <div className="icon" onClick={() => { setType(type === "password" ? 'text' : 'password') }}>
                        {type === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>
                <p>
                    <Link to={'/Login'}>Já possui uma conta? fazer login</Link>{""}
                </p>
                <button className="Submit" type="submit">Criar conta</button>
            </form>
        </LoginStyle>
    )
}