import { Button, Grid, TextField } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { Contato, validationSchema } from "./contato";
import { useFormik, FormikHelpers } from 'formik';

import './index.css'

interface ContatosFormProps {
    contato: Contato,
    submeterFormulario: (contato: Contato) => void
}

export const ContatosForm: React.FC<ContatosFormProps> = ({
    contato,
    submeterFormulario
}) => {

    const onSubmit = (contato: Contato, helper: FormikHelpers<Contato>) => {
        submeterFormulario(contato);
        helper.resetForm();
    }

    const formik = useFormik<Contato>({
        onSubmit: onSubmit,
        initialValues: {...contato},
        validationSchema: validationSchema,
        validateOnChange: false
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <Grid container >
                <Grid item xs={12} md={8}>
                    <TextField 
                        variant="outlined" 
                        label="Nome" 
                        name="nome"
                        id="inputNome"
                        value={formik.values.nome}
                        onChange={formik.handleChange}
                        className="full-width"/>
                    <span className="error-msg">{formik.errors.nome}</span><br/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField 
                        variant="outlined" 
                        label="Idade" 
                        name="idade"
                        id="inputIdade"
                        value={formik.values.idade}
                        onChange={formik.handleChange}
                        className="full-width"/>
                    <span className="error-msg">{formik.errors.idade}</span><br/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button type="submit" variant="contained" color="primary" className="full-width">Adicionar</Button>
                </Grid>
            </Grid>
        </form>
    )
}