export default function Header({ category, title }) {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-300">
        {title}
      </p>
    </div>
  );
}
