const imgShare = document.querySelector('.img-share')

imgShare.addEventListener('click', () => {
    if (document.querySelector('.share').style.display === "flex") {
        document.querySelector('.img-share').style.backgroundColor = "hsl(210, 46%, 95%)"
        document.querySelector('.img-share-icon').style.filter = "brightness(1)"
        document.querySelector('.share').style.display = "none"
    }
    else {
        document.querySelector('.img-share').style.backgroundColor = "hsl(214, 17%, 51%)"
        document.querySelector('.img-share-icon').style.filter = "brightness(3)"
        document.querySelector('.share').style.display = "flex"
    }
})