var dataset = "[{\"image\": \"p1.jpg\",\"id\": 1,\"title\": \" Neoprene Workout Dumbbell\", \"brand\": \"Amazon Basics\",\"price\": 20}, { \"image\": \"p2.jpg\", \"id\": 2,\"title\": \"Fitness Magnetic Mini Exercise Pedal Cycle\",\"brand\": \"Sunny Health & Fitness\",\"price\": 125}, { \"image\": \"p3.jpg\", \"id\": 3, \"title\": \"Exercise Bands with Handles\", \"brand\": \"HPYGN\", \"price\": 18.8}, {  \"image\": \"p4.jpg\", \"id\": 4, \"title\": \"Iphone 14\", \"brand\": \"Apple\", \"price\": 234}, { \"image\": \"p5.jpg\",\"id\": 5, \"title\": \"M10 TWS Earbuds\", \"brand\": \"\", \"price\": 8.34}, {\  \"image\": \"p6.jpg\", \"id\": 6, \"title\": \"Winter Hoodie\",  \"brand\": \"POLO\", \"price\": 3}, { \"image\": \"p7.jpg\", \"id\": 7, \"title\": \"Power Bank\",  \"brand\": \"Samsung\",  \"price\": 7.98}, {\"image\": \"p8.jpg\",\"id\": 8,\"title\": \"Smart Watch\",\"brand\": \"Apple\",\"price\": 57.66}, { \"image\": \"p9.jpg\", \"id\": 9, \"title\": \"Wrist Watch\",\"brand\": \"Rolex\", \"price\": 453}, {  \"image\": \"p10.jpg\", \"id\": 10, \"title\": \"LED Strip Lights\", \"brand\": \"HitLights\", \"price\": 25.34}, {  \"image\": \"p11.jpg\",  \"id\": 11,  \"title\": \"Newest Ideapad 3 Laptop\",  \"brand\": \"Lenovo 2022 \",  \"price\": 405}, {  \"image\": \"p12.jpg\",  \"id\": 12,  \"title\": \"Galaxy Tab A7\",  \"brand\": \"Samsung\",  \"price\": 129}, {  \"image\": \"p13.jpg\",  \"id\": 13,  \"title\": \"Anker Life Headphones\",  \"brand\": \"Soundcore\",  \"price\": 51}, { \"image\": \"p14.jpg\", \"id\": 14, \"title\": \"Laptop Shoulder Bag\", \"brand\": \"Lenovo\", \"price\": 15}, { \"image\": \"p15.jpg\", \"id\": 15, \"title\": \"10-in-1 Pressure Cooker\", \"brand\": \"Instant Pot\", \"price\": 121}, { \"image\": \"p16.jpg\", \"id\": 16, \"title\": \"Massage Gun\", \"brand\": \"Elefor\", \"price\": 34}, { \"image\": \"p17.jpg\", \"id\": 17, \"title\": \"Security Camera System\", \"brand\": \"Zmodo\", \"price\": 39}, { \"image\": \"p18.jpg\", \"id\": 18, \"title\": \"Milk Frother\", \"brand\": \"Powerlix\", \"price\": 9}, { \"image\": \"p19.jpg\", \"id\": 19, \"title\": \"Steamer for Clothes\", \"brand\": \"Hilife\", \"price\": 27.3}, { \"image\": \"p20.jpg\", \"id\": 20, \"title\": \" Foam Mattress\", \"brand\": \"Edilly\", \"price\": 138}]"

console.log(dataset);
let data = JSON.parse(dataset);
$(document).ready(function() {

    console.log(data)


    data.forEach(function(dt) {
        $("#htmldata").append(`<div class="col-md-4 card-deck">
        <div class="card">
          <img class="card-img-top" src="${dt.image}" alt="Card image cap">
          <div class="card-body">
          <p class="card-text">Product: <span id="txt">${dt.id}<span></p>
            <h5 class="card-title">TITLE:<span id="title"> ${dt.title}<span></h5>
            <p class="card-text">Brand: <span id="txt"> ${dt.brand}<span></p>
            <p class="card-text">PRICE: <span id="txt"> $${dt.price}<span></p>
          </div>
         `)
    })
})