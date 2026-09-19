import { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Paintbrush,
  Zap,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Globe,
  CheckCircle,
  Star,
  Shield,
  Rocket,
  Scissors,
  HardHat,
  UtensilsCrossed,
  Sparkles,
  Dumbbell,
  Home,
  Send,
  Eye,
  Rocket as LaunchIcon,
} from 'lucide-react';
import UcsLogo from '@/components/UcsLogo';

const WA_LINK = 'https://wa.me/923250572327';
const WA_DISPLAY = '+92 325 0572327';

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return y;
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

type Service = {
  icon: typeof Code2;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  barColor: string;
  border: string;
  glow: string;
  learnColor: string;
  learnHover: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Full-scale, responsive websites built clean from the ground up. No bloated frameworks, no filler — just fast, maintainable code that loads quickly and scales with your business.',
    iconBg: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    barColor: 'from-cyan-400 to-blue-400',
    border: 'hover:border-cyan-500/30',
    glow: 'hover:shadow-cyan-500/10',
    learnColor: 'text-cyan-400',
    learnHover: 'group-hover:text-cyan-300',
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Redesigns',
    desc: 'We take what you already have and make it work harder. Outdated interfaces become modern, intuitive experiences that guide visitors exactly where you want them to go.',
    iconBg: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
    barColor: 'from-violet-400 to-purple-400',
    border: 'hover:border-violet-500/30',
    glow: 'hover:shadow-violet-500/10',
    learnColor: 'text-violet-400',
    learnHover: 'group-hover:text-violet-300',
  },
  {
    icon: Zap,
    title: 'High-Impact Landing Pages',
    desc: 'Single-purpose pages engineered around one goal: conversion. Persuasive structure, clear calls to action, and layouts tested to turn clicks into clients.',
    iconBg: 'from-amber-400/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    barColor: 'from-amber-400 to-orange-400',
    border: 'hover:border-amber-500/30',
    glow: 'hover:shadow-amber-500/10',
    learnColor: 'text-amber-400',
    learnHover: 'group-hover:text-amber-300',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance Optimization',
    desc: 'Rank higher and load faster. We audit your Core Web Vitals, tighten your technical SEO, and strip out the dead weight that drags your site down in search results.',
    iconBg: 'from-emerald-400/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    barColor: 'from-emerald-400 to-teal-400',
    border: 'hover:border-emerald-500/30',
    glow: 'hover:shadow-emerald-500/10',
    learnColor: 'text-emerald-400',
    learnHover: 'group-hover:text-emerald-300',
  },
];

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average Traffic Growth' },
  { value: '<2s', label: 'Target Load Time' },
];

const WHY_US = [
  { icon: Shield, text: 'Clean, maintainable code — no bloated frameworks or shortcuts.' },
  { icon: Rocket, text: 'Results-driven process focused on conversions, not just aesthetics.' },
  { icon: Globe, text: 'Proven experience across international and local markets.' },
  { icon: Star, text: 'Direct communication, fast turnarounds, zero middlemen.' },
  { icon: CheckCircle, text: 'Every project is precision-crafted for speed and scalability.' },
  { icon: Zap, text: 'Mobile-first, SEO-ready, and performance-optimized by default.' },
];

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

type ShowcaseItem = {
  icon: typeof Scissors;
  category: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  tags: string[];
  accent: string;
  ring: string;
  glow: string;
};

const SHOWCASE: ShowcaseItem[] = [
  {
    icon: Scissors,
    category: 'Barbershop',
    title: 'Sharp Cuts Studio',
    desc: 'A booking-first website with real-time appointment slots, gallery showcase, and a clean, masculine aesthetic that matches the brand.',
    image: 'https://images.pexels.com/photos/13058812/pexels-photo-13058812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rustic modern barber shop interior with classic decor',
    tags: ['Booking System', 'Gallery', 'Local SEO'],
    accent: 'text-cyan-400',
    ring: 'group-hover:ring-cyan-500/30',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  {
    icon: HardHat,
    category: 'Contractor',
    title: 'BuildRight Construction',
    desc: 'A project portfolio site with service area maps, instant quote requests, and trust-building case studies that convert cold traffic.',
    image: 'https://images.pexels.com/photos/8470035/pexels-photo-8470035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Two contractors checking wall alignment with a level bar',
    tags: ['Quote Forms', 'Portfolio', 'Lead Gen'],
    accent: 'text-amber-400',
    ring: 'group-hover:ring-amber-500/30',
    glow: 'group-hover:shadow-amber-500/10',
  },
  {
    icon: UtensilsCrossed,
    category: 'Restaurant',
    title: 'Ember & Oak',
    desc: 'A mouth-watering digital menu, reservation widget, and atmospheric photography that fills tables before the weekend rush.',
    image: 'https://images.pexels.com/photos/32523798/pexels-photo-32523798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant restaurant interior with modern wine display wall',
    tags: ['Digital Menu', 'Reservations', 'Instagram-Ready'],
    accent: 'text-violet-400',
    ring: 'group-hover:ring-violet-500/30',
    glow: 'group-hover:shadow-violet-500/10',
  },
  {
    icon: Sparkles,
    category: 'Beauty Salon',
    title: 'Lumière Beauty',
    desc: 'A sleek, luxurious booking platform with service menus, stylist profiles, and a loyalty program that keeps clients coming back.',
    image: 'https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chic modern beauty salon with black and white decor',
    tags: ['Stylist Profiles', 'Loyalty', 'Online Booking'],
    accent: 'text-pink-400',
    ring: 'group-hover:ring-pink-500/30',
    glow: 'group-hover:shadow-pink-500/10',
  },
  {
    icon: Dumbbell,
    category: 'Fitness Studio',
    title: 'IronPulse Gym',
    desc: 'A high-energy membership site with class schedules, trainer bios, and a trial-pass funnel that packs the first session.',
    image: 'https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern gym with fitness equipment and panoramic windows',
    tags: ['Class Schedules', 'Trial Pass', 'Membership'],
    accent: 'text-emerald-400',
    ring: 'group-hover:ring-emerald-500/30',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  {
    icon: Home,
    category: 'Real Estate',
    title: 'Estate Haus',
    desc: 'A property listing platform with map search, virtual tour integration, and agent contact built directly into every listing page.',
    image: 'https://images.pexels.com/photos/30580640/pexels-photo-30580640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Front view of twin modern houses with symmetrical design',
    tags: ['Map Search', 'Virtual Tours', 'Agent CRM'],
    accent: 'text-blue-400',
    ring: 'group-hover:ring-blue-500/30',
    glow: 'group-hover:shadow-blue-500/10',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    icon: Send,
    title: 'Request Your Demo',
    desc: "Tell us about your business and what you need. We'll map out a concept tailored to your industry — no commitment, no cost, no catch. Just a real preview of what we can build for you.",
  },
  {
    num: '02',
    icon: Eye,
    title: 'Review Your Free Concept',
    desc: 'Within days, you receive a working concept: layout, structure, and design direction. You review it, give feedback, and we refine until it feels right. You see the value before you spend a rupee.',
  },
  {
    num: '03',
    icon: LaunchIcon,
    title: 'Launch & Grow',
    desc: 'Once approved, we build the full site — fast, responsive, SEO-optimized, and conversion-ready. You go live with a digital presence that actually works for your business, not just looks nice.',
  },
];

function Nav() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const solid = scrollY > 40;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" aria-label="UltraCraft Studio — Home" className="flex items-center group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <UcsLogo />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
        >
          <MessageCircle size={14} />
          Get in Touch
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-950/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors mt-1"
          >
            <MessageCircle size={14} />
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          Premium Web Development Agency
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6">
          We craft{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
            high-performance
          </span>{' '}
          digital experiences that{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            convert.
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Professional web development, modern UI/UX redesigns, custom landing pages, and SEO
          optimization — built to scale your business online, not just fill a screen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-1"
          >
            <Sparkles size={18} className="transition-transform group-hover:scale-110" />
            Claim Your Free Custom Demo
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            View Our Work
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm flex-wrap">
          <div className="flex -space-x-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-600 to-slate-700"
              />
            ))}
          </div>
          <span className="text-slate-400 font-medium">
            Trusted by growing businesses worldwide
          </span>
          <span className="text-slate-600">—</span>
          <span className="text-cyan-400 font-medium">Built for speed &amp; conversion.</span>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

function Stats() {
  const { ref, visible } = useInView();

  return (
    <section className="py-16 px-6 border-y border-white/[0.06]" aria-label="Key statistics">
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`text-center transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
              {s.value}
            </div>
            <div className="text-slate-500 text-sm font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const { ref, visible } = useInView();

  return (
    <section id="services" className="py-28 px-6 relative" aria-label="Services">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Services built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              real results
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every service is engineered to deliver measurable business outcomes — not just polished visuals that look nice and do nothing.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.07] rounded-2xl p-8 ${s.border} transition-all duration-500 overflow-hidden ${s.glow} ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${s.barColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.iconBg} border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={22} className={s.iconColor} strokeWidth={1.8} />
              </div>

              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>

              <div className={`mt-6 flex items-center ${s.learnColor} ${s.learnHover} text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                Learn more <ArrowRight size={14} className="ml-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const { ref, visible } = useInView();

  return (
    <section id="work" className="py-28 px-6 relative" aria-label="Our Work">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            Demo Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Real concepts for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              real businesses
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We build demo concepts for local businesses every week. Here's a look at the kind of work we craft — and what yours could look like.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE.map((item, i) => (
            <article
              key={item.title}
              className={`group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.07] rounded-2xl overflow-hidden ring-1 ring-white/[0.03] ${item.ring} ${item.glow} transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                  <item.icon size={12} className={item.accent} />
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-400 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm border-b border-cyan-400/30 hover:border-cyan-300 pb-0.5 transition-colors duration-200"
          >
            Want a demo for your business? Request one free <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { ref, visible } = useInView();

  return (
    <section id="process" className="py-28 px-6 relative" aria-label="Demo-First Process">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            Demo-First Process
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            See the value{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              before you pay
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No long sales calls. No upfront deposits. Just a clear, three-step process that puts a working concept in your hands first.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`relative text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/20 mb-6 shadow-2xl shadow-cyan-500/10">
                <step.icon size={24} className="text-cyan-400" strokeWidth={1.6} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">
                  {step.num}
                </span>
              </div>

              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-1"
          >
            <Sparkles size={18} className="transition-transform group-hover:scale-110" />
            Claim Your Free Custom Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="py-28 px-6" aria-label="About UltraCraft Studio">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/[0.07] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-3xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/20">
                  <span className="text-slate-950 font-black text-xl">UCS</span>
                </div>

                <h3 className="text-white font-bold text-2xl mb-2">UltraCraft Studio</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-6 uppercase tracking-widest">
                  Remote-First, Global Reach
                </p>

                <div className="space-y-3">
                  {['React & Next.js', 'Tailwind CSS', 'Performance Engineering', 'Conversion Optimization'].map(
                    (tag) => (
                      <div key={tag} className="flex items-center gap-3 text-slate-400 text-sm">
                        <CheckCircle size={14} className="text-cyan-400 shrink-0" />
                        {tag}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
              <div className="text-white font-black text-2xl">5+</div>
              <div className="text-slate-400 text-xs">Years of Craft</div>
            </div>
          </div>

          <div>
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block">
              The Story Behind UCS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
              Precision-built websites for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                businesses that mean it
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                We've spent years in the trenches of the web development industry — not writing blog
                posts about it, but actually shipping products. The kind of hands-on work that teaches
                you what loads fast, what converts, and what quietly bleeds traffic until someone fixes it.
              </p>
              <p>
                That experience shaped a simple standard at UCS: clean code, no unnecessary bloat, and a
                relentless focus on the metrics that actually matter to your business — traffic, leads,
                and revenue. We've worked with international clients and local ones, and the approach
                doesn't change. The work has to perform.
              </p>
              <p>
                You won't get padded timelines or account managers filtering every conversation. You work
                directly with the people building your project, and you get exactly what was promised —
                nothing less.
              </p>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:text-cyan-300 font-semibold text-sm border-b border-cyan-400/30 hover:border-cyan-300 pb-0.5 transition-colors duration-200"
            >
              Start a conversation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { ref, visible } = useInView();

  return (
    <section id="why-us" className="py-28 px-6 relative" aria-label="Why choose UltraCraft Studio">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            The UCS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              difference
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We hold ourselves to a higher standard — because your business deserves nothing less.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <div
              key={i}
              className={`group flex gap-4 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="shrink-0 mt-0.5">
                <item.icon
                  size={18}
                  className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  strokeWidth={2}
                />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const { ref, visible } = useInView();

  return (
    <section id="contact" className="py-28 px-6" aria-label="Contact UltraCraft Studio">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-white/[0.08] rounded-3xl px-8 md:px-16 py-16 text-center overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[350px] rounded-full border border-cyan-500/10" />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <MessageCircle size={12} />
              Direct Line Open
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Ready to elevate your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                online presence?
              </span>
            </h2>

            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              Let's talk directly. Skip the long forms — one WhatsApp message is all it takes to get your free custom demo started.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <p className="text-slate-600 text-sm mt-6">
              {WA_DISPLAY} · Typically responds within 1 hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6" aria-label="Site footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <UcsLogo />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A premium web development studio crafting high-performance digital experiences for businesses worldwide.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Direct Support
            </h4>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#22c55e] text-sm font-medium transition-colors mb-2"
            >
              <MessageCircle size={14} />
              WhatsApp: {WA_DISPLAY}
            </a>
            <p className="text-slate-600 text-xs mt-1">Available for project inquiries</p>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; 2026 UltraCraft Studio (UCS). All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">Built for speed &amp; conversion.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Showcase />
        <Process />
        <About />
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
