import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, DollarSign, Rocket, BookOpen, Cpu, ArrowRight, Mail, Phone, MapPin, Star, ShieldCheck, TrendingUp, Gauge, Building2, Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, Button, Badge, Tabs } from './ui/primitives';

// simple hash router
function useHashRoute(defaultRoute:string='home'){ 
  const [route, setRoute] = useState<string>(window.location.hash.replace('#','') || defaultRoute);
  useEffect(()=>{ 
    const fn = () => setRoute(window.location.hash.replace('#','') || defaultRoute);
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, [defaultRoute]);
  return { route, navigate: (r:string) => window.location.hash = r };
}

const NavLink = ({ to, label, route }:{to:string,label:string,route:string}) => (
  <a href={`#${to}`} className={`text-sm font-medium hover:opacity-80 transition ${route===to?'text-white':'text-white/80'}`}>{label}</a>
);

const Section: React.FC<{id:string, className?:string}> = ({ id, className='', children }) => (
  <section id={id} className={`py-16 px-4 md:px-8 ${className}`}>{children}</section>
);

const Feature = ({ Icon, title, desc }:{Icon:any,title:string,desc:string}) => (
  <div className="flex gap-4 items-start">
    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur"><Icon className="w-6 h-6 text-white" /></div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Testimonial = ({ quote, name, role }:{quote:string,name:string,role:string}) => (
  <Card className="bg-white/70 backdrop-blur shadow-lg">
    <CardContent className="pt-6">
      <p className="italic text-slate-700">“{quote}”</p>
      <div className="mt-4 text-sm text-slate-600">— <span className="font-semibold text-slate-800">{name}</span>, {role}</div>
    </CardContent>
  </Card>
);

function PriceItem({ title, price, period='one-time', bullets=[], ctaLabel='Get Started', badge, highlight=false }:{title:string, price:number, period?:string, bullets?:string[], ctaLabel?:string, badge?:string, highlight?:boolean}){
  return (
    <Card className={`relative ${highlight?'ring-2 ring-indigo-500 shadow-xl':''}`}>
      {badge && <Badge className="absolute -top-3 left-3 bg-indigo-600 text-white">{badge}</Badge>}
      <CardHeader>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-slate-500 text-sm">{period}</div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold tracking-tight mb-4">${price}</div>
        <ul className="space-y-2 text-sm">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-green-600" /> <span>{b}</span></li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{ctaLabel}</Button>
      </CardFooter>
    </Card>
  )
}

const BlogCard = ({ title, excerpt, tag, date }:{title:string,excerpt:string,tag:string,date:string}) => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex justify-between items-center">
        <Badge>{tag}</Badge>
        <span className="text-xs text-slate-500">{date}</span>
      </div>
      <div className="text-xl font-bold mt-2">{title}</div>
      <p className="text-slate-600">{excerpt}</p>
    </CardHeader>
    <CardFooter>
      <Button variant="outline" className="w-full">Read Post</Button>
    </CardFooter>
  </Card>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-10 px-4 md:px-8">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold text-lg">MKW Consulting</h4>
        <p className="text-sm text-white/70 mt-2">Day trading consultation, custom indicators, and prop firm coaching.</p>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Navigate</h5>
        <ul className="space-y-2 text-sm text-white/80">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
          <li><a href="#sales" className="hover:underline">Sales</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Contact</h5>
        <ul className="space-y-2 text-sm text-white/80">
          <li className="flex gap-2 items-center"><Mail className="w-4 h-4" /> hello@mkwtrading.com</li>
          <li className="flex gap-2 items-center"><Phone className="w-4 h-4" /> (555) 010-2025</li>
          <li className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> Remote / U.S.</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Trust</h5>
        <ul className="space-y-2 text-sm text-white/80">
          <li className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4" /> Secure checkout</li>
          <li className="flex gap-2 items-center"><Star className="w-4 h-4" /> 5-star client reviews</li>
          <li className="flex gap-2 items-center"><Building2 className="w-4 h-4" /> Prop-firm expertise</li>
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 text-xs text-white/60">© {new Date().getFullYear()} MKW Consulting. All rights reserved.</div>
  </footer>
);

export default function App(){
  const { route } = useHashRoute('home');
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-indigo-600 grid place-items-center"><LineChart className="w-5 h-5 text-white"/></div>
            <span className="font-semibold tracking-tight">MKW Consulting</span>
          </div>
          <nav className="flex gap-4">
            <NavLink to="home" label="Home" route={route} />
            <NavLink to="blog" label="Blog" route={route} />
            <NavLink to "sales" label="Sales" route={route} />
            <NavLink to="contact" label="Contact" route={route} />
          </nav>
        </div>
      </div>

      {/* Landing */}
      <Section id="home" className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Trade Smarter with <span className="underline decoration-white/40">MKW Consulting</span></h1>
            <p className="mt-4 text-white/90 text-lg">Day trading consultation, battle-tested custom indicators, and prop firm coaching designed to elevate your edge and protect your capital.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="gap-2"><Rocket className="w-5 h-5"/> Book a Consultation</Button>
              <Button variant="secondary" className="gap-2" onClick={()=>window.location.hash='sales'}><DollarSign className="w-5 h-5"/> Browse Indicators</Button>
              <Button variant="outline" className="gap-2" onClick={()=>window.location.hash='sales'}><Gauge className="w-5 h-5"/> Prop Firm Coaching</Button>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <Feature Icon={TrendingUp} title="Data-Driven" desc="Quant-style playbooks and stats-backed decisions, not guesses." />
              <Feature Icon={Cpu} title="Custom Tools" desc="Pro-grade NinjaTrader indicators and overlays built for clarity." />
              <Feature Icon={BookOpen} title="Execution Playbooks" desc="Risk-first guidance to navigate evaluations and funded phases." />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
              <Card className="relative z-10">
                <CardHeader>
                  <div className="text-xl font-bold">What We Do</div>
                  <div className="text-slate-500 text-sm">Three focused service pillars</div>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border"><h4 className="font-semibold mb-2">Consulting</h4><p className="text-sm text-slate-600">1:1 day-trading mentorship and system design.</p></div>
                  <div className="p-4 rounded-xl bg-slate-50 border"><h4 className="font-semibold mb-2">Indicators</h4><p className="text-sm text-slate-600">Clean, actionable NinjaTrader toolkits.</p></div>
                  <div className="p-4 rounded-xl bg-slate-50 border"><h4 className="font-semibold mb-2">Prop Firms</h4><p className="text-sm text-slate-600">Evaluation prep and rule-compliant strategies.</p></div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={()=>window.location.hash='sales'}>Explore Offers <ArrowRight className="w-4 h-4 ml-1"/></Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Sales */}
      <Section id="sales" className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Products & Services</h2>
            <p className="mt-2 text-slate-600">Everything you need to execute with confidence: consulting, custom indicators, and prop-firm coaching.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <PriceItem title="1:1 Consultation" price={149} period="per session (60–75 min)" bullets={["Personalized trading audit","Risk management tune-up","Actionable next steps"]} ctaLabel="Book Your Session" badge="Popular" highlight />
            <PriceItem title="Indicator Bundle" price={399} period="one-time license" bullets={["Momentum + Order Flow toolkit","On-chart stats overlay","Lifetime updates"]} ctaLabel="Buy Bundle" />
            <PriceItem title="Prop Firm Coaching" price={249} period="evaluation accelerator" bullets={["Firm rule breakdown","Daily plan + guardrails","Evaluation pass strategy"]} ctaLabel="Start Coaching" />
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Testimonial quote="The custom stats overlay alone paid for itself in a week." name="J. Alvarez" role="NQ Trader" />
            <Testimonial quote="Clear playbooks and risk rules that kept me in the game." name="S. Kim" role="Funded Prop Trader" />
            <Testimonial quote="Best balance of simplicity and edge I’ve found." name="T. Brooks" role="ES Scalper" />
          </div>
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog" className="bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">MKW Blog</h2>
            <p className="mt-2 text-slate-600">Insights on trade planning, execution, and prop-firm success.</p>
          </div>

          <BlogTabs />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">Get in Touch</h2>
            <p className="mt-2 text-slate-600">Tell us about your goals—consulting, indicators, or prop-firm coaching—and we’ll reply within one business day.</p>
          </div>

          <Card>
            <CardHeader>
              <div className="text-xl font-bold">Contact MKW Consulting</div>
              <div className="text-slate-500 text-sm">We’ll reach out to schedule next steps.</div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <input className="rounded-2xl border p-3" placeholder="Your name" />
              <input className="rounded-2xl border p-3" placeholder="Email address" type="email" />
              <input className="rounded-2xl border p-3" placeholder="Phone (optional)" />
              <input className="rounded-2xl border p-3" placeholder="Topic (e.g., ‘Prop firm coaching’)" />
              <div className="md:col-span-2">
                <textarea className="rounded-2xl border p-3 w-full" placeholder="Briefly describe what you’re looking for…" rows={5} />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-xs text-slate-500">Your info is private and never shared.</div>
              <Button className="gap-2">Send Message <ArrowRight className="w-4 h-4"/></Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

// Blog tabs implementation
function BlogTabs(){
  const [tab, setTab] = useState<'latest'|'risk'|'prop'>('latest');
  const tabs = [
    { id:'latest', label:'Latest' },
    { id:'risk', label:'Risk Management' },
    { id:'prop', label:'Prop Firms' },
  ];
  return (
    <div>
      <Tabs tabs={tabs} current={tab} onChange={(id)=>setTab(id as any)} />
      <div className="mt-6">
        {tab==='latest' && (
          <div className="grid md:grid-cols-3 gap-6">
            <BlogCard title="A 30‑Minute Daily Prep That Actually Works" tag="Process" date="Sep 2025" excerpt="Build a simple prep ritual that tightens execution without adding noise."/>
            <BlogCard title="Reading Momentum Without Chasing It" tag="Strategy" date="Aug 2025" excerpt="How to exploit momentum while keeping risk defined and sane."/>
            <BlogCard title="The Case for On‑Chart Stats Overlays" tag="Tools" date="Jul 2025" excerpt="Context is king: why your PnL and drawdown should live on the chart."/>
          </div>
        )}
        {tab==='risk' && (
          <div className="grid md:grid-cols-3 gap-6">
            <BlogCard title="Stop Sizing Like a Gambler" tag="Risk" date="Jun 2025" excerpt="The 1R framework that turns volatility into a friend, not a threat."/>
            <BlogCard title="When to Reduce Size (and Be Proud of It)" tag="Discipline" date="May 2025" excerpt="Adaptive risk is a competitive advantage, not a concession."/>
            <BlogCard title="Avoiding the Revenge-Trade Spiral" tag="Mindset" date="Apr 2025" excerpt="Practical steps to reset without losing the day."/>
          </div>
        )}
        {tab==='prop' && (
          <div className="grid md:grid-cols-3 gap-6">
            <BlogCard title="Evaluation to Funded: A Simple Playbook" tag="Prop" date="Mar 2025" excerpt="Tight rules, clean setups, and daily constraints to pass consistently."/>
            <BlogCard title="Understanding Trailing Drawdown Rules" tag="Prop Rules" date="Feb 2025" excerpt="Why rule literacy is as important as chart literacy."/>
            <BlogCard title="Scaling After You’re Funded" tag="Growth" date="Jan 2025" excerpt="How to keep your funded status while expanding your edge."/>
          </div>
        )}
      </div>
    </div>
  )
}

// small helpers
function NavLink(props:{to:string,label:string,route:string}){ return (
  <a href={`#${props.to}`} className={`text-sm font-medium hover:opacity-80 transition ${props.route===props.to?'text-white':'text-white/80'}`}>{props.label}</a>
)}
function Section({id,className='',children}:{id:string,className?:string,children:any}){ return (
  <section id={id} className={`py-16 px-4 md:px-8 ${className}`}>{children}</section>
)}
function Feature({Icon,title,desc}:{Icon:any,title:string,desc:string}){ return (
  <div className="flex gap-4 items-start">
    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur"><Icon className="w-6 h-6 text-white" /></div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
)}
