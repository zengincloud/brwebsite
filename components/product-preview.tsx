"use client"

import { useState } from "react"
import { Phone, Mail, Calendar, Users, BarChart2, ListTodo, Zap, CheckSquare, Clock, Search, Filter, ArrowRight, TrendingUp } from "lucide-react"

const navItems = [
  { icon: BarChart2, label: "Dashboard", id: "dashboard" },
  { icon: Search, label: "Prospecting", id: "prospecting" },
  { icon: Phone, label: "Dialer", id: "dialer" },
  { icon: Mail, label: "Emailer", id: "emailer" },
  { icon: ListTodo, label: "Sequences", id: "sequences" },
  { icon: TrendingUp, label: "Reports", id: "reports" },
]

// ── Dashboard ────────────────────────────────────────────────────────────────
function RadarChart() {
  const cx = 80, cy = 80, r = 55
  // axes: top=Emails, right=Calls, bottom=Leads, left=LinkedIn
  const target = [
    [cx, cy - r],         // top
    [cx + r, cy],         // right
    [cx, cy + r],         // bottom
    [cx - r, cy],         // left
  ]
  const pcts = [0.88, 0.80, 0.90, 0.75]
  const progress = [
    [cx, cy - r * pcts[0]],
    [cx + r * pcts[1], cy],
    [cx, cy + r * pcts[2]],
    [cx - r * pcts[3], cy],
  ]
  const toPath = (pts: number[][]) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + " Z"

  return (
    <svg viewBox="0 0 160 160" className="w-full h-full">
      {/* Grid rings */}
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <path
          key={scale}
          d={toPath([
            [cx, cy - r * scale],
            [cx + r * scale, cy],
            [cx, cy + r * scale],
            [cx - r * scale, cy],
          ])}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      {/* Axis lines */}
      {target.map((pt, i) => (
        <line key={i} x1={cx} y1={cy} x2={pt[0]} y2={pt[1]} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      ))}
      {/* Target diamond */}
      <path d={toPath(target)} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Progress diamond */}
      <path d={toPath(progress)} fill="rgba(132,204,22,0.15)" stroke="rgba(132,204,22,0.7)" strokeWidth="1.5" />
      {/* Axis labels */}
      <text x={cx} y={cy - r - 6} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8">Emails</text>
      <text x={cx + r + 6} y={cy + 3} textAnchor="start" fill="rgba(255,255,255,0.45)" fontSize="8">Calls</text>
      <text x={cx} y={cy + r + 12} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8">Leads</text>
      <text x={cx - r - 6} y={cy + 3} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize="8">LinkedIn</text>
    </svg>
  )
}

function DashboardView() {
  const stats = [
    { label: "Active Prospects", value: "247", delta: "+12%" },
    { label: "Calls Today", value: "34", delta: "+8" },
    { label: "Emails Sent", value: "156", delta: "+23%" },
    { label: "Meetings Booked", value: "8", delta: "+3" },
  ]
  const bars = [
    { label: "Emails", value: 35, total: 40, pct: 88 },
    { label: "Calls", value: 400, total: 500, pct: 80 },
    { label: "Leads", value: 45, total: 50, pct: 90 },
    { label: "LinkedIn", value: 15, total: 20, pct: 75 },
  ]
  return (
    <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Dashboard</h2>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">● System Active</span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/[0.09] border border-white/[0.14] rounded-lg p-3">
            <p className="text-[10px] text-muted-foreground mb-1">{s.label}</p>
            <p className="text-lg font-bold text-foreground leading-none">{s.value}</p>
            <p className="text-[10px] text-accent mt-1">{s.delta}</p>
          </div>
        ))}
      </div>

      {/* Weekly performance */}
      <div className="bg-white/[0.06] border border-white/[0.12] rounded-lg p-3 flex-1">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs font-medium text-foreground">Weekly SDR Performance</p>
            <p className="text-[9px] text-muted-foreground/70">Progress toward 40 emails, 500 calls, 50 leads, 20 LinkedIn outreaches</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent shrink-0">On Track</span>
        </div>

        <div className="flex gap-4 items-center">
          {/* Radar chart */}
          <div className="w-44 h-44 shrink-0">
            <RadarChart />
          </div>

          {/* Progress bars */}
          <div className="flex-1 space-y-2.5">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-muted-foreground">{b.label}</span>
                  <span className="text-muted-foreground/80">{b.value} / {b.total} <span className="text-accent">{b.pct}%</span></span>
                </div>
                <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${b.pct}%` }} />
                </div>
              </div>
            ))}
            {/* Legend */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-0.5 bg-white/20 rounded" />
                <span className="text-[9px] text-muted-foreground/70">Target</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-0.5 bg-accent rounded" />
                <span className="text-[9px] text-muted-foreground/70">Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Manager */}
      <div className="bg-white/[0.06] border border-white/[0.12] rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.12]">
          <p className="text-xs font-medium text-foreground">Task Manager</p>
          <span className="text-[10px] text-muted-foreground/70">3 due today</span>
        </div>
        <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
          {[
            { tag: "Follow Up", priority: "medium", title: "Demo for NextGen Solutions", desc: "CEO requested a personalized demo; connect with champion", person: "Robert Taylor", due: "Tuesday @ 11am" },
            { tag: "Interested", priority: "high", title: "Schedule demo with CloudNine", desc: "Came inbound this morning", person: "Jessica Lee", due: "Today @ 8:00" },
            { tag: "Hot Lead", priority: "high", title: "Connect with Sarah from TechCorp", desc: "High intent, visited website", person: "Sarah Johnson", due: "Today @ 3pm" },
          ].map((card, i) => (
            <div key={i} className="p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] text-muted-foreground/80 bg-white/[0.08] px-1.5 py-0.5 rounded">{card.tag}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${card.priority === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}>{card.priority}</span>
              </div>
              <p className="text-[10px] font-semibold text-foreground leading-tight mb-1">{card.title}</p>
              <p className="text-[9px] text-muted-foreground/80 leading-relaxed mb-2">{card.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-white/[0.10] flex items-center justify-center text-[8px] text-muted-foreground font-medium">{card.person[0]}</div>
                  <p className="text-[9px] text-muted-foreground/80">{card.person}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-2 h-2 text-muted-foreground/70" />
                  <p className="text-[9px] text-muted-foreground/70">{card.due}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Prospecting ──────────────────────────────────────────────────────────────
function ProspectingView() {
  const results = [
    { name: "Sarah Kim", title: "VP of Sales", company: "Salesforce", location: "San Francisco, CA", intent: "High Intent" },
    { name: "Marc Benioff", title: "Chair & CEO", company: "Salesforce", location: "San Francisco, CA", intent: "Medium Intent" },
    { name: "Mike Torres", title: "Head of Revenue", company: "TechStart Inc", location: "Austin, TX", intent: "High Intent" },
  ]
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-5 pt-5 pb-3 border-b border-white/[0.12]">
        <h2 className="text-sm font-semibold text-foreground mb-3">Outbound Prospecting</h2>
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 bg-white/[0.09] border border-white/[0.14] rounded-md px-3 py-1.5">
            <Search className="w-3 h-3 text-muted-foreground/70 shrink-0" />
            <span className="text-xs text-muted-foreground/70">marc benioff</span>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-xs font-medium">
            <Search className="w-3 h-3" /> Search
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.06] text-muted-foreground text-xs">
            <Filter className="w-3 h-3" /> Filter
          </button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Filters sidebar */}
        <div className="w-36 shrink-0 border-r border-white/[0.12] p-3 space-y-3">
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground/80 uppercase tracking-wider mb-2">Company</p>
            <div className="bg-white/[0.08] border border-white/[0.12] rounded px-2 py-1 text-[10px] text-muted-foreground/70">Company name</div>
            <p className="text-[10px] text-muted-foreground/70 mt-2 mb-1">Headcount</p>
            <div className="h-1 bg-white/[0.06] rounded-full"><div className="h-full bg-accent rounded-full w-full" /></div>
            <div className="flex justify-between text-[9px] text-muted-foreground/80 mt-0.5"><span>10</span><span>10,000+</span></div>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground/80 uppercase tracking-wider mb-2">Role</p>
            <div className="bg-white/[0.08] border border-white/[0.12] rounded px-2 py-1 text-[10px] text-muted-foreground/70">Select function</div>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground/80 uppercase tracking-wider mb-1.5">Seniority</p>
            {["C-Suite", "VP", "Director"].map(l => (
              <div key={l} className="flex items-center gap-1.5 py-0.5">
                <div className="w-2.5 h-2.5 rounded border border-white/20" />
                <span className="text-[10px] text-muted-foreground/80">{l}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Results */}
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          <p className="text-[10px] text-muted-foreground/70 mb-2">3 leads found matching your criteria</p>
          {results.map((r, i) => (
            <div key={i} className="bg-white/[0.08] border border-white/[0.12] rounded-lg px-3 py-2.5 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-xs font-medium text-foreground">{r.name}</p>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${r.intent === "High Intent" ? "bg-accent/20 text-accent" : "bg-yellow-500/20 text-yellow-400"}`}>{r.intent}</span>
                </div>
                <p className="text-[10px] text-muted-foreground/80">{r.title} · {r.company}</p>
                <p className="text-[9px] text-muted-foreground/80">{r.location}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button className="text-[10px] px-2 py-1 rounded bg-white/[0.06] text-muted-foreground border border-white/[0.14]">LinkedIn</button>
                <button className="text-[10px] px-2 py-1 rounded bg-accent text-accent-foreground font-medium">+ Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Dialer ───────────────────────────────────────────────────────────────────
function DialerView() {
  const dialerStats = [
    { label: "Total Calls", value: "34" },
    { label: "Connected", value: "12" },
    { label: "Connect Rate", value: "35%" },
    { label: "Conversation Rate", value: "18%" },
    { label: "Intros Booked", value: "3" },
  ]
  return (
    <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Power Dialer</h2>
          <p className="text-[10px] text-muted-foreground">Dial prospects one at a time</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-xs font-medium">
          <Phone className="w-3 h-3" /> Start Session
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {dialerStats.map((s) => (
          <div key={s.label} className="bg-white/[0.09] border border-white/[0.14] rounded-lg p-2.5">
            <p className="text-[9px] text-muted-foreground mb-1">{s.label}</p>
            <p className="text-base font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Queue */}
      <div className="bg-white/[0.06] border border-white/[0.12] rounded-lg overflow-hidden flex-1">
        {/* Column headers */}
        <div className="grid grid-cols-[20px_1fr_90px] gap-3 px-3 py-1.5 border-b border-white/[0.12] text-[9px] text-muted-foreground/70 uppercase tracking-wider">
          <span>#</span><span>Name</span><span>Company</span>
        </div>

        {/* Marc — expanded active row */}
        <div className="border-b border-accent/20 bg-accent/5">
          {/* Row */}
          <div className="grid grid-cols-[20px_1fr_90px] gap-3 px-3 py-2 items-center">
            <span className="text-[10px] text-muted-foreground/80">1</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[9px] font-semibold text-accent shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> LIVE
              </span>
              <span className="text-[10px] font-mono text-foreground/50">4:12</span>
              <p className="text-[10px] font-medium text-foreground">Marc Benioff</p>
              <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-[#0A66C2]/25 text-[#0A66C2] border border-[#0A66C2]/25">in</span>
              <span className="text-[9px] text-muted-foreground/70">CEO</span>
              <button className="ml-auto p-1 rounded bg-red-500/20 text-red-400 border border-red-500/20">
                <Phone className="w-2.5 h-2.5" />
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground/70">Salesforce</p>
          </div>

          {/* Expanded content */}
          <div className="grid grid-cols-2 divide-x divide-white/[0.06] border-t border-accent/10 mx-3 mb-3 rounded-lg overflow-hidden bg-white/[0.06] border border-white/[0.12]">
            {/* Left: context + transcript */}
            <div className="p-3 flex flex-col gap-2">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-md px-2.5 py-1.5">
                <p className="text-[9px] text-yellow-400 uppercase tracking-wider mb-0.5">Context</p>
                <p className="text-[10px] text-foreground leading-relaxed">Colleague spoke w/ Marc <span className="text-yellow-400">3 months ago</span> — mentioned pressure to grow revenue &amp; scale SDR org in Q2. Tooling sprawl was a pain point.</p>
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground/70 uppercase tracking-wider mb-1.5">Transcript</p>
                <div>
                  <p className="text-[9px] text-muted-foreground/70 mb-1">Marc</p>
                  <div className="space-y-1">
                    <p className="text-[10px] text-foreground/90 leading-relaxed">"We're spread across a lot of tools — my reps don't know where to look."</p>
                    <p className="text-[10px] text-muted-foreground/80">...</p>
                    <p className="text-[10px] text-accent leading-relaxed">"Show me the ROI and I'm in. Free Tuesday at 3?"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: actions */}
            <div className="p-3 flex flex-col gap-2">
              <p className="text-[9px] text-muted-foreground/70 uppercase tracking-wider">Suggested Next Steps</p>
              <button className="w-full text-left bg-white/[0.09] hover:bg-white/[0.08] border border-white/[0.10] rounded-md p-2.5 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-3 h-3 text-accent shrink-0" />
                  <p className="text-[10px] font-medium text-foreground">Send email based on this call?</p>
                </div>
                <p className="text-[9px] text-muted-foreground/80 leading-relaxed pl-5">ROI one-pager + case study tailored to Salesforce's SDR org</p>
              </button>
              <div className="bg-accent/10 border border-accent/25 rounded-md p-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3 h-3 text-accent shrink-0" />
                  <p className="text-[10px] font-medium text-foreground">Marc proposed Tue @ 3pm</p>
                </div>
                <div className="flex gap-1.5 pl-5">
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-accent text-accent-foreground text-[9px] font-medium">
                    <Calendar className="w-2.5 h-2.5" /> Send GCal Invite
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-white/[0.08] border border-white/[0.10] text-muted-foreground text-[9px]">
                    Auto-log in CRM
                  </button>
                </div>
              </div>
              <div className="mt-auto pt-1 border-t border-white/[0.12]">
                <p className="text-[9px] text-muted-foreground/80 leading-relaxed">Auto-logs call, updates CRM, and queues follow-up on hangup.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining queue */}
        {[
          { n: "Thomas Weaver", role: "Director of Sales", co: "VisualVisitor" },
          { n: "Nicole Roessner", role: "Dir. Sales Dev.", co: "Pipewise" },
        ].map((r, i) => (
          <div key={i} className="grid grid-cols-[20px_1fr_90px] gap-3 px-3 py-2 items-center border-t border-white/[0.04]">
            <span className="text-[10px] text-muted-foreground/80">{i + 2}</span>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] text-foreground">{r.n}</p>
                <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/20">in</span>
              </div>
              <p className="text-[9px] text-muted-foreground/70">{r.role}</p>
            </div>
            <p className="text-[10px] text-muted-foreground/70">{r.co}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Emailer ──────────────────────────────────────────────────────────────────
function EmailerView() {
  const statCards = [
    { label: "Pending Emails", value: "42", sub: "Across all sequences" },
    { label: "High Priority", value: "8", sub: "Require immediate attention" },
    { label: "Follow-ups Due", value: "15", sub: "Due in the next 24 hours" },
    { label: "Draft Emails", value: "0", sub: "Saved from dialer" },
  ]
  const emails = [
    { name: "Marcus Webb", company: "TechCorp", time: "Today, 2:30 PM", subject: "Following up on our conversation", preview: "I wanted to follow up on our discussion about...", tags: ["Enterprise Outreach", "First Personalized Email"], priority: "High Priority", insight: "Visited pricing page 5 times in the last week" },
    { name: "Sarah Smith", company: "Innovate LLC", time: "Today, 4:15 PM", subject: "Your recent demo request", preview: null, tags: ["Product Demo Request", "Demo Follow-up"], priority: null, insight: "Requested a demo through website form" },
    { name: "Michael Chen", company: "Global Industries", time: "Tomorrow, 9:00 AM", subject: "Introducing our enterprise solution", preview: null, tags: ["Enterprise Outreach", "Second Automated Email"], priority: null, insight: "Downloaded whitepaper on data security" },
  ]
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-5 pt-5 pb-3">
        <h2 className="text-sm font-semibold text-foreground mb-3">Emailer</h2>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {statCards.map((s) => (
            <div key={s.label} className="bg-white/[0.09] border border-white/[0.14] rounded-lg p-2.5">
              <p className="text-[9px] text-muted-foreground/80 mb-0.5">{s.label}</p>
              <p className="text-lg font-bold text-foreground">{s.value}</p>
              <p className="text-[9px] text-muted-foreground/80">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mb-0">
          {["Drafts", "Sequence Emails", "Priority Follow-ups", "Email Templates"].map((t, i) => (
            <button key={t} className={`text-[10px] px-2.5 py-1 rounded-md ${i === 1 ? "bg-white/[0.08] text-foreground" : "text-muted-foreground/80"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="flex flex-1 border-t border-white/[0.12] overflow-hidden">
        <div className="w-56 border-r border-white/[0.12] overflow-hidden divide-y divide-white/[0.04]">
          {emails.map((e, i) => (
            <div key={i} className={`p-3 ${i === 0 ? "bg-accent/5" : ""}`}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[10px] font-medium text-foreground">{e.name} <span className="text-muted-foreground/70 font-normal">{e.company}</span></span>
                <span className="text-[9px] text-muted-foreground/80">{e.time.split(",")[1]?.trim()}</span>
              </div>
              <p className="text-[10px] text-foreground font-medium truncate mb-0.5">{e.subject}</p>
              {e.preview ? (
                <p className="text-[9px] text-muted-foreground/70 truncate">{e.preview}</p>
              ) : (
                <svg viewBox="0 0 120 10" className="w-full h-2 mt-0.5" preserveAspectRatio="none">
                  <path d="M0,5 Q8,1 16,5 Q24,9 32,5 Q40,1 48,5 Q56,9 64,5 Q72,1 80,5 Q88,9 96,5 Q104,1 112,5 Q118,8 120,5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                  <path d="M0,5 Q6,2 12,5 Q18,8 24,5 Q30,2 36,5 Q42,8 48,5" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
                </svg>
              )}
              <div className="flex gap-1 mt-1.5 flex-wrap">
                {e.tags.map(t => <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.06] text-muted-foreground/80">{t}</span>)}
                {e.priority && <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">{e.priority}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Email header */}
          <div className="px-4 pt-3 pb-2 border-b border-white/[0.12]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-medium text-foreground">Following up on our conversation</p>
              <div className="flex gap-1.5">
                <button className="text-[9px] px-2 py-1 rounded bg-white/[0.06] text-muted-foreground border border-white/[0.12]">Save Draft</button>
                <button className="text-[9px] px-2 py-1 rounded bg-accent text-accent-foreground font-medium">Send</button>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-muted-foreground/70 w-6 shrink-0">To</span>
                <span className="text-foreground/90">marcus.webb@techcorp.com</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-muted-foreground/70 w-6 shrink-0">CC</span>
                <span className="text-muted-foreground/30">Add CC...</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="px-4 py-1.5 border-b border-white/[0.04] flex gap-1.5">
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.06] text-muted-foreground/80">Enterprise Outreach</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.06] text-muted-foreground/80">First Personalized Email</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">High Priority</span>
          </div>

          {/* Body */}
          <div className="px-4 py-3 flex-1 overflow-hidden">
            <div className="space-y-2 text-[10px] text-foreground/90 leading-relaxed">
              <p>Hi Marcus,</p>
              <p>I wanted to follow up on our discussion about consolidating your outbound stack. You mentioned your team was juggling Outreach, Apollo, and a couple of other tools — and that visibility into rep activity was a real gap.</p>
              <p>boilerroom brings prospecting, sequencing, dialing, and follow-up into a single workflow. Your reps stay in one place, and you get full pipeline visibility without chasing spreadsheets.</p>
              <p>Worth a 20-minute look? I can walk you through exactly how teams your size are running it.</p>
              <p className="text-foreground/50">Best,<br />Sadid</p>
            </div>
          </div>

          {/* Insight bar */}
          <div className="px-4 py-2 border-t border-white/[0.04] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <p className="text-[9px] text-muted-foreground/70">Visited pricing page 5 times in the last week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Sequences ────────────────────────────────────────────────────────────────
function SequencesView() {
  const seqs = [
    { name: "Upmarket SMB", steps: ["Call Step 1", "Call Step 2", "Call Step 3", "Call Step 4", "Call Step 5"], total: 5, completed: 25, totalProspects: 77, active: 52, status: "Active" },
    { name: "Startup SMB", steps: ["Call Step 1", "Call Step 2", "Call Step 3", "Call Step 4", "Call Step 5", "Call Step 6", "Call Step 7"], total: 7, completed: 0, totalProspects: 2, active: 2, status: "Active" },
    { name: "Consulting Companies", steps: ["Call Step 1", "Call Step 2", "Call Step 3", "Call Step 4", "Call Step 5", "Call Step 6"], total: 6, completed: 4, totalProspects: 18, active: 12, status: "Active" },
  ]
  return (
    <div className="flex-1 p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground">Sequences</h2>
        <button className="px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-xs font-medium">+ Create Sequence</button>
      </div>
      <div className="space-y-3 overflow-hidden">
        {seqs.map((s) => (
          <div key={s.name} className="bg-white/[0.08] border border-white/[0.14] rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <p className="text-xs font-semibold text-foreground">{s.name}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">Active</span>
            </div>
            <div className="flex gap-1 flex-wrap mb-2.5">
              {s.steps.slice(0, 5).map((step, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.14] text-muted-foreground/70 flex items-center gap-1">
                    <Phone className="w-2 h-2" />{step}
                  </span>
                  {i < s.steps.slice(0, 5).length - 1 && <ArrowRight className="w-2 h-2 text-muted-foreground/30" />}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 text-[10px]">
              <div>
                <p className="text-muted-foreground/70">Total Steps</p>
                <p className="text-foreground font-medium">{s.total}</p>
              </div>
              <div>
                <p className="text-muted-foreground/70">Completed</p>
                <p className="text-foreground font-medium">{s.completed}</p>
              </div>
              <div>
                <p className="text-muted-foreground/70">Active Prospects</p>
                <p className="text-accent font-medium">{s.active}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Tasks (Kanban) ───────────────────────────────────────────────────────────
function TasksView() {
  const cards = [
    { tag: "Follow Up", priority: "medium", title: "Demo for NextGen Solutions", desc: "CEO requested a personalized demo; connect with champion", person: "Robert Taylor", role: "CEO", due: "Tuesday @ 11am" },
    { tag: "Interested", priority: "high", title: "Schedule demo with CloudNine", desc: "Came inbound this morning", person: "Jessica Lee", role: "Head of Operations", due: "Today @ 8:00" },
    { tag: "Hot Lead", priority: "high", title: "Connect with Sarah from TechCorp", desc: "High intent, visited website", person: "Sarah Johnson", role: "CTO", due: "Today @ 3pm" },
  ]
  return (
    <div className="flex-1 p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-foreground">Tasks</h2>
        <span className="text-[10px] text-muted-foreground/70">3 due today</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {cards.map((card, i) => (
          <div key={i} className="bg-white/[0.09] border border-white/[0.12] rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-muted-foreground/80 bg-white/[0.08] px-1.5 py-0.5 rounded">{card.tag}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${card.priority === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}>{card.priority}</span>
            </div>
            <p className="text-[11px] font-semibold text-foreground leading-tight mb-1.5">{card.title}</p>
            <p className="text-[9px] text-muted-foreground/80 leading-relaxed mb-3">{card.desc}</p>
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 rounded-full bg-white/[0.10] flex items-center justify-center text-[8px] text-muted-foreground font-medium">{card.person[0]}</div>
              <div>
                <p className="text-[9px] text-muted-foreground/90">{card.person}</p>
                <p className="text-[8px] text-muted-foreground/60">{card.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-muted-foreground/70" />
              <p className="text-[9px] text-muted-foreground/70">{card.due}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Reports ──────────────────────────────────────────────────────────────────
function ReportsView() {
  const reps = [
    { name: "Jordan Lee", calls: 312, connects: 48, emails: 210, meetings: 7, rate: "15.4%" },
    { name: "Priya Nair", calls: 289, connects: 41, emails: 198, meetings: 5, rate: "14.2%" },
    { name: "Chris Mendez", calls: 401, connects: 62, emails: 244, meetings: 9, rate: "15.5%" },
    { name: "Taylor Brooks", calls: 198, connects: 22, emails: 155, meetings: 3, rate: "11.1%" },
  ]
  const weekly = [
    { day: "Mon", calls: 72 },
    { day: "Tue", calls: 91 },
    { day: "Wed", calls: 84 },
    { day: "Thu", calls: 110 },
    { day: "Fri", calls: 63 },
  ]
  const max = Math.max(...weekly.map(w => w.calls))
  return (
    <div className="flex-1 p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground">Reports</h2>
        <div className="flex gap-1.5">
          {["This Week", "This Month", "Q1"].map((t, i) => (
            <button key={t} className={`text-[10px] px-2.5 py-1 rounded-md ${i === 1 ? "bg-white/[0.08] text-foreground" : "text-muted-foreground/80"}`}>{t}</button>
          ))}
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: "Total Calls", value: "1,200", delta: "+18%", up: true },
          { label: "Connect Rate", value: "14.8%", delta: "+2.1%", up: true },
          { label: "Meetings Booked", value: "24", delta: "+6", up: true },
          { label: "Avg Talk Time", value: "3m 42s", delta: "-12s", up: false },
        ].map(s => (
          <div key={s.label} className="bg-white/[0.09] border border-white/[0.14] rounded-lg p-3">
            <p className="text-[9px] text-muted-foreground/80 mb-1">{s.label}</p>
            <p className="text-base font-bold text-foreground">{s.value}</p>
            <p className={`text-[10px] mt-0.5 ${s.up ? "text-accent" : "text-red-400"}`}>{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Bar chart */}
        <div className="bg-white/[0.06] border border-white/[0.12] rounded-lg p-3">
          <p className="text-[10px] font-medium text-foreground mb-3">Calls This Week</p>
          <div className="flex items-end gap-2 h-20">
            {weekly.map(w => (
              <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] text-muted-foreground/70">{w.calls}</span>
                <div className="w-full bg-accent/80 rounded-sm" style={{ height: `${(w.calls / max) * 56}px` }} />
                <span className="text-[9px] text-muted-foreground/70">{w.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rep leaderboard */}
        <div className="bg-white/[0.06] border border-white/[0.12] rounded-lg overflow-hidden">
          <div className="px-3 py-2 border-b border-white/[0.12]">
            <p className="text-[10px] font-medium text-foreground">Rep Leaderboard</p>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {reps.map((r, i) => (
              <div key={r.name} className="flex items-center gap-2 px-3 py-1.5">
                <span className={`text-[10px] font-bold w-4 shrink-0 ${i === 0 ? "text-accent" : "text-muted-foreground/80"}`}>{i + 1}</span>
                <p className="text-[10px] text-foreground flex-1">{r.name}</p>
                <span className="text-[10px] text-muted-foreground/80">{r.calls} calls</span>
                <span className="text-[10px] text-muted-foreground/80">{r.meetings} mtgs</span>
                <span className={`text-[10px] font-medium ${i < 2 ? "text-accent" : "text-muted-foreground"}`}>{r.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const views: Record<string, React.FC> = {
  dashboard: DashboardView,
  prospecting: ProspectingView,
  dialer: DialerView,
  emailer: EmailerView,
  sequences: SequencesView,

  reports: ReportsView,
}

export function ProductPreview() {
  const [active, setActive] = useState("dashboard")
  const ActiveView = views[active]

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="bg-white/[0.07] backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_32px_80px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.14] bg-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">boilerroom.ai</span>
        </div>

        <div className="flex min-h-[440px]">
          {/* Sidebar */}
          <div className="w-40 shrink-0 border-r border-white/[0.12] bg-white/[0.02] p-3 flex flex-col gap-0.5">
            <div className="flex items-center gap-2 px-2 py-2 mb-3">
              <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                <Zap className="w-3 h-3 text-accent-foreground" />
              </div>
              <span className="text-xs font-semibold text-foreground">boilerroom</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors text-left w-full ${
                  active === item.id
                    ? "bg-accent/15 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.08]"
                }`}
              >
                <item.icon className="w-3.5 h-3.5 shrink-0" />
                {item.label}
              </button>
            ))}
          </div>

          <ActiveView />
        </div>
      </div>

      <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10 rounded-3xl" />
    </div>
  )
}
