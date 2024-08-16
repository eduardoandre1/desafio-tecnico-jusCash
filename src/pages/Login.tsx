import { useContext, useState } from "react"
import LoginStyle from "../styles/LoginStyle"
import { Link, useNavigate } from "react-router-dom"
import logo from "./../assets/logoLight.png"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import ServerPovider,{ServerType} from "../server.provider";
import Swal from "sweetalert2";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('password')
    const context:ServerType = useContext(ServerPovider)
    const navigate = useNavigate()
    async function SendLogin(email: string, password: string) {
        if (email === context.email && password === context.password) {
            Swal.fire({
                icon: "success",
                title: "Login Success",
                text: 'Você sera direcionado para a pagina principal ',
            })
            navigate('/leads')
        }
        if(email !== context.email) {
            Swal.fire({
                icon: "warning",
                title: "email não condiz com o registrado",
                text: `o email digitado não é o que você cadastrou que é o email: ${context.email}`,
            })
        }
        if(password !== context.password) {
            Swal.fire({
                icon: "warning",
                title: "senha não condiz com a senha registrada",
                text: `A senha  digitada não é a Senha Registrada: ${context.password}`,
            })
        }
    }
    return (
        <LoginStyle>
            <div className="title"><img src={logo} alt="clock with money'slogo" /></div>
            <div className="form">
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
                <p>
                    <Link to={'/'}>Não possui conta? Registrar-se</Link>{""}
                </p>
                <button className="Submit" type="submit" onClick={()=>{SendLogin(email,password)}}>Criar conta</button>
            </div>
        </LoginStyle>
    )
}