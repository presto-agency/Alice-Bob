window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
    removePreloader()
    lottieInter()
    addclass()
    addClassToScroll()
    scrollingclass()
    lottieForm()
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
        const elementsPage = document.querySelectorAll('.block-2__content, .block-2__title-block, .block-2__img, .block-2__title-wrapper, .description__title-block, .block-3__img, .block-4__img, .description__text, .block-4__btn, .block-3__gradient-circle, .block-5__content, .block-5__column, .block-5__title-block, .block-6__img');
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








