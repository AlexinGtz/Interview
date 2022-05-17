export const handler = async (event) => {
    const body = JSON.parse(event.body);

    return {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "GET,POST,PUT,DELETE"
        },
        body: JSON.stringify('Return the data here')
    }
}