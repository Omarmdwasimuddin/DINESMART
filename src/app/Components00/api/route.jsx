import { NextResponse } from "next/server";



export async function GET() {
    return NextResponse.json({status:'Ok',message:'Hello World!!'})
}

/* 

 path:   app/Components/api/route.jsx

*/