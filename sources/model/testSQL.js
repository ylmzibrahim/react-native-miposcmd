import React from 'react';
import { View, Text } from 'react-native'
//import MSSQL from 'react-native-mssql';

const testSQL = () => {

    // const config = {
    //     server: '127.0.0.1', //ip address of the mssql database
    //     username: 'root', //username to login to the database
    //     password: '123456', //password to login to the database
    //     database: 'laravel8', //the name of the database to connect to
    //     port: 3306, //OPTIONAL, port of the database on the server
    //     // timeout: 5, //OPTIONAL, login timeout for the server
    // }
    // const connected = await MSSQL.connect(config);

    // const query = 'UPDATE USERS SET Active=0'
    // const result = await MSSQL.executeUpdate(query);

    return (
        <View>
            <Text>
                Lorem ipsum dolor sit amet.
            </Text>
        </View>
    );
}
 
export default testSQL;