// export interface Posts {
//     id: number;
//     title: string;
//     body: string;
//     userId: number;
// }

import { Suspense } from "react";
import { PostInfo } from "./components/post";


//export default async function DetailPost({ params }: { params: Promise<{id: string}> }) {
export default async function DetailPost({
    params
}: 
    {
        params: {id: string}
    }
){

    const { id } = await params;
    


    
    return (
        <>
        <h1 className="text-center text-4xl font-bold">Info do Post</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                <PostInfo id={id} />
            </Suspense>
        </>
    );
}