import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
export default async function Home() {
  const user =await currentUser();

  if(!user){
    return<Guest/>
  }
  return (
    <div></div>
    
  );
}
