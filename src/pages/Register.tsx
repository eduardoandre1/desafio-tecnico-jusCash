import { useContext, useState } from "react"
import LoginStyle from "../styles/LoginStyle"
import { Link, useNavigate } from "react-router-dom"
import logo from "./../assets/image.png"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import ServerPovider, {ServerType} from "../server.provider";

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [type, setType] = useState('password')
    const navigate = useNavigate()
    const context:ServerType = useContext(ServerPovider)
    
    
    function SendRegister(name:string,email: string, password: string,confirmPassword: string){
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        alert(regex.test(password));
        if(name==''){
            Swal.fire({title:"Precisar colocar um nome",
                icon: 'error'
            })
            return ''
        }
        if(email==''){
            Swal.fire({
                title: 'precisar ter um email válido',
                icon: 'error'
            })
            return ''
        }
        if(regex.test(password)===false){
            alert('Please enter');
            Swal.fire({
                title: 'Senha precisa ser mais forte',
                text: ' deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, um caracter numérico, um caracter alfanumérico',
                icon: 'error',
                confirmButtonText: 'OK'})
            return ''
        }
        if(password !== confirmPassword){
            Swal.fire({
                title: 'Senhas não compatíveis',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        context.setEmail(email)
        context.setPassword(password)
        Swal.fire({
            title: 'enviando para API',
            text: 'agora você sera direcionado para a pagina de Login digite o mesmo email e senha para prosseguir',
            confirmButtonText: 'OK'
        })
        navigate('/login')


    }

    return (
        <LoginStyle>
            <div><img src={logo} alt="clock with money'slogo" /><h1>JustCash</h1></div>
            <div className="form">
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
                    <input type={type} id="confirmPassword " name="confirmPassword" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
                    <div className="icon" onClick={() => { setType(type === "password" ? 'text' : 'password') }}>
                        {type === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>
                <p>
                    <Link to={'/Login'}>Já possui uma conta? fazer login</Link>{""}
                </p>
                <button className="Submit"  onClick={()=>{SendRegister(name,email,password,confirmPassword)}}>Criar conta</button>
            </div>
        </LoginStyle>
    )
}