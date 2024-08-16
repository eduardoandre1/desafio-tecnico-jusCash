import LeadStyle from "../../styles/LeadStyle";
import Menu from "../componets/menu";
import logo from "../../assets/image.png"
import LeadType from "../../types/Lead.type";
import LeadForm from "../componets/Lead";
import ApiServerList from "../../serverDatabase";
import { useState } from "react";

export default function LeadsPage() {
    const [Lead] = useState(undefined)
    const [disabled] = useState(false)
    const [open,setOpen] = useState(false)
    function CreateLeadList(lead: LeadType) {
        const LeadRow = { clientePotencial:<td></td>,dadosConfirmados:<td></td>,analiseDeLead:<td></td> }
        const LeadItem = <td   ><span>{lead.name}</span></td>
        if (lead.tipo == "Dados Confirmados") {
            LeadRow.dadosConfirmados = LeadItem
        }
        if (lead.tipo === "Cliente Potencial") {
            LeadRow.clientePotencial = LeadItem
        }
        if (lead.tipo === "Analise de Lead") {
            LeadRow.analiseDeLead = LeadItem
        }
        //<LeadForm Lead={lead} open={false}/>
        return (
            <>
                <tr onClick={() =>{console.log(lead)}} >
                    {LeadRow.clientePotencial}
                    {LeadRow.dadosConfirmados}
                    {LeadRow.analiseDeLead}
                </tr>
            </>
        )
    }
    const Leads = ApiServerList.map((lead: LeadType) => {
        return CreateLeadList(lead)
    })
    return (
        <LeadStyle>
            {open===true?<LeadForm Lead={Lead} open={open} disabled={disabled}/>:null}
            <Menu />
            <div className="title"><img src={logo} alt="clock with money'slogo" /><h2 className="titleFont">JustCash</h2></div>
            <div className="space">
                <button className="button" onClick={()=>{setOpen(true)}}>+ Nova Lead </button>
            </div>
            <table>
                <tr>
                    <td>Cliente Potencial</td>
                    <td>Dados Confirmados</td>
                    <td >Analise de Lead</td>
                </tr>
                <tr>
                    <td colSpan={3}>Linha 3</td>
                </tr>
                <tr>
                    <td colSpan={3}>Linha 4</td>
                </tr>
                {Leads}
            </table>

        </LeadStyle>
    )
}