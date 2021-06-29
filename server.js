const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const configViewEngine = require('./app/config/view.config');
// const path = __dirname + '/app/views/';
const app = express();
// require('./app/router/router.js')(app);

// app.use(express.static(path));

//cors
let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));


//Config view engine
// configViewEngine(app);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//database code
const db = require('./app/config/db.config.js');
const Role = db.role;

//in production , jsut insert roles manaually into db
// db.sequelize.sync().then(() => {
//     console.log("Database connected!");
// });

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('DATABASE:Drop and Resync with { force: true }');
  initial();
});


//simple route 
// app.get('/', (req,res) => {
//     res.sendFile(path + "index.html");
//   });
  
// // routes
require('./app/router/router')(app);
// require('./app/routes/user.routes')(app);






//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

//remove in production
function initial() {
	Role.create({
		id: 1,
		name: "USER"
	});

	Role.create({
		id: 2,
		name: "DEV"
	});

	Role.create({
		id: 3,
		name: "ADMIN"
	});
}