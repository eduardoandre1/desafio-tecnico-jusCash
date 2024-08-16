import LeadStyle from "../../styles/LeadStyle";
import Menu from "../componets/menu";
import logo from "../../assets/logoLight.png"
import LeadType, { typesLead } from "../../types/Lead.type";
import LeadForm from "../componets/Lead";
import { useState,useEffect,useContext } from "react";
import { getLeads } from "../../server/serverFunctions";
import ServerPovider from "./../../server.provider";
import Swal from "sweetalert2";


export default function LeadsPage() {
    const [Lead,setLead] = useState<LeadType| undefined>(undefined)
    const [leadsList,setLeadsList] = useState([<></>])
    const [disabled,setDisabled] = useState(false)
    const [open,setOpen] = useState(false)
    const context = useContext(ServerPovider)
    const { Leads } = context 
    const [changePage,setChangePage] = useState(true)
    function CreateLeadList(lead: LeadType, index: number) {
        const LeadRow = {clientePotencial:<td></td>,dadosConfirmados:<td></td>,analiseDeLead:<td></td>}
        const types:typesLead = {type:"Cliente Potencial"}
        function ChangeLead(type:'Cliente Potencial' | 'Dados Confirmados' | 'Analise de Lead',index:number,){
            console.log(type, index)
            if (type === "Cliente Potencial") {return ''}
            context.Leads[index].tipo = type
            console.log(context.Leads[index])
        }
        const LeadItem = <td onDragEnd={()=>{ChangeLead(types.type,index);setChangePage(!changePage)}} className="selectCell" draggable="true"><span onClick={()=>{setLead(lead);setDisabled(true);setOpen(true)}}>{lead.name}</span></td>
        if (lead.tipo === "Cliente Potencial") {
            LeadRow.clientePotencial = LeadItem
            types.type = "Dados Confirmados"
        }
        if (lead.tipo == "Dados Confirmados") {
            LeadRow.dadosConfirmados = LeadItem
            types.type = "Analise de Lead"
        }
        if (lead.tipo === "Analise de Lead") {
            LeadRow.analiseDeLead = LeadItem
            types.type = "Cliente Potencial"
        }
        
        return (
            <>
                <tr key={index}>
                    {LeadRow.clientePotencial}
                    {LeadRow.dadosConfirmados}
                    {LeadRow.analiseDeLead}
                </tr>
            </>
        )
    }
    getLeads()
    useEffect(()=>{
        console.log(Leads)
        setLeadsList(
            
           context.Leads.map((lead: LeadType,index) => {
                return CreateLeadList(lead,index)
            }))
        },[context.Leads,changePage,open])
        
    useEffect(() =>{Swal.fire({
        title:`Seja Bem vindo(a) ${context.name}`,
        imageUrl: {logo},
        position: "top",
    })},[])
    return (
        <LeadStyle>
            <LeadForm Lead={Lead} open={open} disabled={disabled} setOpen={setOpen} />
            <Menu />
            <div className="title"><img className="logo" src={logo} alt="clock with money's logo" /></div>
            <div className="space">
                <button className="button" onClick={()=>{setOpen(true);setLead(undefined);setDisabled(false)}}>+ Nova Lead </button>
            </div>
            <table>
                <tr>
                    <td className="tdTitle">Cliente Potencial</td>
                    <td className="tdTitle" >Dados Confirmados</td>
                    <td className="tdTitle">Analise de Lead</td>
                </tr>
                {leadsList}
            </table>

        </LeadStyle>
    )
}