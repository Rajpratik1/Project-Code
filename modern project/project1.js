//locomotive js code
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:'0',
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2
    })
    .to(".work",{
        y:'0',
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2
    })
}

firstPageAnim()

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX,dets.clientY);
        this.document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMouseFollower();