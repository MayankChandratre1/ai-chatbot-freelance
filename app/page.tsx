import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <SignedIn>
            <SignOutButton />
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton />
        </SignedOut>
    </div>
  )
}

export default LandingPage