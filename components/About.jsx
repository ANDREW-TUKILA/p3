export default function About({ lang, about }) {
  return (
    <section className="container mt-14">
      <h2 className="text-2xl font-bold">{about[lang].headline}</h2>
      <div className="mt-4 grid gap-3 text-gray-700">
        {about[lang].body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
