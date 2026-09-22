import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Calendar,
  MapPin,
  Users,
  Cpu,
  Radio,
  Zap,
  Gauge,
  Wrench,
  Download,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BookOpen,
  Eye,
  Check,
  Building2,
  FileCheck2,
  Flag
} from 'lucide-react';

const WorkshopPortal: React.FC = () => {
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id') || 'GHRU-TB26-001';
  const urlName = searchParams.get('name') || '';

  const [searchId, setSearchId] = useState('');
  const [activeCertId, setActiveCertId] = useState(urlId);
  const [studentName, setStudentName] = useState(urlName);
  const [department, setDepartment] = useState('Electronics & Telecommunication');
  const [showCertModal, setShowCertModal] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);

  const handleVerifySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    setActiveCertId(searchId.trim().toUpperCase());
  };

  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "ESP-Based Robot Programming",
      desc: "Hands-on ESP32 microcontroller architecture, GPIO pin mapping, PWM frequency control, and logic programming."
    },
    {
      icon: <Radio className="w-5 h-5 text-sky-500" />,
      title: "ESP-NOW Wireless Control",
      desc: "Ultra-low latency direct peer-to-peer wireless packet transmission without needing a router or internet."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Motor Driver Integration",
      desc: "Wiring and configuring high-current BTS7960 H-bridge motor drivers with Johnson Gear Motors."
    },
    {
      icon: <Wrench className="w-5 h-5 text-emerald-500" />,
      title: "Robot Chassis Design & Assembly",
      desc: "Complete mechanical assembly, structural balance, wheel alignment, and weight distribution."
    },
    {
      icon: <Gauge className="w-5 h-5 text-rose-500" />,
      title: "Speed Optimization & Tuning",
      desc: "Analog potentiometer speed calibration (GPIO 34), dual-bridge acceleration, and responsive steering."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-500" />,
      title: "Battery & Power Management",
      desc: "12V onboard battery configuration, LM2596 step-down buck converter, fuse protection, and common ground setup."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-poppins selection:bg-purple-100 selection:text-purple-900">

      {/* Top University Brand Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/G_H_Raisoni_University_logo.png/220px-G_H_Raisoni_University_logo.png"
              alt="G H Raisoni University"
              className="h-12 w-auto object-contain hidden sm:block"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <div className="text-[11px] font-bold tracking-wider text-purple-700 uppercase">
                G H Raisoni University, Amravati
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                Department of Electronics &amp; Telecommunication
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Verification Live
            </span>
            <a
              href="#verify-section"
              className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shadow-purple-600/20"
            >
              Verify
            </a>
          </div>
        </div>
      </header>

      {/* Hero / Portal Title Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-950 to-slate-900 text-white pt-16 pb-20 px-4">
        {/* Abstract Background Lights */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 font-black text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Workshop Certificate Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4 text-white">
            TurboBot <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-sky-300 to-purple-300">Robo Race Workshop</span>
          </h1>

          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Official Online Verification Portal for Participation Certificates issued for the Hands-on Technical Workshop on Robot Building, ESP32 Programming &amp; Motor Control.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-purple-200">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Conducted: 8th &amp; 10th September 2026</span>
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Lab 317 (DIC Lab) &amp; Seminar Hall</span>
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>G H Raisoni University, Amravati</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Verification Certificate Card */}
      <main id="verify-section" className="max-w-4xl mx-auto px-4 -mt-10 relative z-20 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden mb-12">

          {/* Verification Status Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 justify-between">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-md">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="inline-block px-2.5 py-0.5 bg-white text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-md mb-1">
                  100% Genuine &amp; Verified
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Original Authenticated Certificate
                </h2>
                <p className="text-emerald-100 text-xs sm:text-sm mt-0.5">
                  This certificate is officially verified, authentic, and registered with G H Raisoni University, Amravati.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-center sm:text-right shrink-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Certificate ID</div>
              <div className="text-base font-mono font-black text-white">{activeCertId}</div>
              <div className="text-[10px] text-emerald-200">Status: Valid</div>
            </div>
          </div>

          <div className="p-6 sm:p-10">

            {/* Certificate Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              
              {/* Workshop Title */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>Workshop Title</span>
                </div>
                <div className="text-lg font-black text-slate-900">
                  TurboBot Robo Assembling
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Hands-on Technical Training on Robot Assembly &amp; ESP32 Wireless Control
                </div>
              </div>

              {/* Department */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1">
                  <Building2 className="w-4 h-4 text-indigo-600" />
                  <span>Organized By</span>
                </div>
                <div className="text-lg font-black text-slate-900">
                  Department of Electronics &amp; Telecommunication
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  G H Raisoni University, Amravati
                </div>
              </div>

              {/* Certificate Type */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
                  <FileCheck2 className="w-4 h-4 text-purple-600" />
                  <span>Certificate Type</span>
                </div>
                <div className="text-lg font-black text-slate-900">
                  {studentName ? studentName : 'Certificate of Participation'}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {studentName
                    ? `Department: ${department}`
                    : 'Official credential issued to verified workshop attendees of G H Raisoni University'}
                </div>
              </div>

              {/* Dates & Location */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Dates &amp; Venue</span>
                </div>
                <div className="text-lg font-black text-slate-900">
                  8th &amp; 10th September 2026
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Room No. 317 (Digital Integrated Circuit Lab) &amp; Seminar Hall
                </div>
              </div>

            </div>

            {/* University Authorities / Signatories Confirmation */}
            <div className="border-t border-slate-200 pt-8 mb-8">
              <div className="text-center sm:text-left mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Authorized University Signatories
                </span>
                <p className="text-xs text-slate-500">The certificate bears official digital authentication on behalf of:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs font-extrabold text-slate-900">Prof. Dr. Vinayak S. Deshpande</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Vice Chancellor</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3 text-emerald-600" /> Authorized
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs font-extrabold text-slate-900">Dr. Snehil G. Jaiswal</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Registrar</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3 text-emerald-600" /> Authorized
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs font-extrabold text-slate-900">Dr. Shrikant P. Chavate</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Head – ETC</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3 text-emerald-600" /> Authorized
                  </div>
                </div>
              </div>
            </div>

            {/* Trainers & Coordinators */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-800 mb-3">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Workshop Conducted By (Trainers &amp; Leads)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Prathamesh Sapate</div>
                  <div className="text-[11px] text-purple-700 font-medium">Final Year ETC • Lead Trainer</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Shreyash Pachade</div>
                  <div className="text-[11px] text-purple-700 font-medium">Final Year ETC • Event Lead</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Vansh Dhobale</div>
                  <div className="text-[11px] text-purple-700 font-medium">Final Year ETC • Technical Head</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: View Certificate */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 text-white">
              <div>
                <h3 className="font-bold text-sm sm:text-base">Original Verified Certificate</h3>
                <p className="text-xs text-slate-400">View the official certificate format containing this scannable QR verification.</p>
              </div>
              <div>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
                >
                  <Eye className="w-4 h-4" />
                  View Certificate
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Certificate Modal */}
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-slate-900 text-sm">TurboBot Robo Workshop Certificate (With QR Code)</span>
                </div>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 bg-slate-100 text-center">
                <img
                  src="/Assets/turbobot_certificate_with_qr.png"
                  alt="Verified Certificate with QR"
                  className="w-full max-h-[75vh] object-contain rounded-xl shadow-lg mx-auto"
                />
              </div>
              <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-white">
                <button
                  onClick={() => setShowCertModal(false)}
                  className="px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Workshop Poster Modal */}
        {showPosterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <span className="font-bold text-slate-900 text-sm">TurboBot Workshop Official Poster</span>
                <button
                  onClick={() => setShowPosterModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 bg-slate-100 text-center">
                <img
                  src="/Assets/turbobot_poster.png"
                  alt="TurboBot Workshop Poster"
                  className="w-full max-h-[75vh] object-contain rounded-xl shadow-lg mx-auto"
                />
              </div>
              <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-white">
                <a
                  href="/Assets/turbobot_poster.png"
                  download="TurboBot_Workshop_Poster.png"
                  className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Poster
                </a>
                <button
                  onClick={() => setShowPosterModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}



        {/* Workshop Syllabus / Highlights Section (Exact from Poster) */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-bold text-xs uppercase tracking-wider mb-2">
              Workshop Syllabus &amp; Training
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              What Was Taught in TurboBot Workshop
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto mt-1">
              Participants received complete hands-on practical training on hardware, firmware, and racing electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Official Workshop Poster Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 text-white p-6 sm:p-10 relative overflow-hidden shadow-xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-md mb-3">
                Official Event Poster
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                TurboBot Robo Race Workshop 2026
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed mb-4">
                2-Day Hands-on Training Program organized exclusively for G H Raisoni University students at Digital Integrated Circuit Laboratory (Room No. 317).
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white/10 px-3 py-1 rounded-lg">Registration Fee: ₹50/-</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg">Participation Certificate Issued</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg">Lab 317 • 3rd Floor</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 shrink-0">
              <div
                onClick={() => setShowPosterModal(true)}
                className="cursor-pointer group relative rounded-2xl overflow-hidden border-2 border-purple-400/40 shadow-2xl transition-transform hover:scale-105"
              >
                <img
                  src="/Assets/turbobot_poster.png"
                  alt="TurboBot Poster Thumbnail"
                  className="w-40 sm:w-48 h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-white">
                  Click to View
                </div>
              </div>
              <button
                onClick={() => setShowPosterModal(true)}
                className="text-xs font-bold text-purple-300 hover:text-white transition-colors"
              >
                View Full Poster
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Official Raisoni Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
            Department of Electronics &amp; Telecommunication Engineering
          </div>
          <div className="text-xs text-slate-500 mb-4">
            G H Raisoni University, Amravati • turbobotcertificate.netlify.app
          </div>

          <div className="border-t border-orange-500 pt-3 text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex flex-wrap justify-center gap-2 sm:gap-4">
            <span>Nagpur</span>
            <span>|</span>
            <span>Pune</span>
            <span>|</span>
            <span>Jalgaon</span>
            <span>|</span>
            <span>Amravati</span>
            <span>|</span>
            <span>Pandhurna</span>
            <span>|</span>
            <span>Bhandara</span>
          </div>

          <div className="text-[10px] text-slate-400 mt-4">
            © 2026 TurboBot Workshop Official Certificate Verification Portal. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default WorkshopPortal;
