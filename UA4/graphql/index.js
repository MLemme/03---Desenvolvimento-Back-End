const express = require('express');

const {createHandler} = require('graphql-http/lib/use/express');

const schema = require('./produto-schema');

const app = express();

app.all('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });

console.log('Listening to port 4000');