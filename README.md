# AI Math Differentiator — Probability

A responsive web application for Grade 7 simple probability with three differentiated pathways:
- Foundation: simplified tasks, direct hints, guided solutions
- Standard: grade-level problems
- Advanced: multi-step reasoning and combined events

## Run locally
Open `index.html` in a modern browser. The built-in tasks, hints, worked solutions, and answer checking work without an API key.

## Optional live AI integration
The front end is prepared to call `POST /api/explain`. To enable genuine dynamic AI-generated explanations, implement this endpoint on a server or serverless platform and store the provider API key in environment variables. Do not place a production API key in browser code. The endpoint should validate the requested level, use a level-specific system prompt, return `{ "explanation": "..." }`, and handle errors safely.

Suggested system prompt:
"You are a careful Grade 7 mathematics tutor. Explain simple probability for the requested learner level: Foundation (short, guided steps and direct hints), Standard (curriculum-level reasoning), or Advanced (multi-step reasoning). Use the supplied problem and question. Do not invent facts. Calculate independently, verify the answer, and return a clear explanation plus a hint. If information is insufficient, ask a brief clarification. Return JSON with an explanation field."

## Deploy
Upload `index.html` and `README.md` to a public GitHub repository. For a static demo, enable GitHub Pages or deploy to Netlify/Vercel. Note: a static deployment alone does not activate the optional `/api/explain` endpoint; add a serverless function for live AI.

## Testing checklist
- Switch among all three levels.
- Check each supplied answer and an incorrect answer.
- Test hints and worked solutions.
- Try equivalent fractions such as 2/6 for 1/3.
- Verify the mobile layout.
- If adding AI, test mathematical correctness and never expose API secrets.
