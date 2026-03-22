import { PatternFormat } from "react-number-format";


export default function ModalAtualização({
    aberto, fechar, atualizar,
    title, description,duration,
    attTitle, attDescription, attDuration}) {

    
        
    function fecharModal(){
        fechar(false)
    }

    if (!aberto) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 h-screen">
                <div className="bg-white p-4 rounded-xl shadow-lg w-4/12 max-w-11/12 flex flex-col items-center">
                <div className="w-full flex justify-end">
                    <button className=" bg-red-500 text-white px-1 rounded cursor-pointer hover:bg-red-700 items-baseline" onClick={fecharModal}>Voltar</button>
                </div>
                    <div className="flex items-center justify-center m-5 bg-gray-100 h-70 min-w-full" id="capa">
                        <h1>Capa do vídeo</h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6 w-full mt-2 break-all whitespace-normal">
                        <input className="text-center border" value={title} onChange={(e)=>attTitle(e.target.value)}></input>
                        <textarea className="text-center resize-none min-h-30 max-w-4/5 p-1 w-full rounded-2xl border break-normal" value={description} onChange={(e)=>attDescription(e.target.value)}></textarea>
                        <PatternFormat
                            className="bg-white m-auto text-center max-w-3/12 border rounded-xs"
                            format="##:##:##"
                            value={duration}
                            onValueChange={(e) => attDuration(e.formattedValue)}
                            placeholder="hh:mm:ss"
                        />
                        {/* <h1>{title}</h1>
                        <h1>{description}</h1>
                        <h1>{duration}</h1> */}
                    </div>

                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700" onClick={atualizar}>
                    Enviar
                </button>
                </div>
            </div>
        </>
    )
}
