import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import { join } from "path";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const streamerName = searchParams.get("name");

		const filePath = join(process.cwd(), "users.json");
		const fileContents = readFileSync(filePath, "utf8");
		const users = JSON.parse(fileContents);

		if (streamerName) {
			const user = users.find((u: any) => u.StreamerName.toLowerCase() === streamerName.toLowerCase());

			if (user) {
				return NextResponse.json({ BotName: user.BotName });
			} else {
				return NextResponse.json({ error: "User not found" }, { status: 404 });
			}
		}

		return NextResponse.json(users);
	} catch (error) {
		console.error("Error reading users.json:", error);
		return NextResponse.json({ error: "Failed to read users data" }, { status: 500 });
	}
}
