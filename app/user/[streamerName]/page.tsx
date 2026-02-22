import { notFound } from "next/navigation";
import usersData from "../../../users.json";
import UserClient from "./UserClient";

interface User {
	StreamerName: string;
	BotName: string;
}

export async function generateStaticParams() {
	const users = usersData as User[];

	return users.map((user) => ({
		streamerName: user.StreamerName.toLowerCase(),
	}));
}

export default async function UserPage({ params }: { params: Promise<{ streamerName: string }> }) {
	const { streamerName } = await params;
	const users = usersData as User[];
	const user = users.find((u) => u.StreamerName.toLowerCase() === streamerName.toLowerCase());

	if (!user) {
		notFound();
	}

	return <UserClient user={user} />;
}
