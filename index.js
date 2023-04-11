const express = require('express');
const redis = require('redis');
const puerto = 8081;

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Numero de visitas ' + visits + "<br>Mascala toa");
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(parseInt(puerto), () => {
  console.log('listening on port ' + puerto);
});
