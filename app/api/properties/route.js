import { NextResponse } from "next/server";
import Properties from "../../models/PropertyModel";
import connectMongoDB from "../../libs/mongodb";

export async function POST(request) {
  const { name, description, address, price, images, locatedAt, mapsLink } = await request.json();
  await connectMongoDB();
  await Properties.create({ name, description, address, price, images, locatedAt, mapsLink });
  return NextResponse.json({message : "Property Created"},{status:201});
}
