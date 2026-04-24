import React, { useState } from 'react'
import { works } from '../data/data'
import { LuFilter } from 'react-icons/lu';
import { PiArrowUpRightBold } from "react-icons/pi";

const ALL = "All"

const Works = () => {

  const ctg = [ALL, ...Array.from(new Set(works.map((w) => w.category)))];

  const [filter, setFilter] = useState(ALL);

  const filtered = filter === ALL ? works : works.filter((w) => w.category === filter);

  return (
    <section id='works' className="section-padding bg-slate-50/70 relative" >
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-4">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-blue-600">
              <span className="w-6 h-px bg-blue-600" />
              Selected work
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-bold tracking-tight text-slate-900 leading-tight">
              Things I&rsquo;ve shipped
              <br className="hidden sm:block" />
              for ambitious teams.
            </h2>
          </div>
        </div>

        <div className="reveal reveal-delay-2 flex items-center gap-2 flex-wrap mb-12 " >
          <LuFilter className="w-4 h-4 text-slate-500 mr-1" />
          {ctg.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-4 h-9 rounded-full text-[13px] font-medium border transition-all ${filter === c
              ? "bg-slate-900 text-white border-slate-900 shadow-sm"
              : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
              }`} >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className=' container-xl '>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8" >
          {filtered.map((w, i) => (
            <a key={w.id} href={w.link} className={`reveal reveal-delay-${(i % 4) + 1
              } group relative rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-blue-300 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 card-shine`} >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img src={w.image} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 backdrop-blur text-slate-700 border border-white/80">
                    {w.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/90 backdrop-blur text-slate-600 border border-white/80">
                    {w.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <PiArrowUpRightBold className="w-4 h-4" />
                </div>
              </div>

              <div className=' p-6 '>
                <h3 className="text-[22px] font-semibold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {w.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed line-clamp-2">
                  {w.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-[11.5px] font-mono text-slate-600 bg-slate-50 border border-slate-200" > {t} </span>
                  ))}
                </div>
              </div>

            </a>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Works