import LeadType from "./types/Lead.type"
const ApiServerList: LeadType[] = [
    {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        tel: '1234-5678',
        todos: false,
        tipo: 'Cliente Potencial',
        honoráriosSucumbenciais: false,
        honoráriosContratuais: true,
        honoráriosDativos: false,
        CreditoDoAutor: true
    },
    {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        tel: '8765-4321',
        todos: false,
        tipo: 'Dados Confirmados',
        honoráriosSucumbenciais: true,
        honoráriosContratuais: false,
        honoráriosDativos: true,
        CreditoDoAutor: false
    },
    {
        name: 'Carlos Pereira',
        email: 'carlos.pereira@example.com',
        tel: '1122-3344',
        todos: true,
        tipo: 'Analise de Lead',
        honoráriosSucumbenciais: true,
        honoráriosContratuais: true,
        honoráriosDativos: true,
        CreditoDoAutor: true
    },
    {
        name: 'Ana Costa',
        email: 'ana.costa@example.com',
        tel: '5566-7788',
        todos: false,
        tipo: 'Cliente Potencial',
        honoráriosSucumbenciais: false,
        honoráriosContratuais: true,
        honoráriosDativos: true,
        CreditoDoAutor: false
    },
    {
        name: 'Pedro Santos',
        email: 'pedro.santos@example.com',
        tel: '9988-7766',
        todos: false,
        tipo: 'Dados Confirmados',
        honoráriosSucumbenciais: true,
        honoráriosContratuais: false,
        honoráriosDativos: true,
        CreditoDoAutor: true
    },
    {
        name: 'Tech Solutions Ltda',
        email: 'contato@techsolutions.com',
        tel: '1234-5678',
        todos: false,
        tipo: 'Cliente Potencial',
        honoráriosSucumbenciais: false,
        honoráriosContratuais: true,
        honoráriosDativos: false,
        CreditoDoAutor: true
    },
    {
        name: 'Inova Marketing',
        email: 'info@inovamarketing.com',
        tel: '8765-4321',
        todos: false,
        tipo: 'Dados Confirmados',
        honoráriosSucumbenciais: true,
        honoráriosContratuais: false,
        honoráriosDativos: true,
        CreditoDoAutor: false
    },
    {
        name: 'Green Energy Corp',
        email: 'contact@greenenergy.com',
        tel: '1122-3344',
        todos: true,
        tipo: 'Analise de Lead',
        honoráriosSucumbenciais: true,
        honoráriosContratuais: true,
        honoráriosDativos: true,
        CreditoDoAutor: true
    },
    {
        name: 'EducaTech',
        email: 'support@educatech.com',
        tel: '5566-7788',
        todos: false,
        tipo: 'Cliente Potencial',
        honoráriosSucumbenciais: false,
        honoráriosContratuais: true,
        honoráriosDativos: true,
        CreditoDoAutor: false
    },
    {
        name: 'HealthCare Solutions',
        email: 'services@healthcaresolutions.com',
        tel: '9988-7766',
        todos: true,
        tipo: 'Dados Confirmados',
        honoráriosSucumbenciais: true,
        honoráriosContratuais: false,
        honoráriosDativos: true,
        CreditoDoAutor: true
    }
]
export default ApiServerList