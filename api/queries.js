const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const debug = process.env.DEBUG;

module.exports = {
  getUser: function(request, response){

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
      const id = parseInt(request.params.id);
      const time = Date.now();
      console.log("[" + new Date(time).toLocaleDateString() + " " + new Date(time).toLocaleTimeString() + "] " + request.ip + " pulled " + id + "'s week.")
      pool.query('SELECT * FROM employees WHERE id=$1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)});
    }
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

  ping: function(request, response) {
    response.status(200).json("PONG");
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
  }
}
