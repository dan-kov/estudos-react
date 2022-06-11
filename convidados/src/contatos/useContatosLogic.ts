import { useState } from "react";
import { Contato } from "./contato";
import { v4 as uuid} from 'uuid';


export const useContatosLogic = () => {

    const newContato: Contato = {
        idade: '',
        nome: ''
    }

    const [contato, setContato] = useState<Contato>(newContato);

    const [contatosList, setContatosList] = useState<Contato[]>([]);

    const addContato = (contato: Contato) => {
        contato.id = uuid();
        const lista = ([...contatosList, contato]);
        setContatosList(lista);
        setContato(newContato);
        //console.log(lista);
    }

    const removeContato = (contato: Contato) => {
        if(contato.id){
            const novaLista = contatosList.filter(c => c.id !== contato.id);
            setContatosList(novaLista);
        }
    }

    return{
        contato,
        addContato,
        removeContato,
        contatosList
    }
}