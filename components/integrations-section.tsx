import { Heading, Text } from "@radix-ui/themes"
import { SectionBadge } from "@/components/section-badge"

const integrations = [
  {
    name: "HubSpot",
    bg: "#FF7A59",
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M18.164 7.931V5.085a2.198 2.198 0 0 0 1.268-1.978V3.07A2.198 2.198 0 0 0 17.235.873h-.037a2.198 2.198 0 0 0-2.196 2.197v.037a2.198 2.198 0 0 0 1.268 1.978v2.846a6.232 6.232 0 0 0-2.965 1.3L5.786 3.44a2.44 2.44 0 0 0 .072-.571 2.452 2.452 0 1 0-2.452 2.451c.444 0 .858-.122 1.213-.332l7.379 5.728a6.256 6.256 0 0 0-.024 5.556L9.86 17.386a2.142 2.142 0 0 0-.613-.095 2.187 2.187 0 1 0 2.187 2.187 2.167 2.167 0 0 0-.305-1.102l2.1-1.093a6.278 6.278 0 1 0 4.935-9.352zm-.929 9.487a3.492 3.492 0 1 1 0-6.985 3.492 3.492 0 0 1 0 6.985z"/>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    bg: "#00A1E0",
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M10.002 6.208a4.14 4.14 0 0 1 2.902-1.175c1.386 0 2.607.68 3.37 1.728a5.109 5.109 0 0 1 2.054-.43c2.862 0 5.182 2.332 5.182 5.21 0 2.876-2.32 5.208-5.182 5.208a5.125 5.125 0 0 1-1.088-.116 3.836 3.836 0 0 1-3.432 2.124 3.815 3.815 0 0 1-1.636-.365A4.463 4.463 0 0 1 7.93 20.6c-2.467 0-4.467-2.01-4.467-4.49 0-.826.222-1.6.608-2.267A3.677 3.677 0 0 1 3.4 10.64c0-2.038 1.641-3.69 3.665-3.69.35 0 .687.05 1.006.14a4.14 4.14 0 0 1 1.931-.882z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    bg: "#0A66C2",
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Gmail",
    bg: "#EA4335",
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    bg: "#4A154B",
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
  },
  {
    name: "Pipedrive",
    bg: "#1A1F36",
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M12.1 0C6.2 0 2 4.5 2 10.6c0 5.4 3.5 9.8 8.5 10.6v2.5h3.2v-2.6c4.9-1 8.3-5.3 8.3-10.5C22 4.4 17.9 0 12.1 0zm-.1 18.1c-4 0-7-3.1-7-7.5s3-7.5 7-7.5 6.9 3.2 6.9 7.5-2.9 7.5-6.9 7.5z"/>
      </svg>
    ),
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <SectionBadge>Integrations</SectionBadge>
            <Heading size="8" weight="bold" className="tracking-tight mb-4">
              Always in sync with your stack.
            </Heading>
            <Text size="4" color="gray" className="block leading-relaxed mb-8">
              Boilerroom connects natively with your CRM and sales tools — so activity, notes, and outcomes sync automatically. No manual logging. No data gaps.
            </Text>

            <div className="flex items-center gap-3 flex-wrap mb-8">
              {integrations.map((tool) => (
                <div
                  key={tool.name}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: tool.bg }}
                  title={tool.name}
                >
                  {tool.logo}
                </div>
              ))}
            </div>

          </div>

          {/* Right: diagonal icon stack */}
          <div className="relative h-80 hidden sm:block">
            {integrations.map((tool, i) => (
              <div
                key={tool.name}
                className="absolute w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: tool.bg,
                  top: `${i * 44}px`,
                  right: `${i * 28}px`,
                  transform: "rotate(-8deg)",
                  zIndex: integrations.length - i,
                }}
              >
                <div className="scale-150">{tool.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
