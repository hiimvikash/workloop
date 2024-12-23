"use client";

import { useState } from "react";
import { SignInFlow } from "@/features/auth/types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {

    const [state, setState] = useState<SignInFlow>("signIn")
    return (
        <div className="h-full bg-[#5c3b58] flex items-center justify-center">
             <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard setState = {setState}/> : <SignUpCard setState = {setState}/>}
             </div>
        </div>
    )
}