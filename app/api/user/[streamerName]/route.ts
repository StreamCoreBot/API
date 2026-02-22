import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: Request,
  { params }: { params: { streamerName: string } }
) {
  try {
    const { streamerName } = params;
    
    const filePath = join(process.cwd(), 'users.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const users = JSON.parse(fileContents);
    
    const user = users.find((u: any) => u.StreamerName.toLowerCase() === streamerName.toLowerCase());
    
    if (user) {
      return NextResponse.json({ BotName: user.BotName });
    } else {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error reading users.json:', error);
    return NextResponse.json(
      { error: 'Failed to read users data' },
      { status: 500 }
    );
  }
}
