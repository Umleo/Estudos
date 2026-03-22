import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Aula Next.js!",
  description: "Aprendendo Next.js do zero."
}

export const revalidate = 60

export default function Home(){
  return(
    <>
      <h1>Olá mundo!</h1>
    </>
  )
} 