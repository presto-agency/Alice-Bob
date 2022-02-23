window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
    removePreloader()
    lottieInter()
    addclass()
    addClassToScroll()
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
    addActive(header)
    addActive(block)
}

const addClassToScroll = () => {
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
        const elementsPage = document.querySelectorAll('.block-2__content, .block-2__title-block, .block-2__img, .block-2__title-wrapper');
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

function addActive(obj) {
    const addClass = () => {
        obj.classList.add('active')
    }
    setTimeout(addClass, 4500)
}








