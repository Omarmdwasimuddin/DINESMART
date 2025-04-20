import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { username, email, password } = body;

        if (!username || !email || !password) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Example: Save user to database (replace with your logic)
        const newUser = {
            id: Date.now(),
            username,
            email,
            password, // Note: Never store plain passwords, always hash them
        };

        // Simulate saving to a database
        console.log('User created:', newUser);

        return NextResponse.json({ message: 'User signed up successfully', user: newUser }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
