const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = 'SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort FROM teachers JOIN assistance_requests ON teacher_id = teachers.id JOIN students ON student_id = students.id JOIN cohorts ON cohort_id = cohorts.id WHERE cohorts.name LIKE $1 ORDER BY teacher LIMIT $2;';


const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];
console.log("this is value", values)

pool.query(queryString, values)

.then(res => {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));