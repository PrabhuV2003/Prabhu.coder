import React from 'react'
import { LuCheckCheck } from 'react-icons/lu'

const About = () => {
  return (
    <section id='about' className="section-padding relative">
      <div className='container-xl'>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: label + heading */}
          <div className=' lg:col-span-5 '>
            <div className="reveal inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-blue-600">
              <span className="w-6 h-px bg-blue-600" />
              About Me
            </div>
            <h2 className=' reveal reveal-delay-1 mt-4 text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] font-bold tracking-tight text-slate-900 '>
              Turning ideas into digital products that perform
            </h2>
            <div className="reveal reveal-delay-2 mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-sky-50 border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  PV
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Prabhu V
                  </div>
                  <div className="text-[13px] text-slate-500">
                    Full-Stack Developer · Chennai, IN
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-[13.5px] text-slate-700">
                {[
                  "Remote-first, globally",
                  "English, Tamil",
                  "Solo or with a team",
                  "Responds within 12h",
                ].map((it) => (
                  <div key={it} className=' flex items-center gap-2 '>
                    <LuCheckCheck className=' w-4 h-4 text-blue-600 ' />
                    {it}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: copy + skills */}
          <div className="lg:col-span-7">
            <div className=' space-y-5 '>
              <p className='reveal reveal-delay-2 text-[17px] leading-relaxed text-slate-600 ' >I'm a full-stack developer specializing in building high-performance web and mobile applications for startups and growing product teams."</p>
              <p className=' reveal reveal-delay-3 text-[17px] leading-relaxed text-slate-600 '>With 4+ years of shipping production-grade software, I partner with founders, designers, and marketing teams to take ideas from sketch to launch — obsessively focused on speed, accessibility, and craft.</p>
            </div>

            <div className=' mt-10 space-y-5 '>

              <div className=' reveal reveal-delay-1 '>
                <div className=' flex items-center justify-between mb-2 '>
                  <span className="font-medium text-slate-800 text-[14.5px]">
                    React / Next.js
                  </span>
                  <span className="font-mono text-[12.5px] text-slate-500" >
                    95%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-1000 ease-out" style={{ width: '95%' }} />
                </div>
              </div>

              <div className=' reveal reveal-delay-2 '>
                <div className=' flex items-center justify-between mb-2 '>
                  <span className="font-medium text-slate-800 text-[14.5px]">
                    Node.js / FastAPI
                  </span>
                  <span className="font-mono text-[12.5px] text-slate-500" >
                    92%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-1000 ease-out" style={{ width: '92%' }} />
                </div>
              </div>

              <div className=' reveal reveal-delay-3 '>
                <div className=' flex items-center justify-between mb-2 '>
                  <span className="font-medium text-slate-800 text-[14.5px]">
                    TypeScript
                  </span>
                  <span className="font-mono text-[12.5px] text-slate-500" >
                    90%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-1000 ease-out" style={{ width: '90%' }} />
                </div>
              </div>

              <div className=' reveal reveal-delay-4 '>
                <div className=' flex items-center justify-between mb-2 '>
                  <span className="font-medium text-slate-800 text-[14.5px]">
                    PostgreSQL / MongoDB
                  </span>
                  <span className="font-mono text-[12.5px] text-slate-500" >
                    88%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-1000 ease-out" style={{ width: '88%' }} />
                </div>
              </div>

              <div className=' reveal reveal-delay-0 '>
                <div className=' flex items-center justify-between mb-2 '>
                  <span className="font-medium text-slate-800 text-[14.5px]">
                    AWS / Vercel / Docker
                  </span>
                  <span className="font-mono text-[12.5px] text-slate-500" >
                    85%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-1000 ease-out" style={{ width: '85%' }} />
                </div>
              </div>

              <div className=' reveal reveal-delay-1 '>
                <div className=' flex items-center justify-between mb-2 '>
                  <span className="font-medium text-slate-800 text-[14.5px]">
                    UI / UX Engineering
                  </span>
                  <span className="font-mono text-[12.5px] text-slate-500" >
                    82%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-1000 ease-out" style={{ width: '82%' }} />
                </div>
              </div>

            </div>

            <div className="reveal mt-10 flex flex-wrap gap-2">

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">React</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Next.js</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">TypeScript</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Node.js</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Python</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">FastAPI</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">PostgreSQL</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">MongoDB</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Redis</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Docker</span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">AWS</span>
              
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Tailwind</span>
              
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">GraphQL</span>
              
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12.5px] font-mono text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors">Stripe  </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About