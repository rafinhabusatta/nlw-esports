import express from 'express'

const app = express()

// HTTP methods / API RESTful

// GET, POST, PUT, PATCH, DELETE

// GET - sempre que fizermos operação de leitura no backend
//POST - quando estivermos criando uma entidade ou recurso no back end
//PUT - edição de entidade
// PATCH - edição de informação específica de uma entidade
// DELETE - deletar uma entidade
app.get('/games', (request, response) => {
  return response.json([])
})

app.post('/ads', (request, response) => {
  return response.json(['asda'])
})

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' }
  ])
})
app.listen(3333)
