import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Package, Truck, Shield, Phone, Mail, MapPin, 
  ChevronRight, Menu, X, Clock, Users, Award, Send, CheckCircle
} from "lucide-react";
import './App.css'; // Memanggil pengaturan vanilla CSS estetik kita

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
    {
      icon: <Zap style={{ width: '100%', height: '100%' }} />,
      title: "Electrical Engineering",
      description: "Desain, instalasi, dan maintenance sistem kelistrikan untuk industri, komersial, dan infrastruktur.",
      features: ["Power Distribution", "Lighting System", "Earthing System", "Electrical Audit"]
    },
    {
      icon: <Package style={{ width: '100%', height: '100%' }} />,
      title: "Pengadaan Barang",
      description: "Supply peralatan listrik dan komponen industri dari brand ternama dengan harga kompetitif.",
      features: ["Electrical Equipment", "Industrial Components", "Cables & Wires", "Control Systems"]
    },
    {
      icon: <Truck style={{ width: '100%', height: '100%' }} />,
      title: "Logistics & Delivery",
      description: "Layanan pengiriman cepat dan aman untuk memastikan produk sampai tepat waktu.",
      features: ["Nationwide Delivery", "Secure Packaging", "Real-time Tracking", "Express Service"]
    },
    {
      icon: <Shield style={{ width: '100%', height: '100%' }} />,
      title: "Maintenance & Support",
      description: "Layanan maintenance preventif dan korektif untuk sistem kelistrikan optimal.",
      features: ["Preventive Maintenance", "24/7 Support", "Emergency Response", "Technical Consultation"]
    }
  ],

// Cari bagian projects di const COMPANY dan ganti dengan ini:
projects: [
  {
    title: "Power Distribution System",
    category: "Industrial",
    image: "/src/assets/gambar1.jpeg",  // Gunakan path relatif ke public
    description: "Instalasi sistem distribusi daya untuk pabrik manufaktur"
  },
  {
    title: "Commercial Building Electrical",
    category: "Commercial",
    image: "/src/assets/gambar3.jpeg",
    description: "Sistem kelistrikan gedung perkantoran modern"
  },
  {
    title: "Infrastructure Lighting",
    category: "Infrastructure",
    image: "/src/assets/gambar4.jpeg",
    description: "Penerangan jalan dan infrastruktur publik"
  },
  {
    title: "Industrial Control System",
    category: "Industrial",
    image: "/src/assets/gambar5.jpeg",
    description: "Instalasi sistem kontrol industri otomatisasi"
  }
],

  clients: [
    { name: "Manufacturing Co.", logo: "🏭" },
    { name: "Property Group", logo: "🏢" },
    { name: "Energy Corp", logo: "⚡" },
    { name: "Infrastructure Ltd", logo: "🏗️" },
    { name: "Tech Industries", logo: "🔧" },
    { name: "Commercial Plaza", logo: "🏬" }
  ],

  stats: [
    { icon: <Users style={{ width: '32px', height: '32px' }} />, value: "500+", label: "Projects Completed" },
    { icon: <Award style={{ width: '32px', height: '32px' }} />, value: "15+", label: "Years Experience" },
    { icon: <CheckCircle style={{ width: '32px', height: '32px' }} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Clock style={{ width: '32px', height: '32px' }} />, value: "24/7", label: "Support Service" }
  ],

  contact: {
    email: "agnotech@gmail.com",
    phone: "+62 813-1861-6245",
    address: "Jl. Kampung Leuwinutug No.20, Kabupaten Bogor, Indonesia",
    hours: "Senin - Jumat: 08:00 - 17:00"
  },

  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
};

const LinkedinIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev >= 100 ? (clearInterval(timer), 100) : prev + 10);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="loading-overlay">
      <div style={{ textAlign: 'center', color: 'white' }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '0.05em' }}>{COMPANY.name}</div>
        <div style={{ fontSize: '14px', color: '#6ee7b7', marginBottom: '32px' }}>{COMPANY.tagline}</div>
        <div className="progress-bar-bg">
          <motion.div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{ fontSize: '14px', marginTop: '16px', color: '#94a3b8' }}>{progress}%</div>
      </div>
    </motion.div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = ["Home", "About", "Services", "Projects", "Clients", "Contact"];
  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) { element.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }
  };

  return (
    <nav className={`nav-fixed ${scrolled ? "nav-scrolled" : "nav-transparent"}`}>
      <div className="container nav-flex-wrapper">
        <div className="brand-wrapper">
          <div className="brand-icon-box">
            <Zap style={{ width: '24px', height: '24px', color: 'white' }} />
          </div>
          <div className="brand-text">
            <h2 style={{ color: scrolled ? '#1e293b' : '#ffffff' }}>{COMPANY.name}</h2>
            <span style={{ color: scrolled ? '#475569' : 'rgba(255,255,255,0.8)' }}>Electrical Solutions</span>
          </div>
        </div>
        
        <div className="menu-desktop">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} style={{ color: scrolled ? '#334155' : 'rgba(255,255,255,0.9)' }}>
              {item}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-nav-action">Get Quote</button>
        </div>
        
        <button className="menu-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X style={{ width: '24px', height: '24px', color: scrolled ? '#0f172a' : '#ffffff' }} /> : <Menu style={{ width: '24px', height: '24px', color: scrolled ? '#0f172a' : '#ffffff' }} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="container">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="menu-mobile-panel">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>{item}</button>
            ))}
          </motion.div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-viewport" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="hero-tagline-pill">
            <Zap style={{ width: '16px', height: '16px' }} /> <span>Powering Your Success</span>
          </div>
          <h1 className="hero-title">
            Electrical Engineering<br />
            <span className="text-linear-emerald">& Procurement</span>
          </h1>
          <p className="hero-description">{COMPANY.description}</p>
          
          <div className="hero-btn-group">
            <button onClick={() => document.getElementById("services").scrollIntoView()} className="btn-hero-primary">
              Our Services <ChevronRight style={{ width: '20px', height: '20px' }} />
            </button>
            <button onClick={() => document.getElementById("contact").scrollIntoView()} className="btn-hero-secondary">
              Contact Us
            </button>
          </div>
          
          <div className="stats-grid">
            {COMPANY.stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.5 }} className="stat-item-box">
                <div style={{ color: '#34d399', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="scroll-indicator">
        <div className="mouse-wheel"><div className="mouse-dot" /></div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-spacer-white">
      <div className="container">
        <div className="section-head-center">
          <div className="badge-primary">{COMPANY.about.title}</div>
          <h2 className="section-title-dark">{COMPANY.about.subtitle}</h2>
          <div className="accent-line" />
        </div>
        
        <div className="about-split-layout">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="about-text-panel">
            <p className="about-paragraph">{COMPANY.about.description}</p>
            <div>
              <h3 className="sub-card-title">Visi Kami</h3>
              <p className="about-paragraph" style={{ fontSize: '16px' }}>{COMPANY.about.vision}</p>
            </div>
            <div>
              <h3 className="sub-card-title">Misi Kami</h3>
              <div className="mission-checklist-container">
                {COMPANY.about.mission.map((item, index) => (
                  <div key={index} className="checklist-item">
                    <CheckCircle style={{ width: '24px', height: '24px', color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                    <span className="checklist-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* PHOTO STACK: Disatukan erat, estetik, dan menumpuk ideal */}
          <div className="photo-stack-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '440px', height: '420px', margin: '0 auto' }}>
            {/* Aksen lingkaran glow lembut di latar belakang */}
            <div className="glow-blur-bg" style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '280px', height: '280px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }} />
            
            <div className="photo-grid-asymmetric" style={{ position: 'relative', width: '100%', height: '100%' }}>
              
              {/* Foto Belakang: Panel Listrik */}
              <motion.div
                className="photo-frame-normal"
                style={{ 
                  position: 'absolute', top: '0', left: '0', width: '72%', zIndex: 10, 
                  borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  border: '4px solid white' 
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, zIndex: 30 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img 
                  src="src/assets/gambar2.jpeg" 
                  alt="Electrical Work" 
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              {/* Foto Depan: Proyek Lapangan (Menempel lebih dekat menimpa sudut kanan bawah foto pertama) */}
              <motion.div
                className="photo-frame-offset"
                style={{ 
                  position: 'absolute', bottom: '10px', right: '0', width: '68%', zIndex: 20, 
                  borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  border: '4px solid white' 
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
              >
                <img 
                  src="src/assets/gambar1.jpeg" 
                  alt="Industrial" 
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-spacer-emerald-mix">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head-center">
          <span className="badge-primary">Our Services</span>
          <h2 className="section-title-dark">Solusi Lengkap untuk Kebutuhan Anda</h2>
          <p className="section-desc">Kami menyediakan berbagai layanan profesional di bidang electrical engineering dan pengadaan barang</p>
        </motion.div>
        
        <div className="services-cards-grid">
          {COMPANY.services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="service-card-interactive">
              <div className="icon-wrapper-emerald">{service.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{service.title}</h3>
              <p className="about-paragraph" style={{ fontSize: '15px', marginBottom: '24px' }}>{service.description}</p>
              <div className="feature-tag-list">
                {service.features.map((f, i) => (
                  <div key={i} className="tag-item-flex">
                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-spacer-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head-center">
          <span className="badge-primary">Our Projects</span>
          <h2 className="section-title-dark">Proyek yang Telah Kami Kerjakan</h2>
          <p className="section-desc">Berbagai proyek electrical engineering yang telah kami selesaikan dengan sukses</p>
        </motion.div>
        
        <div className="projects-cards-grid">
          {COMPANY.projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="project-card-interactive">
              <img src={project.image} alt={project.title} className="project-image-base" />
              <div className="project-gradient-shade" />
              <div className="project-text-overlay">
                <span className="category-pill">{project.category}</span>
                <h3 className="project-inner-title">{project.title}</h3>
                <p className="project-inner-desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="section-spacer-dark-slate">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head-center" style={{ marginBottom: '64px' }}>
          <span className="badge-primary" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}>Our Clients</span>
          <h2 className="section-title-light">Dipercaya oleh Berbagai Industri</h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>Kami bangga telah bekerja sama dengan berbagai perusahaan terkemuka</p>
        </motion.div>
        
        <div className="clients-grid-layout">
          {COMPANY.clients.map((client, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="client-logo-box">
              <div className="client-emoji">{client.logo}</div>
              <div className="client-name-text">{client.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); 

    const nomorWA = "6281318616245"; 

    const teksWhatsApp = `Halo *PT AGNOTECT*,%0A%0A` +
      `Ada penawaran/pesan baru dari website resmi:%0A%0A` +
      `*Nama Lengkap:* ${encodeURIComponent(formState.name)}%0A` +
      `*Email:* ${encodeURIComponent(formState.email)}%0A` +
      `*Perusahaan:* ${encodeURIComponent(formState.company || "-")}%0A` +
      `*Pesan:* %0A${encodeURIComponent(formState.message)}`;

    const urlWhatsApp = `https://wa.me/${nomorWA}?text=${teksWhatsApp}`;

    window.open(urlWhatsApp, "_blank");

    setFormState({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-spacer-emerald-mix">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head-center">
          <span className="badge-primary">Contact Us</span>
          <h2 className="section-title-dark">Hubungi Kami</h2>
          <p className="section-desc">Siap membantu kebutuhan electrical engineering dan pengadaan barang Anda</p>
        </motion.div>
        
        <div className="contact-grid-split">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="contact-info-block">
            <div className="contact-panel-card">
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Informasi Kontak</h3>
              <div className="contact-list-gap">
                {[
                  { icon: <Mail style={{ width: '20px', height: '20px' }} />, label: "Email", value: COMPANY.contact.email },
                  { icon: <Phone style={{ width: '20px', height: '20px' }} />, label: "Telepon", value: COMPANY.contact.phone },
                  { icon: <MapPin style={{ width: '20px', height: '20px' }} />, label: "Alamat", value: COMPANY.contact.address },
                  { icon: <Clock style={{ width: '20px', height: '20px' }} />, label: "Jam Operasional", value: COMPANY.contact.hours }
                ].map((item, i) => (
                  <div key={i} className="contact-item-row">
                    <div className="info-icon-container">{item.icon}</div>
                    <div>
                      <div className="info-meta-label">{item.label}</div>
                      <div className="info-meta-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="social-medias-divider">
                <div className="info-meta-label">Follow Us</div>
                <div className="social-flex-row">
                  <a href={COMPANY.social.linkedin} className="social-circle-btn"><LinkedinIcon /></a>
                  <a href={COMPANY.social.instagram} className="social-circle-btn"><InstagramIcon /></a>
                  <a href={COMPANY.social.facebook} className="social-circle-btn"><FacebookIcon /></a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="contact-form-block">
            <form onSubmit={handleSubmit} className="form-panel-card">
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>Kirim Pesan</h3>
              <div className="form-grid-inner">
                <div className="form-cell-full">
                  <label className="input-label-style">Nama Lengkap</label>
                  <input type="text" placeholder="Ahmad Fakih" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required className="input-field-style" />
                </div>
                <div>
                  <label className="input-label-style">Email</label>
                  <input type="email" placeholder="ahmdfkh@gmail.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required className="input-field-style" />
                </div>
                <div>
                  <label className="input-label-style">Perusahaan</label>
                  <input type="text" placeholder="PT Company Name" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="input-field-style" />
                </div>
                <div className="form-cell-full">
                  <label className="input-label-style">Pesan</label>
                  <textarea placeholder="Ceritakan kebutuhan Anda..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required rows={4} className="textarea-field-style" />
                </div>
                <div className="form-cell-full">
                  <button type="submit" className="btn-form-submit">
                    {submitted ? "✅ Mengalihkan ke WA..." : "Kirim Pesan"} <Send style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-main-grid">
        <div className="footer-brand-column">
          <div className="brand-wrapper">
            <div className="brand-icon-box">
              <Zap style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <div className="brand-text">
              <h2 style={{ color: 'white', fontSize: '18px' }}>{COMPANY.name}</h2>
              <span style={{ color: '#64748b' }}>{COMPANY.tagline}</span>
            </div>
          </div>
          <p className="footer-brand-desc">Partner terpercaya untuk solusi electrical engineering dan pengadaan barang berkualitas di Indonesia.</p>
        </div>
        
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            {["About", "Services", "Projects", "Contact"].map(item => (
              <li key={item}><button onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView()}>{item}</button></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact-list">
            <li>{COMPANY.contact.email}</li>
            <li>{COMPANY.contact.phone}</li>
            <li style={{ color: '#475569' }}>{COMPANY.contact.hours}</li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-copyright-bar">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 1500); return () => clearTimeout(timer); }, []);
  
  return (
    <div>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && (
        <>
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Clients />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}