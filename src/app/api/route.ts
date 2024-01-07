import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
     try {
          return NextResponse.json({
               data: "Hello world",
          });
     } catch (error: any) {
          NextResponse.json({
               error: error.message,
          });
     }
}
