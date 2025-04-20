import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

//GET METHOD
export async function GET(req) {
    return NextResponse.json(
        [
            { Name: 'Wasim Uddin Omar', Age: 28, Email: 'info@wasim.com', Phone: '01700000000', Address: 'Dhaka, Bangladesh', Country: 'Bangladesh' },
            { Name: 'Wasim Uddin Omar', Age: 28, Email: 'info@wasim.com', Phone: '01700000000', Address: 'Dhaka, Bangladesh', Country: 'Bangladesh' },
            { Name: 'Wasim Uddin Omar', Age: 28, Email: 'info@wasim.com', Phone: '01700000000', Address: 'Dhaka, Bangladesh', Country: 'Bangladesh' },
            { Name: 'Wasim Uddin Omar', Age: 28, Email: 'info@wasim.com', Phone: '01700000000', Address: 'Dhaka, Bangladesh', Country: 'Bangladesh' },
            { Name: 'Wasim Uddin Omar', Age: 28, Email: 'info@wasim.com', Phone: '01700000000', Address: 'Dhaka, Bangladesh', Country: 'Bangladesh' }
        ],
        {
            status: 200,
            statusText: 'OK',
            headers: {
                'Token1': 'XYZ-123-abc-456',
                'Token2': 'xyz-1234-ABC-567',
                'Token3': 'Abc-123-x-y-z-00',
                'Set-Cookie': 'xyz-1234-ABC-567',
            }
        }
    );
}





