import GoogleProvider from 'next-auth/providers/google'
import nextAuth from 'next-auth'
const handler=nextAuth({

    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET
        })
        
    ],
})

export {handler as POST,handler as GET}