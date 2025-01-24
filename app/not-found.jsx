import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <Image
            src="/not-found.jpg"
            alt="Not Found"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Link href="/">
            <p className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Go Back Home
            </p>
          </Link>
        </div>
      );
}