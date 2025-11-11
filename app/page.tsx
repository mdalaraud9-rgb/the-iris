import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, FileText, Building2, BedDouble, CalendarDays, Ruler } from "lucide-react";
import { motion } from "framer-motion";


const DEFAULT_FLOORPLAN_PDF = "/25 CAPITAL DRIVE 1125.pdf"; // Replace with your public URL
const DEFAULT_EXTERIOR_IMG = "/assets/iris-exterior-north-facade-2000w.jpg"; // Optimized JPG generated from TIFF

const PLAN_THUMBS = [
  "/assets/plans-thumbs/plan-p01-thumb.jpg",
  "/assets/plans-thumbs/plan-p02-thumb.jpg",
  "/assets/plans-thumbs/plan-p03-thumb.jpg",
  "/assets/plans-thumbs/plan-p04-thumb.jpg",
  "/assets/plans-thumbs/plan-p05-thumb.jpg",
  "/assets/plans-thumbs/plan-p06-thumb.jpg",
  "/assets/plans-thumbs/plan-p07-thumb.jpg",
  "/assets/plans-thumbs/plan-p08-thumb.jpg",
  "/assets/plans-thumbs/plan-p09-thumb.jpg",
  "/assets/plans-thumbs/plan-p10-thumb.jpg",
  "/assets/plans-thumbs/plan-p11-thumb.jpg",
  "/assets/plans-thumbs/plan-p12-thumb.jpg",
  "/assets/plans-thumbs/plan-p13-thumb.jpg",
  "/assets/plans-thumbs/plan-p14-thumb.jpg",
  "/assets/plans-thumbs/plan-p15-thumb.jpg",
  "/assets/plans-thumbs/plan-p16-thumb.jpg",
  "/assets/plans-thumbs/plan-p17-thumb.jpg",
  "/assets/plans-thumbs/plan-p18-thumb.jpg",
  "/assets/plans-thumbs/plan-p19-thumb.jpg",
];
const PLAN_LARGE = [
  "/assets/plans-large/plan-p01.jpg",
  "/assets/plans-large/plan-p02.jpg",
  "/assets/plans-large/plan-p03.jpg",
  "/assets/plans-large/plan-p04.jpg",
  "/assets/plans-large/plan-p05.jpg",
  "/assets/plans-large/plan-p06.jpg",
  "/assets/plans-large/plan-p07.jpg",
  "/assets/plans-large/plan-p08.jpg",
  "/assets/plans-large/plan-p09.jpg",
  "/assets/plans-large/plan-p10.jpg",
  "/assets/plans-large/plan-p11.jpg",
  "/assets/plans-large/plan-p12.jpg",
  "/assets/plans-large/plan-p13.jpg",
  "/assets/plans-large/plan-p14.jpg",
  "/assets/plans-large/plan-p15.jpg",
  "/assets/plans-large/plan-p16.jpg",
  "/assets/plans-large/plan-p17.jpg",
  "/assets/plans-large/plan-p18.jpg",
  "/assets/plans-large/plan-p19.jpg",
];

// Branding
const BRAND = {
  primary: "#6B5B95",        // Iris purple
  primaryDark: "#5d4f85",
  primaryLight: "#EAE6F1",
};

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-xl" style={{ background: "linear-gradient(135deg, #6B5B95 0%, #8e7ab5 100%)" }} />
      <div className="font-semibold tracking-wide text-xl">The <span style={{ color: BRAND.primary }}>IRIS</span></div>
    </div>
  );
}

export default function TheIrisSite() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const facts = [
    { icon: <Building2 className="w-5 h-5" />, label: "Building", value: "The IRIS" },
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "25 Capital Drive, Charlottetown, PE" },
    { icon: <BedDouble className="w-5 h-5" />, label: "Units", value: "35 (1 & 2‑bedroom)" },
    { icon: <Ruler className="w-5 h-5" />, label: "Total Area", value: "57,000 sq ft" },
    { icon: <CalendarDays className="w-5 h-5" />, label: "Move‑in", value: "April 2026" },
  ];

  const amenities = [
    "Modern light & Scandinavian finishes",
    "Two‑tone kitchen cabinetry",
    "Stainless appliances",
    "In‑suite laundry",
    "Energy‑efficient heating/cooling",
    "On‑site parking",
    "Elevator & accessibility‑friendly design",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B5B95] rounded-lg"><Logo /></a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#plans" className="hover:opacity-70">Floor Plans</a>
            <a href="#gallery" className="hover:opacity-70">Gallery</a>
            <a href="#location" className="hover:opacity-70">Location</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact">
            <Button className="rounded-2xl bg-[#6B5B95] hover:bg-[#5d4f85]">Register Interest</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative" style={{ background: 'radial-gradient(90% 60% at 0% 0%, #EAE6F1 0%, rgba(255,255,255,0) 60%)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-16">
          <div>
            <motion.h1 initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-semibold leading-tight">
              Bright, Modern Living in Charlottetown
            </motion.h1>
            <p className="mt-4 text-slate-600 text-lg">
              Welcome to <span className="font-medium">The IRIS</span> — a new 35‑unit serviced apartment community at 25 Capital Drive with a mix of one‑ and two‑bedroom homes, thoughtfully designed for comfort and convenience.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#plans"><Button className="rounded-2xl bg-[#6B5B95] hover:bg-[#5d4f85]">Explore Floor Plans</Button></a>
              <a href="#contact"><Button variant="outline" className="rounded-2xl border-[#6B5B95] text-[#6B5B95] hover:bg-[#EAE6F1]">Get Updates</Button></a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {facts.map((f, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 text-slate-700">
                      {f.icon}
                      <span className="text-xs uppercase tracking-wide">{f.label}</span>
                    </div>
                    <div className="mt-2 font-medium text-sm">{f.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border">
              {/* In deploy, replace with a compressed JPG/PNG */}
              <img 
                src={DEFAULT_EXTERIOR_IMG}
                alt="The IRIS — Exterior rendering"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Exterior rendering placeholder — replace with optimized JPG/PNG on launch.</p>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">Designed for everyday ease</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((a, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-4 text-slate-700">• {a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section id="plans" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5" />
            <h2 className="text-2xl font-semibold">Floor Plans</h2>
          </div>
          <p className="text-slate-600 max-w-3xl">
            Browse the full floor‑plan set below. You can zoom, download, or open in a new tab. Thumbnails and per‑unit details can be added next.
          </p>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            {/* Embedded PDF viewer */}
            <Card className="rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base">Full Plan Set (PDF)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[3/4]">
                  <object data={DEFAULT_FLOORPLAN_PDF} type="application/pdf" className="w-full h-full">
                    <iframe src={DEFAULT_FLOORPLAN_PDF} className="w-full h-full" title="Floor Plans"/>
                  </object>
                </div>
                <div className="p-4 flex items-center justify-between border-t">
                  <a href={DEFAULT_FLOORPLAN_PDF} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="rounded-2xl border-[#6B5B95] text-[#6B5B95] hover:bg-[#EAE6F1]">Open PDF</Button>
                  </a>
                  <span className="text-xs text-slate-500">Replace with your hosted PDF URL at deploy.</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick spec card */}
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base">Highlights</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-slate-700">
                <div className="flex justify-between"><span>Unit Mix</span><span>1BR & 2BR</span></div>
                <div className="flex justify-between"><span>Floors</span><span>To be confirmed</span></div>
                <div className="flex justify-between"><span>Parking</span><span>On‑site</span></div>
                <div className="flex justify-between"><span>Elevator</span><span>Yes</span></div>
                <div className="flex justify-between"><span>Availability</span><span>April 2026</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FLOOR PLAN THUMBNAILS */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-3">Browse by page</h3>
          <p className="text-slate-600 mb-4">Click any thumbnail to open a high‑resolution plan image in a new tab. The full PDF is still available above.</p>
          <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PLAN_THUMBS.map((thumb, i) => (
              <a key={thumb} href={PLAN_LARGE[i]} target="_blank" rel="noreferrer" className="group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border shadow-sm">
                  <img src={thumb} alt={`Plan page ${i+1}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                </div>
                <div className="mt-1 text-xs text-slate-600">Page {i+1}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <p className="text-slate-600">Exterior renderings. Interior mockups can be added beside plan types.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[DEFAULT_EXTERIOR_IMG, DEFAULT_EXTERIOR_IMG, DEFAULT_EXTERIOR_IMG].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm">
                <img src={src} alt={`The IRIS exterior rendering ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5" />
            <h2 className="text-2xl font-semibold">Location</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <p className="text-slate-600">
              The IRIS sits on Capital Drive with easy access to services, shopping, and transit. Minutes to downtown Charlottetown.
            </p>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border">
              {/* Google Maps embed; replace key/params as needed */}
              <iframe
                title="Map — 25 Capital Drive"
                src={`https://www.google.com/maps?q=${encodeURIComponent("25 Capital Drive, Charlottetown, PE")}&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold">Register your interest</h2>
              <p className="text-slate-300 mt-2">We’ll follow up with availability, pricing, and viewing times as we get closer to launch.</p>
              <div className="mt-6 space-y-3">
                <Input placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-white text-slate-900 rounded-2xl" />
                <Textarea placeholder="Tell us what you’re looking for (1BR/2BR, timeline, questions)…" value={message} onChange={(e)=>setMessage(e.target.value)} className="bg-white text-slate-900 rounded-2xl" />
                <a href={`mailto:info@theirispei.com?subject=The IRIS — Register Interest&body=${encodeURIComponent(`Email: ${email}\n\nMessage: ${message}`)}`}>
                  <Button className="rounded-2xl bg-[#6B5B95] hover:bg-[#5d4f85]"><Mail className="w-4 h-4 mr-2"/>Email Us</Button>
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-3">This button opens your email app. We can wire up a form handler later.</p>
            </div>
            <Card className="rounded-3xl bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white/90">Leasing Details</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-2">
                <div className="flex justify-between"><span>Deposit</span><span>TBD</span></div>
                <div className="flex justify-between"><span>Lease Terms</span><span>TBD</span></div>
                <div className="flex justify-between"><span>Utilities</span><span>TBD</span></div>
                <div className="flex justify-between"><span>Parking</span><span>On‑site</span></div>
                <div className="flex justify-between"><span>Pet Policy</span><span>TBD</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="font-medium text-slate-700">The IRIS</div>
              <div>25 Capital Drive, Charlottetown, PE</div>
            </div>
            <div className="flex gap-3">
              <a href="#plans" className="hover:opacity-70">Plans</a>
              <a href="#gallery" className="hover:opacity-70">Gallery</a>
              <a href="#location" className="hover:opacity-70">Location</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </div>
          </div>
          <div className="mt-6">© {new Date().getFullYear()} The IRIS. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
