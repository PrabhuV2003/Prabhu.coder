import React from 'react'
import { Button } from './ui/Button'
import { PiArrowUpRightBold } from "react-icons/pi";
import Prabhu from '../assets/prabhu.png'
import { LuGithub, LuLinkedin, LuInstagram, LuZap, LuCodeXml, LuStar } from "react-icons/lu";

const Hero = () => {
  return (
    <section id='top' className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden hero-glow">

      {/* grid background */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />

      {/* soft blue gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-200/60 blur-3xl animate-float-slow" />
      <div className="absolute top-20 -right-24 w-[30rem] h-[30rem] rounded-full bg-sky-200/50 blur-3xl animate-float-reverse" />

      <div className=' container-xl relative '>
        <div className=' grid lg:grid-cols-12 gap-10 lg:gap-14 items-center '>
          {/* Left column: content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[12.5px] font-medium text-slate-700">
                Available for projects · 2026
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 text-[38px] leading-[1.05] sm:text-[52px] lg:text-[68px] font-extrabold tracking-[-0.03em] text-slate-900">
              I build <span className="text-gradient-blue">Digital Products</span>
              <br />
              people love to use.
            </h1>

            <p className="reveal reveal-delay-2 text-[16.5px] lg:text-[18px] leading-relaxed text-slate-600 max-w-xl">
              I&rsquo;m Prabhu V, a freelance full-stack developer based in Chennai. For 4+ years I&rsquo;ve partnered with
              founders and product teams to ship fast, thoughtful software —
              from first commit to real customers.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-3 pt-1">
              <Button className="!rounded-full h-12 px-6 text-[15px] bg-slate-900 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all group">
                Start a project
                <PiArrowUpRightBold className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="outline"
                className="!rounded-full h-12 px-6 text-[15px] border-slate-300 bg-white/70 backdrop-blur hover:bg-white hover:border-blue-400 text-slate-900 transition-all">
                View my work
              </Button>

              <div className="flex items-center gap-1 ml-1">
                <a href="#" target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <LuGithub className='w-[18px] h-[18px]' />
                </a>
                <a href="#" target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <LuLinkedin className='w-[18px] h-[18px]' />
                </a>
                <a href="#" target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <LuInstagram className='w-[18px] h-[18px]' />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-4 grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-slate-200/70 w-full max-w-xl">
              {[
                { v: '4+', l: 'Years shipping' },
                { v: '25', l: 'Projects delievered' },
                { v: '25', l: 'Happy clients' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[26px] sm:text-[32px] font-bold tracking-tight text-slate-900">
                    {s.v}
                  </div>
                  <div className="text-[11.5px] uppercase tracking-widest text-slate-500 font-medium mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: portait card */}
          <div className="lg:col-span-5 relative reveal reveal-delay-2">
            <div className="relative mx-auto max-w-[440px]">
              {/* decorative gradient ring */}
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-blue-400/40 via-sky-300/40 to-indigo-300/40 blur-2xl" />
              <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 opacity-90" />

              {/* portrait */}
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 aspect-[4/5] shadow-2xl shadow-blue-500/20">
                <img src={Prabhu} alt="Prabhu Developer Freelancer" className="w-full h-full object-cover"
                  loading="eager" />
                {/* subtle bottom gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                {/* signature name tag */}
                <div className="absolute left-5 bottom-5 right-5 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-[17px] tracking-tight drop-shadow">
                      Prabhu V
                    </div>
                    <div className="text-white/80 text-[12.5px] font-mono tracking-wide">
                      Full-Stack Developer
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-medium text-slate-800 border border-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>
              </div>

              {/* Floating chip: years */}
              <div className="hidden sm:flex absolute -left-8 top-10 items-center gap-3 bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-100 px-4 py-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white">
                  <LuZap className=' w-5 h-5 ' />
                </div>
                <div>
                  <div className="text-[18px] font-bold text-slate-900 leading-none">
                    4+ yrs
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium uppercase tracking-wider">
                    Experience
                  </div>
                </div>
              </div>

              {/* Floating chip: tech */}
              <div className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 items-center gap-3 bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-100 px-4 py-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <LuCodeXml className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-slate-900 font-mono">
                    React · FastAPI
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Full-stack
                  </div>
                </div>
              </div>

              {/* Floating chip: rating */}
              <div className="hidden sm:flex absolute -left-4 -bottom-5 items-center gap-2 bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-100 px-4 py-2.5">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <LuStar key={i} className=' w-3.5 h-3.5 fill-blue-500 text-blue-500 ' />
                  ))}
                </div>
                <span className="text-[12.5px] font-semibold text-slate-900">5.0</span>
                <span className="text-[11.5px] text-slate-500">
                  · 30+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee of tech stack */}
      <div className="relative mt-16 lg:mt-24 overflow-hidden border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
        <div className="flex gap-10 py-5 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 shrink-0">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "MongoDB",
                "AWS",
                "Docker",
                "Tailwind CSS",
                "GraphQL",
              ].map((t) => (
                <span key={`${i}-${t}`} className="text-[15px] font-mono text-slate-500 hover:text-blue-600 transition-colors" >
                  {t}
                  <span className="mx-5 text-blue-300">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero