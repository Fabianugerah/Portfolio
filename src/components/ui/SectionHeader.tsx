interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-2">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-white/50 text-sm leading-relaxed max-w-sm">
        Feel free to reach out through any of these channels. I&apos;m
        always open to discussing new projects.
      </p>
    </div>
  );
}
