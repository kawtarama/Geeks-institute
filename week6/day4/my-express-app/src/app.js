// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const routes = require('./routes/index');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Routes
// routes(app);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const app = express();
// const routes = require('./routes/index');

// app.use(express.json());
// app.use('/', routes);

// app.listen(3000, () => {
//   console.log('Serveur démarré sur http://localhost:3000');
// });


const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/', routes);






app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});