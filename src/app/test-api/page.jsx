// pages/test-api.js (ba kono component)
'use client';
import { useState } from "react";

export default function TestAPI() {
  const [resData, setResData] = useState(null);

  const handleRegister = async () => {
    const res = await fetch('http://192.168.1.100:8000/api/auth/customer-registration/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Wasim',
        email: 'wasim@example.com',
        password: '12345678',
      }),
    });

    const data = await res.json();
    setResData(data);
    console.log(data);
  };

  return (
    <div className="p-4">
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
        Test API
      </button>
      {resData && <pre className="mt-4">{JSON.stringify(resData, null, 2)}</pre>}
    </div>
  );
}
