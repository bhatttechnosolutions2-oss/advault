import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount, currency = "USD", receipt } = await req.json();

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // amount in smallest currency unit
      currency,
      receipt,
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error: any) {
    console.error("Razorpay Order Creation Error:", error);
    return NextResponse.json(
      { error: "Error creating Razorpay order" },
      { status: 500 }
    );
  }
}
