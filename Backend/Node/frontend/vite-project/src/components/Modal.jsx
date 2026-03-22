// function Modal({ aberto, onClose, children }) {
//   if (!aberto) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96">
//         testeeeeeeeeee

//         <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
//           Fechar
//         </button>
//       </div>
//     </div>
//   );
// }



const Modal = ( {aberto, enviar, title, description, duration, fechar} )=>{
    
    if(!aberto) return null;

    return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 h-screen">
        <div className="bg-white p-4 rounded-xl shadow-lg w-4/12 max-w-11/12 flex flex-col items-center">
          <div className="w-full flex justify-end">
            <button className=" bg-red-500 text-white px-1 rounded cursor-pointer hover:bg-red-700 items-baseline" onClick={fechar}>Voltar</button>
          </div>
            <div className="flex items-center justify-center m-5 bg-gray-100 h-70 min-w-full" id="capa">
                <h1>Capa do vídeo</h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 w-full mt-2 break-all whitespace-normal">
                <h1 className="bg-gray-100 rounded-sm p-1">{title}</h1>
                <p className="bg-gray-100 rounded-sm p-1 text-base max-w-full min-h-20 min-w-full">{description}</p>
                <p className="bg-gray-100 rounded-sm p-1">{duration}</p>
                {/* <h1>{title}</h1>
                <h1>{description}</h1>
                <h1>{duration}</h1> */}
            </div>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700" onClick={enviar}>
            Enviar
          </button>
        </div>
      </div>
    </>
    )
};

export default Modal;
