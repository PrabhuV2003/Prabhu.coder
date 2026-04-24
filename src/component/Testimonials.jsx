import React, { useState } from 'react'
import { testimonials } from '../data/data';
import { LuChevronLeft, LuChevronRight, LuQuote, LuStar } from 'react-icons/lu';

const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const count = testimonials.length;

  const active = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + count) % count);

  const next = () => setIndex((i) => (i + 1) % count);

  return (
      <section id="testimonials" className="section-padding relative">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="reveal inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-blue-600">
              <span className="w-6 h-px bg-blue-600" />
              Testimonials
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-bold tracking-tight text-slate-900 leading-tight">
              Kind words from
              <span className="block text-gradient-blue">people I’ve worked with.</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-[17px] text-slate-600 leading-relaxed">
              A handful of quotes from founders, product managers and engineers
              I&rsquo;ve shipped alongside over the years.
            </p>

            <div className="reveal reveal-delay-3 flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:border-blue-400 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <LuChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:border-blue-400 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <LuChevronRight className="w-5 h-5" />
              </button>
              <span className="font-mono text-[13px] text-slate-500 ml-2">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/50 p-8 lg:p-10 shadow-[0_20px_80px_-40px_rgba(37,99,235,0.3)]">
              <LuQuote className="w-14 h-14 text-blue-100 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <LuStar
                    key={i}
                    className="w-5 h-5 fill-blue-500 text-blue-500"
                  />
                ))}
              </div>
              <p
                key={active.id}
                className="text-[20px] lg:text-[24px] leading-snug font-medium text-slate-800 tracking-tight"
              >
                “{active.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <div className="font-semibold text-slate-900">
                    {active.name}
                  </div>
                  <div className="text-[13px] text-slate-500">
                    {active.role}
                  </div>
                </div>
              </div>
            </div>

            {/* thumbnails */}
            <div className="flex gap-2 mt-5">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    i === index
                      ? "bg-gradient-to-r from-blue-600 to-sky-400"
                      : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials