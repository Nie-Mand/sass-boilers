interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="font-semibold text-lg">{title}</h2>
      {subtitle && (
        <p className="text-sm font-normal text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
