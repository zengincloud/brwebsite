import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Boilerroom replacing our sales tools?",
    answer: "Boilerroom consolidates outbound execution into one workflow. It can replace parts of your stack or sit on top — your choice.",
  },
  {
    question: "Does this automate outreach or messaging?",
    answer: "No. Reps still sell. Boilerroom removes the friction around execution.",
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
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
