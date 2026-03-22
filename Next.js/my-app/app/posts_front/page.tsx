'use client'

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

import { useEffect, useState } from "react"

export default function Posts_front(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    },[])

    //console.log(posts)


    return(
        <>
            <h1 className="text-center mt-5 mb-5 font-bold text-3xl">Página Client</h1>

            <div className="flex flex-col gap-4 mx-2">
                <div className="flex flex-col gap-4 mx-2">
                {posts.map((post: Post) => (
                    <div key={post.id} className="bg-gray-300 p-4 rounded-md">
                    <h2 className="font-bold text-gray-800">{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
                ))}
                </div>

            </div>
        </>
    )
}