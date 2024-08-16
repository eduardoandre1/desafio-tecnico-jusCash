import LeadType from "./Lead.type";

export interface LeadFormType
{
	Lead:LeadType | undefined,
	open:boolean,
	setOpen: (open:boolean) => void,
	disabled:boolean,
}