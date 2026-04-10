import { Heading, Text } from "@radix-ui/themes"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is boilerroom replacing our sales tools?",
    answer: "boilerroom consolidates outbound execution into one workflow. It can replace parts of your stack or sit on top — your choice.",
  },
  {
    question: "Does this automate outreach or messaging?",
    answer: "No. Reps still sell. boilerroom removes the friction around execution.",
  },
  {
    question: "How long does setup take?",
    answer: "Fast. No heavy implementation or drawn-out onboarding.",
  },
  {
    question: "Is this rigid or customizable?",
    answer: "Workflows are standardized — messaging and ICPs are not.",
  },
  {
    question: "Who is this best for?",
    answer: "Outbound teams running volume who want more pipeline per rep without more tools.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <Text
          size="1"
          weight="medium"
          className="uppercase tracking-[0.08em] text-[var(--sand-11)] block mb-3"
        >
          Common questions
        </Text>
        <Heading size="8" weight="bold" className="tracking-tight mb-12">
          Frequently Asked Questions
        </Heading>

        <Accordion type="single" collapsible className="w-full divide-y divide-[var(--sand-5)]">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-[var(--sand-5)]">
              <AccordionTrigger className="text-left text-[#1d1d1f] hover:text-[#1d1d1f] hover:no-underline font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--sand-11)]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
