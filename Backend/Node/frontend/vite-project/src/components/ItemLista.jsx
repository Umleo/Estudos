
import { useState } from "react";
import ModalAtualização from "./ModalAtualização";
import { atualizarVideos } from "../services/APIservice";
import { removerVideos } from "../services/APIservice";

const ItemLista = ({video, data, carregarVideos})=>{

    const [modalAberto, setModalAberto] = useState(false)

    const [duration, setDuration] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    function abrirModal (){
        // console.log(video.id)
        // console.log(data)

        const indice = data.findIndex(elemento => elemento.id === video.id)

        //console.log("este é o id:", indice)

        const buscandoTitle = data[indice].title
        const buscandoDescription = data[indice].description
        const buscandoDuration = data[indice].duration

        setDescription(buscandoDescription);
        setDuration(buscandoDuration);
        setTitle(buscandoTitle);


        setModalAberto(true)
    }

    async function atualizar (){
        try{
            //console.log(video.id, title, description, duration)
            await atualizarVideos(video.id, title, description, duration)
            carregarVideos()
            setModalAberto(false)
        }catch(err){
            alert("Erro ao salvar vídeo!");
            console.log(err)
        }
    }

    async function remover (){
        try{
            await removerVideos(video.id)
            carregarVideos()
        }catch(err){
            alert("Erro ao remover vídeo!");
            console.log(err)
        }
    }


    return(
        <>
        {/*Modal props*/}    
            <ModalAtualização aberto={modalAberto} fechar={setModalAberto} atualizar={atualizar}
            title={title} attTitle={setTitle} duration={duration} attDuration={setDuration} description={description} attDescription={setDescription}/>
        {/*Modal props*/}

            <tbody>
                <tr>
                    <td className="w-1/4 text-center p-3 border border-gray-300">Image</td>
                    <td className="w-1/4 text-left p-3 border border-gray-300">{video.title}</td>
                    <td className="w-1/2 text-left p-3 border border-gray-300">{video.description}</td>
                    <td className="text-center p-3 border border-gray-300">{video.duration}</td>
                    <td><button className="p-1 px-3 cursor-pointer m-2 ml-3 max-w-fit bg-green-500 text-white rounded hover:bg-green-600 shadow shadow-black" onClick={abrirModal}>Ver</button></td>
                    <td><button className="p-1 px-3 cursor-pointer m-2  max-w-fit bg-red-500 text-white rounded hover:bg-red-600 shadow shadow-black" onClick={remover}>Remover</button></td>
                </tr>
            </tbody>
        </>
    )
}

export default ItemLista;