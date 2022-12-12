export default function PostTitle({ children }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {children}
      </h1>
    </div>
  );
}
