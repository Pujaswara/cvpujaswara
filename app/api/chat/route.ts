import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo', // atau ganti gpt-4o kalau mau
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message || 'Unknown error');
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content ?? 'Maaf, saya tidak tahu jawabannya.';

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('Error fetching from OpenRouter:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
