const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

describe("Test the database", () => {
    test("Test person table", () => {
        pool.query('SELECT * FROM person WHERE id=1')
            .then(res => {
                    expect(res.rows[0].fname).toBe("john");
                    expect(res.rows[0].lname).toBe("doe");
                    expect(res.rows[0].username).toBe("jdoe10");
                    expect(res.rows[0].companyID).toBe(1);
                    expect(res.rows[0].password).toBe("password");
                }
            );
    });

    test("Test company table", () => {
        pool.query('SELECT * FROM company WHERE id=1')
            .then(res => {
                    expect(res.rows[0].name).toBe("rit");
                    expect(res.rows[0].location).toBe("rit");
                }
            );
    });

    test("Test timelog table", () => {
        pool.query('SELECT * FROM timelog WHERE person=1')
            .then(res => {
                    expect(res.rows[0].date).toBe("2-15");
                    expect(res.rows[0].clockIn).toBe("13:00");
                    expect(res.rows[0].clockOut).toBe("18:00");
                }
            );
    });
});
