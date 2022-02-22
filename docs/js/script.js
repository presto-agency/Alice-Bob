window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
})

const lottieAnimation = () => {
    let topanimation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-1'),
        path: 'plugins/json/lottie.json',
        renderer: 'canvas',
        loop: false,
        autoplay: true,
    })
}






