window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
})

const lottieAnimation = () => {
    let block_1_anim = bodymovin.loadAnimation({
        container: document.getElementById('lottie-1'),
        path: 'plugins/json/block-1-anim.json',
        renderer: 'canvas',
        loop: false,
        autoplay: true,
    })
}






