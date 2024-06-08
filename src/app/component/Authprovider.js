"use client";
import {SessionProvider} from "next-auth/react"
export default function AuthProvide(props){

    return <SessionProvider>
            {props.children}
    </SessionProvider>


}