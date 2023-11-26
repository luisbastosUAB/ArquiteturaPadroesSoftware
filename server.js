const app = require('./config/express')();
const port = app.get('port');


// API inicia na porta configurada em default.json, com o comando "node server.js"
app.listen(port, () => {
  console.log(`App running at localhost:${port}`)
});
