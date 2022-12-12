import Link from "next/link";
import DateComponent from "../components/date";

export default function PostPreview({ title, date, excerpt, author, slug }) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
    </div>
  );
}
