type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {eyebrow && <p className="font-black uppercase tracking-[0.18em] text-sm mb-3">{eyebrow}</p>}
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">{title}</h2>
      <div className="w-16 h-2 bg-black dark:bg-white mx-auto mb-6" />
      {description && <p className="text-lg font-bold max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
