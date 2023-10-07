const mysql = require('mysql');
const { dbConfig } = require('./keys');

const pool = mysql.createPool(dbConfig);

let isConnected = false;

async function connect() {
    try {
        const connection = await pool.getConnection();
        console.log('DB IS CONNECTED');
        isConnected = true;
        return connection;
    } catch (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('DATABASE HAS TOO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.log('DATABASE CONNECTION WAS REFUSED');
        }
    }
}

async function disconnect(connection) {
    try {
        await connection.release();
        isConnected = false;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    connect,
    disconnect,
    isConnected
};
