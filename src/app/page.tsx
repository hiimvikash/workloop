"use client"

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";



export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div>
      <h1>Logged In!</h1>
      <Button onClick={()=>void signOut()}>;
        Sign out
      </Button>
    </div>
  );
}
