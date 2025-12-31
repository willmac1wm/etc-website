import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { STATS, SAFETY_CHART_DATA } from '../services/mockData';
import { ShieldCheck, Award, HardHat } from 'lucide-react';

const SafetyStats: React.FC = () => {
  return (
    <section className="py-20 bg-etc-blue text-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Top Grid: Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-display font-bold text-etc-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
               <ShieldCheck className="text-green-500 h-8 w-8" />
               <h3 className="text-2xl font-bold">Uncompromising Safety</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Safety isn't just a policy.<br/> It's our culture.
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              At ETC, we maintain an Experience Modification Rate (EMR) significantly below the industry average of 1.0. 
              Our "Zero Incident" philosophy ensures that every member of our team returns home safely every day.
              We invest heavily in OSHA training and regular site audits.
            </p>
            
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <div className="mt-1 bg-white/10 p-1 rounded">
                        <Award size={16} className="text-etc-accent"/>
                    </div>
                    <div>
                        <h4 className="font-bold">Award Winning Compliance</h4>
                        <p className="text-sm text-gray-400">Consistently recognized by regional safety boards.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="mt-1 bg-white/10 p-1 rounded">
                        <HardHat size={16} className="text-etc-accent"/>
                    </div>
                    <div>
                        <h4 className="font-bold">100% OSHA Certified</h4>
                        <p className="text-sm text-gray-400">All field supervisors hold OSHA 30 certifications.</p>
                    </div>
                </li>
            </ul>
          </div>

          {/* Right: Chart */}
          <div className="bg-white rounded-xl p-6 md:p-8 text-etc-blue shadow-2xl">
            <h4 className="text-lg font-bold mb-6 flex justify-between items-center">
                Annual Safety Incidents
                <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded">Lower is Better</span>
            </h4>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SAFETY_CHART_DATA}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false}/>
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="incidents" radius={[4, 4, 0, 0]}>
                    {SAFETY_CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.incidents === 0 ? '#22c55e' : '#eab308'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
                * Zero reportable incidents achieved in 2023 with over 200k hours worked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStats;