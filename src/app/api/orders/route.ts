import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase admin credentials are required');
  }
  return createClient(url, key);
}

export async function GET(request: Request) {
  const supabase = getSupabaseAdmin();
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const limiter = rateLimit(ip, 50, 60000); 

  if (!limiter.success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const limiter = rateLimit(ip, 50, 60000);

  if (!limiter.success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const { id, status } = await request.json();
    const { data, error } = await supabase.from('orders').update({ status }).eq('id', id).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
