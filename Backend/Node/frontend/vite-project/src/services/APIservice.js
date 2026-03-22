import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


export async function obterVideos(){
    const response = await axios.get(`${API_URL}`);
    return response.data
}

export async function criarVideos(title, description, duration){
    const response = await axios.post(`${API_URL}`,{
        title,
        description,
        duration, 
    }
    //,{
      //  headers:{
            //não será necessário por o axios já envia por padrão: content-type: application/json
    //    }
    // }
    );
    return response.data
}

export async function atualizarVideos(id, title, description, duration){
    await axios.put(`${API_URL}/${id}`,{
        title,
        description,
        duration, 
    })
}

export async function removerVideos(id){
    await axios.delete(`${API_URL}/${id}`)
}



