async function callAPI() {
    const url = 'https://hapi-books.p.rapidapi.com/month/2024/3';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1133c28fbdmshadfc94a6c34f72cp1dc922jsna860f608813e',
            'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const objects = JSON.parse(result);
        let htmlString = "";
        objects.forEach(element => {
            htmlString +=`
            <div class=" card shadow w-25">
                <div class="card body">
                    <img src="${element.cover}" alt="book-image">
                    <h3>${element.name}</h3>
                    <p>Book Rating: ${element.rating}</p>
                    <a href="${element.url}"> Visit Book Here</a>
                </div>
            </div>`
        });
        document.getElementById("div1").innerHTML = htmlString;

    } catch (error) {
        console.error(error);
    }

}
callAPI();