import { Api } from "../axios-config";

export const storeInfosAPI = async (info) => {
    try{
        const { data } = await Api.put('/lojas', {
            username: info.username,
            email: info.email,
            telefone: info.telefone,
            endereco: info.endereco,
            nome: info.nome,
            sobrenome: info.sobrenome,
            CNPJ: info.CNPJ,
            descricao: info.descricao,
        });
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};