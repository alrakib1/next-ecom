import startDb from "@/lib/db";
import UserModel from "@/models/userModel";
import { NewUserRequest } from "@/types";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = (await req.json()) as NewUserRequest;
  await startDb();
 const newUser= await UserModel.create({
    ...body
  });
  console.log(body);
  return NextResponse.json(newUser, { status: 201 });
};
