import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is successful
      // Here you would typically update your database to mark the order/wallet top-up as successful
      return NextResponse.json(
        { message: "Payment verified successfully", success: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid payment signature", success: false },
        { status: 400 }
      );
    }
  } catch (error: unknown) {
    console.error("Razorpay Verification Error:", error);
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
