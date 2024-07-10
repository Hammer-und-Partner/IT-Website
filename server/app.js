import dotenv from 'dotenv';
import { generate_server } from './server.js';
async function init() {
    dotenv.config();
    generate_server();
}
init();
