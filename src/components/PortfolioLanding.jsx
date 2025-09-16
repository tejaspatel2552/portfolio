import React, { useEffect, useMemo, useState, useRef  } from "react";
import Turnstile from "react-turnstile";
import { motion } from "framer-motion";
import {
  Megaphone,
  BarChart3,
  Search,
  ChevronsLeftRightEllipsis,
  SquareDashedMousePointer,
  FileJson2,
  ListCollapse,
  Layers,
  LineChart,
  BrainCircuit,
  DatabaseZap,
  MousePointerClick,
  Rocket,
  Sparkles,
  Star,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  X,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Facebook,
} from "lucide-react";

// ---------- Data ----------
const SERVICES = [
  {
    id: 1,
    title: "Website Design & Development",
    icon: Rocket,
    bullets: [
      "Responsive websites",
      "Custom UI/UX design",
      "SEO-friendly structure",
    ],
    details:
      "Modern and scalable websites built with clean code, responsive layouts, and optimized for performance and conversions.",
  },
  {
    id: 2,
    title: "SEO & Content Marketing",
    icon: Search,
    bullets: ["On-page & Off-page SEO", "Keyword strategy", "Content planning"],
    details:
      "Boost your visibility with SEO strategies, keyword clustering, and content marketing that drives organic traffic and engagement.",
  },
  {
    id: 3,
    title: "Social Media Creation & Management",
    icon: Megaphone,
    bullets: ["Creative posts", "Content calendars", "Engagement growth"],
    details:
      "End-to-end social media management using Canva designs, consistent branding, and strategic campaigns to grow audience and awareness.",
  },
  {
    id: 4,
    title: "Paid Marketing",
    icon: BarChart3,
    bullets: ["Google Ads", "Meta Ads", "A/B testing"],
    details:
      "ROI-driven paid ad campaigns across Google, Meta, and other platforms with continuous optimization and testing frameworks.",
  },
  {
    id: 5,
    title: "Email & Lifecycles",
    icon: Mail,
    bullets: ["Email automation", "Segmentation", "High deliverability"],
    details:
      "Create impactful lifecycle email campaigns that onboard, engage, and retain customers with personalized automation flows.",
  },
  {
    id: 6,
    title: "Lead Generation & Brand",
    icon: MousePointerClick,
    bullets: ["Lead funnels", "CRM setup", "Brand visibility"],
    details:
      "Pipeline-focused approach with high-converting lead generation strategies and brand building for long-term growth.",
  },
];

const PROJECTS = [
  {
    id: 1,
    name: "ConfidoAi – Social Media Growth",
    summary:
      "Managed brand presence and growth for AI-driven solutions company.",
    image: "https://tejaspatel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenlect.383bebd7.png&w=3840&q=75",
    modalDetails: [
      "Planned and executed social media campaigns.",
      "Designed creatives aligned with brand identity.",
      "Boosted engagement and organic following.",
      "Ran paid ads with measurable ROI."
    ],
    services: "Social Media Management",
    companyName: "ConfidoAi",
    websiteUrl: "https://scrido.com/",
    country: "Ahmedabad"
  },
  {
    id: 2,
    name: "ConfidoAi – Social Media Growth",
    summary:
      "Managed brand presence and growth for AI-driven solutions company.",
    image: "https://tejaspatel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUsability.58d05f47.png&w=3840&q=75",
    modalDetails: [
      "Planned and executed social media campaigns.",
      "Designed creatives aligned with brand identity.",
      "Boosted engagement and organic following.",
      "Ran paid ads with measurable ROI."
    ],
    services: "Social Media Management",
    companyName: "ConfidoAi",
    websiteUrl: "https://scrido.com/",
    country: "Ahmedabad"
  },
  {
    id: 3,
    name: "ConfidoAi – Social Media Growth",
    summary:
      "Managed brand presence and growth for AI-driven solutions company.",
    image: "https://tejaspatel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUsability.58d05f47.png&w=3840&q=75",
    modalDetails: [
      "Planned and executed social media campaigns.",
      "Designed creatives aligned with brand identity.",
      "Boosted engagement and organic following.",
      "Ran paid ads with measurable ROI."
    ],
    services: "Social Media Management",
    companyName: "ConfidoAi",
    websiteUrl: "https://scrido.com/",
    country: "Ahmedabad"
  },
  {
    id: 4,
    name: "ConfidoAi – Social Media Growth",
    summary:
      "Managed brand presence and growth for AI-driven solutions company.",
    image: "https://tejaspatel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenlect.383bebd7.png&w=3840&q=75",
    modalDetails: [
      "Planned and executed social media campaigns.",
      "Designed creatives aligned with brand identity.",
      "Boosted engagement and organic following.",
      "Ran paid ads with measurable ROI."
    ],
    services: "Social Media Management",
    companyName: "ConfidoAi",
    websiteUrl: "https://scrido.com/",
    country: "Ahmedabad"
  }
];

const SKILLS = [
  { name: "SEO", icon: Search },
  { name: "WordPress", icon: ChevronsLeftRightEllipsis },
  { name: "Elementor", icon: SquareDashedMousePointer },
  { name: "MERN", icon: FileJson2 },
  { name: "SMM", icon: Instagram },
  { name: "Canva", icon: Layers },
  { name: "AI Tools", icon: BrainCircuit },
  { name: "Meta Ads", icon: Megaphone },
  { name: "Google Ads", icon: LineChart },
  { name: "Data Studio", icon: DatabaseZap },
  { name: "Landing Pages", icon: Globe },
  { name: "Analytics", icon: LineChart },
  { name: "GA4 & GTM", icon: BarChart3 },
  { name: "Email", icon: Mail },
  { name: "Automation", icon: Rocket },
  { name: "Content", icon: Sparkles },
  { name: "Brand Strategy", icon: Star },
  { name: "Audit", icon: ListCollapse },
];

const TESTIMONIALS = [
  {
    name: "Harsh S.",
    role: "Founder, D2D Solutions",
    quote:
      "Brought structure to our marketing. Clear dashboards, sharp copy, and results we can bank on.",
  },
  {
    name: "Anita P.",
    role: "CMO, SaaS Startup",
    quote:
      "Our CAC dropped in 6 weeks without cutting scale. The testing cadence just works.",
  },
  {
    name: "Rahul K.",
    role: "Head of Growth, eCom",
    quote:
      "From creative angles to tracking, everything clicked. Weekly sprints kept us moving.",
  },
  {
    name: "Maya T.",
    role: "Marketing Lead, Fintech",
    quote:
      "We finally trust our data. GA4 + server events unlocked better optimization.",
  },
  {
    name: "Gaurav M.",
    role: "Founder, D2C",
    quote:
      "Tejas reshaped our landing pages and email flows. Revenue up and churn down.",
  },
  {
    name: "Isha R.",
    role: "Ops, B2B Services",
    quote:
      "Professional, proactive, and kind. Communication is A+. Highly recommended.",
  },
];

// ---------- UI Helpers ----------
const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const ShineCard = ({ children, className = "" }) => (
  <div className={`relative rounded-2xl p-6 shadow-xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden ${className}`}>
    <div className="pointer-events-none absolute -inset-px opacity-70 [mask-image:radial-gradient(40%_40%_at_50%_0%,black,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent" />
    </div>
    {children}
  </div>
);

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl rounded-2xl bg-neutral-900 border border-white/10 p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80 hover:text-white hover:border-white/40"
          >
            Close
          </button>
        </div>
        <div className="mt-4 text-white/90 leading-relaxed">{children}</div>
      </motion.div>
    </div>
  );
};

// ---------- Main Component ----------
export default function DigitalMarketerPortfolio() {
  const [serviceOpen, setServiceOpen] = useState(null);
  const [projectOpen, setProjectOpen] = useState(null);

  // Auto-scroll state for testimonial strip
  const [stripOffset, setStripOffset] = useState(0);
  const stripItems = useMemo(() => TESTIMONIALS.slice(4), []); // last 2 items

  useEffect(() => {
    const id = setInterval(() => {
      setStripOffset((v) => (v - 1) % 10000);
    }, 20);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
      <GradientGlow />
      <Navbar />
      <Hero />

      {/* Services */}
      <Section id="services" className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ShineCard>
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl p-3 bg-white/5 border border-white/10">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setServiceOpen(s)}
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                  >
                    Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <Sparkles className="w-5 h-5 text-white/60" />
                </div>
              </ShineCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Recent Work */}
      <Section id="work" className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Recent Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ShineCard>
                <div>
                  {p.image && (
                    <div className="relative mb-4 w-full overflow-hidden rounded-xl border border-white/10 shadow-md group">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="mt-2 text-white/80 text-sm">{p.summary}</p>
                    </div>
                    <button
                      onClick={() => setProjectOpen(p)}
                      className="h-10 rounded-xl border border-white/15 bg-white/5 px-4 text-sm hover:bg-white/10 transition-colors duration-300"
                    >
                      What I did
                    </button>
                  </div>
                </div>
              </ShineCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SKILLS.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity bg-gradient-to-tr from-fuchsia-500/40 via-cyan-400/40 to-amber-400/40" />
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Testimonials stripItems={TESTIMONIALS}/>

      {/* Awards & Stats */}
      <Section id="highlights" className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <ShineCard>
            <h3 className="text-xl font-semibold">Highlights</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/85">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 2+ years of hands-on digital marketing experience</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Grow 15+ clients with organic and  paid strategies</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Successfully managed ₹10Lakh+ in ad spends</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Skilled in social media post & poster designs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> HubSpot Digital Marketing Certified</li>
            </ul>
          </ShineCard>
          <ShineCard>
            <h3 className="text-xl font-semibold">Quick Stats</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { k: "Avg. ROAS", v: "2.0x" },
                { k: "SEO Wins", v: "+150%" },
                { k: "CPL Cut", v: "-35%" },
                { k: "Emails Rev.", v: "+21%" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">{s.v}</div>
                  <div className="text-xs text-white/70 mt-1">{s.k}</div>
                </div>
              ))}
            </div>
          </ShineCard>
        </div>
      </Section>

      {/* Footer with Contact */}
      <Footer />

      {/* Modals */}
      <Modal
        open={!!serviceOpen}
        onClose={() => setServiceOpen(null)}
        title={serviceOpen?.title}
      >
        <p className="text-white/80">{serviceOpen?.details}</p>
        <ul className="mt-4 space-y-2 text-white/80">
          {serviceOpen?.bullets?.map((b, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {b}</li>
          ))}
        </ul>
      </Modal>

      <Modal
        open={!!projectOpen}
        onClose={() => setProjectOpen(null)}
        title={projectOpen?.name}
      >
        <p className="mt-3 text-white/80">{projectOpen?.summary}</p>
        {projectOpen?.services && (
          <div className="mt-5 text-sm text-white/70 space-y-3">
            <p className="font-semibold">
              <span className="font-semibold">Services:</span>{" "}
              {projectOpen.services}
            </p>
            <p className="">
              <span className="font-semibold">Company:</span>{" "}
              {projectOpen.companyName}
            </p>
            <p className="">
              <span className="font-semibold">Website:</span>{" "}
              <a
                href={projectOpen.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:underline"
              >
                {projectOpen.websiteUrl}
              </a>
            </p>
            <p className="">
              <span className="font-semibold">Country / Place:</span>{" "}
              {projectOpen.country}
            </p>
          </div>
        )}
        {projectOpen?.modalDetails && (
          <ul className="mt-4 list-disc pl-5 text-white/80 space-y-2">
            {projectOpen.modalDetails.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
}

// ---------- Subcomponents ----------
function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> Tejas Patel
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-white/80 hover:text-white">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact Me
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/15 px-3 py-1 text-sm">Menu</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <Section id="home" className="pt-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="w-3 h-3" />
            Available for Freelance & Full-Time
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Digital Marketer focused on <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300">Growth</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300">Strategy</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            I help brands scale smarter with data-driven strategies, creative storytelling, and constant testing, where Paid and Organic marketing work together.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 inline-flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> View Work
            </a>
          </div>
        </motion.div>

        {/* Fancy banner visual 
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative mx-auto h-72 w-72 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-amber-300/30 blur-2xl" />
            <div className="absolute inset-0 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 h-24 w-24 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
                <p className="text-sm text-white/70">Featured Case Study</p>
                <p className="text-lg font-semibold mt-1">2.0x ROAS in 90 Days</p>
              </div>
            </div>
            <Badge label="Organic" className="top-2 -left-3" />
            <Badge label="Paid" className="bottom-2 -right-3" />
          </div>
        </motion.div>  */}

        <img
          src="/portfolio-banner.png"
          alt="Digital Marketing Mascot"
          className="mx-auto"
        />
      </div>
    </Section>
  );
}

function Badge({ label, className = "" }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs">
        {label}
      </div>
    </div>
  );
}

export function Testimonials({ stripItems }) {
  const scrollRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    let animationFrame;

    const scroll = () => {
      if (!scrollRef.current || isHovering.current) return;

      // Auto scroll speed
      scrollRef.current.scrollLeft += 0.5;

      // Reset when half scrolled (because we duplicated list)
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="testimonials" className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-8"
      >
        Client Testimonials
      </motion.h2>

      <div
        ref={scrollRef}
        className="relative mt-8 overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
      >
        {[...stripItems, ...stripItems].map((t, idx) => (
          <div
            key={`${t.name}-${idx}`}
            className="inline-block align-top min-w-[320px] bg-white/5 rounded-2xl p-5 shadow-lg mx-3"
          >
            <p className="text-white/90">“{t.quote}”</p>
            <p className="mt-3 text-sm text-white/70">
              {t.name} · {t.role}
            </p>
            <br />
            <div className="flex items-center gap-3 text-amber-300">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function Footer() {

  // ---------- Email Form ----------
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
          cfToken: token, // turnstile response token
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMsg("Thanks! Your inquiry has been sent.");
        e.target.reset();
        setToken(""); // reset token after successful submit
      } else {
        setMsg(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact" className="">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <ShineCard>
          <h3 className="text-xl font-semibold">Let's work together</h3>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" placeholder="Your name"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
              <input name="email" placeholder="Email" type="email"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
            </div>

            <input name="company" placeholder="Company"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />

            <textarea name="message" placeholder="Tell me about the project" rows={5}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />

            {/* Cloudflare Turnstile CAPTCHA */}
            <div className="justify-self-start">
              <Turnstile
                sitekey="YOUR_TURNSTILE_SITE_KEY"
                onVerify={(t) => setToken(t)}
                onExpire={() => setToken("")}
                options={{ appearance: "always", theme: "auto" }}
              />
            </div>

            <button
              type="submit"
              disabled={!token || loading}
              className={`justify-self-start rounded-xl border border-white/15 bg-white/10 px-5 py-2 text-sm hover:bg-white/15
          ${(!token || loading) ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {msg && <p className="text-sm opacity-90">{msg}</p>}
          </form>

        </ShineCard>

        <ShineCard>
          <h3 className="text-xl font-semibold">Contact Details</h3>
          <ul className="mt-6 space-y-3 text-white/85">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> tejaspatel2552@gmail.com</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 80008 17805</li>
            <li className="flex items-center gap-3"><Globe className="w-4 h-4" /> Ahmedabad, India</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Open to Bangalore · Pune · Hyd</li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/tejaspatel2552" className="rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/patel.tejas_/" className="rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/patel.tejas_/" className="rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
          </div>
        </ShineCard>
      </div>
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Tejas Patel. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </div>
      </div>
    </Section>
  );
}

function GradientGlow() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[10%] left-[20%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[15%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
    </>
  );
}
