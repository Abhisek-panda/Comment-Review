var reviews = [
    {
        name: "Adam Sandler", 
        job:"Web Developer", 
        reviewInfo:"I've been using this project management software for my small business for the past year and it has been a lifesaver. It's easy to use, intuitive and has helped me keep track of tasks and deadlines with ease. I highly recommend it to other small business owners.", 
        img:"https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        rating:"🌕🌕🌕🌕🌗"
    }, 
    {
        name: "John Williams", 
        job:"Entrepreneur", 
        reviewInfo:"After thoroughly testing this graphic design software, it is clear that it is a powerful and versatile tool for both professionals and hobbyists alike. Its advanced features and intuitive interface make it a top choice in its category.", 
        img:"https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        rating:"🌕🌕🌕🌕🌘"
    }, 
    {
        name: "Eden Wills", 
        job:"Proffesional Taster", 
        reviewInfo:"When comparing this accounting software to other options on the market, it stands out for its ease of use and robust reporting capabilities. It may not have as many advanced features as some competitors, but for small businesses it is a great option at an affordable price", 
        img:"https://images.unsplash.com/photo-1618088129969-bcb0c051985e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        rating:"🌕🌕🌕🌕🌕"
    }, 
    {
        name: "Alex Austin", 
        job:"Youtuber", 
        reviewInfo:"This customer relationship management software integrates seamlessly with our existing sales and marketing platforms, providing valuable insights and streamlining our workflow. The cost is a bit high, but the benefits it provides justifies the expense.", 
        img:"https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
        rating:"🌕🌕🌕🌗🌑"
    }
]

var prevBtn = document.querySelector("#prev-btn");
var nextBtn = document.querySelector("#next-btn");
var shuffleBtn = document.querySelector("#shuffle-btn");

var image = document.querySelector("#review-image");
var personName = document.querySelector("#name");
var job = document.querySelector("#job-profile")
var info = document.querySelector("#info")
var ratings = document.querySelector("#rating-span");


var counter = 0;

function reviewLoader(person){
    var reviewTexts = reviews[person];
    image.src = reviewTexts.img;
    personName.textContent = reviewTexts.name;
    job.textContent = reviewTexts.job;
    info.textContent = reviewTexts.reviewInfo;
    ratings.textContent=reviewTexts.rating;
}

window.addEventListener("DOMContentLoaded", ()=>{
    reviewLoader(counter);
})

nextBtn.addEventListener("click", ()=>{
    counter++;
    if(counter > reviews.length - 1){
        counter = 0;
    }
    reviewLoader(counter);
})

prevBtn.addEventListener("click", ()=>{
    counter--;
    if(counter < 0){
        counter = reviews.length - 1;
    }
    reviewLoader(counter);
})

shuffleBtn.addEventListener("click", ()=>{
    reviewLoader(shuffleRandom());
})

function shuffleRandom(){
    return Math.floor(Math.random() * reviews.length);
}