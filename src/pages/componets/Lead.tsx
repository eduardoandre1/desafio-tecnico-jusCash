import { useContext, useState } from "react";
import LeadType from "../../types/Lead.type";
import LeadFormStyle from "../../styles/LeadFormStyle";
import ServerPovider from "../../server.provider";
import React from "react";

export default function LeadForm(LeadBlock: { Lead: LeadType | undefined , open: boolean, disabled: boolean }) {
    const { Lead , disabled } = LeadBlock
    const [isOpen, setIsOpen] = useState(LeadBlock.open === true ? 'overflow' : 'overflow close')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [check, setCheck] = useState({
        todos: true,
        honorariosSucumbenciais: true,
        honorariosContratuais: true,
        honorariosDativos: true,
        CreditoDoAutor: true
    })

    const leadInput: LeadType = {
        name: name,
        email: email,
        tel: tel,
        todos: check.todos,
        honoráriosContratuais: check.honorariosSucumbenciais,
        honoráriosSucumbenciais: check.honorariosSucumbenciais,
        honoráriosDativos: check.honorariosDativos,
        CreditoDoAutor: check.CreditoDoAutor,
        tipo: "Cliente Potencial"
    }

    const context = useContext(ServerPovider)
    async function SendLead(Lead: LeadType) {
        context.Leads.push(Lead)
    }
    function changeCheckAll() {
        setCheck({
            todos: !check.todos,
            CreditoDoAutor: !check.todos,
            honorariosContratuais: !check.todos,
            honorariosDativos: !check.todos,
            honorariosSucumbenciais: !check.todos
        })
    }
    function changeCheckOne(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        setCheck((checks) => ({
            ...checks,
            todos: false,
            [name]: checked,
        }))
        console.log(check)
    }
    return (
        <LeadFormStyle>
            <div className={isOpen}>
                <div className="LeadForm">
                    <button  onClick={()=>setIsOpen('overflow close')}>X</button>
                    <h3 className="titleForm">Lead</h3>
                    <form>
                        <h4>Dados do Lead</h4>
                        <label htmlFor="name">Nome Completo*</label>
                        <input type="text" name="name" className="inputText" disabled={disabled} value={Lead?Lead.name:name} onChange={(event) => setName(event.target.value)} />

                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" className="inputText" value={Lead?Lead.email:email} disabled={disabled} onChange={(event) => setEmail(event.target.value)} />

                        <label htmlFor="tel">Telephone*</label>
                        <input type="tel" name="tel" className="inputText" value={Lead?Lead.tel:tel} disabled={disabled} onChange={(event) => setTel(event.target.value)} />

                        <p>Oportunidades</p>

                        <div className="checkInput">
                            <input type="checkbox" id="todos" name="todos" disabled={disabled}  checked={Lead?Lead.todos:check.todos} onChange={() => { changeCheckAll() }} />
                            <label htmlFor="todos">Todos</label>
                        </div>
                        <div className="checkInput">
                            <input type="checkbox" id="honorariosSucumbenciais" name="honorariosSucumbenciais" checked={Lead?Lead.honoráriosSucumbenciais:check.honorariosSucumbenciais} disabled={LeadBlock.disabled} onChange={(event) => { changeCheckOne(event) }} />
                            <label htmlFor="honorariosSucumbenciais">Honorários Sucumbenciais</label>
                        </div>
                        <div className="checkInput">
                            <input type="checkbox" id="honorariosContratuais" name="honorariosContratuais" disabled={disabled} checked={Lead?Lead.honoráriosContratuais:check.honorariosContratuais} onChange={(event) => { changeCheckOne(event) }} />
                            <label htmlFor="honorariosContratuais">Honorários Contratuais</label>
                        </div>
                        <div className="checkInput">
                            <input type="checkbox" id="honorariosDativos" name="honorariosDativos" checked={Lead?Lead.honoráriosDativos:check.honorariosDativos} disabled={disabled} onChange={(event) => { changeCheckOne(event) }} />
                            <label htmlFor="honorariosDativos">Honorários Dativos</label>
                        </div>

                        <div className="checkInput">
                            <input type="checkbox" checked={Lead?Lead.CreditoDoAutor:check.CreditoDoAutor} id="CreditoDoAutor"   name="CreditoDoAutor" disabled={LeadBlock.disabled} onChange={(event) => { changeCheckOne(event) }} />
                            <label htmlFor="CreditoDoAutor">Crédito Do Autor</label>
                        </div>

                    </form>
                    <button onClick={()=> SendLead(leadInput)}></button>
                </div>
            </div>
        </LeadFormStyle>
    )
}
