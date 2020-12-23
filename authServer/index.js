const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

app.post('/login', function (req, res) {
  console.log('login', req.params);
  res.send({
    status: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  });
});
app.get('/getTasks', function (req, res) {
  res.send([
    { id: '5fd4s', title: 'Feed the dog' },
    { id: '78s8s', title: 'Wash the dishes' },
    { id: 'rt8rt', title: 'Write lecture 3 ppt' },
  ]);
  // if (req.header('token')) {
  //   res.send([
  //     { id: '5fd4s', title: 'Feed the dog' },
  //     { id: '78s8s', title: 'Wash the dishes' },
  //     { id: 'rt8rt', title: 'Write lecture 3 ppt' },
  //   ]);
  // } else {
  //   res.send({ error: 'no_auth' });
  // }
});

app.listen(3000);
