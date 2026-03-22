// //Importamos a função e utilziamos o módulo http que vem por padrão no Noode para trabalharmos com servidores web.
// import { createServer } from 'node:http'

// //Para comerçarmos a criair nosso servidor, precisamoos criar uma função, passando outra função como um paramêtro:
// const server = createServer((request, response) =>{
//     //usando o método write da função response(), podemos escrever uma mensagem na tela do cliente.
//     response.write('Oi!')
    
//     //usando o método end da função response(), finalizamos nossa função.
//     return response.end()
// }) 

// //Depois de "criarmos" o servidor, poemos chamar a váriavel 'server' junto do método -listen-, junto deste método, passamos uma porta. 
// server.listen(3333)
// // localhost:3333

import { fastify } from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'
import cors from '@fastify/cors'

const server = fastify()

const database = new DatabasePostgres()

await server.register(cors, {
  origin: "http://localhost:5173", // frontend Vite
  methods: ["GET", "POST", "PUT", "DELETE"],
})



server.post('/videos', async (request, reply)=>{

    const {title, description, duration} = request.body
    
    await database.create({
        title,
        description,
        duration: duration,
    })
    console.log(database.list())

    return reply.status(201).send() 
})

server.get('/videos', async (request)=>{
    const search = request.query.search

    const videos = await database.list(search)

    return videos
})

server.put('/videos/:id', async (request, reply)=>{
    //através do método "params.[nome], puxamos o parametro"
    const videoId = request.params.id
    const {title, description, duration} = request.body

    await database.update(videoId,{
        title,
        description,
        duration,
    })

    return reply.status(204).send()

})

server.delete('/videos/:id',(request, reply)=>{
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})


server.listen({
    //para hospedarmos nosso site em alguma plataforma
    //onde não definimos a porta, usamos a variavel "process.env.PORT"
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
})