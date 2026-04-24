import React from "react";
import { services } from "../data/data";
import { LuSparkles } from "react-icons/lu";

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-5",
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-xl">
        {/* Header */}
        <div className="reveal inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-blue-600">
          <span className="w-6 h-px bg-blue-600" />
          Services
        </div>

        <h2 className="reveal reveal-delay-1 mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-bold tracking-tight text-slate-900 leading-tight">
          How I can help your
          <span className="text-gradient-blue"> team ship</span>.
        </h2>

        <p className="reveal reveal-delay-2 mt-5 text-[17px] text-slate-600 leading-relaxed max-w-2xl">
          Pragmatic, end-to-end engineering across the stack — so you can move
          from sketch to shipped product without juggling five vendors.
        </p>
      </div>

      {/* Grid */}
      <div className="container-xl mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon || LuSparkles;

            return (
              <div
                key={s.title}
                className={`reveal ${
                  delayClasses[i % 5]
                } group relative p-7 rounded-3xl border border-slate-200 bg-white 
                hover:border-blue-300 hover:-translate-y-1 
                hover:shadow-xl hover:shadow-blue-500/10 
                transition-all duration-300`}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 flex items-center justify-center text-blue-600 
                group-hover:scale-105 group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white group-hover:border-transparent transition-all">
                  <Icon className="w-[22px] h-[22px]" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[19px] font-semibold tracking-tight text-slate-900">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2 pt-5 border-t border-slate-100">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-[13.5px] text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;