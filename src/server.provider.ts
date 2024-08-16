import { createContext } from "react";
import LeadType from "./types/Lead.type";

export interface ServerType 
{
	email: string;
	setEmail: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
	Leads:LeadType[];
}
const ServerPovider = createContext(<ServerType>({}))
 
export default ServerPovider