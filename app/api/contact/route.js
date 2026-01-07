import { NextResponse } from "next/server";
import { Contact } from "@/database/contact.modal";  
import dbConnect from "@/database/db";
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    await dbConnect();

    const contact = await  Contact.create({ name, email, phone, message });

    return NextResponse.json({ message: "Message received successfully!", data: contact }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();

  
    const messages = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({ data: messages }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
