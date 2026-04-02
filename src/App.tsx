import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Settings,
  Database,
  Layers,
  Factory,
  Droplets,
  Flame,
  Microscope,
  TrendingUp,
  ShieldAlert,
  EyeOff,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onRequestDemo }: { onRequestDemo: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Technology', href: '#technology' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-slate-900/95 text-slate-300 py-2 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center text-[11px] font-medium tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <a href="mailto:info@processplantai.org.in" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Mail className="w-3 h-3 text-brand-accent" />
              <span>processplantai.org.in</span>
            </a>
            <a href="tel:+918999143978" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Phone className="w-3 h-3 text-brand-accent" />
              <span>+91 8999143978</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            PROCESS PLANT <span className="text-brand-accent">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onRequestDemo}
            className="bg-brand-accent hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            Request Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="bg-brand-accent text-white px-5 py-3 rounded-xl text-sm font-semibold mt-4"
            >
              Request Demo
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 overflow-hidden industrial-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            AI-Powered solution for <br />
            <span className="text-brand-accent">Industrial ETPs & Municipal STPs</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
            Optimize Costs, Ensure Compliance, and Predict Failures in Effluent and Sewage Treatment with Physics-Informed AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#solutions" className="bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group">
              Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all">
              Watch Vision Video
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block w-full"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl w-full aspect-[4/3] group">
            <img 
              src="https://images.pexels.com/photos/5115946/pexels-photo-5115946.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Industrial Wastewater Treatment Facility" 
              className="w-full h-full object-cover opacity-100 brightness-110 contrast-125 saturate-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* AI Scanning Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                initial={{ top: "-100%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent/40 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent/40 rounded-br-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Challenges = () => {
  const categories = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Operational Inefficiencies",
      questions: [
        "Is your plant running below optimal efficiency?",
        "Are process fluctuations causing instability?",
        "Do unexpected breakdowns disrupt operations?",
        "Are manual adjustments leading to reactive firefighting?"
      ],
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Rising Operating Costs",
      questions: [
        "Are energy and chemical costs steadily increasing?",
        "Is over-aeration or overdosing driving expenses?",
        "Are maintenance costs eating into your budget?",
        "Is sludge management more expensive than it should be?"
      ],
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Compliance & Regulatory Pressure",
      questions: [
        "Are effluent parameters exceeding discharge limits?",
        "Do you struggle with consistent compliance reporting?",
        "Are you at risk of environmental penalties?",
        "Is regulatory uncertainty creating operational stress?"
      ],
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Lack of Visibility & Predictability",
      questions: [
        "Do you lack real-time insights into critical parameters?",
        "Are decisions based on delayed lab results?",
        "Is predicting process upsets nearly impossible?",
        "Do you struggle to forecast performance under variable loads?"
      ],
      color: "text-slate-600",
      bg: "bg-slate-100"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">The Reality</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Are These Challenges Holding <br />
            <span className="text-slate-400">Your Wastewater Plant Back?</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${cat.bg} ${cat.color} p-3 rounded-xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.questions.map((q, qIdx) => (
                  <li key={qIdx} className="flex items-start gap-3 group">
                    <div className="mt-1.5">
                      <HelpCircle className="w-4 h-4 text-slate-300 group-hover:text-brand-accent transition-colors" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{q}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Process monitoring",
      description: "Real-time tracking of critical parameters to ensure optimal plant performance and stability.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Digital twin sync",
      description: "Create a 1:1 virtual replica of your entire facility to simulate operational changes without risk.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy optimization",
      description: "Reduce energy consumption by up to 15% with AI-driven load balancing and peak-shaving algorithms.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Predictive Maintenance",
      description: "Identify mechanical anomalies before they lead to downtime using vibration analysis and thermal modeling.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Sensor data validation",
      description: "Sensor data validation ensures accuracy and reliability by detecting errors, noise, and faults in real-time.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Our Solutions</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Intelligent Tools for <br />
            <span className="text-slate-400">Complex Operations</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-brand-accent/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className={`${item.bg} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {item.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FocusAreas = () => {
  const areas = [
    {
      title: "Industrial Effluent Treatment (ETP)",
      subtitle: "Complex Chemical & Process Waste",
      description: "Tailored AI models for high-COD, variable-load industrial waste. Optimize chemical dosing and ensure zero-liquid discharge (ZLD) compliance.",
      img: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Chemical Dosing Optimization", "Heavy Metal Removal Tracking", "TDS/TSS Prediction"]
    },
    {
      title: "Municipal Sewage Treatment (STP)",
      subtitle: "Urban Infrastructure & Large Scale",
      description: "Energy-efficient aeration control and sludge management for city-scale operations. Predict influent surges and maintain effluent quality 24/7.",
      img: "https://images.pexels.com/photos/5115946/pexels-photo-5115946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Aeration Energy Reduction", "Sludge Volume Index Control", "Nutrient Removal Automation"]
    }
  ];

  return (
    <section id="focus" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Core Focus</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Specialized Intelligence for <br />
            <span className="text-slate-400">Critical Water Infrastructure</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={area.img} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>
              
              <div className="p-10 relative -mt-20 bg-white rounded-t-[2.5rem]">
                <div className="mb-6">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                    {area.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-4">{area.title}</h3>
                </div>
                
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-3">
                  {area.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                      {feat}
                    </div>
                  ))}
                </div>

                <button className="mt-10 w-full py-4 rounded-2xl border border-slate-200 font-bold text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-900 p-6 rounded-3xl aspect-square flex flex-col justify-between">
                  <Globe className="text-brand-accent w-10 h-10" />
                  <div>
                    <div className="text-white font-bold">Edge-First</div>
                    <div className="text-slate-400 text-xs mt-1">Local processing for zero latency</div>
                  </div>
                </div>
                <div className="bg-blue-500 p-6 rounded-3xl aspect-square flex flex-col justify-between">
                  <Database className="text-white w-10 h-10" />
                  <div>
                    <div className="text-white font-bold">Secure Vault</div>
                    <div className="text-blue-100 text-xs mt-1">End-to-end encrypted data pipeline</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-emerald-500 p-6 rounded-3xl aspect-square flex flex-col justify-between">
                  <Activity className="text-white w-10 h-10" />
                  <div>
                    <div className="text-white font-bold">Auto-Tune</div>
                    <div className="text-emerald-100 text-xs mt-1">Auto calibration of process model</div>
                  </div>
                </div>
                <div className="bg-slate-100 p-6 rounded-3xl aspect-square flex flex-col justify-between">
                  <Cpu className="text-slate-900 w-10 h-10" />
                  <div>
                    <div className="text-slate-900 font-bold">Neural Core</div>
                    <div className="text-slate-500 text-xs mt-1">Proprietary LLM for engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Our Technology</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Where Physics Meets <br />
              Deep Learning.
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Unlike generic AI, Process Plant AI combines first-principles physics with modern machine learning. Our models understand thermodynamics, fluid dynamics, and chemical kinetics.
            </p>
            <ul className="space-y-4">
              {[
                "Hybrid-Physics Neural Networks",
                "Real-time SCADA Integration",
                "Multi-cloud & On-premise Deployment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-brand-success/10 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-brand-success" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-10 text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Read the Whitepaper <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const teamExpertise = [
    { icon: <Droplets className="w-6 h-6" />, title: "Chemical Engineering" },
    { icon: <Database className="w-6 h-6" />, title: "Data Science" },
    { icon: <Cpu className="w-6 h-6" />, title: "Software Development" },
    { icon: <Microscope className="w-6 h-6" />, title: "Biotechnology Research" },
    { icon: <Layers className="w-6 h-6" />, title: "Digital Twins" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Industrial Optimization" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              A Multidisciplinary Team <br />
              <span className="text-slate-400">Driving Industrial Innovation</span>
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At Process Plant AI, we are a collective of passionate chemical engineers, data scientists, software developers, and biotechnology researchers. Our core strength lies in our diversity, complemented by seasoned consultants with extensive backgrounds in digital twins and industrial optimization.
              </p>
              <p>
                Our mission is to empower organizations with deep operational intelligence. We provide sophisticated digital solutions designed to optimize costs, ensure rigorous regulatory compliance, and proactively predict system failures before they impact performance.
              </p>
              <p>
                By bridging the gap between traditional engineering and advanced AI, we help our partners build a more efficient, sustainable, and resilient industrial future.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {teamExpertise.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onConsultation }: { onConsultation: () => void }) => {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "processplantai.org.in",
      href: "mailto:info@processplantai.org.in",
      description: "Our team will respond within 24 hours."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 8999143978",
      href: "tel:+918999143978",
      description: "Available Mon-Fri, 9am - 6pm IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "25, Yeshwant cooperative society, Hupari road, Kolhapur 416119, India.",
      href: "https://maps.google.com/?q=25,+Yeshwant+cooperative+society,+Hupari+road,+Kolhapur+416119,+India",
      description: "Headquarters & Engineering Hub"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Let's Start a <br />
            <span className="text-slate-400">Conversation</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-accent group-hover:scale-110 transition-transform">
                {detail.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{detail.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{detail.description}</p>
              <a 
                href={detail.href} 
                className="text-brand-accent font-bold hover:underline break-words"
                target={detail.title === "Visit Us" ? "_blank" : undefined}
                rel={detail.title === "Visit Us" ? "noopener noreferrer" : undefined}
              >
                {detail.value}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Have a specific requirement?</h3>
              <p className="text-slate-400 mb-8">
                Our engineering team is ready to help you design a custom AI implementation for your facility.
              </p>
              <button 
                onClick={onConsultation}
                className="bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20"
              >
                Schedule a Consultation
              </button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-video rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-brand-accent mx-auto mb-4 animate-pulse" />
                  <p className="text-slate-500 text-sm">Global Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                PROCESS PLANT <span className="text-brand-accent">AI</span>
              </span>
            </div>
            <p className="max-w-sm leading-relaxed">
              Empowering industrial leaders with the intelligence to build a more efficient and sustainable future.
            </p>
            <div className="flex gap-4 mt-8">
              {/* Social icons placeholder */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Predictive Maintenance</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Digital Twins</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Energy Optimization</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Emission Control</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Press Release</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Process Plant AI Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LeadModal = ({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: title }),
      });
      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          {status === 'success' ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h4>
              <p className="text-slate-500">Thank you for your interest. Our team will reach out to you shortly at info@processplantai.org.in.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Work Email</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                <input 
                  required
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message (Optional)</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all h-32 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-brand-accent hover:bg-blue-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : 'Submit Request'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean, title: string }>({ isOpen: false, title: '' });

  const openModal = (title: string) => setModalConfig({ isOpen: true, title });
  const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar onRequestDemo={() => openModal('Request a Demo')} />
      <main>
        <Hero />
        <Challenges />
        <Solutions />
        <FocusAreas />
        <Technology />
        <About />
        <Contact onConsultation={() => openModal('Schedule a Consultation')} />
      </main>
      <Footer />
      <AnimatePresence>
        {modalConfig.isOpen && (
          <LeadModal 
            isOpen={modalConfig.isOpen} 
            onClose={closeModal} 
            title={modalConfig.title} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
