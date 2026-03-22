export async function PostInfo({id}: {id: string}){
    
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await response.json()
    
    return(
        <div>
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
        </div>
    )
}