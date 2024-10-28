const jsonServer= require('json-server')

const rrServer= jsonServer.create()

const middleware=jsonServer.defaults()

const routes= jsonServer.router('db.json')



rrServer.use(middleware)
rrServer.use(routes)

const PORT = 3000 || process.env.PORT
rrServer.listen(PORT,()=>{
    console.log('server running at :'+PORT)
})