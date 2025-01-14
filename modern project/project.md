<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="loco.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="minicircle"></div>
    <div id="main">
        <div id="hero">
            <div id="nav">
                <a href="#">Cynthia Ugwu</a>
                <h4>MENU+</h4>
            </div>
            <div id="heading">
                <div class="bounding">
                    <h1 class="boundingelem">Product</h1>
                </div>
                <div class="blocktext">
                    <div class="bounding">
                        <h1 class="boundingelem" id="secondh1">Designer</h1>
                    </div>
                    <div class="bounding">
                        <h5 class="boundingelem">Based in toronto</h5>
                    </div>
                </div>
            </div>
            <div id="chhotiheadings">
                <div class="bounding">
                    <h5 class="boundingelem">available for freelance</h5>
                </div>
                <div class="bounding">
                    <h5 class="boundingelem">work from may 23'</h5>
                </div>
            </div>
            <div id="herofooter">
                <a href="#">previously worked at yml <i class="ri-arrow-right-up-line"></i></a>
                <a href="#">protopie ambassador <i class="ri-arrow-right-up-line"></i></a>
                <div id="iconset">
                    <div class="circle"><i class="ri-arrow-down-line"></i></div>
                    <div class="circle"><i class="ri-arrow-down-line"></i></div>
                </div>
            </div>
        </div>
        <div id="second">
            <div class="elem">
                <img src="./plug.png" alt="">
                <h1>The Plug</h1>
                <h5>2022</h5>
            </div>
            <div class="elem">
                <img src="./ixperience.png" alt="">
                <h1>ixperience</h1>
                <h5>2022</h5>
            </div>
            <div class="elem elemlast">
                <img src="./hudu.png" alt="">
                <h1>hudu</h1>
                <h5>2022</h5>
            </div>
        </div>
        <div id="about">
            <img src="https://cynthiaugwu.com/images/cynthia.png" alt="">
            <div id="textabout">
                <h5>(ABout me)</h5>
                <p>I'm a product designer with a passion for creating products that not only look good but also solve
                    real problems. When I'm not sketching ideas on paper, you can find me binge-watching a Netflix
                    series or playing video games. My design philosophy is simple: make it visually appealing,
                    functional, and bring a smile to people's faces. I'm the designer you want on your team if you want
                    to make people say 'I need that in my life!'.</p>
                <a href="">Let's talk</a>
            </div>
        </div>
        <div id="subscribe">
            <h5>(forgot to mention)</h5>
            <h3>subscribe to my youtube channel <i class="ri-arrow-right-up-line"></i></h3>
        </div>
        <div id="footer">
            <div id="footerleft">
                <h5>2023 &copy;</h5>
                <h5>0:05 AM EST</h5>
            </div>
            <div id="footerright">
                <a href="#">dribbble</a><a href="#">instagram</a><a href="#">linkedin</a><a href="#">twitter</a>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"
        integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>
    <script src="script.js"></script>
</body>

</html>

/* css */
* {
    margin: 0;
    padding: 0;
    font-family: "General Sans";
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
}

#minicircle {
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 99999;
    border-radius: 50%;
    background-color: #fff;
}

.bounding {
    width: fit-content;
    overflow: hidden;
}

.bounding .boundingelem {
    transform: translateY(100%);
}

#main {
    width: 100%;
    background-color: black;
}

#hero {
    position: relative;
    color: #fff;
    width: 100%;
    height: 100vh;
    background-color: black;
}

#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 40px;
    color: #fff;
}

#nav a {
    text-decoration: none;
    font-size: 18px;
    color: #fff;
}

#heading {
    margin-top: 90px;
}

#heading h1 {
    margin-left: 30px;
    opacity: .6;
    line-height: 1;
    font-size: 10vw;
    text-transform: uppercase;
    font-weight: 900;
}

#heading #secondh1 {
    margin-left: 230px;
}

.blocktext {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: fit-content;
}

.blocktext h5 {
    text-transform: uppercase;
    font-size: 15px;
    text-align: right !important;
}

#chhotiheadings {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 100px;
    padding-right: 50px;
}

#chhotiheadings h5 {
    text-transform: uppercase;
    margin-top: .5vw;
    font-size: 1vw;
    text-align: right;
}

#herofooter {
    padding: 0 2vw;
    width: 100%;
    position: absolute;
    bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#herofooter a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
}

#herofooter #iconset {
    display: flex;
    gap: 5px;
}

#herofooter .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #888;
}

#second {
    color: #fff;
    padding-right: 10vw;
    padding-top: 200px;
    background-color: black;
    width: 100%;
    height: 100vh;
}

.elem {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3.5vw 3vw;
    padding-right: 0;
    border-top: 1px solid #888;
}

.elem h1 {
    text-transform: uppercase;
    font-size: 7.6vw;
    opacity: .7;
}

.elemlast {
    border-bottom: 1px solid #888;
}

.elem img {
    opacity: 0;
    pointer-events: none;
    height: 140%;
    z-index: 999;
    position: absolute;
    transform: translate(-50%, -50%);
}

#about {
    display: flex;
    align-items: center;
    gap: 50px;
    color: #fff;
    padding: 10vw 10vw;
    padding-left: 40vw;
    width: 100%;
    background-color: black;
}

#textabout {
    width: 25rem;
}

#textabout h5 {
    text-transform: uppercase;
    opacity: .6;
    margin-bottom: 10px;
}

#textabout p {
    line-height: 1.7;
    margin-bottom: 30px;
}

#about img {
    width: 200px;
}

#textabout a {
    padding: 12px 22px;
    border: 1px solid #fff;
    border-radius: 100px;
    color: #fff;
    font-size: 12px;
    text-decoration: none;
}

#subscribe {
    color: #fff;
    padding: 20px 30px;
    padding-bottom: 7vw;
    background-color: black;
}

#subscribe h5 {
    text-transform: uppercase;
    opacity: .6;
}

#subscribe h3 {
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 10px;
}

#footer {
    color: #fff;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 30px;
}

#footerleft {
    display: flex;
    gap: 20px;
}

#footerright {
    display: flex;
    gap: 30px;
}

#footer a {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
}

//javascript

var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
// firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});