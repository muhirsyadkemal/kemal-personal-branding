type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, text, inverted }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${inverted ? "inverted" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-intro">{text}</p> : null}
    </div>
  );
}
