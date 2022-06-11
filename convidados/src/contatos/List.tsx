import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React from "react";
import { Contato } from "./contato";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { ContatosForm } from "./Form";

interface ContatosListProps{
    lista: Contato[],
    onDelete: (contato: Contato) => void;
}

export const ContatosList = ({ lista, onDelete: onDelete } : ContatosListProps) => {
    return(

        <Grid container>
            <Grid item xs={12}>
                <List>
                    {
                        lista.map( contato => (
                            <ListItem key={contato.id} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountCircleIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={contato.nome}
                                    secondary={`Idade: ${contato.idade}`} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={ () => onDelete(contato)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }                    
                </List>
            </Grid>
        </Grid>
    )
}