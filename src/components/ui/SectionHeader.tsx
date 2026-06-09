interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-2">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <hr className="w-16 border-2 border-white rounded-full mx-auto mt-3" />
    </div>
  );
}
