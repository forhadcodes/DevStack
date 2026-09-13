import type { TecType } from "./type";

interface CardProps {
  tech: TecType;
  isAdded: boolean;
  onAdd: (tech: TecType) => void;
}

export default function Card({
  tech,
  isAdded,
  onAdd,
}: CardProps) {
  return (
    <div className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-100 p-6">

      {/* Badge */}
      <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
        {tech.badge}
      </span>

      <div>
        {/* Image / Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 p-3">
          <img
            src={tech.icon}
            alt={`${tech.techName} icon`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Technology Name */}
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          {tech.techName}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {tech.description}
        </p>

        {/* Technology Information */}
        <div className="mt-4 text-sm flex justify-between leading-relaxed text-slate-500">
          <span>{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span>{tech.rating}</span>
        </div>
      </div>

      {/* Add Button */}
      <div className="mt-6 pt-4 border-t border-slate-50">
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold shadow-sm transition ${
            isAdded
              ? "bg-green-100 text-green-700 cursor-not-allowed"
              : "bg-black text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>

    </div>
  );
}