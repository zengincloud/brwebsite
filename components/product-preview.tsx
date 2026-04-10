"use client"

import { useState } from "react"
import { Phone, Mail, BarChart2, ListTodo, Search, TrendingUp, Zap, ArrowRight } from "lucide-react"

const navItems = [
  { icon: BarChart2, label: "Dashboard", id: "dashboard" },
  { icon: Search, label: "Prospecting", id: "prospecting" },
  { icon: Phone, label: "Dialer", id: "dialer" },
  { icon: Mail, label: "Emailer", id: "emailer" },
  { icon: ListTodo, label: "Sequences", id: "sequences" },
  { icon: TrendingUp, label: "Reports", id: "reports" },
]

// ── Dashboard ────────────────────────────────────────────────────────────────
function DashboardView() {
  const stats = [
    { label: "Calls Today", value: "34", delta: "+8 vs avg" },
    { label: "Meetings Booked", value: "8", delta: "+3 this week" },
    { label: "Active Cadences", value: "3", delta: "52 prospects" },
  ]
  const targets = [
    { label: "Calls", value: 400, goal: 500, pct: 80 },
    { label: "Emails", value: 35, goal: 40, pct: 88 },
    { label: "LinkedIn", value: 15, goal: 20, pct: 75 },
  ]
  return (
    <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#1d1d1f]">Dashboard</h2>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--green-3)] text-[var(--green-11)]">● System Active</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-[var(--sand-5)] rounded-lg p-4">
            <p className="text-[10px] text-[var(--sand-11)] mb-2">{s.label}</p>
            <p className="text-2xl font-bold text-[#1d1d1f] leading-none mb-1">{s.value}</p>
            <p className="text-[10px] text-[var(--green-10)]">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[var(--sand-5)] rounded-lg p-4 flex-1">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium text-[#1d1d1f]">Daily Targets</p>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--green-3)] text-[var(--green-11)]">On Track</span>
        </div>
        <div className="space-y-4">
          {targets.map((t) => (
            <div key={t.label}>
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-[var(--sand-11)]">{t.label}</span>
                <span className="text-[var(--sand-10)]">{t.value} <span className="text-[var(--sand-8)]">/ {t.goal}</span></span>
              </div>
              <div className="h-2 bg-[var(--sand-4)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--green-9)] rounded-full transition-all" style={{ width: `${t.pct}%` }} />
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
    { name: "Sarah Kim", title: "VP of Sales", company: "Salesforce", intent: "High Intent" },
    { name: "Mike Torres", title: "Head of Revenue", company: "TechStart Inc", intent: "High Intent" },
    { name: "Marc Benioff", title: "Chair & CEO", company: "Salesforce", intent: "Medium Intent" },
    { name: "Elena Vasquez", title: "Dir. of Sales", company: "Growthline", intent: "High Intent" },
  ]
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-5 pt-5 pb-4 border-b border-[var(--sand-4)]">
        <h2 className="text-sm font-semibold text-[#1d1d1f] mb-3">Prospecting</h2>
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 bg-white border border-[var(--sand-5)] rounded-md px-3 py-2">
            <Search className="w-3 h-3 text-[var(--sand-10)] shrink-0" />
            <span className="text-xs text-[var(--sand-10)]">VP Sales · SaaS · 50–500 employees</span>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[var(--green-9)] text-white text-xs font-medium">
            Search
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 space-y-2 overflow-hidden">
        <p className="text-[10px] text-[var(--sand-10)] mb-3">4 leads found</p>
        {results.map((r, i) => (
          <div key={i} className="bg-white border border-[var(--sand-5)] rounded-lg px-4 py-3 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[var(--sand-4)] flex items-center justify-center text-[11px] font-semibold text-[var(--sand-11)] shrink-0">
              {r.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#1d1d1f]">{r.name}</p>
              <p className="text-[10px] text-[var(--sand-11)]">{r.title} · {r.company}</p>
            </div>
            <span className={`text-[9px] px-2 py-0.5 rounded-full shrink-0 ${r.intent === "High Intent" ? "bg-[var(--green-3)] text-[var(--green-11)]" : "bg-amber-50 text-amber-700"}`}>
              {r.intent}
            </span>
            <button className="text-[10px] px-2.5 py-1 rounded-md bg-[var(--green-9)] text-white font-medium shrink-0">+ Add</button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Dialer ───────────────────────────────────────────────────────────────────
function DialerView() {
  const queue = [
    { name: "Marc Benioff", role: "CEO", company: "Salesforce", status: "live" },
    { name: "Thomas Weaver", role: "Director of Sales", company: "VisualVisitor", status: "next" },
    { name: "Nicole Roessner", role: "Dir. Sales Dev.", company: "Pipewise", status: "queued" },
    { name: "Jenny Park", role: "VP Revenue", company: "Clearbit", status: "queued" },
  ]
  const stats = [
    { label: "Calls", value: "34" },
    { label: "Connected", value: "12" },
    { label: "Meetings", value: "3" },
  ]
  return (
    <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#1d1d1f]">Power Dialer</h2>
          <p className="text-[10px] text-[var(--sand-11)] mt-0.5">Area code: 415 (SF)</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--green-9)] text-white text-xs font-medium">
          <Phone className="w-3 h-3" /> Start Session
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-[var(--sand-5)] rounded-lg p-3 text-center">
            <p className="text-[10px] text-[var(--sand-11)] mb-1">{s.label}</p>
            <p className="text-xl font-bold text-[#1d1d1f]">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[var(--sand-5)] rounded-lg overflow-hidden flex-1">
        <div className="px-4 py-2 border-b border-[var(--sand-4)] flex items-center justify-between">
          <p className="text-[10px] font-medium text-[#1d1d1f]">Call Queue</p>
          <span className="text-[10px] text-[var(--sand-10)]">4 prospects</span>
        </div>
        <div className="divide-y divide-[var(--sand-3)]">
          {queue.map((r, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 ${r.status === "live" ? "bg-[var(--green-1)]" : ""}`}>
              <div className="w-6 h-6 rounded-full bg-[var(--sand-4)] flex items-center justify-center text-[10px] font-semibold text-[var(--sand-11)] shrink-0">
                {r.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#1d1d1f]">{r.name}</p>
                <p className="text-[10px] text-[var(--sand-10)]">{r.role} · {r.company}</p>
              </div>
              {r.status === "live" && (
                <span className="flex items-center gap-1 text-[9px] font-semibold text-[var(--green-10)] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)] animate-pulse" /> LIVE · 4:12
                </span>
              )}
              {r.status === "next" && (
                <span className="text-[9px] text-[var(--sand-10)] shrink-0">Next</span>
              )}
            </div>
          ))}
        </div>

        {/* Auto follow-up strip */}
        <div className="border-t border-[var(--sand-4)] bg-[var(--sand-2)] px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Mail className="w-3 h-3 text-[var(--green-10)] shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-[#1d1d1f] truncate">Auto follow-up queued for Marc Benioff</p>
              <p className="text-[9px] text-[var(--sand-10)]">"ROI one-pager + case study" · Sends on hangup</p>
            </div>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--green-3)] text-[var(--green-11)] shrink-0 whitespace-nowrap">Auto-send on</span>
        </div>
      </div>
    </div>
  )
}

// ── Emailer ──────────────────────────────────────────────────────────────────
function EmailerView() {
  const emails = [
    { name: "Marcus Webb", company: "TechCorp", subject: "Following up on our conversation", time: "2:30 PM", tag: "High Priority", tagColor: "bg-red-50 text-red-600", active: true },
    { name: "Sarah Smith", company: "Innovate LLC", subject: "Your recent demo request", time: "4:15 PM", tag: "Demo Follow-up", tagColor: "bg-[var(--sand-3)] text-[var(--sand-11)]", active: false },
    { name: "Michael Chen", company: "Global Industries", subject: "Introducing our enterprise solution", time: "Tomorrow", tag: "Sequence Step 2", tagColor: "bg-[var(--sand-3)] text-[var(--sand-11)]", active: false },
  ]
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Email list */}
      <div className="w-52 shrink-0 border-r border-[var(--sand-4)] flex flex-col overflow-hidden">
        <div className="px-4 pt-5 pb-3 border-b border-[var(--sand-4)]">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">Emailer</h2>
          <p className="text-[10px] text-[var(--sand-11)] mt-0.5">42 pending · 8 high priority</p>
        </div>
        <div className="flex-1 divide-y divide-[var(--sand-3)] overflow-hidden">
          {emails.map((e, i) => (
            <div key={i} className={`px-4 py-3 ${e.active ? "bg-[var(--green-1)]" : ""}`}>
              <div className="flex justify-between items-start mb-0.5">
                <p className="text-[10px] font-semibold text-[#1d1d1f]">{e.name}</p>
                <span className="text-[9px] text-[var(--sand-10)] shrink-0 ml-1">{e.time}</span>
              </div>
              <p className="text-[10px] text-[var(--sand-10)] truncate mb-1.5">{e.subject}</p>
              <span className={`text-[8px] px-1.5 py-0.5 rounded ${e.tagColor}`}>{e.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compose pane */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-5 pt-5 pb-4 border-b border-[var(--sand-4)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-[#1d1d1f]">Following up on our conversation</p>
            <div className="flex gap-1.5">
              <button className="text-[9px] px-2.5 py-1 rounded bg-white text-[var(--sand-11)] border border-[var(--sand-5)]">Save Draft</button>
              <button className="text-[9px] px-2.5 py-1 rounded bg-[var(--green-9)] text-white font-medium">Send</button>
            </div>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex gap-2"><span className="text-[var(--sand-10)] w-6">To</span><span className="text-[#1d1d1f]">marcus.webb@techcorp.com</span></div>
          </div>
        </div>
        <div className="px-5 py-4 flex-1 overflow-hidden">
          <div className="space-y-2.5 text-[10px] text-[#1d1d1f] leading-relaxed">
            <p>Hi Marcus,</p>
            <p>I wanted to follow up on our discussion about consolidating your outbound stack. You mentioned your team was juggling Outreach, Apollo, and a couple of other tools — and that visibility into rep activity was a real gap.</p>
            <p>boilerroom brings everything into a single workflow. Worth a 20-minute look?</p>
            <p className="text-[var(--sand-10)]">Best,<br />Sadid</p>
          </div>
        </div>
        <div className="px-5 py-2.5 border-t border-[var(--sand-3)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)] shrink-0" />
          <p className="text-[9px] text-[var(--sand-10)]">Visited pricing page 5× this week</p>
        </div>
      </div>
    </div>
  )
}

// ── Sequences ────────────────────────────────────────────────────────────────
function SequencesView() {
  const seqs = [
    { name: "Cold Outbound", steps: 5, active: 52, completed: 25, rate: "12%" },
    { name: "Warm Inbound Follow-up", steps: 7, active: 2, completed: 0, rate: "—" },
    { name: "Churned Leads", steps: 6, active: 12, completed: 4, rate: "9%" },
  ]
  const stepTypes = ["Call", "Email", "LinkedIn", "Call", "Email"]
  return (
    <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#1d1d1f]">Sequences</h2>
        <button className="px-3 py-1.5 rounded-md bg-[var(--green-9)] text-white text-xs font-medium">+ New Sequence</button>
      </div>

      {/* Step type legend */}
      <div className="flex items-center gap-1.5">
        {stepTypes.map((t, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--sand-3)] text-[var(--sand-11)] border border-[var(--sand-5)]">{t}</span>
            {i < stepTypes.length - 1 && <ArrowRight className="w-2.5 h-2.5 text-[var(--sand-7)]" />}
          </div>
        ))}
        <span className="text-[9px] text-[var(--sand-9)] ml-1">+ more</span>
      </div>

      <div className="space-y-2.5 flex-1 overflow-hidden">
        {seqs.map((s) => (
          <div key={s.name} className="bg-white border border-[var(--sand-5)] rounded-lg px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)]" />
                <p className="text-xs font-semibold text-[#1d1d1f]">{s.name}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--green-3)] text-[var(--green-11)]">Active</span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-[10px]">
              <div><p className="text-[var(--sand-10)]">Steps</p><p className="text-[#1d1d1f] font-medium">{s.steps}</p></div>
              <div><p className="text-[var(--sand-10)]">Active</p><p className="text-[var(--green-10)] font-medium">{s.active}</p></div>
              <div><p className="text-[var(--sand-10)]">Completed</p><p className="text-[#1d1d1f] font-medium">{s.completed}</p></div>
              <div><p className="text-[var(--sand-10)]">Meeting Rate</p><p className="text-[#1d1d1f] font-medium">{s.rate}</p></div>
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
    { name: "Chris Mendez", calls: 401, meetings: 9, rate: "15.5%" },
    { name: "Jordan Lee", calls: 312, meetings: 7, rate: "15.4%" },
    { name: "Priya Nair", calls: 289, meetings: 5, rate: "14.2%" },
    { name: "Taylor Brooks", calls: 198, meetings: 3, rate: "11.1%" },
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
    <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#1d1d1f]">Reports</h2>
        <div className="flex gap-1">
          {["Week", "Month", "Q1"].map((t, i) => (
            <button key={t} className={`text-[10px] px-2.5 py-1 rounded-md ${i === 1 ? "bg-[var(--sand-4)] text-[#1d1d1f]" : "text-[var(--sand-10)]"}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Total Calls", value: "1,200", delta: "+18%", up: true },
          { label: "Connect Rate", value: "14.8%", delta: "+2.1%", up: true },
          { label: "Meetings", value: "24", delta: "+6", up: true },
          { label: "Avg Talk Time", value: "3m 42s", delta: "-12s", up: false },
        ].map(s => (
          <div key={s.label} className="bg-white border border-[var(--sand-5)] rounded-lg p-3">
            <p className="text-[9px] text-[var(--sand-11)] mb-1">{s.label}</p>
            <p className="text-base font-bold text-[#1d1d1f]">{s.value}</p>
            <p className={`text-[10px] mt-0.5 ${s.up ? "text-[var(--green-10)]" : "text-red-600"}`}>{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="bg-white border border-[var(--sand-5)] rounded-lg p-3">
          <p className="text-[10px] font-medium text-[#1d1d1f] mb-3">Calls This Week</p>
          <div className="flex items-end gap-2 h-20">
            {weekly.map(w => (
              <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] text-[var(--sand-10)]">{w.calls}</span>
                <div className="w-full bg-[var(--green-9)] rounded-sm" style={{ height: `${(w.calls / max) * 52}px` }} />
                <span className="text-[9px] text-[var(--sand-10)]">{w.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[var(--sand-5)] rounded-lg overflow-hidden">
          <div className="px-3 py-2 border-b border-[var(--sand-4)]">
            <p className="text-[10px] font-medium text-[#1d1d1f]">Rep Leaderboard</p>
          </div>
          <div className="divide-y divide-[var(--sand-3)]">
            {reps.map((r, i) => (
              <div key={r.name} className="flex items-center gap-2 px-3 py-2">
                <span className={`text-[10px] font-bold w-4 shrink-0 ${i === 0 ? "text-[var(--green-10)]" : "text-[var(--sand-10)]"}`}>{i + 1}</span>
                <p className="text-[10px] text-[#1d1d1f] flex-1">{r.name}</p>
                <span className={`text-[10px] font-medium ${i < 2 ? "text-[var(--green-10)]" : "text-[var(--sand-10)]"}`}>{r.rate}</span>
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
      <div className="bg-white border border-[var(--sand-5)] shadow-sm rounded-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--sand-4)] bg-[var(--sand-2)]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-[var(--sand-10)] ml-2">boilerroom.ai</span>
        </div>

        <div className="flex min-h-[420px]">
          {/* Sidebar */}
          <div className="w-40 shrink-0 border-r border-[var(--sand-4)] bg-[var(--sand-2)] p-3 flex flex-col gap-0.5">
            <div className="flex items-center gap-2 px-2 py-2 mb-3">
              <div className="w-6 h-6 bg-[var(--green-9)] rounded flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-[#1d1d1f]">boilerroom</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors text-left w-full ${
                  active === item.id
                    ? "bg-[var(--green-3)] text-[var(--green-11)]"
                    : "text-[var(--sand-11)] hover:text-[#1d1d1f] hover:bg-[var(--sand-3)]"
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
    </div>
  )
}
