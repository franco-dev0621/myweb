const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
const shortid = require("shortid");


const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(bodyParser.json());


require('dotenv').config();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(router);

//mongoose for mongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection estabished successfully');
});

//socket io for the messenger app 
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});
//database for ECOMMERCE
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

//database for EXercise app
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//route for ecomerce
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

//route for exercise app
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//PORTS
server.listen(process.env.PORT || 5000, () => console.log(`Messenger App Server has started on 5000`));
app.listen(port, () => {console.log(`Main Server is running on port: ${port}`);
});
