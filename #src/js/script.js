const lottieAnimation = () => {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-1'),
        path: 'plugins/json/lottie.json',
        renderer: 'canvas',
        loop: false,
        autoplay: true,
    })
}

lottieAnimation()





