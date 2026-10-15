# Brief Report: AI for Differentiated Learning

## Project overview
The AI Math Differentiator is a responsive web application for Grade 7 simple probability. It adapts the learning experience to three levels: Foundation, Standard, and Advanced. The learning objective is for students to calculate and compare probabilities of simple events.

## How differentiation is achieved
**Foundation** uses familiar contexts such as a coin toss or colored balls, direct hints, and step-by-step solutions. **Standard** asks students to count favorable outcomes, calculate probability, and simplify fractions. **Advanced** uses combined conditions and multi-step reasoning, requiring students to list outcomes without double-counting. The interface lets learners switch levels and request a hint, a worked solution, or answer feedback.

## Prompt design
The suggested system prompt is: “You are a careful Grade 7 mathematics tutor. Explain simple probability for the requested learner level: Foundation (short, guided steps and direct hints), Standard (curriculum-level reasoning), or Advanced (multi-step reasoning). Use the supplied problem and question. Do not invent facts. Calculate independently, verify the answer, and return a clear explanation plus a hint. If information is insufficient, ask a brief clarification. Return JSON with an explanation field.”

The level name, problem, and learner question are sent to a backend endpoint when configured. The demo currently provides local explanations and verified examples even without a live AI connection. A production deployment should call the AI provider from a secure backend, keep the API key in environment variables, and validate AI-generated mathematics before showing it to learners.

## Evaluation and limitations
The application supports self-paced practice, immediate answer checking, and level-appropriate scaffolding. Its limitations are that the built-in task bank is small and genuine dynamic AI output requires a separately configured backend. AI-generated answers can be wrong, so a teacher should review generated tasks and solutions before classroom use. The next development step is to add more curriculum-aligned questions, accessibility testing, and a secure AI endpoint.
