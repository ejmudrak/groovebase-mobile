import { feathers } from '@feathersjs/feathers';
import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authentication from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';

const client = feathers();

// Connect to the API URL
const restClient = rest('http://localhost:3030');

// Configure an AJAX library (see below) with that client
client.configure(restClient.fetch(window.fetch.bind(window)));

// const socket = io('http://localhost:3030/', {
//   transports: ['websocket'],
//   forceNew: true,
// });

// client.configure(socketio(socket));

client.configure(
  authentication({
    storage: AsyncStorage,
  }),
);

export default client;
