const cards = document.querySelectorAll(".card");
const icons = document.querySelectorAll(".icon");
const cards1 = document.querySelectorAll(".card-1");
// console.log(cards);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // console.log(entry.target.classList[0]);
        // if(entry.target.classList[0] === "card-1"){
            // entry.target.classList.toggle("fade-up", entry.isIntersecting);
        // }else {
            entry.target.classList.toggle("fade-in", entry.isIntersecting);
        // }
        // entry.target.classList.toggle("fade-in", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
    // console.log(entries)
}, {
    threshold: 0.8,
});

// observer.observe(cards[0]);

cards.forEach(card => {
    observer.observe(card);
})

icons.forEach(icon => {
    observer.observe(icon);
})

// cards1.forEach(card => {
    // observer.observe(card);
// })