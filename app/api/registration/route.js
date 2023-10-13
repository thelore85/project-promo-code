export async function POST(req , res){

  const { email } = req.body;

  const test = await JSON.parse.req.body
  console.log('email: ', test)

  return new Response('hello world')
}






// const express = require('express'); // server framework
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
// const cors = require('cors');
// const knex = require('knex');  // db framework
// const nodemailer = require("nodemailer"); // Email provider

// // activate plug-ins
// const app = express();
// app.use(bodyParser.json());

// // CORS - domain white list
// app.use(cors());



// //==============================================

// ///////////////////////////////
// // DATABASE CONNECTION 

// // set environmental variables || local server
// const dbHost = process.env.DB_HOST || 'localhost';
// const dbName = process.env.DB_DATABASE || 'vercerlDb_local'; // remeber to set local name DB
// const dbPort = process.env.DB_PORT || '5432';
// const dbUser = process.env.DB_USER; // || for local host use string "postgres"
// const dbPassword = process.env.DB_PASSWORD; // || for local host use string "d..."
// const dbConnection = process.env.DB_URL || '';
// const dbSSL = process.env.DB_SSL || '';

// //PostgreSql connection
// const db = knex({
//   client: 'pg',
//   connection: {
//     host: dbHost,
//     port: dbPort,
//     database: dbName,
//     user: dbUser,
//     password: dbPassword,
//     connectionString: dbConnection,
//     ssl: dbSSL,
//   }
// });











// // pages/api/registration.js
// import { Pool } from 'pg';

// export default async (req, res) => {

//     const { projectName, userName, userLastName, email, password, phoneNumber } = req.body;

//     // Connetti al database PostgreSQL
//     const pool = new Pool({
//       user: 'default',
//       host: 'ep-steep-haze-04994750-pooler.eu-central-1.postgres.vercel-storage.com',
//       database: 'verceldb',
//       password: 'AFueslZ8JQ2v',
//       port: 5432, // La porta di default di PostgreSQL
//     });

//     try {
//       const client = await pool.connect();
//       const query = `
//         INSERT INTO pj_promo_user (projectName, userName, userLastName, email, password, phoneNumber)
//         VALUES ($1, $2, $3, $4, $5, $6)
//       `;
//       const values = [projectName, userName, userLastName, email, password, phoneNumber];

//       await client.query(query, values);
//       client.release();

//       res.status(200).json({ message: 'Dati registrati con successo nel database' });
//     } catch (error) {
//       res.status(500).json({ error: 'Si è verificato un errore durante la registrazione dei dati nel database' });
//     } finally {
//       await pool.end();
//     }
// };
