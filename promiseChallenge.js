
const imgContainer = document.querySelector('.images');

function createImage(imgPath) {

    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {

            reject(new Error('Image not found'))
        });
    });
}

createImage('img/img-1.jpg').then(img => {
    console.log('Image 1 loaded')
});