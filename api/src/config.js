import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "user";
export const DB_PASSWORD = process.env.DB_PASSWORD || "password";
export const DB_DATABASE = process.env.DB_DATABASE || "app_db";
export const DB_PORT = process.env.DB_PORT || 3306;


// console.log(DB_PORT);