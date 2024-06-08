import GoogleProvider from 'next-auth/providers/google'
import nextAuth from 'next-auth'
import 'dotenv/config'
console.log("Envs",process.env)
const handler=nextAuth({

    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret:process.env.CLINET_SECRET
        })
        
    ],
})

export {handler as POST,handler as GET}