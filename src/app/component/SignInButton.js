
"use client";
import React from "react";

import {signIn, signOut, useSession} from 'next-auth/react'

export default function SigninButton(){


    const {data:session}=useSession()

    console.log(session)

    if(session && session.user){
        return <button onClick={()=>signOut()}> Logout </button>
    }else{
        return <button onClick={()=>signIn()}> Login </button>
    }
    

}