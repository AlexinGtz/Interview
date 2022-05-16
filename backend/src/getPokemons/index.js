exports.handler = async (event) => {
    const data = null;

    return {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "GET,POST,PUT,DELETE"
        },
        body: JSON.stringify(data)
    }
}