const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Raki@9515",
    database: "postgres"
})

module.exports = client































// const {Client}=require('pg')
// // This line imports the Client class from the 'pg' library
// //require() is used to import external modules

// const client =new Client({//here we created object to Client calss
//     host:"localhost",// where PostgreSQL server is running.
//     user:"postgres",//username used to authenticate and connect to the PostgreSQL database
//     port:5432,//port number where the PostgreSQL server is running. By default, PostgreSQL uses port 5432.
//     password:"Raki@9515",
//     database:"postgres"//name of databse
// })

// module.exports=client//module.exports is a special object in Node.js
// // that is used to define what a module exports when it is required/imported in other files.
// // it exports the client object
// //allowing other modules to use this configured PostgreSQL client to interact with the database.