import { CheckCircle2, Phone, Mail, Users, Zap, Clock, ArrowRight, Sparkles } from "lucide-react"

export function ProductPreview() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-muted-foreground ml-2">Boilerroom Dashboard</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Dialer Active
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          <div className="lg:col-span-3 border-r border-border p-4 bg-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Prioritized Accounts
              </h3>
              <span className="text-xs text-accent font-medium">AI Ranked</span>
            </div>
            <div className="space-y-2">
              {[
                { company: "Acme Corp", contacts: 5, priority: 98, touches: 7, hot: true },
                { company: "TechStart Inc", contacts: 3, priority: 94, touches: 4, hot: true },
                { company: "CloudFlow", contacts: 4, priority: 87, touches: 2, hot: false },
                { company: "DataSync", contacts: 2, priority: 82, touches: 1, hot: false },
                { company: "Nexus Labs", contacts: 6, priority: 76, touches: 0, hot: false },
              ].map((account) => (
                <div
                  key={account.company}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors cursor-pointer ${account.hot ? "bg-accent/10 border border-accent/30" : "hover:bg-secondary/50"}`}
                >
                  <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground relative">
                    {account.company[0]}
                    {account.hot && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-card"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{account.company}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{account.contacts} contacts</span>
                      <span className="text-accent/70">·</span>
                      <span className="text-accent">{account.touches} touches</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs font-bold ${account.priority >= 90 ? "text-accent" : "text-muted-foreground"}`}
                    >
                      {account.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 border-r border-border p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Sequence Loaded
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                Running
              </span>
            </div>

            {/* Active sequence detail */}
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground">Enterprise Cold Outreach</span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" /> 142 sent
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-accent" /> 23 replies
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" /> 89 calls
                </span>
              </div>
              {/* Sequence steps visualization */}
              <div className="flex items-center gap-1">
                {["Email 1", "Call", "Email 2", "LinkedIn", "Call 2"].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`px-2 py-1 rounded text-xs ${i < 2 ? "bg-accent/30 text-accent" : "bg-secondary text-muted-foreground"}`}
                    >
                      {step}
                    </div>
                    {i < 4 && <ArrowRight className="w-3 h-3 text-muted-foreground mx-1" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Current prospect with touch history */}
            <div className="p-3 rounded-lg bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground">
                  SK
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Sarah Kim</p>
                  <p className="text-xs text-muted-foreground">VP of Sales · Acme Corp</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20">
                  <Clock className="w-3 h-3 text-accent" />
                  <span className="text-xs text-accent font-medium">7 touches</span>
                </div>
              </div>
              {/* Touch timeline */}
              <div className="flex items-center gap-2 text-xs">
                {[
                  { type: "email", day: "Mon" },
                  { type: "call", day: "Tue" },
                  { type: "email", day: "Wed" },
                  { type: "linkedin", day: "Thu" },
                  { type: "call", day: "Fri" },
                  { type: "email", day: "Mon" },
                  { type: "call", day: "Today" },
                ].map((touch, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 6 ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}
                    >
                      {touch.type === "email" ? (
                        <Mail className="w-3 h-3" />
                      ) : touch.type === "call" ? (
                        <Phone className="w-3 h-3" />
                      ) : (
                        <span className="text-[10px]">in</span>
                      )}
                    </div>
                    <span className={`text-[10px] ${i === 6 ? "text-accent" : "text-muted-foreground"}`}>
                      {touch.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  Parallel Dialer
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                  5 lines active
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Sarah K.", status: "connected", duration: "2:34" },
                  { name: "Mike T.", status: "ringing", duration: null },
                  { name: "James L.", status: "ringing", duration: null },
                  { name: "Lisa M.", status: "queued", duration: null },
                  { name: "David R.", status: "queued", duration: null },
                ].map((line, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2 rounded-lg ${line.status === "connected" ? "bg-accent/20 border border-accent/30" : "bg-secondary/30"}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${line.status === "connected" ? "bg-accent" : line.status === "ringing" ? "bg-yellow-500 animate-pulse" : "bg-muted-foreground"}`}
                    ></div>
                    <span className="text-sm text-foreground flex-1">{line.name}</span>
                    {line.duration ? (
                      <span className="text-xs text-accent font-mono">{line.duration}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground capitalize">{line.status}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-accent" />
                <h3 className="text-sm font-medium text-foreground">Next Actions Queued</h3>
                <span className="text-xs text-muted-foreground">(Auto)</span>
              </div>
              <div className="space-y-2">
                {[
                  { task: "Send follow-up email to Sarah K.", time: "After call", done: false, next: true },
                  { task: "Log call notes → CRM", time: "Automatic", done: false, next: false },
                  { task: "Move to next prospect", time: "On hangup", done: false, next: false },
                ].map((task, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-all ${task.next ? "bg-accent/10 border border-accent/30" : "bg-secondary/30"}`}
                  >
                    {task.next ? (
                      <ArrowRight className="w-4 h-4 text-accent" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className="text-sm text-muted-foreground flex-1">{task.task}</span>
                    <span className="text-xs text-accent/70">{task.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10 rounded-3xl"></div>
    </div>
  )
}
