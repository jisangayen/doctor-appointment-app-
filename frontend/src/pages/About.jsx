import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-slate-800">
      {/* Top Section Header */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-800">
          About{" "}
          <span className="font-extrabold text-slate-900 relative">
            Clinic <span className="text-primary">Go</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full" />
          </span>
        </h1>
      </div>

      {/* Main About Section */}
      <div className="my-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Image Column with Decorative Glass Frame */}
        <div className="relative h-full rounded-3xl overflow-hidden border border-white/60 bg-white/70 backdrop-blur-md shadow-xl shadow-slate-200/50 p-3 flex flex-col justify-between">
          <div className="absolute -inset-1 bg-white rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />
          
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
            <img
              className="w-full h-100 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              src={assets.about_image}
              alt="About ClinicGo"
            />

            {/* Floating Badge Overlay */}
            <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/80 border border-white/60 px-3.5 py-2 rounded-2xl shadow-sm flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-slate-900 leading-none">10k+ Patients</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Trust ClinicGo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Paragraphs & Vision Column */}
        <div className="flex flex-col justify-center gap-5 md:w-7/12 text-sm text-slate-600 leading-relaxed">
          <p>
            Welcome to{" "}
            <strong className="text-slate-900 font-bold">ClinicGo</strong>, your
            trusted digital healthcare companion designed to simplify how you
            manage medical appointments and health records. We understand the
            challenges patients face in navigating busy schedules, long wait
            times, and finding reliable specialists.
          </p>

          <p>
            We are committed to excellence in health-tech innovation. By
            continuously integrating cutting-edge features into our platform, we
            deliver an intuitive experience that empowers both patients and
            healthcare providers at every step of care.
          </p>

          {/* Featured Vision Card */}
          <div className="mt-3 p-5 sm:p-6 bg-gradient-to-br from-primary/[0.04] to-indigo-50/50 border border-primary/20 rounded-2xl shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Our Vision
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              To build a frictionless healthcare ecosystem where accessing
              quality medical advice, booking specialists, and coordinating care
              is as simple as a single tap.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Header */}
      <div className="mt-20 mb-8 text-center sm:text-left">
        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
          Our Value Proposition
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
          Why Choose <span className="text-primary">ClinicGo</span>
        </h2>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Feature 1 */}
        <div className="group relative bg-white border border-slate-200/80 hover:border-primary/40 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center text-xl font-bold transition-colors duration-300 mb-6">
              ⚡
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">
              Efficiency
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Streamlined appointment scheduling and instant booking
              confirmations designed to fit into your busy lifestyle.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="group relative bg-white border border-slate-200/80 hover:border-primary/40 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center text-xl font-bold transition-colors duration-300 mb-6">
              🩺
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">
              Convenience
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Instant access to an extensive network of verified healthcare
              professionals and specialist clinics in your area.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="group relative bg-white border border-slate-200/80 hover:border-primary/40 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center text-xl font-bold transition-colors duration-300 mb-6">
              🎯
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">
              Personalization
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Tailored health management, family profile tracking, and timely
              automated visit reminders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;