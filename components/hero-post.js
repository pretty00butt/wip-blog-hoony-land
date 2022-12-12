import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import DateComponent from "../components/date";

export default function HeroPost({ category, title, date, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">{/* <CoverImage title={title} slug={slug} url={coverImage.url} /> */}</div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h5 className="mb-4 text-2xl lg:text-3xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h5>
          <div className="mb-4 md:mb-0 text-md">
            <i class="fa-solid fa-hashtag"></i>
            {category.name.toLowerCase()} / <DateComponent dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
