
async function getData() {
    
    try {
        const res = await fetch('https://dummyjson.com/products');
        

        const resBody = await res.json();
        const resStatus = res.status;
        const resHeaders = res.headers.get('Date');
        

        return {resBody:resBody, resStatus:resStatus,resHeaders:resHeaders};

        } catch (e) {
        throw new Error('Page Error');
    }

}

const page = async () => {

    const data = await getData();

    return (
        <div className="space-y-2">
            <h2 className='text-2xl font-semibold text-gray-900 text-center'>Contact Page</h2>

            <p>{JSON.stringify(data['resHeaders'])}</p>
            

        </div>
    );
};

export default page;