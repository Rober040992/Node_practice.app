import { connection } from "mongoose";
import connectMongoose from "./lib/connectMongoose";

import Agent from '.models/Agent.js'

//conectamos a la base de datos
const connection = await connectMongoose()
console.log(connection)