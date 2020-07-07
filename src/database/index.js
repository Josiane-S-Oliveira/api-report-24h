import { Pool } from 'pg';
const client = new Pool({
  user: 'chirpstack_as',
  host: '3.19.12.121',
  database: 'chirpstackstore',
  password: 'super1@saga',
  port: 5432,
});

client.connect();
export default {
  query: (text, params) => client.query(text, params),
}