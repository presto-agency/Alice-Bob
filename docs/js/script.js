window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
    lottieInter()
    lottieForm()
    removePreloader()
    addclassToTopBlock()
    addclassToBlock_2()
    addClassToScroll()
    addClassToHeader()
    headerBurgerClass()
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
    setTimeout(lottieTop, 3500)
};

const lottieInter = () => {
    LottieInteractivity.create({
        player: '#lottie-2',
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.7],
                type: "seek",
                frames: [0, 179],
            }
        ]
    });
};

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
};

const removePreloader = () => {
    let preloader = document.querySelector('.preloader');
    function removePreloader() {
        preloader.remove()
    }
    setTimeout(removePreloader, 3500)
};

const addclassToTopBlock = () => {
    let elements = document.querySelectorAll('.header, .block-1, .wrapper');
    elements.forEach(el => {
        addClassTimeout(el)
    })
    function addClassTimeout(el) {
        setTimeout(function () { el.classList.add('active') }, 3500);
    }
};

const addclassToBlock_2 = () => {
    setTimeout(() => {
        let elements = document.querySelectorAll('.block-2, .block-2__content, .block-2__title');
        let firstTitle = document.querySelector('.block-2__title-wrapper');
        let block_2 = document.querySelector('.block-2');
        if (block_2.getBoundingClientRect().top < window.innerHeight) {
            elements.forEach(el => {
                el.classList.add('active');
                firstTitle.classList.add('active');
            })
        }
    }, 3500);
};

const addClassToScroll = () => {
    const elementsPage = document.querySelectorAll('.block-2__img, .block-2, .block-2__content, .block-2__title-wrapper, .block-3, .block-4, .block-5, .block-6__img, .block-7__list, .title, .footer');
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
        elementsPage.forEach(el => {
            if (isFullyVisible(el)) {
                el.classList.add('active');
            }
        });
    }
    function isFullyVisible(el) {
        let topOfElement = el.getBoundingClientRect().top;
        let bottomOfElement = el.getBoundingClientRect().bottom;
        if (el.classList.contains('footer')) {
            return (topOfElement <= window.innerHeight);
        }
        else {
            return (((topOfElement <= window.innerHeight) && (bottomOfElement > 0)));
        }
    }
};

const addClassToHeader = () => {
    let header = document.querySelector('.header');
    if (window.screen.width > 1024) {
        window.onscroll = function (e) {
            if (window.scrollY > 16) {
                header.classList.add('scroll-page')
            }
            else {
                header.classList.remove('scroll-page')
            }
        };
    }
    else {
        window.onscroll = function (e) {
            if (window.scrollY > 14) {
                header.classList.add('scroll-page')
            }
            else {
                header.classList.remove('scroll-page')
            }
        };
    }
};

const headerBurgerClass = () => {
    let headerBurger = document.querySelector('.header__burger');
    let mobileList = document.querySelector('.mobile-list');
    let body = document.querySelector('body');
    headerBurger.onclick = () => {
        headerBurger.classList.toggle('active');
        mobileList.classList.toggle('active');
        body.classList.toggle('body-lock');
    }
}









