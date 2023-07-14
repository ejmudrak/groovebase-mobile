import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authentication from '@feathersjs/authentication-client';

const app = feathers();

// Connect to the API URL
const restClient = rest('http://localhost:3030');

// Configure an AJAX library (see below) with that client
app.configure(restClient.fetch(window.fetch.bind(window)));

app.configure(
  authentication({
    storage: AsyncStorage,
  }),
);

export default app;
