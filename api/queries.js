const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const debug = process.env.DEBUG == "true";

if(debug) {
  console.log("Starting API on debug mode. Set DEBUG=false to use DB");
}

module.exports = {
  getUser: function(request, response){
    console.log(`Getting user with ID ${request.params.id}`);
    if(false) {
      response.status(200).json({
        ID: 1,
        fname: 'john',
        lname: 'doe',
        username: 'johndoe10',
        companyID: '1',
        password: 'password'
      })
    }
    else {
      const id = parseInt(request.params.id);
      const time = Date.now();
      console.log("[" + new Date(time).toLocaleDateString() + " " + new Date(time).toLocaleTimeString() + "] " + request.ip + " pulled " + id + "'s user.")
      pool.query('SELECT * FROM person WHERE ID=$1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0])});
    }
  },

  getStatus: function(request, response){
    const id = parseInt(request.params.id);
    const company = parseInt(request.params.company);
    pool.query('SELECT * FROM timeLog WHERE person=$1 AND company=$2', [id, company], (error, results) => {
    if (error) {
      throw error
    }
    const recent = results.rows[results.rows.length-1];
    const payload = {
      clockedIn: recent.clockout == null
    };
    response.status(200).json(payload);
  })
  },

  ping: function(request, response) {
    response.status(200).send("<h1>TimeClock API</h1>");
  },

  clockIn: function(request, response) {
    console.log(`Clocking in user with ID ${request.params.id}`);

     
      const person = parseInt(request.params.id);
      const company = parseInt(request.params.company);
      const time = Date.now();

      pool.query(`INSERT INTO timelog ("person", "company", "date")  
      VALUES ($1, $2, $3)`, [person, company, time], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json('success')});
    
  },

  clockOut: function(request, response) {
    console.log(`Clocking out user with ID ${request.params.id}`);
    if(debug) {
      response.status(200).json({
        pid: 1,
        fname: 'john',
        lname: 'doe',
        username: 'johndoe10',
        companyID: '1',
        password: 'password'
      })
    }
    else {
      const person = parseInt(request.params.id);
      const company = parseInt(request.params.company);
      const time = Date.now();
      pool.query(`UPDATE timeLog SET clockout=$3 WHERE person = $1 AND company = $2`,
      [person, company, time], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json('success')});
    }
  },
}
