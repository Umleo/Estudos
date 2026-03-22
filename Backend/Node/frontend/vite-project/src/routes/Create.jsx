import React from 'react'
import { useState } from 'react';
import { PatternFormat } from "react-number-format";
import Modal from '../components/Modal';
import { criarVideos } from '../services/APIservice';
import RouteCriar from "../components/Button";

function Create() {

    const [duration, setDuration] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [modalAberto, setModalAberto] = useState(false);

    // function formatarTempo(valor_input) {
       
        // const numeros = valor_input.replace(/\D/g, "").slice(0,6); // através do "replace(regex)" retira qualquer tipo de caratcter que não for um número, slice() limita o tamanho dos caracters através do index(index_ini, index_fim).
          
        //  return numeros
        //  .replace(/(\d{2})(\d)/, "$1:$2")
        //  .replace(/(\d{2}:\d{2})(\d)/, "$1:$2");
        // - (): representa um grupo
        // - (\d): representa qualquer numero de 1 a 9
        // - {2}: representa dois caracteres
        // - (\d{2}): representa um grupo dos dois primeiros caracteres de um 1 a 9 
    //}   

    // function format(valor_input) { 
    //     setduration(formatarTempo(valor_input.target.value));
    // }

    function criar(){
        const duration_format = duration.replace(/\D/g, "");
        if (duration_format.length !== 6){
            return alert("Insira no formato hh:mm:ss completo.")
        }else if (title == ""){
            return alert("Insira titulo.")
        }else if(duration == ""){
            return alert("Insira descrição.")
        };

        setModalAberto(true)

    }

    async function enviar(){
        try{
            await criarVideos(title, description, duration)
            //console.log(title, description, duration)

            setModalAberto(false)
            setDuration("");
            setTitle("");
            setDescription("");
        } catch(err){
            alert("Erro ao salvar vídeo!");
            console.log(err)
        }
    }

    function fechar(){
        setModalAberto(false)
    }



    return (
    <>
    {/*Modal props*/}     
    {<Modal aberto={modalAberto} enviar={enviar} title={title} duration={duration} description={description} fechar={fechar}/>}
    {/*Modal props*/}

    

    <div className="bg-blue-100 p-1 h-screen">
        
        <div className=" flex flex-col justify-center items-center">

            <RouteCriar caminho="/" texto="Voltar" style="mt-1 p-1 cursor-pointer max-w-fit bg-sky-500 text-white rounded hover:bg-blue-600"/>

            <div className="flex items-center justify-center w-1/2 m-10 bg-gray-100 min-h-80" id="capa">
                <h1>Insira capa do vídeo</h1>
            </div>
            <div className="flex flex-col items-center gap-5 w-1/2 h-full" id="detalhes">
                <input className="bg-white text-center max-w-4/5 w-full border-2 rounded-xs" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
                <textarea className="bg-white resize-none text-center min-h-40 max-w-4/5 w-full border-2 rounded-2xl" value={description} onChange={(e)=>{ (e.target.value)}} placeholder="Description"/>
                <PatternFormat
                    className="bg-white m-auto text-center max-w-2/12 border-2 rounded-xs"
                    format="##:##:##"
                    value={duration}
                    onValueChange={(e) => setDuration(e.formattedValue)}
                    placeholder="hh:mm:ss"
                />
                <button className=' p-1 cursor-pointer max-w-fit rounded-b-lg bg-sky-500 text-white rounded hover:bg-blue-600' onClick={criar}>Criar</button>
            </div>
        </div>
    
    </div>


    </>
  )
}

export default Create