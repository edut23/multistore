import { Api } from "../axios-config";

export const clientInfosAPI = async (info) => {
    try{
        const { data } = await Api.put('/clientes', {
            username: info.username,
            email: info.email,
            telefone: info.telefone,
            endereco: info.endereco,
            nome: info.nome,
            sobrenome: info.sobrenome,
            CPF: info.CPF,
            dataNasc: info.dataNasc,
            genero: info.genero
        });
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};