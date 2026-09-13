import { use, useState } from "react";
import { toast } from "react-toastify"; 
import type { TecType } from "./type";
import Card from "./Card";
import Stack from "./Stack";

export interface TechnoProps {
  technologiesPromise: Promise<TecType[]>;
}

export default function Techno({ technologiesPromise }: TechnoProps) {
  const techno = use(technologiesPromise);
  const [stack, setStack] = useState<TecType[]>([]);
  const handleAddToStack = (technology: TecType) => {
  const alreadyAdded = stack.some((item) => item.techName === technology.techName);
      if (alreadyAdded) {
      toast.warn(`${technology.techName} is already in your stack! ⚠️`, {
        toastId: `duplicate-${technology.techName}`,
      });
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.techName} added to your stack! ✅`);
  };

  const handleRemoveFromStack = (techName: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.techName !== techName)
    );
  };

  const handleRemoveAll = () => {setStack([]);};

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="container mx-auto mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore the Technologies
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SIDE */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techno.map((tech: TecType, index: number) => {
              const isAdded = stack.some(
                (item) => item.techName === tech.techName
              );

              return (
                <Card
                  key={index}
                  tech={tech}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                />
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <Stack
          stack={stack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}