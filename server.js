const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const configViewEngine = require('./app/config/view.config');
const app = express();

//cors
let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));


//Config view engine
configViewEngine(app);


//database code
const db = require('./app/models');
const Role = db.role;

//in production , jsut insert roles manaually into db
db.sequelize.sync().then(() => {
    console.log("Database connected!");
});


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


//simple route 
app.get('/', (req,res) => {
    res.json({message: "Welcome to Developer Portal"});
});



//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});