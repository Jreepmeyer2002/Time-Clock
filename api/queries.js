const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})
module.exports = {

  getUser: function(request, response){
    const id = parseInt(request.params.id);
    const time = Date.now();
    console.log("[" + new Date(time).toLocaleDateString() + " " + new Date(time).toLocaleTimeString() + "] " + request.ip + " pulled " + id + "'s week.")
    pool.query('SELECT * FROM employees WHERE id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
  },

  getShifts: function(request, response){
    const id = parseInt(request.params.id);
    pool.query('SELECT shifts.end_time-shifts.start_time AS total, shifts.id AS shift_id, shifts.employee_id, shifts.weekday, shifts.start_time, shifts.end_time, employees.name AS name FROM shifts INNER JOIN employees ON employee_id=employees.id WHERE employee_id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
  },

  getStatus: function(request,response) {
    const id = parseInt(request.params.id);
    pool.query('SELECT shifts.end_time-shifts.start_time AS total, shifts.id AS shift_id, shifts.employee_id, shifts.weekday, shifts.start_time, shifts.end_time, employees.name AS name FROM shifts INNER JOIN employees ON employee_id=employees.id WHERE employee_id=$1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json('status of the current timepunch')
    });
  },

  clockIn: function(request,response) {
    const id = parseInt(request.params.id);
    pool.query('SELECT shifts.end_time-shifts.start_time AS total, shifts.id AS shift_id, shifts.employee_id, shifts.weekday, shifts.start_time, shifts.end_time, employees.name AS name FROM shifts INNER JOIN employees ON employee_id=employees.id WHERE employee_id=$1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json('status of the current timepunch')
    });
  },

  clockOut: function(request,response) {
    const id = parseInt(request.params.id);
    pool.query('SELECT shifts.end_time-shifts.start_time AS total, shifts.id AS shift_id, shifts.employee_id, shifts.weekday, shifts.start_time, shifts.end_time, employees.name AS name FROM shifts INNER JOIN employees ON employee_id=employees.id WHERE employee_id=$1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json('status of the current timepunch')
    });
  },

  newUser: function(request, response) {
    const fname = request.params.fname;
    const lname = request.params.lname;
    const username = request.params.username;
    const password = request.params.password;

    pool.query('INSERT INTO person (fname, lname, username, companyID, password) VALUES($1, $2, $3, $4, $5, $6)', [fname], [lname], [username], [1], [password], (error, results) => { 
      if (error) {
        throw error
      }
      response.status(200).json('status of the current timepunch')
    });
  }
}
