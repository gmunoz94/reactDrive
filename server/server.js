const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./config/connection');
const routes = require('./routes');


const patient = require('./models/Patient');
const glOrder = require('./models/GlOrder');
const clOrder = require('./models/ClOrder');
const frame = require('./models/Frame');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now Listening on port: ${PORT}`))
})