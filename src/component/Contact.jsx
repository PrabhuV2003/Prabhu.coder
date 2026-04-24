import React, { useState } from 'react'
import { LuCheck, LuLoader, LuMail, LuMapPin, LuPhone, LuSend } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from './ui/Select';

const Contact = () => {

  const BUDGETS = [
    "< $5K",
    "$5K - $15K",
    "$15K - $40K",
    "$40K - $100K",
    "> $100K",
  ];

  const SERVICES = [
    "Web app",
    "Backend / API",
    "Mobile app",
    "Performance audit",
    "Technical advisory",
    "Something else",
  ]

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const [submitting, setSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.info(
        "Missing Info"
      )
      return;
    }
    setSubmitting(true);
    // Mock submission - save to localStorage for noe
    await new Promise((r) => setTimeout(r, 900));
    const existing = JSON.parese(localStorage.getItem("contact_submissions") || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("contact_submissions", JSON.stringify(existing));
    setSubmitting(false);
    setSubmitted(true);
    toast.success(
      'Message sent'
    );
    setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000)
  };


  return (
    <section id='contact' className='section-padding relative' >
      <div className='container-xl'>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left column: intro + contact deatils + map */}
          <div className=' lg:col-span-5 '>
            <div className="reveal inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.2em] text-blue-600" >
              <span className=' w-6 h-px bg-blue-600 ' />
              Get in touch
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-bold tracking-tight text-slate-900 leading-tight">
              Let&rsquo;s make <span className=' block text-gradient-blue '>
                something great.
              </span>
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-[16px] text-slate-600 leading-relaxed">
              Fill out the form, or reach out directly — I usually respond within a day.
            </p>

            <div className=' reveal reveal-delay-3 mt-8 space-y-3 '>
              <a href="mailto:prabhu.coder@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40 transition-colors group" >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <LuMail className=' w-5 h-5 ' />
                </div>
                <div>
                  <div className="text-[12px] text-slate-500 font-mono uppercase tracking-wider">
                    Email
                  </div>
                  <div className=' text-[15px] font-medium text-slate-900 '>
                    prabhu.coder@gmail.com
                  </div>
                </div>
              </a>
              <a href="tel:+919176859175" className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40 transition-colors group" >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors" >
                  <LuPhone className=' w-5 h-5 ' />
                </div>
                <div>
                  <div className="text-[12px] text-slate-500 font-mono uppercase tracking-wider">
                    Phone
                  </div>
                  <div className=' text-[15px] font-medium text-slate-900 '>
                    +91 9176859175
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white" >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600" >
                  <LuMapPin className=' w-5 h-5 ' />
                </div>
                <div>
                  <div className="text-[12px] text-slate-500 font-mono uppercase tracking-wider" >
                    Based in
                  </div>
                  <div className="text-[15px] font-medium text-slate-900">
                    Chennai, IN · Remote worldwide
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-4 mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md" >
              <iframe
                title='Location map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1776999453081!5m2!1sen!2sin'
                width="100%"
                height='260'
                style={{ border: 0 }}
                allowFullScreen=""
                loading='lazy'
                referrerPolicy='no-referrer-when-dowgrade'
              />
            </div>
          </div>

          {/* Right column: contact form */}
          <div className=' lg:col-span-7 reveal reveal-delay-2 '>
            <form onSubmit={onSubmit} className="relative p-7 lg:p-10 rounded-3xl border border-slate-200 bg-white shadow-[0_20px_80px_-40px_rgba(37,99,235,0.25)]" >
              <div className=' grid sm:grid-cols-2 gap-5 '>
                <div>
                  <Label htmlFor="name" className="text-[13px] font-medium text-slate-700">
                    Your name *
                  </Label>
                  <Input id="name" value={form.name} onChange={update("name")} placeholder="Jane Doe" className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50/60 focus-visible:ring-blue-500" />
                </div>
                <div>
                  <Label htmlFor="email" className=" text-[13px] font-medium text-slate-700 " >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50/60 focus-visible:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-[13px] font-medium text-slate-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Acme Inc."
                    className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50/60 focus-visible:ring-blue-500"
                  />
                </div>
                <div>
                  <Label className=" text-[13px] font-medium text-slate-700 " >
                    Service
                  </Label>
                  <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))} >
                    <SelectTrigger className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50/60 focus:ring-blue-500">
                      <SelectValue placeholder="What do you need?" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s} >
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className=' sm:col-span-2 '>
                  <Label className=" text-[13px] font-medium text-slate-700 " >
                    Budget
                  </Label>
                  <div className=' mt-2 flex flex-wrap gap-2 '>
                    {BUDGETS.map((b) => (
                      <button type='button' key={b} onClick={() => setForm((f) => ({ ...f, budget: b }))} className={`px-4 h-10 rounded-full text-[13px] border transition-all ${form.budget === b
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                        }`} >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div className=' sm:col-span-2 '>
                  <Label htmlFor="message" className=" text-[13px] font-medium text-slate-700 " >
                    Project details *
                  </Label>
                  <Textarea id="message" value={form.value} onChange={update("message")} placeholder="Tell me about your project, goals and timelines..." rows={5} className="mt-2 rounded-xl border-slate-200 bg-slate-50/60 focus-visible:ring-blue-500 resize-none" />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" >
                <p className=' text-[12.5px] text-slate-500 '>
                  By sending, you agree to be contacted about yout enquiry. No spam, ever.
                </p>
                <Button type="submit" disabled={submitting} className="rounded-full h-12 px-6 text-[15px] bg-slate-900 hover:bg-blue-600 text-white shadow-md hover:shadow-xl hover:shadow-blue-500/30 transition-all group min-w-[160px]" >
                    {submitting ? (
                      <>
                        <LuLoader className=' w-4 h-4 mr-2 animate-spin ' />
                        Sending
                      </>
                    ) : submitted ? (
                    <>
                      <LuCheck className=' w-4 h-4 mr-2 ' />
                      Sent
                    </>
                    ) : (
                    <>
                      Send message
                      <LuSend className=' w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform ' />
                    </>
                    )
                  }
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact