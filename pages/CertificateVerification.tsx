import React, { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Calendar, 
  MapPin, 
  UserCheck, 
  Building2, 
  Download, 
  ExternalLink,
  Search,
  Sparkles,
  QrCode,
  Trophy,
  ArrowRight
} from 'lucide-react';

const CertificateVerification: React.FC = () => {
  const { certId } = useParams<{ certId?: string }>();
  const [searchParams] = useSearchParams();
  
  const queryId = searchParams.get('id') || certId || 'GHRU-TB26-001';
  const queryName = searchParams.get('name') || '';

  const [inputSearch, setInputSearch] = useState('');
  const [currentCertId, setCurrentCertId] = useState(queryId);
  const [participantName, setParticipantName] = useState(queryName || 'Prathamesh Sapate');
  const [departmentName, setDepartmentName] = useState('Electronics & Telecommunication');
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputSearch.trim()) return;
    setCurrentCertId(inputSearch.trim().toUpperCase());
  };

  return (
    <div className="pt-28 pb-24 px-4 bg-slate-50 min-h-screen relative overflow-hidden font-poppins">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Verification Status Banner */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs tracking-wider uppercase mb-5 shadow-sm animate-pulse">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Digital Verification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Certificate <span className="text-emerald-600">Verification</span> Portal
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
            G H Raisoni University, Amravati — Department of Electronics &amp; Telecommunication (ETC)
          </p>
        </div>

        {/* Main Authenticated Badge Card */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden mb-8 relative">
          <div className="h-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500"></div>

          <div className="p-6 sm:p-10">
            {/* Big Green Verified Seal */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-50/40 to-teal-50 border border-emerald-200/80 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-block px-3 py-1 bg-emerald-600 text-white text-[11px] font-black uppercase tracking-widest rounded-md mb-2">
                  100% Authentic &amp; Original
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Verified Official Certificate
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  This certificate is officially verified, authentic, and registered with G H Raisoni University, Amravati.
                </p>
                <div className="mt-2 text-xs font-semibold text-emerald-700 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Credential ID: <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">{currentCertId}</span>
                </div>
              </div>
            </div>

            {/* Credential Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {/* Event / Workshop */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <Award className="w-4 h-4 text-sky-500" />
                  <span>Workshop / Activity</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  TurboBot Robo Assembling
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Hands-on ESP32 Robot Assembling &amp; Control
                </div>
              </div>

              {/* Department & Institute */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <Building2 className="w-4 h-4 text-indigo-500" />
                  <span>Organizing Department</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  Electronics &amp; Telecommunication (ETC)
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  G H Raisoni University, Amravati
                </div>
              </div>

              {/* Workshop Dates */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>Dates of Completion</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  8th &amp; 10th September 2026
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Conducted across Batch A &amp; Batch B
                </div>
              </div>

              {/* Venue & Laboratory */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Practical Lab &amp; Venue</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  Digital Integrated Circuit Laboratory
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Room No. 317, 3rd Floor &amp; Seminar Hall
                </div>
              </div>
            </div>

            {/* Authorized Signatories Section */}
            <div className="border-t border-slate-100 pt-6 mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 text-center sm:text-left">
                Institutional Authority Signatories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-800">Prof. Dr. Vinayak S. Deshpande</div>
                  <div className="text-[11px] font-medium text-slate-500">Vice Chancellor</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">✔ Confirmed</span>
                </div>
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-800">Dr. Snehil G. Jaiswal</div>
                  <div className="text-[11px] font-medium text-slate-500">Registrar</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">✔ Confirmed</span>
                </div>
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-800">Dr. Shrikant P. Chavate</div>
                  <div className="text-[11px] font-medium text-slate-500">Head – ETC</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">✔ Confirmed</span>
                </div>
              </div>
            </div>

            {/* Trainers / Mentors */}
            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-sky-600" />
                <span>Workshop Trainers &amp; Coordinators</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="bg-white px-3 py-1 rounded-lg border border-sky-100 shadow-sm">Prathamesh Sapate (Lead Trainer)</span>
                <span className="bg-white px-3 py-1 rounded-lg border border-sky-100 shadow-sm">Shreyash Pachade (Event Coordinator)</span>
                <span className="bg-white px-3 py-1 rounded-lg border border-sky-100 shadow-sm">Vansh Dhobale (Technical Head)</span>
              </div>
            </div>

            {/* Certificate Preview Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 text-white">
              <div>
                <h4 className="font-bold text-sm sm:text-base">View Certificate Design</h4>
                <p className="text-xs text-slate-400">View the original certificate layout with embedded QR verification.</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  View Preview
                </button>
                <a
                  href="/Assets/turbobot_certificate_with_qr.png"
                  download="TurboBot_Certificate_Verified.png"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-slate-900 text-sm">TurboBot Robo Workshop Certificate</span>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 bg-slate-100 text-center">
                <img
                  src="/Assets/turbobot_certificate_with_qr.png"
                  alt="Verified Certificate with QR"
                  className="w-full max-h-[70vh] object-contain rounded-lg shadow-md mx-auto"
                />
              </div>
              <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-white">
                <a
                  href="/Assets/turbobot_certificate_with_qr.png"
                  download="TurboBot_Certificate_Verified.png"
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Certificate
                </a>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search for another certificate */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 text-center shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-2">Verify Another Certificate</h3>
          <p className="text-xs text-slate-500 mb-4 max-w-md mx-auto">
            Enter any Certificate ID or Participant Registration Number to check authentication details.
          </p>
          <form onSubmit={handleSearch} className="flex max-w-md mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. GHRU-TB26-001"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-colors"
            >
              Verify
            </button>
          </form>
        </div>

        {/* Call to Action: Robo Race 2026 */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900 text-white p-8 relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 font-bold text-[10px] uppercase tracking-widest mb-3">
                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                <span>Next Big Event</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2">
                Ready for the RoboRace 26?
              </h3>
              <p className="text-sky-100 text-xs sm:text-sm max-w-lg leading-relaxed">
                You assembled your bot in the workshop — now bring it to the ultimate arena! Total prize pool of ₹15,000 awaits the fastest champions.
              </p>
            </div>
            <Link
              to="/register"
              className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-sky-50 font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <span>Register Your Bot</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificateVerification;
