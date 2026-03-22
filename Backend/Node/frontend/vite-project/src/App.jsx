import ItemLista from "./components/ItemLista";
import { obterVideos } from "./services/APIservice";
import { useEffect, useState } from "react"
import RouteCriar from "./components/Button";
import ModalAtualização from "./components/ModalAtualização";
//import { patternFormatter } from "react-number-format";


function App() {


  const [data, setData] = useState([])

    async function carregarVideos() {
      try {
        const dados_api = await obterVideos()
        setData(dados_api)
        
      } catch (err) {
        console.error(err)
      }
    }

  useEffect(() => {
    //console.log("ok")
    carregarVideos()
  }, [])

  //console.log(data)

  // const videos = data.map((video, index)=>{
  //    return {
  //     "title":video.title,
  //     "description":video.description,
  //     "duration": video.duration,
  //     "id":video.id
  //    }
  // })


  // console.log(data[0].id)
  // console.log(data[0].title)

  return(
    <>
      <div className="h-screen bg-gray-100 pt-1">
        <div className="border-gray-50 border-2 mx-auto min-h-2/12 flex flex-col items-center text-center justify-center mt-20 gap-4 bg-(--color-background)">

          <h1 className="mt-5 font-extrabold font-minha text-7xl">Videos Gravados</h1>

          <RouteCriar caminho="/create" texto="Create" style="mt-1 p-1 cursor-pointer max-w-fit bg-sky-500 text-white rounded hover:bg-blue-600"/>

        </div>
        <div className="flex justify-center max-w-9/12 min-h-auto mx-auto mt-1">
          <table className="table-fixed min-w-full">
            <thead className="bg-sky-200">
              <tr>
                <th className="w-1/4 p-3 border border-black-300">imagens</th>
                <th className="w-1/4 p-3 border border-black-300">Title</th>
                <th className="w-1/4 p-3 border border-black-300">Description</th>
                <th className="w-1/4 p-3 border border-black-300">Duration</th>
              </tr>
            </thead>
              {data.map((video, index)=>{

                // const numeros = video.duration

                // const tamanho = String(video.duration).length
  
                // const formato = gerarFormato(tamanho)
  
                // const durationFormatada = patternFormatter(String(numeros), {
                //     format:formato
                // });
                
                return( 
                <ItemLista key={index} video={video} data={data} carregarVideos={carregarVideos}/>)
              })}
          </table>
        </div>

      </div>
    </>
    

  )
}

export default App
