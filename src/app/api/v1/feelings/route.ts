import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    love_level: "immeasurable",
    message: "Happy Birthday! 🎂",
    author: "Tiger",
    note: "If you found this endpoint, you are definitely the QA lead.",
    timestamp: new Date().toISOString(),
  });
}
