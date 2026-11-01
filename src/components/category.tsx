import { cn } from "cn";

type CategoryFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex w-fit flex-wrap gap-1 rounded-full border bg-card p-1 shadow-sm">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors",
            active === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-foreground/70 hover:bg-muted"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
