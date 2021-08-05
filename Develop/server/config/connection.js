const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://kaivont:<Cbulls2323!>@cluster0.rdv47.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB Endpoint')
);

mongoose.connection.on('error', (err) =>
  console.log(`Mongoose default connection error: ${err}`)
);

module.exports = mongoose.connection;
