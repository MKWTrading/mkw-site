
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Gauge, TrendingUp, BookOpen, Tool, MessageSquare, Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, Button, Badge, Tabs } from './ui/primitives';

function useHashRoute(defaultRoute:string='home'){ 
  const [route, setRoute] = useState<string>(window.location.hash.replace('#','') || defaultRoute);
  useEffect(()=>{ 
    const fn = () => setRoute(window.location.hash.replace('#','') || defaultRoute);
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, [defaultRoute]);
  return { route, navigate: (r:string) => window.location.hash = r };
}

export default function App(){
  const { route, navigate } = useHashRoute('home');

  return (
    <main className="text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-lg">MKW <span className="text-slate-500">Consulting</span></div>
          <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#prop-firm" className="hover:text-slate-700">Prop Firms</a>
            <a href="#indicators" className="hover:text-slate-700">Indicators</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-block">
              <Button size="sm">Book a Call</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(white,transparent_70%)]" 
             style={{backgroundImage:'radial-gradient(1200px 600px at 10% 0%, #22d3ee 10%, transparent 60%), radial-gradient(1200px 600px at 90% 100%, #60a5fa 10%, transparent 60%)'}} />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 text-white">
          <motion.h1 
            initial={{opacity:0,y:10}} 
            animate={{opacity:1,y:0}} 
            transition={{duration:0.6}} 
            className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Pass Prop-Firm Evals. Trade With Confidence. Level Up Your Edge.
          </motion.h1>
          <p className="mt-4 md:mt-6 text-white/80 max-w-3xl">
            We help futures traders build disciplined trade plans, pass evaluations, and scale using custom NinjaTrader tools and focused coaching.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services"><Button>Explore Services</Button></a>
            <a href="#contact"><Button variant="secondary">Free Discovery Call</Button></a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {icon:Rocket, label:'Eval Pass Prep'},
              {icon:DollarSign, label:'Risk Management'},
              {icon:Gauge, label:'Discipline Systems'},
              {icon:TrendingUp, label:'Custom Indicators'}
            ].map((i, idx)=>(
              <Card key={idx} className="bg-white/10 border-white/10 text-white">
                <CardContent className="flex items-center gap-3 py-3">
                  <i.icon className="w-5 h-5" aria-hidden />
                  <span className="text-sm">{i.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What We Do</h2>
        <p className="text-slate-600 mt-2">Practical help for real results—no fluff.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title:'Prop-Firm Evaluation Coaching', desc:'Targeted prep to align your plan to each firm’s rules and risk. Get structured checklists, daily routines, and performance feedback.', icon:BookOpen},
            {title:'Custom NinjaTrader Tools', desc:'Indicators, WPF overlays, and strategy dashboards tailored to your workflow. Built with NT8 best practices and clean UI.', icon:Tool},
            {title:'Trade Plan & Discipline Systems', desc:'Operationalize your plan with checklists, guardrails, and stats visibility so execution stays consistent under pressure.', icon:Gauge},
          ].map((s, idx)=>(
            <Card key={idx}>
              <CardHeader className="flex items-center gap-3">
                <s.icon className="w-5 h-5 text-slate-500" aria-hidden />
                <h3 className="font-semibold">{s.title}</h3>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">{s.desc}</CardContent>
              <CardFooter>
                <a href="#contact"><Button size="sm">Get Started</Button></a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Prop-Firm callouts */}
      <section id="prop-firm" className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why Traders Use Prop Firms</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-6 text-slate-700">
            {[
              'Lower capital at risk while learning to execute.',
              'Clear rules force risk discipline and consistency.',
              'Scalable—add accounts as you prove edge.',
              'Objective milestones; get paid for performance.'
            ].map((t, i)=>(
              <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-600 mt-0.5" aria-hidden />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Indicators */}
      <section id="indicators" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Custom Indicators & Overlays</h2>
        <p className="text-slate-600 mt-2">From order-flow zones to draggable WPF panels, we ship clean, well-documented NinjaScript.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title:'Strategy Stats Panel', blurb:'Live PnL, drawdown, and win-rate right on your chart (with history sync).'},
            {title:'Pulcini Order-Flow Zones', blurb:'Absorption, spoofing layers, and imbalance—visualized cleanly.'},
            {title:'Risk/Reward Overlay', blurb:'Draggable R:R box synced to your strategy or manual entries.'},
          ].map((item, idx)=>(
            <Card key={idx}>
              <CardHeader><h3 className="font-semibold">{item.title}</h3></CardHeader>
              <CardContent className="text-sm text-slate-600">{item.blurb}</CardContent>
              <CardFooter><a href="#contact"><Button size="sm">Ask About This</Button></a></CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What Traders Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              '“The daily checklist and risk guardrails are a game changer.”',
              '“Passed my eval in 12 days—coaching kept me consistent.”',
              '“The WPF stats panel makes my performance impossible to ignore.”',
            ].map((quote, idx)=>(
              <Card key={idx}><CardContent className="text-sm text-slate-700 py-6">{quote}</CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Book a Free Discovery Call</h2>
          <p className="text-white/80 mt-2">Tell us where you’re at and what’s blocking consistency. We’ll outline a plan.</p>
          <div className="mt-6">
            <a aria-label="Open email to contact MKW Consulting" href="mailto:info@mkwtrading.com">
              <Button>info@mkwtrading.com</Button>
            </a>
          </div>
          <p className="text-xs text-white/60 mt-4">By contacting us you agree to our <a href="#terms" className="underline">terms</a> and understand trading involves risk.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-lg">MKW Consulting</h4>
            <p className="text-sm text-white/70 mt-2">Day trading consultation, education, and custom NinjaTrader tools.</p>
          </div>
          <div>
            <h5 className="font-semibold">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#prop-firm" className="hover:underline">Prop Firms</a></li>
              <li><a href="#indicators" className="hover:underline">Indicators</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Legal</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#terms" className="hover:underline">Terms</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy</a></li>
              <li><a href="#disclaimer" className="hover:underline">Risk Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Get in touch</h5>
            <p className="text-sm text-white/80 mt-2">Email: info@mkwtrading.com</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-8 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} MKW Consulting. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
