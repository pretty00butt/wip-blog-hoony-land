import DateComponent from "../components/date";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg text-right">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
