const express = require('express');
const apiRouter = require('./src/routes');
const { errorHandler,logErrors } = require('./src/middlewares/errorHandler');
const db = require('./src/lib/db');
const app = express();
const port = 8000;

app.use(express.json());

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log('listening on port 8000');
    db.connect()
    .then(() => {console.log("DB Connected")})
    .catch(err => {console.log("Connection Refused: ", err)});
})