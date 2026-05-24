import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {/* The new Back to Home link */}
      <Link 
        href="/" 
        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
      >
        &larr; Back to Home
      </Link>
      
      <SignIn />
    </div>
  );
}