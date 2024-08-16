export default interface LeadType {
	name: string,
	email: string,
	tel: string,
	todos: boolean,
	tipo: 'Cliente Potencial' | 'Dados Confirmados' | 'Analise de Lead',
	honoráriosSucumbenciais: boolean,
	honoráriosContratuais: boolean,
	honoráriosDativos: boolean,
	CreditoDoAutor: boolean
}
