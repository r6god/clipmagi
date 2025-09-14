import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest){
  const form = await req.formData()
  const email = form.get('email') as string | null
  const webhook = process.env.WAITLIST_WEBHOOK_URL
  if(!email) return NextResponse.json({ok:false,error:'Missing email'},{status:400})
  if(webhook){ try { await fetch(webhook,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email,source:'clipmagi-site'})}) } catch(e){ console.error('webhook error', e) } }
  return NextResponse.redirect(new URL('/?joined=1', req.url))
}
