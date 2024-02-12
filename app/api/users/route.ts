import startDb from "@/lib/db";
import UserModel from "@/models/userModel";
import { NewUserRequest } from "@/types";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import nodemailer from "nodemailer";


export const POST = async (req: Request) => {
  const body = (await req.json()) as NewUserRequest;
  await startDb();
  const hashedPassword = await hash(body.password, 10);
  const newUser = await UserModel.create({
    ...body,
  });

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "be7104c31f097e",
      pass: "b6039d45dd963f"
    }
  });

 await transport.sendMail({
    from: 'verify@nextecom.com',
    to: newUser.email,
    html: `<a href="http://localhost:3000">Verify your email by clicking this link</a>`,
  });

  return NextResponse.json(newUser, { status: 201 });
};
