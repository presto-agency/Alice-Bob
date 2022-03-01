window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
    removePreloader()
    lottieInter()
    addclass()
    addClassToScroll()
    scrollingclass()
    lottieForm()
    addClassFooter()
    addClassToText()
})

const lottieAnimation = () => {
    function lottieTop() {
        let block_1_anim = bodymovin.loadAnimation({
            container: document.getElementById('lottie-1'),
            path: 'plugins/json/block-1-anim.json',
            renderer: 'canvas',
            loop: false,
            autoplay: true,
        })
    }
    setTimeout(lottieTop, 4500)
}

const lottieInter = () => {
    LottieInteractivity.create({
        player: '#lottie-2',
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.7],
                type: "seek",
                frames: [20, 180],
            }
        ]
    });
}

const lottieForm = () => {
    LottieInteractivity.create({
        player: '#lottie-3',
        mode: "scroll",
        actions: [
            {
                visibility: [0, 1],
                type: "play",
                frames: [0, 49],
            }
        ]
    });
}

const removePreloader = () => {
    let preloader = document.querySelector('.preloader');
    function removePreloader() {
        preloader.remove()
    }
    setTimeout(removePreloader, 4500)
}

const addclass = () => {
    let header = document.querySelector('.header');
    let block = document.querySelector('.block-1');
    let wrapper = document.querySelector('.wrapper');
    addActive(header);
    addActive(block);
    addActive(wrapper);
}

const addClassToScroll = () => {
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
        const elementsPage = document.querySelectorAll('.block-2__content, .block-2__img, .block-2__title-wrapper, .block-3, .block-4, .block-5, .block-6__img, .block-7__list');
        elementsPage.forEach(el => {
            if (isFullyVisible(el)) {
                el.classList.add('active');
            }
        });
    }
    function isFullyVisible(el) {
        let topOfElements = el.getBoundingClientRect().top;
        let bottomOfElements = el.getBoundingClientRect().bottom;
        return (((topOfElements <= window.innerHeight) && (bottomOfElements > 0)));
    }
};

const addClassToText = () => {
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
        const elementsPage = document.querySelectorAll('.title');
        elementsPage.forEach(el => {
            if (isFullyVisible(el)) {
                el.classList.add('active-text');
            }
        });
    }
    function isFullyVisible(el) {
        let topOfElements = el.getBoundingClientRect().top;
        let bottomOfElements = el.getBoundingClientRect().bottom;
        return (((topOfElements <= window.innerHeight) && (bottomOfElements > 0)));
    }
};

const addClassFooter = () => {
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
        const el = document.querySelector('.footer');
        if (isFullyVisible(el)) {
            el.classList.add('active');
        }
    }
    function isFullyVisible(el) {
        let topOfElement = el.getBoundingClientRect().top;
        return (topOfElement <= window.innerHeight);
    }
};

const scrollingclass = () => {
    let header = document.querySelector('.header');
    window.onscroll = function (e) {
        if (window.scrollY > 16) {
            header.classList.add('scroll-page')
        }
        else {
            header.classList.remove('scroll-page')
        }
    };
}

function addActive(obj) {
    const addClass = () => {
        obj.classList.add('active')
    }
    setTimeout(addClass, 4500)
}








