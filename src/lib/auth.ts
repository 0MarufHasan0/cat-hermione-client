import { betterAuth} from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins"

const client = new MongoClient(process.env.BETTER_AUTH_MONGO_URI as string);
const db = client.db("Kindora");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
   emailAndPassword: { 
    enabled: true, 
  }, 

  google: {
    enabled: true,
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  },

  

  // Jwt token configuration

 plugins: [
        jwt(), 
    ] ,

    session : {
      // save session in cookie

      cookieCache : {
        enabled : true,
        strategy : 'jwt',
        maxAge : 7 * 24 * 60 * 60, // 7 days
      }

    }
});