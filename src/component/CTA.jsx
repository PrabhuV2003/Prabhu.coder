import React from 'react'
import { LuArrowUpRight, LuSparkles } from 'react-icons/lu';
import { Button } from './ui/Button';

const CTA = () => {

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-6 lg:pt-10 pb-6 lg:pb-10">
      <div className=' container-xl '>
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-10 lg:p-16" >
          {/* decorative shapes */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8" >
            <div className=' max-w-2xl '>
              <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-blue-100 text-blue-700 text-[12px] font-medium backdrop-blur" >
                <LuSparkles className=' w-3.5 h-3.5 ' />
                Taking on 2 new projects this quarter
              </div>
              <h2 className="reveal reveal-delay-1 mt-5 text-[32px] sm:text-[42px] lg:text-[52px] font-bold tracking-tight text-slate-900 leading-[1.05]" >
                Have a product idea?
                <span className=' block text-gradient-blue '>Let's build it together.</span>
              </h2>
              <p className="reveal reveal-delay-2 mt-5 text-[17px] text-slate-600 leading-relaxed max-w-xl" >
                Tell me about your team, goals and timeline. You&rsquo;'' get a thoughtfull reply — never a templated pitch — within 12 hours.
              </p>
            </div>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 shrink-0" >
              <Button onClick={() => scrollTo('#contact')} className="!rounded-full h-12 px-6 text-[15px] bg-slate-900 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all group" >
                Start a project
                <LuArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="outline"
                onClick={() => scrollTo("#works")}
                className="!rounded-full h-12 px-6 text-[15px] bg-white/70 backdrop-blur border-slate-200 text-slate-900 hover:bg-white hover:border-blue-400 transition-all" >
                See the work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA