export default function Section({ title, content, ...commonProps }) {
  return (
    <>
      <section {...commonProps}>
        <h2>{title}</h2>
        {content}
      </section>
    </>
  );
}
