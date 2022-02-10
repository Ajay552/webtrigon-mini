const cards = document.querySelectorAll(".card");
const icons = document.querySelectorAll(".icon");
const cards1 = document.querySelectorAll(".card-1");
const dots = document.querySelector(".dots").getElementsByTagName("div");

const quotes =  document.querySelector(".quote").getElementsByTagName("li");

const carousel = document.querySelector(".carousel-text").getElementsByTagName("li");

const authors = document.querySelector(".authors").getElementsByTagName("div");

console.log(authors);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
   
        entry.target.classList.toggle("fade-in", entry.isIntersecting);

        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
}, {
    threshold: 0.8,
});

cards.forEach(card => {
    observer.observe(card);
})

icons.forEach(icon => {
    observer.observe(icon);
})

const remove = () => {
    console.log("hello world");
    for(let i = 0; i < 3; i++) {
        dots[i].classList.remove("active");
        dots[i].style.backgroundColor = "#272727";
        carousel[i].classList.remove("activeCarousel");
        quotes[i].classList.remove("activeQuote");
        authors[i].classList.remove("activeAuthor");
    } 
}

const siemaLoader = (selector) => {
    const mySiema = new Siema({
        selector: selector,
        loop: false,
        perPage: 1,
        startIndex: 0,
        onChange: () => remove(),
    });

    let i = 0;
    let color = ["#11a59a","#fba737","#f45526"];
    // console.log(dots);
    const change = () => {
        // console.log(i);
        if(i >= 3) i = 0;
        mySiema.goTo(i);

            dots[i].style.backgroundColor = color[i];
            dots[i].classList.add("active");
            console.log("after");
            carousel[i].classList.add("activeCarousel");
            quotes[i].classList.add("activeQuote");
            authors[i].classList.add("activeAuthor");

        i++;
    }

    setInterval(change, 3000);
}

siemaLoader(".carousel-text");
siemaLoader(".quote");
