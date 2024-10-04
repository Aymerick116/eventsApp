
import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;

console.log(process.env.CONNECTION_STRING)
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false, // Required if connecting to a Railway database
  },
});

export default pool;

// // db.js
// import 'dotenv/config';
// import pg from 'pg';
// const { Pool } = pg;

// // Create a new Pool instance to connect to PostgreSQL
// const pool = new Pool({
//   connectionString: process.env.CONNECTION_STRING,
//   ssl: {
//     rejectUnauthorized: false // Required if connecting to a Railway database
//   }
// });

// export default pool;