const services = document.querySelectorAll(".app");
const appearOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: "-100px"

}

const scrollAppear = new IntersectionObserver(function (entries, scrollAppear) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear")
            scrollAppear.unobserve(entry.target);
        } else {
            return;
        }
    }

    )

}, appearOptions);


services.forEach(service => {
    scrollAppear.observe(service)
}

);

const sliders = document.querySelectorAll("#sliders")
const slideOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-200px 50px 0px 20px"

}

const slideAppear = new IntersectionObserver(function (entries, scrollAppear) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear")
            slideAppear.unobserve(entry.target);
        } else {
            return;
        }
    }

    )

}, slideOptions);

sliders.forEach(
    slider=>{
        slideAppear.observe(slider)
    }
);





