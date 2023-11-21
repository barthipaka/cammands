const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();


app.get('/employee', (req, res)=>{
    client.query(`Select * from employee`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})



app.get('/employee/:id', (req, res)=>{
    client.query(`Select * from employee where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})





app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// Assuming you have required necessary modules and initialized your express app and database client ('client')

app.post('/employee', (req, res) => {
    const employee = req.body; 
    const insertQuery = 'INSERT INTO employee(id, name, email, marks) VALUES($1, $2, $3, $4)';
    const values = [employee.id, employee.name, employee.email, employee.marks];
  
    client.query(insertQuery, values, (err, result) => {
      if (!err) {
        res.send('Insertion was successful');
      } else {
        console.error(err.message);
        res.status(3000).send('Error inserting user');
      }
    });
  });
  

















































// const client = require('./connection.js')//This line imports the client object from a separate file named connection.js.
// const express = require('express');//This imports the Express.js framework, allowing the creation of web applications and APIs using Node.js.
// const app = express();//Initializes an Express application.

// app.listen(3000, () => {
//     console.log("Sever is now listening at port 3000");
// })//: Starts the Express app and listens for incoming requests on port 3000. When the server starts, it logs a message indicating that the server is listening at port 3000.

// client.connect();
// // Establishes a connection to the PostgreSQL database using the pg library's connect() method.




// //this is considered as api for fetching all the users from database.
// //Defines a GET endpoint at '/user'. When a GET request is made to this endpoint, it triggers a function that interacts with the database to fetch all users.
// app.get('/users', (req, res) => {
//     client.query(`Select * from users`, (err, result) =>
//     //Executes a SQL query to select all records from the 'user' table in the connected PostgreSQL database
//     {
//         //Upon receiving the query result, it sends the retrieved data as a response if there is no error.
//         if (!err) {
//             res.send(result.rows);
//         }
       
//     });
//     client.end;//close the connection to the PostgreSQL database
// })
// // app.get('/users/:id', (req, res)=>{
// //     client.query(`Select * from users where id=${req.params.id}}`, (err, result)=>{
// //         if(!err){
// //             res.send(result.rows);
// //         }
// //     });
// //     client.end;
// })