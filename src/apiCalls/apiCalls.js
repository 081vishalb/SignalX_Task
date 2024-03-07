//apiCalls.js

async function getData() {
    const response = await fetch('http://localhost:3001/products?_sort=-id');
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
    }
    return await response.json();
}

async function postData(post) {
    const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(post)
        body: JSON.stringify(post)
    });
    console.log(post);
    return response;
}


export { getData, postData };