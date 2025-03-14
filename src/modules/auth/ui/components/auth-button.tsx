import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";


export default function AuthButton() {

  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600  hover:text-blue-500 border-blue-500/20 rounded-full  shadow-none cursor-pointer"
          >
            <UserCircleIcon />
            <span>Sign In</span>

          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}