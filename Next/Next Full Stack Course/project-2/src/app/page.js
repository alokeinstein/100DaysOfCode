'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

//server by default 

export default function Home() {

  const router = useRouter();
  console.log(router)
  const handleNavigation = () => {
    router.push("/products")
  }
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-3xl font-bold">Routing by Link</h1>
      <nav className="mt-4">
        <ul className="flex gap-4">
          <li className="hover:underline">
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/accounts"}>Accounts</Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-3xl font-bold"> Routing by useRouter</h1>
      <nav className="mt-4">
        <ul className="flex gap-4">
          <li className="hover:underline">
            <button onClick={handleNavigation}>Products</button>
          </li>
          <li>
            {/* Via this method we dont need to make another function to navigate */}
            <button onClick={() => router.push("/accounts")}>Accounts</button>
          </li>
        </ul>
      </nav>

    </main>
  );
}


