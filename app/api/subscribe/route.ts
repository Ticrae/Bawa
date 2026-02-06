import { NextResponse } from "next/server";
import Mailchimp from "@/app/mailchimp";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }


        if (!process.env.MAILCHIMP_AUDIENCE_ID) {
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        await Mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: "subscribed",
            }
        );

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Subscribe error:", error);
        console.error("Error status:", error.status);
        console.error("Error message:", error.message);

        if (error.status === 400) {
            return NextResponse.json(
                { error: "Email already subscribed" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
