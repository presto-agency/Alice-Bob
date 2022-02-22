window.addEventListener('DOMContentLoaded', function () {
    lottieAnimation()
})

const lottieAnimation = () => {
    // let animation = bodymovin.loadAnimation({
    //     container: document.getElementById('lottie-1'),
    //     path: 'plugins/json/lottie.json',
    //     renderer: 'canvas',
    //     loop: false,
    //     autoplay: true,
    // })
    let element = document.getElementById('lottie-1');
    lottie.loadAnimation({
        container: element,
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        path: 'plugins/json/lottie.json',
    });
}






