"use client";

import Link from "next/link";
import { useState } from "react";
import usersData from "../users.json";

interface User {
	StreamerName: string;
	BotName: string;
}

export default function Home() {
	const [users] = useState<User[]>(usersData as User[]);
	const [searchName, setSearchName] = useState("");
	const [result, setResult] = useState<string | null>(null);

	const handleSearch = () => {
		const user = users.find((u) => u.StreamerName.toLowerCase() === searchName.toLowerCase());
		setResult(user ? user.BotName : "User not found");
	};

	return (
		<main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
			<h1>StreamCoreBot API</h1>

			<div style={{ marginBottom: "2rem" }}>
				<h2>Find Bot Name</h2>
				<input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Enter streamer name" style={{ padding: "0.5rem", marginRight: "1rem" }} />
				<button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
					Search
				</button>
				{result && (
					<p style={{ marginTop: "1rem" }}>
						<strong>Result:</strong> {result}
					</p>
				)}
			</div>

			<div>
				<h2>All Users</h2>
				<div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
					{users.map((user) => (
						<div
							key={user.StreamerName}
							style={{
								border: "1px solid #ddd",
								padding: "1rem",
								borderRadius: "4px",
								backgroundColor: "#f9f9f9",
							}}
						>
							<h3>{user.StreamerName}</h3>
							<p>
								<strong>Bot:</strong> {user.BotName}
							</p>
							<Link href={`/user/${user.StreamerName.toLowerCase()}`} style={{ color: "#0070f3", textDecoration: "none" }}>
								View Details →
							</Link>
						</div>
					))}
				</div>

				<h3>Raw Data</h3>
				<pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "4px" }}>{JSON.stringify(users, null, 2)}</pre>
			</div>
		</main>
	);
}
