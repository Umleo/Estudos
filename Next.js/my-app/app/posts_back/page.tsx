import Link from "next/link";

// definimos um array de objeto com as propriedades que iremos usar da nossa api
export interface PostsProps {
  posts: {
    id: number;
    title: string;
    body: string;
    userId: number;
  }[]
}

export default async function Posts() {

  const response = await fetch('https://dummyjson.com/posts')
  const data: PostsProps = await response.json()

  console.log(data.posts)

  async function executaBotao() {
    'use server'
    console.log('teste')
  }

  //definimos o tipo do parametro da função como FormData 
  async function valorInput(formData: FormData){
    'use server'
    //então conseguimos o valor do input com o nome definido na propriedade "name".
    const id = formData.get('userId')

    const response = await fetch(`https://dummyjson.com/posts/user/${id}`,{
      cache: 'force-cache',
      next: {
        //através do método revalidate, definimos o tempo de cache da resposta, ou seja, depois de 60 segundos a proxima visita irá realizar um novo fetch.
        revalidate: 60
      }
    })
    const data: PostsProps = await response.json()

    console.log(data)
  }

  return(
    <>
    <button onClick={executaBotao}>teste</button>

    <form 
      className="flex gap-2 my-4"
      //inserimos o action passando a função 
      action={valorInput}
    >
      <input
        type="text"
        placeholder="ID do usuário"
        className="border border-gray-200"
        //através da propriedade "name" nós resgatamos o valor do input
        name="userId"
      >
      </input>
      <button
        className="bg-blue-500 text-white"
        type="submit"
      >
        Enviar
      </button>
    </form>


    <h1 className="text-center mt-5 mb-5 font-bold text-3xl">Todos os Posts</h1>

    <div className="flex flex-col gap-4 mx-2">
      {data.posts.map(post => (
        <div key={post.id} className="bg-gray-300 p-4 rounded-md">
          <h2 className="font-bold text-gray-800">{post.title}</h2>
          <p>{post.body}</p>

          <Link href={`/posts_back/${post.id}`} className="text-blue-900 font-bold">
              Ver detalhes
          </Link>

        </div>
      ))}
    </div>

    </>
  )
}