import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Calendar,
  MapPin,
  Cpu,
  Radio,
  Zap,
  Gauge,
  Wrench,
  Sparkles,
  Eye,
  Check,
  Building2,
  FileCheck2,
  Users,
  Search,
  ChevronRight,
  X,
  GraduationCap
} from 'lucide-react';
import { WORKSHOP_ATTENDEES } from '../data/workshopAttendees';

const WorkshopPortal: React.FC = () => {
  const [searchParams] = useSearchParams();
  const urlName = searchParams.get('name') || '';

  const [studentName] = useState(urlName);
  const [department] = useState('Electronics & Telecommunication (ENTC)');
  const [showCertModal, setShowCertModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'certificate' | 'attendees'>('certificate');
  const [attendeeSearch, setAttendeeSearch] = useState('');

  const filteredAttendees = useMemo(() => {
    if (!attendeeSearch.trim()) return WORKSHOP_ATTENDEES;
    const q = attendeeSearch.trim().toLowerCase();
    return WORKSHOP_ATTENDEES.filter((a) => a.name.toLowerCase().includes(q));
  }, [attendeeSearch]);

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
                Department of Electronics &amp; Telecommunication (ENTC)
              </div>
            </div>
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

      {/* Main Content Area */}
      <main id="verify-section" className="max-w-4xl mx-auto px-4 -mt-10 relative z-20 pb-16">

        {/* Navigation Tabs Switcher */}
        <div className="flex justify-center mb-8 relative z-30">
          <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/90 shadow-xl inline-flex gap-2">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'certificate'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              Certificate Verification
            </button>
            <button
              onClick={() => setActiveTab('attendees')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'attendees'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              Certified Attendees ({WORKSHOP_ATTENDEES.length})
            </button>
          </div>
        </div>

        {/* TAB 1: Certificate Verification View */}
        {activeTab === 'certificate' && (
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">

              {/* Verification Status Header */}
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-6 sm:p-8 flex items-center gap-5">
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
                      Department of Electronics &amp; Telecommunication (ENTC)
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

                  {/* Dates & Venue */}
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
                      <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Head – ENTC</div>
                      <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3 text-emerald-600" /> Authorized
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workshop Trainers Section */}
                <div className="border-t border-slate-200 pt-8 mb-8">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-700 mb-1">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Workshop Trainers</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-5">Hands-on technical sessions and robot assembling conducted by:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-50/70 to-white border border-purple-100 text-center shadow-xs hover:border-purple-300 transition-colors">
                      <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                        Prathamesh Sapate
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-purple-700 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                        Trainer
                      </div>
                      <div className="text-xs text-purple-700 mt-2 font-semibold">
                        Department of ENTC
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-50/70 to-white border border-purple-100 text-center shadow-xs hover:border-purple-300 transition-colors">
                      <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                        Shreyash Pachade
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-purple-700 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                        Trainer
                      </div>
                      <div className="text-xs text-purple-700 mt-2 font-semibold">
                        Department of ENTC
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-50/70 to-white border border-purple-100 text-center shadow-xs hover:border-purple-300 transition-colors">
                      <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                        Vansh Dhobale
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-purple-700 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                        Trainer
                      </div>
                      <div className="text-xs text-purple-700 mt-2 font-semibold">
                        Department of ENTC
                      </div>
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

                {/* Quick Link Card to Attendees Directory */}
                <div
                  onClick={() => {
                    setActiveTab('attendees');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200/90 hover:border-purple-300 cursor-pointer transition-all flex items-center justify-between group shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-purple-700 text-white flex items-center justify-center font-bold shadow-md shadow-purple-600/20 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 group-hover:text-purple-900 flex flex-wrap items-center gap-2">
                        <span>Official Attendees Registry</span>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-200 text-purple-800 uppercase tracking-wide">
                          {WORKSHOP_ATTENDEES.length} Students Certified
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Click here to view all participants who attended this workshop and hold this verified certificate
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform gap-1 shrink-0 ml-3">
                    <span className="hidden sm:inline">View Attendees List</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

            {/* Workshop Syllabus / Highlights Section (Exact from Poster) */}
            <div className="mb-8">
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
          </div>
        )}

        {/* TAB 2: Certified Attendees Registry View */}
        {activeTab === 'attendees' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden mb-12 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Attendees Header Banner */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-900 to-slate-900 text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest mb-3">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Official Attendees Registry</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    Certified Workshop Attendees
                  </h2>
                  <p className="text-purple-200 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                    The following students officially attended and successfully completed the TurboBot Robo Assembling &amp; Control Workshop organized by the Department of Electronics &amp; Telecommunication (ENTC) on 8th &amp; 10th September 2026. Each participant is an authentic certificate holder.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-center shrink-0 backdrop-blur-md">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200">Total Certified</div>
                  <div className="text-3xl font-mono font-black text-amber-300">{WORKSHOP_ATTENDEES.length}</div>
                  <div className="text-[10px] text-emerald-300 font-semibold mt-0.5">100% Authenticated</div>
                </div>
              </div>
            </div>

            {/* Live Search & Filter Bar */}
            <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/80">
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                <div className="relative w-full sm:max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search student by name (e.g. Aaradhya, Soham, Tejas)..."
                    value={attendeeSearch}
                    onChange={(e) => setAttendeeSearch(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-xs"
                  />
                  {attendeeSearch && (
                    <button
                      onClick={() => setAttendeeSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="text-xs font-semibold text-slate-500 shrink-0">
                  Showing <span className="text-purple-700 font-extrabold text-sm">{filteredAttendees.length}</span> of {WORKSHOP_ATTENDEES.length} certified students
                </div>
              </div>
            </div>

            {/* Attendees Grid List */}
            <div className="p-6 sm:p-8">
              {filteredAttendees.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <GraduationCap className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <p className="text-sm font-bold text-slate-700">No participant found matching "{attendeeSearch}"</p>
                  <p className="text-xs text-slate-400 mt-1">Please check the spelling or search using their first or last name.</p>
                  <button
                    onClick={() => setAttendeeSearch('')}
                    className="mt-4 px-5 py-2 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[620px] overflow-y-auto pr-1 scrollbar-thin">
                  {filteredAttendees.map((attendee) => (
                    <div
                      key={attendee.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-purple-100 text-slate-500 group-hover:text-purple-700 text-xs font-black flex items-center justify-center shrink-0 transition-colors">
                          #{String(attendee.id).padStart(2, '0')}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-purple-900 transition-colors truncate">
                            {attendee.name}
                          </div>
                          <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            <span>Verified Certificate Holder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer navigation within tab */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Official Record • Department of Electronics &amp; Telecommunication (ENTC)</span>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('certificate');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>← Back to Certificate Details</span>
                </button>
              </div>

            </div>

          </div>
        )}

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

      </main>

      {/* Official Raisoni Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
            Department of Electronics &amp; Telecommunication Engineering (ENTC)
          </div>
          <div className="text-xs text-slate-500 mb-3">
            G H Raisoni University, Amravati • turbobotcertificate.netlify.app
          </div>

          <div className="text-[11px] text-slate-400">
            © 2026 TurboBot Workshop Official Certificate Verification Portal. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default WorkshopPortal;
