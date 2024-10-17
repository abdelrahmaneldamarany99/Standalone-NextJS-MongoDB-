import connectToDb from "@/app/_lib/mongoDb";
import CustomerModel from "@/app/models/customerModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDb();
  const customers = await CustomerModel.find();
  return NextResponse.json({ customers });
}

export async function POST(request: Request) {
  const body = await request.json();
//   const { name, email, number, storeName, address, isActivated } = body;
  await connectToDb();
  await CustomerModel.create(body);
  return NextResponse.json({ message: "Created Successfull" }, { status: 201 });
}
