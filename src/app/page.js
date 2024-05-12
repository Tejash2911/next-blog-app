import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-secondary p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Browse our blog collection</h2>
        <Link href={"/blogs"}>
          <Button> Explore Blogs</Button>
        </Link>
      </div>
    </div>
  );
}
