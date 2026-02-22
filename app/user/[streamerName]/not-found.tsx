export default function UserNotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>User Not Found</h1>
      <p>The streamer you're looking for doesn't exist in our database.</p>
      <a 
        href="/" 
        style={{ color: '#0070f3', textDecoration: 'none' }}
      >
        ← Back to All Users
      </a>
    </div>
  );
}
