import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
  );
}
