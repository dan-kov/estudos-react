import React from "react";
import { Contato } from "./contato";
import { ContatosForm } from "./Form";
import { ContatosList } from "./List";
import { useContatosLogic } from "./useContatosLogic";

export const Contatos: React.FC = () => {

    const {contato, addContato, removeContato, contatosList} = useContatosLogic();

    const handleFormSubmit = (contato: Contato) => {
        //console.log("submetendo formulário através do high order component", contato);
        addContato(contato);
    }

    return(
        <>
            <ContatosForm 
                contato={contato} 
                submeterFormulario={handleFormSubmit} />
            <ContatosList 
                lista={contatosList}
                onDelete={removeContato}/>
        </>
    )
}