import mongoose from "mongoose";

export const dbConfig = {
    url: 'mongodb+srv://alvarolgdeveloper:22461016@to-do.gnk8fmb.mongodb.net/To-Do?retryWrites=true&w=majority',
    database: 'To-Do',
    UserDataCollection: 'users',
    user: 'alvarolgdeveloper',
    password: '22461016',
}

mongoose.connect(dbConfig.url);
    console.log("Connection established with the database");
