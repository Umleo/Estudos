import Link from "next/link";

export default function Header(){
    return(
        <header className="flex px-2 py-4 bg-gray-600 text-white"> 
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>
                    Next.js
                </div>

                <nav>
                    <ul className=" flex items-center justify-center gap-5">
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/contatos'>
                                Contatos
                            </Link>
                        </li>
                        <li>
                            <Link href='/posts_back'>
                                Posts - Back
                            </Link>
                        </li>
                                  <li>
                            <Link href='/posts_front'>
                                Posts - Front
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}