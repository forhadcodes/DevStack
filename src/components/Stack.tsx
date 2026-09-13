import type { TecType } from "./type";
import { toast } from "react-toastify";

interface StackProps {
  stack: TecType[];
  onRemove: (techName: string) => void;
  onRemoveAll: () => void;
}

export default function Stack({
  stack,
  onRemove,
  onRemoveAll,
}: StackProps) {
  const handleRemove = (techName: string) => {
    onRemove(techName);
    toast.info(`Removed ${techName} from your stack`);
  };

  const handleRemoveAll = () => {
    onRemoveAll();
    toast.warn("Cleared all technologies from your stack");
  };

  return (
    <aside className="lg:col-span-4 sticky top-6 rounded-2xl border border-amber-100 bg-amber-50/60 p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-amber-900">Your Stack</h3>

          <p className="mt-1 text-sm text-amber-800/80">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology Selected"
              : "Technologies Selected"}
          </p>
        </div>

        {/* Remove All */}
        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-200 transition"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-amber-300/60 p-6 text-center">
          <p className="text-sm font-medium text-amber-800">
            Your Stack is empty
          </p>

          <p className="mt-1 text-xs text-amber-700">
            Add technologies from the left to start building your stack.
          </p>
        </div>
      )}

      {/* Selected Technologies */}
      {stack.length > 0 && (
        <div className="mt-6 space-y-3">
          {stack.map((item) => (
            <div
              key={item.techName}
              className="flex items-center gap-3 rounded-xl border border-amber-200 bg-white p-3 shadow-sm"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2">
                <img
                  src={item.icon}
                  alt={`${item.techName} icon`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Information */}
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-slate-900">
                  {item.techName}
                </h4>

                <p className="text-xs text-slate-500">{item.category}</p>
              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemove(item.techName)}
                aria-label={`Remove ${item.techName}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}