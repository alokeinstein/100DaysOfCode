import mongoose, { Document, Schema } from "mongoose";

// This is defining an interface for a Message object
//An interface in TypeScript is a way to describe the shape of an object. It ensures that any object that implements this interface has the defined structure
//extends Document tells TypeScript that this interface represents a MongoDB document (via Mongoose). Document includes some MongoDB-specific methods like save(), update(), etc.
export interface Message extends Document {
    content: string;
    createdAt: Date;
}  


//Mongoose + TypeScript: The combination of Mongoose and TypeScript lets you enforce type safety when working with MongoDB models. The Schema<Message> and Schema<User> ensure that the documents created using this schema follow the structure defined by the Message and User interfaces.
//A schema in Mongoose is a blueprint for defining the structure of documents within a MongoDB collection. It specifies the fields, their types, default values, validation rules, and other configurations. Think of it as a way to enforce a consistent structure for the data stored in your database.
//MessageSchema is the Mongoose schema that defines how Message documents are structured in the MongoDB database.
const MessageSchema: Schema<Message> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verfyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: { type: String, required: [true, "Username is required"], trim: true, unique: true },
    email: { type: String, required: [true, "Email is required"], unique: true, match: [/\S+@\S+\.\S+/, "Email is invalid"] },
    password: { type: String, required: [true, "Password is required"] },
    verifyCode: { type: String, required: [true, "Verify code is required"] },
    verfyCodeExpiry: { type: Date, required: [true, "Verify code Expiry is required"] },
    isVerified: { type: Boolean, default: false },
    isAcceptingMessage: { type: Boolean, default: true },
    messages: [MessageSchema],
});

//mongoose.models is an object that stores all the models that have been created using mongoose.model().
//mongoose.models.User checks if a model named User already exists.
//mogoose.models.User agar already exist karta hai to uska type ham mongoose.Model<User> ye set karenge iska matlb ki agar User naam ka model hai to uska type <User>(schema) kar do.
//mongoose.model<User> creates a new model named User using the UserSchema if it doesn’t already exist.

//mongoose.model<User>("User", UserSchema):
//By writing <User>, you are telling TypeScript that this model will handle documents that conform to the User interface.
//This string "User" is the name of the model. It is used internally by Mongoose to keep track of the models.
//When you call mongoose.model("User", UserSchema), you are creating a model named User based on the UserSchema.
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
export default UserModel;





/* TYPESCRIPT BASICS
//let name: string = "Alok";
//let age: number = 25;
//let isVerified: boolean = true;
*/

/* 
SCHEMA:
-->You define the fields that documents in the collection will have, along with their types.
-->Schemas allow you to specify validation rules for fields, ensuring data integrity.
-->You can set default values for fields. If a value is not provided, the default will be used.

MODELS:
1.Blueprint (Schema): Defines the structure and specifications of the house.
2.Construction Company (Model): Uses the blueprint to build houses.
3.House (Document): An individual house built according to the blueprint.

   --->CONSTRUCTOR:A constructor is a special type of function in object-oriented programming that is used to create and initialize an object.

-->Models are instances of schemas.
-->Model is a constructor compiled from a schema.
-->Used to create and manage documents in the database.

Document: A document is an instance of a schema, representing a single record(house) in the MongoDB collection. Documents inherit from the Document interface provided by Mongoose, which includes methods like .save() to save the document to the database.

*/
