import { feathers } from '@feathersjs/feathers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authentication from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';

const client = feathers();

// Connect to the API URL
const restClient = rest(process.env.EXPO_PUBLIC_API_URL);

// Configure an AJAX library (see below) with that client
client.configure(restClient.fetch(window.fetch.bind(window)));


client.configure(
  authentication({
    storage: AsyncStorage,
  }),
);

export default client;
