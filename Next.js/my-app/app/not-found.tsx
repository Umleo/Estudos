import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex justify-center items-center flex-col gap-5 m-10">
            <h1 className="text-5xl font-bold">Página 404 não encontrada.</h1>
            <p>Essa página não existe!</p>
            <Link href="/">
                Voltar para <a className="text-blue-400">home.</a>
            </Link>
        </div>
    )
}