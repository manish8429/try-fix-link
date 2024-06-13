import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("3c5f43be-efc4-46c9-be30-1600604deb05");
const fromEmail = process.env.FROM_EMAIL;

<<<<<<< HEAD
=======
const resend = new Resend("3c5f43be-efc4-46c9-be30-1600604deb05");

>>>>>>> 6d991e47f3e2e1535072368dc183a0668921d5d8
export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
