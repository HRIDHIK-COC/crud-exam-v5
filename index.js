const server=require('json-server')

// server creation
const appoinment=server.create()

// middleware
 const middleware=server.defaults()

 const router =server.router('db.json')

//  
const cors= require('cors')
appoinment.use(cors())


//  apply middle ware
 appoinment.use(middleware)
 appoinment.use(router)

 const PORT=8001
 appoinment.listen(PORT,()=>{
        console.log(`server started at port no:${PORT}`);
 })