import React from 'react'
import { process } from '../data/data'

const Process = () => {
  return (
    <section id='process' className="section-padding relative bg-slate-900 text-white overflow-hidden" >

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-blue-600/20 blur-3xl" />

      <div className=' container-xl relative '>
        <div className="max-w-2xl mb-14">
          <div className="reveal inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-sky-300">
            <span className=' w-6 h-px bg-sky-300 ' />
            How I work
          </div>
          <h2 className="reveal reveal-delay-1 mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-bold tracking-tight leading-tight" >
            A simple, transparent
            <span className="block text-gradient-blue">4-step process.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-[17px] text-slate-300 leading-relaxed">
            No surprises, no mystery timelines. You&rsquo;ll always know where we are, what&rsquo;s next, and why.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6" >
          {process.map((p, i) => (
            <div key={p.step} className={`reveal reveal-delay-${(i % 4) + 1
              } group relative p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-sky-400/40 transition-all duration-300`} >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[13px] text-sky-300 tracking-widest">
                  {p.step}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                  Phase
                </span>
              </div>
              <h3 className="mt-4 text-[22px] font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] text-slate-300 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-sky-400/50 via-blue-500/30 to-transparent" />
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Process