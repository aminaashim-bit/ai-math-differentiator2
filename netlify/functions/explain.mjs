
export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405
    });
  }

  try {
    const { level, problem, question } =
      await request.json();

    const allowedLevels = [
      "foundation",
      "standard",
      "advanced"
    ];

    if (
      !allowedLevels.includes(level) ||
      typeof problem !== "string" ||
      problem.length > 1000 ||
      typeof question !== "string" ||
      question.length > 500
    ) {
      return Response.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    const key = process.env.GEMINI_API_KEY;

    if (!key) {
      throw new Error("Server configuration error");
    }

    const instructions = {
      foundation:
        "Use simple words and short guided steps.",
      standard:
        "Give a clear Grade 7 explanation with reasoning.",
      advanced:
        "Explain multi-step reasoning and check the mathematics."
    };

    const prompt = `
You are a careful Grade 7 probability tutor.
Learner level: ${level}.
Teaching approach: ${instructions[level]}
Problem: ${problem}
Student question: ${question || "Explain the problem."}

Explain step by step. Check all calculations.
Give one helpful hint. Do not invent information.
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": key
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      }
    );

    if (!response.ok) {
      console.error("Gemini API status:", response.status);
      return Response.json(
        { error: "AI service unavailable" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const explanation =
      data.candidates?.[0]?.content?.parts
        ?.map(part => part.text || "")
        .join("\n");

    if (!explanation) {
      throw new Error("Empty AI response");
    }

    return Response.json({ explanation });

  } catch (error) {
    console.error("Explanation request failed");
    return Response.json(
      { error: "Could not generate explanation" },
      { status: 500 }
    );
  }
};
