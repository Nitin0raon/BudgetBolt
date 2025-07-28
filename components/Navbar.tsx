import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/checkUser";

export default function Navbar() {
    const user=checkUser();
    return(
         <div className="bg-gray-600">
            <header className='container mx-auto  '>
      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href='/'>
          <Image
            src={'/goku.jpg'} alt='PlanStack logo' width={200} height={56}
            className='h-10 w-auto object-contain' />
        </Link>

        <div className='flex item-center gap-4'>
          <Link href={'/project/create'}>
            <Button variant="mybut">
              <span>Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl='/'>
              <Button variant='outline'>Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </nav>
    </header>
         </div>
    )
}