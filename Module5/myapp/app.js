// map all routes to the express app
const express = require('express')
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const calculatorRoutes = require('./routes/calculatorRoutes');
const testRoutes = require('./routes/myTestRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express()

app.use(express.json());

app.use('/',express.static('public'));
app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);
app.use('/users', userRoutes);
app.get('*',(req,res)=>{

    res.send('404 not found');
});
//app.get('/', (req, res) => {
 //  res.send('Hello World!')
//})
// export the app
module.exports = app;