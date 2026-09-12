import { use } from "react"
import type { TecType } from "./type"
export interface TechnoProps {
    technologiesPromise: Promise<TecType[]>
}

export default function Techno({ technologiesPromise }: TechnoProps) {
    const techno = use(technologiesPromise);
    console.log(techno);
    return (
<div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="container mx-auto mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore the Technologies
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Technologies List (8 Columns) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techno.map((tech: TecType, index: number) => (
              /* 1. Added 'relative' here so the badge pins to the main card container */
              <div 
                key={index} 
                className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-100 p-6"
              >
                {/* 2. Added the badge here so it is a direct child of the relative card container */}
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
                  {tech.badge}
                </span>

                <div>
                  {/* Image/Icon Wrapper (Removed the accidental relative/top/right positioning) */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 p-3">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.techName} icon`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {tech.techName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {tech.description}
                  </p>
                  <div className='mt-4 text-sm flex justify-between leading-relaxed text-slate-500'>
        <span> {`${tech.category}`}</span>
        <span> {`${tech.difficulty}`}</span>
        <span> {`${tech.rating}`}</span>
        
      </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <button className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                    Add to Stack
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Configuration Sidebar / Summary (4 Columns) */}
        <aside className="lg:col-span-4 sticky top-6 rounded-2xl border border-amber-100 bg-amber-50/60 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-amber-900">Your Stack Summary</h3>
          <p className="mt-2 text-sm text-amber-800/80">
            Select technologies from the left to start building your combination.
          </p>
          
          {/* Placeholder for selected items */}
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-dashed border-amber-300/60 p-4 text-center text-xs text-amber-700">
              No items selected yet
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}