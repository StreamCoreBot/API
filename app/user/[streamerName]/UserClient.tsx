"use client";

interface User {
	StreamerName: string;
	BotName: string;
}

interface UserClientProps {
	user: User;
}

export default function UserClient({ user }: UserClientProps) {
	return (
		<div style={{ padding: "2rem", fontFamily: "monospace" }}>
			<pre>{JSON.stringify({ BotName: user.BotName }, null, 2)}</pre>
		</div>
	);
}
