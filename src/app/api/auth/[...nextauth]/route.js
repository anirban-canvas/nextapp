import GoogleProvider from 'next-auth/providers/google'
import nextAuth from 'next-auth'
import 'dotenv/config'
console.log("Envs",process.env)
const handler=nextAuth({

    providers:[
        GoogleProvider({
            clientId:"804552324082-81bqouh39kv41v94naslovbn2mlpqrbb.apps.googleusercontent.com",
            clientSecret:"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"
        })
        
    ],
})

export {handler as POST,handler as GET}