var films = [
    {
        name: "Reservoir Dogs",
        img: "img/1.jpg",
        link: "https://www.imdb.com/title/tt0105236/"
    },
    {
        name: "Pulp Fiction",
        img: "img/2.jpg",
        link: "https://www.imdb.com/title/tt0110912/"
    },
    {
        name: "Jackie Brown",
        img: "img/3.jpg",
        link: "https://www.imdb.com/title/tt0119396/"
    },
    {
        name: "Kill Bill 1",
        img: "img/4.jpg",
        link: "https://www.imdb.com/title/tt0266697/"
    },
    {
        name: "Kill Bill 2",
        img: "img/5.jpg",
        link: "https://www.imdb.com/title/tt0378194/"
    },
    {
        name: "Inglourious Basterds",
        img: "img/6.jpg",
        link: "https://www.imdb.com/title/tt0361748/"
    },
    {
        name: "Django Unchained",
        img: "img/7.jpg",
        link: "https://www.imdb.com/title/tt1853728/"
    },
    {
        name: "The Hateful Eight",
        img: "img/8.jpg",
        link: "https://www.imdb.com/title/tt3460252/"
    },
    {
        name: "Once Upon a Time... in Hollywood",
        img: "img/9.jpg",
        link: "https://www.imdb.com/title/tt7131622/"
    }

]

var i = 0;
var index = 0;
var interval;

show(i);

const left = document.querySelector('#left');
const right = document.querySelector('#right');

var settings = {
    duration: '1000',
    random: true
}
init(settings);
if (left) {
    left.addEventListener('click', function () {
        if (i != 0) {
            i--;
            show(i);
        }
    });
}
if (right) {
    right.addEventListener('click', function () {
        if (i != films.length - 1) {
            i++;
            show(i);
        }
    });
}

function show(i) {
    document.querySelector('.card-title').textContent = films[i].name;
    document.querySelector('.card-img-top').setAttribute('src', films[i].img);
    document.querySelector('.card-link').setAttribute('href', films[i].link);
}


document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
})


document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})
document.getElementById('ordered').hidden = true;
document.getElementById('random').addEventListener('click', function (){
    settings.random = false;
    document.getElementById('ordered').hidden = false;
    document.getElementById('random').hidden = true;
})
document.getElementById('ordered').addEventListener('click', function (){
    settings.random = true;
    document.getElementById('ordered').hidden = true;
    document.getElementById('random').hidden = false;
})



function init(settings) {
    var prev = 0;

    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * films.length);
                console.log(prev);
            }
            while (index == prev);
            prev = index;
            show(index);
        } else {
            if (index == films.length) {
                index = 0;
            }
            console.log(index);
            show(index);
            index++;
        }

    }, settings.duration)
}



