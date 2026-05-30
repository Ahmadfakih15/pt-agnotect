import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Package, Truck, Shield, Phone, Mail, MapPin, 
  ChevronRight, Menu, X, Clock, Users, Award, Send, CheckCircle
} from "lucide-react";

// ✅ IMPORT GAMBAR LOKAL (Pastikan file ada di src/assets/)
import gambar1 from './assets/gambar1.jpeg';
import gambar2 from './assets/gambar2.jpeg';
import gambar3 from './assets/gambar3.jpeg';
import gambar4 from './assets/gambar4.jpeg';

// SVG Icons untuk Social Media (Fallback aman)
const LinkedinIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>);
const InstagramIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const FacebookIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);

const COMPANY = {
  name: "PT AGNOTECT",
  tagline: "Electrical Engineering & Procurement Solutions",
  description: "PT Agnotect adalah perusahaan yang bergerak di bidang Electrical Engineering dan Pengadaan Barang. Kami menyediakan solusi terintegrasi untuk kebutuhan kelistrikan industri, komersial, dan infrastruktur dengan standar kualitas tinggi.",
  about: {
    title: "Tentang Kami",
    subtitle: "Partner Terpercaya untuk Solusi Kelistrikan",
    description: "PT Agnotect didirikan dengan komitmen untuk menyediakan layanan electrical engineering dan pengadaan barang berkualitas tinggi. Dengan pengalaman bertahun-tahun, kami telah menjadi partner terpercaya bagi berbagai industri di Indonesia.",
    vision: "Menjadi perusahaan terdepan dalam penyediaan solusi electrical engineering dan pengadaan barang yang berkualitas, inovatif, dan berkelanjutan.",
    mission: [
      "Menyediakan produk dan layanan berkualitas tinggi",
      "Memberikan solusi engineering yang inovatif",
      "Menjaga kepuasan pelanggan melalui pelayanan profesional",
      "Menerapkan standar keselamatan dan kualitas internasional"
    ]
  },
  services: [
    { icon: <Zap className="w-10 h-10" />, title: "Electrical Engineering", description: "Desain, instalasi, dan maintenance sistem kelistrikan untuk industri, komersial, dan infrastruktur.", features: ["Power Distribution", "Lighting System", "Earthing System", "Electrical Audit"] },
    { icon: <Package className="w-10 h-10" />, title: "Pengadaan Barang", description: "Supply peralatan listrik dan komponen industri dari brand ternama dengan harga kompetitif.", features: ["Electrical Equipment", "Industrial Components", "Cables & Wires", "Control Systems"] },
    { icon: <Truck className="w-10 h-10" />, title: "Logistics & Delivery", description: "Layanan pengiriman cepat dan aman untuk memastikan produk sampai tepat waktu.", features: ["Nationwide Delivery", "Secure Packaging", "Real-time Tracking", "Express Service"] },
    { icon: <Shield className="w-10 h-10" />, title: "Maintenance & Support", description: "Layanan maintenance preventif dan korektif untuk sistem kelistrikan optimal.", features: ["Preventive Maintenance", "24/7 Support", "Emergency Response", "Technical Consultation"] }
  ],
  projects: [
    { title: "Power Distribution System", category: "Industrial", image: gambar1, description: "Instalasi sistem distribusi daya untuk pabrik manufaktur" },
    { title: "Commercial Building Electrical", category: "Commercial", image: gambar2, description: "Sistem kelistrikan gedung perkantoran modern" },
    { title: "Infrastructure Lighting", category: "Infrastructure", image: gambar3, description: "Penerangan jalan dan infrastruktur publik" },
    { title: "Industrial Control System", category: "Industrial", image: gambar4, description: "Instalasi sistem kontrol industri otomatisasi" }
  ],
  clients: [
    { name: "Manufacturing Co.", logo: "🏭" }, { name: "Property Group", logo: "" }, { name: "Energy Corp", logo: "⚡" },
    { name: "Infrastructure Ltd", logo: "🏗️" }, { name: "Tech Industries", logo: "" }, { name: "Commercial Plaza", logo: "🏬" }
  ],
  stats: [
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Projects Completed" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years Experience" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support Service" }
  ],
  contact: { email: "info@agnotect.co.id", phone: "+62 21 1234 5678", address: "Jl. Industri Raya No. 123, Jakarta 12345, Indonesia", hours: "Senin - Jumat: 08:00 - 17:00" },
  social: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", facebook: "https://facebook.com" }
};

// --- COMPONENTS ---
function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setProgress(prev => prev >= 100 ? (clearInterval(timer), 100) : prev + 10), 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-900">
      <div className="text-center text-white">
        <div className="text-4xl font-bold mb-2 tracking-wider">{COMPANY.name}</div>
        <div className="text-sm text-emerald-300 mb-8">{COMPANY.tagline}</div>
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <motion.div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <div className="text-sm mt-4 text-gray-400">{progress}%</div>
      </div>
    </motion.div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);
  const navItems = ["Home", "About", "Services", "Projects", "Clients", "Contact"];
  const scrollTo = (id) => { const el = document.getElementById(id.toLowerCase()); if (el) { el.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); } };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>
          <div><div className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>{COMPANY.name}</div><div className={`text-xs ${scrolled ? "text-gray-600" : "text-white/80"}`}>Electrical Solutions</div></div>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item)} className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-emerald-600" : "text-white/90 hover:text-white"}`}>{item}</button>)}
          <button onClick={() => scrollTo("contact")} className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transition-all">Get Quote</button>
        </div>
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} /> : <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />}
        </button>
      </div>
      {mobileMenuOpen && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden mt-4 bg-white rounded-xl shadow-xl p-4">{navItems.map((item) => <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">{item}</button>)}</motion.div>}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"><Zap className="w-4 h-4" /><span>Powering Your Success</span></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">Electrical Engineering<br /><span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">& Procurement</span></h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">{COMPANY.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2">Our Services <ChevronRight className="w-5 h-5" /></button>
            <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">Contact Us</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {COMPANY.stats.map((stat, index) => <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.5 }} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"><div className="text-emerald-400 mb-2 flex justify-center">{stat.icon}</div><div className="text-3xl font-bold text-white mb-1">{stat.value}</div><div className="text-sm text-gray-300">{stat.label}</div></motion.div>)}
          </div>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"><div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"><div className="w-1 h-3 bg-white/50 rounded-full" /></div></motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">{COMPANY.about.title}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{COMPANY.about.subtitle}</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full" />
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed">{COMPANY.about.description}</p>
            <div className="pt-4"><h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3><p className="text-gray-600 leading-relaxed">{COMPANY.about.vision}</p></div>
            <div className="pt-4"><h3 className="text-2xl font-bold text-gray-900 mb-6">Misi Kami</h3><ul className="space-y-4">{COMPANY.about.mission.map((item, index) => <li key={index} className="flex items-start gap-4"><CheckCircle className="w-6 h-6 text-emerald-600 mt-1 shrink-0" /><span className="text-gray-700 text-base leading-relaxed">{item}</span></li>)}</ul></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-3xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=500&fit=crop" alt="Electrical Work" className="rounded-2xl shadow-2xl w-full h-72 object-cover" />
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=400&h=500&fit=crop" alt="Industrial" className="rounded-2xl shadow-2xl w-full h-72 object-cover mt-12" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 bg-emerald-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold tracking-wide mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight text-center">Solusi Lengkap untuk Kebutuhan Anda</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed text-center">Kami menyediakan berbagai layanan profesional di bidang electrical engineering dan pengadaan barang</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {COMPANY.services.map((service, index) => <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"><div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3><p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p><ul className="space-y-3">{service.features.map((f, i) => <li key={i} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> {f}</li>)}</ul></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold tracking-wide mb-4">Our Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight text-center">Proyek yang Telah Kami Kerjakan</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed text-center">Berbagai proyek electrical engineering yang telah kami selesaikan dengan sukses</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {COMPANY.projects.map((project, index) => <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"><img src={project.image} alt={project.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" /><div className="absolute bottom-0 left-0 right-0 p-8"><span className="inline-block px-3 py-1 bg-emerald-600/90 text-white text-xs font-semibold rounded-full mb-3 backdrop-blur-sm">{project.category}</span><h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3><p className="text-gray-200 text-sm leading-relaxed">{project.description}</p></div></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="py-32 bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-900 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold tracking-wide mb-4">Our Clients</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center">Dipercaya oleh Berbagai Industri</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed text-center">Kami bangga telah bekerja sama dengan berbagai perusahaan terkemuka</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {COMPANY.clients.map((client, index) => <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all flex flex-col items-center justify-center"><div className="text-3xl mb-3">{client.logo}</div><div className="text-sm font-medium text-white">{client.name}</div></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setFormState({ name: "", email: "", company: "", message: "" }); setTimeout(() => setSubmitted(false), 3000); };
  return (
    <section id="contact" className="py-32 bg-emerald-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold tracking-wide mb-4">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight text-center">Hubungi Kami</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed text-center">Siap membantu kebutuhan electrical engineering dan pengadaan barang Anda</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {[{ icon: <Mail className="w-5 h-5" />, label: "Email", value: COMPANY.contact.email }, { icon: <Phone className="w-5 h-5" />, label: "Telepon", value: COMPANY.contact.phone }, { icon: <MapPin className="w-5 h-5" />, label: "Alamat", value: COMPANY.contact.address }, { icon: <Clock className="w-5 h-5" />, label: "Jam Operasional", value: COMPANY.contact.hours }].map((item, i) => <div key={i} className="flex items-start gap-4"><div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">{item.icon}</div><div><div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{item.label}</div><div className="text-gray-800 font-medium">{item.value}</div></div></div>)}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Follow Us</div>
                <div className="flex gap-3">
                  <a href={COMPANY.social.linkedin} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white transition-all"><LinkedinIcon /></a>
                  <a href={COMPANY.social.instagram} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition-all"><InstagramIcon /></a>
                  <a href={COMPANY.social.facebook} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-emerald-800 hover:text-white transition-all"><FacebookIcon /></a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label><input type="text" placeholder="John Doe" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Email</label><input type="email" placeholder="john@company.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Perusahaan</label><input type="text" placeholder="PT Company Name" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" /></div>
              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label><textarea placeholder="Ceritakan kebutuhan Anda..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none" /></div>
              <div className="md:col-span-2"><button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">{submitted ? "✅ Pesan Terkirim!" : "Kirim Pesan"} <Send className="w-4 h-4" /></button></div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>
            <div><div className="text-lg font-bold text-white">{COMPANY.name}</div><div className="text-xs text-gray-500">{COMPANY.tagline}</div></div>
          </div>
          <p className="text-sm leading-relaxed max-w-md">Partner terpercaya untuk solusi electrical engineering dan pengadaan barang berkualitas di Indonesia.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">{["About", "Services", "Projects", "Contact"].map(item => <li key={item}><button onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">{item}</button></li>)}</ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm"><li>{COMPANY.contact.email}</li><li>{COMPANY.contact.phone}</li><li className="text-gray-500">{COMPANY.contact.hours}</li></ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
    </footer>
  );
}

// Main App
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 1500); return () => clearTimeout(timer); }, []);
  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && (<><Navigation /><Hero /><About /><Services /><Projects /><Clients /><Contact /><Footer /></>)}
    </div>
  );
}