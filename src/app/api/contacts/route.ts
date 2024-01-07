"use server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<any> {
     try {
          const body = await req.json();
          console.log({
               data: body,
          });
          return NextResponse.json({
               status: true,
               data: "Email Sent",
          });
     } catch (error: any) {
          console.log({
               error,
          });
          return NextResponse.json({ error: error.message }, { status: 400 });
     }
}
