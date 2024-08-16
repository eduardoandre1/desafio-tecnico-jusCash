import ServerPovider from "../server.provider";
import { useContext } from "react";
import ApiServerList from "../serverDatabase";

export function ChangeLead(type:'Cliente Potencial' | 'Dados Confirmados' | 'Analise de Lead',index:number,){
	const context = useContext(ServerPovider)
	console.log(type, index)
	if (type === "Cliente Potencial") {return ''}
	context.Leads[index].tipo = type
	console.log(context.Leads[index])
}
export function getLeads()
{
	const Context = useContext(ServerPovider)
	Context.Leads = ApiServerList
}

