var { knex }  = require('./database_conf');
const express = require('express')
const app = express()
const port = 3000
const pug = require('pug');


app.set('view engine', 'pug')

app.get('/', (req, res) => {
	knex.select('*')
	.from('anime')
	.then(resp => {
		res.render('index', { data: resp})
	})
})

app.get('/anime', (req, res) => {
  let result;
	knex.select('*')
	.from('anime')
	.then(resp => {
		res.json(resp);
	})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})