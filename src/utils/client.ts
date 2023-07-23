import { feathers } from '@feathersjs/feathers';
import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authentication from '@feathersjs/authentication-client';

const socket = io('http://localhost:3030/', {
  transports: ['websocket'],
  forceNew: true,
});

const client = feathers();

client.configure(socketio(socket));
client.configure(
  authentication({
    storage: AsyncStorage,
  }),
);

export default client;
