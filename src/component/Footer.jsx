import React from 'react'
import { LuArrowUp, LuGithub, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'

const Footer = () => {

  const SECTIONS = [
    {
      title: "Explore",
      links: [
        { label: "About", href: "#about" },
        { label: "Works", href: "#works" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Email", href: `mailto:heyprabhu.coder@gmail.com` },
        { label: "Schedule call", href: "#contact" },
      ]
    }
  ]

  return (
    <footer className="relative border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40" >
      <div className="container-xl py-14 lg:py-20" >
        <div className="grid lg:grid-cols-12 gap-10" >
          <div className='lg:col-span-5'>
            <div className=' flex items-center gap-2 '>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-sm font-mono">P.
                </span>
              </div>
              <span className="font-semibold tracking-tight text-slate-900 text-[17px]" >
                Prabhu V
              </span>
            </div>
            <p className="mt-5 text-[15px] text-slate-600 leading-relaxed max-w-md" >
              Freelance full-stack developer helping product teams ship polished, performant software — remote from Chennai, IN.
            </p>
            <div className=' mt-6 flex items-center gap-2 ' >
              {[
                { Icon: LuGithub, href: '#', label: 'GitHub' },
                { Icon: LuLinkedin, href: '#', label: 'Linkedin' },
                { Icon: LuInstagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target='_blank' rel='noreferrer' aria-label={label} className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 transition-colors" >
                  <Icon className=' w-[18px] h-[18px] ' />
                </a>
              ))}
            </div>
          </div>

          <div className=' lg:col-span-4 grid grid-cols-2 gap-6 '>
            {SECTIONS.map((s) => (
              <div key={s.title} >
                <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-slate-500" >
                  {s.title}
                </div>
                <ul className=' mt-4 space-y-2 '>
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[14.5px] text-slate-700 hover:text-blue-600 transition-colors" >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='lg:col-span-3' >
            <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-slate-500">
              Currently
            </div>
            <div className=' mt-4 flex items-center gap-2 '>
              <span className=' relative flex h-2 w-2 '>
                <span className=' animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ' />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[14px] font-medium text-slate-700">
                Book Me
              </span>
            </div>
            <a href={`mailto:heyprabhu.coder@gmail.com`} className="mt-5 inline-block font-mono text-[13.5px] stat-underline text-slate-900 hover:text-blue-600 transition-colors" >
              heyprabhu.coder@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className=' text-[13px] text-slate-500 '>
            © {new Date().getFullYear()} Prabhu V. Crafted with care in Chennai, IN.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group inline-flex items-center gap-2 text-[13px] font-medium text-slate-700 hover:text-blue-600 transition-colors" >
            Back to top
            <span className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center group-hover:border-blue-400 transition-colors" >
              <LuArrowUp className=' w-4 h-4 ' />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer