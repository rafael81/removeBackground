import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight">
          누끼컷
        </h1>
      </Link>
   
    </header>
  );
}
