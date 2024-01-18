document.body.style.cursor = "none";


// Locomotive 
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from("#loader .line h1", {
        y: 150,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.2,
    })

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5Timer = document.querySelector("#line1-part1 h5");
            var count = 1;
            var int = setInterval(function () {
                h5Timer.innerHTML = count;
                if (count === 100) {
                    clearInterval(int);
                }
                count++;
            }, 30)
        }
    })

    tl.to(".line h2", {
        animationName: "fontChange",
        opacity: 1
    })

    tl.to("#loader", {
        opacity: 0,
        y: -1600,
        duration: 1.2,
        delay: 3.5
    })

    tl.to("#loader", {
        display: "none"
    })

    gsap.from("#nav", {
        opacity: 0,
        delay: 6
    })

    gsap.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        opacity: 0,
        y: 120,
        delay: 6
    })

}

// Function to handle fixed navigation
function handleFixedNav() {
    const navPart1 = document.getElementById('nav-part1');
    const offset = 200;

    window.addEventListener('scroll', function () {
        if (window.scrollY > offset) {
            navPart1.classList.add('fixed');
        } else {
            navPart1.classList.remove('fixed');
        }
    });
}

function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 2,
        // debug: true,
        config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -10 }, "mousemove": { "value": 3 }, "modeA": { "value": 1 }, "modeN": { "value": 3 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7666557722625823 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.76, "range": [0, 10] }, "metaball": { "value": 0.6, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.37, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] }, "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": -0.91, "range": [-1, 1] } },

        gooey: true
    })
}

function cursorAnimation() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.3,
    });

    Shery.makeMagnet("#nav-part2 h4");

    // For #page2 #video-container #play-crsr

    var videoContainer = document.querySelector("#video-container");
    var playCrsr = document.querySelector("#play-crsr");
    var video = document.querySelector("#video-container video");

    videoContainer.addEventListener("mouseenter", function () {
        videoContainer.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower", {
                opacity: 0,
                duration: 0.1
            })
            gsap.to("#play-crsr", {
                x: dets.x - 1300,
                y: dets.y - 230
            })
        })
    })
    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
            duration: 0.1
        })

        gsap.to("#play-crsr", {
            y: "0%",
            x: "0%"
        })
    })

    // By Clicking on the video container

    var flag = 0;
    videoContainer.addEventListener("click", function () {
        if (flag == 0) {
            video.play();
            video.style.opacity = 1
            playCrsr.innerHTML = `<i class="ri-pause-mini-line"></i>`
            gsap.to("#play-crsr", {
                scale: 0.5
            })
            flag = 1;
        } else {
            video.pause();
            video.style.opacity = 0
            playCrsr.innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#play-crsr", {
                scale: 1
            })
            flag = 0;
        }

    })

    // For flag.jpg hover effect in #page1
    var hero3 = document.querySelector("#hero3");
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flag", {
            x: dets.x,
            y: dets.y
        })
    })
    hero3.addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1
        })
    })
    hero3.addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0,
            duration: 0.3
        })
        // console.log("Leaving")
    })

    // For gooey effect container mouse cursor hide
    var imgContainer = document.querySelectorAll(".image-div-container .image-div");
    const mouseFollower = document.querySelectorAll(".mousefollower");

    imgContainer.forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            mouseFollower.forEach(function (e) {
                e.classList.add("hide");
                console.log("hello")
            })
            // document.body.style.cursor = "none"; 
        });

        el.addEventListener("mouseleave", function () {
            mouseFollower.forEach(function (e) {
                e.classList.remove("hide");
                console.log("hello")
            })
            // document.body.style.cursor = "auto";
        });
    })

}

function gsapWithScroll() {
    // for #page3-div h1
    gsap.from("#page3-div h1", {
        opacity: 0,
        y: 100,
        // duration: 0.5,
        scrollTrigger: {
            trigger: "#page3-div h1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 70%",
            scrub: 3
        }
    })

    // For #page3-div2 #box1 .underline-small
    gsap.to("#box1 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box1 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box2 .underline-small
    gsap.to("#box2 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box2 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box3 .underline-small
    gsap.to("#box3 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box3 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box4 .underline-small
    gsap.to("#box4 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box4 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box5 .underline-small
    gsap.to("#box5 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box5 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 95%",
            scrub: 3
        }
    });

    // For #page3-div2 #box6 .underline-small
    gsap.to("#box6 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box6 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div .underline
    gsap.to("#page3-div .underline", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page3-div .underline",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 65%",
            scrub: 2,
        }
    });

    // for #page4 h1
    gsap.from("#page4 h1", {
        opacity: 0,
        y: 100,
        // duration: 0.5,
        scrollTrigger: {
            trigger: "#page4 h1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 70%",
            scrub: 3
        }
    })

    // for #page4 #firstH3
    gsap.from("#page4 #firstH3", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#page4 #firstH3",
            scroller: "#main",
            start: "top 90%",
            end: "top 70%",
            scrub: 2
        }
    })

    // for #page4 #page4-container p
    gsap.from("#page4 #page4-container p", {
        opacity: 0,
        stagger: 0.3
    })

    // For #page4 .first-underline1
    gsap.to("#page4 .first-underline1", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page4 .first-underline1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 75%",
            scrub: 3
        }
    });

    // For #page4 .second-underline1
    gsap.to("#page4 .second-underline1", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page4 .second-underline1",
            scroller: "#main",
            // markers: true,
            start: "top 95%",
            end: "top 85%",
            scrub: 3
        }
    });

    // For #page4 h5
    gsap.from("#page4 h5", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: "#page4 h5",
            scroller: "#main",
            // markers: true,
            start: "top 95%",
            end: "top 85%",
            scrub: 3
        }
    })

    // for #footer h1
    gsap.from("#footer h1", {
        opacity: 0,
        y: 100,
        // duration: 0.5,
        scrollTrigger: {
            trigger: "#footer h1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 70%",
            scrub: 2
        }
    })

    // For #footer .underline2
    gsap.to("#footer .first-underline2", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#footer .first-underline2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 75%"
        }
    });

    // For #footer .underline2
    gsap.to("#footer .second-underline2", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#footer .second-underline2",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 85%"
        }
    });


}

// For #page3 headings - text animation
function textAnimation() {
    const h3Holder = document.querySelector(".h3Holder");
    const h3 = document.querySelectorAll("#page3 #page3-div2 .image-div-container .h3Holder h3");
    h3Holder.addEventListener("mouseenter", () => {
        h3.forEach((elem) => {
            gsap.to(elem, {
                y: -40,
            });
        });
    });

    h3Holder.addEventListener("mouseleave", () => {
        h3.forEach((elem) => {
            gsap.to(elem, {
                y: 0,
            });
        });
    });
}

function gsapForMobile() {
    // for #page3-div h1
    gsap.from("#page3-div h1", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: "#page3-div h1",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    })

    // For #page3-div .underline
    gsap.to("#page3-div .underline", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page3-div .underline",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 2,
        }
    });

    // For #page3-div2 #box1 .underline-small
    gsap.to("#box1 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box1 .underline-small",
            scroller: "#main",
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box2 .underline-small
    gsap.to("#box2 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box2 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box3 .underline-small
    gsap.to("#box3 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box3 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box4 .underline-small
    gsap.to("#box4 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box4 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });

    // For #page3-div2 #box5 .underline-small
    gsap.to("#box5 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box5 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 95%",
            scrub: 3
        }
    });

    // For #page3-div2 #box6 .underline-small
    gsap.to("#box6 .underline-small", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#box6 .underline-small",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });


    // for #page4 h1
    gsap.from("#page4 h1", {
        opacity: 0,
        y: 50,
        // duration: 0.5,
        scrollTrigger: {
            trigger: "#page4 h1",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    })

    // For #page4 .underline
    gsap.to("#page4 .underline", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page4 .underline",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3,
        }
    });

    // for #page4 #firstH3
    gsap.from("#page4 #firstH3", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: "#page4 #firstH3",
            scroller: "#main",
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    })

    // for #page4 #page4-container p
    gsap.from("#page4 #page4-container p", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: "#page4 #page4-container p",
            scroller: "#main",
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    })

    // For #page4 .first-underline1
    gsap.to("#page4 .first-underline1", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page4 .first-underline1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 75%",
            scrub: 3
        }
    });

    // For #page4 .second-underline1
    gsap.to("#page4 .second-underline1", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page4 .second-underline1",
            scroller: "#main",
            // markers: true,
            start: "top 95%",
            end: "top 85%",
            scrub: 3
        }
    });

    // For #page4 h5
    gsap.from("#page4 h5", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: "#page4 h5",
            scroller: "#main",
            // markers: true,
            start: "top 95%",
            end: "top 85%",
            scrub: 3
        }
    })

    // for #footer h1
    gsap.from("#footer h1", {
        opacity: 0,
        y: 50,
        // duration: 0.5,
        scrollTrigger: {
            trigger: "#footer h1",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    })

    // For #footer .underline2
    gsap.to("#footer .underline", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#footer .underline",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            // duration: 2
            scrub: 3
        }
    });

    // For #footer .underline2
    gsap.to("#footer .second-underline2", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#footer .second-underline2",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
            // duration: 2
        }
    });

}

function moreForMobile() {

    // By Clicking on the video container
    var videoContainer = document.querySelector("#video-container");
    var playCrsr = document.querySelector("#play-crsr");
    var video = document.querySelector("#video-container video");

    var flag = 0;
    videoContainer.addEventListener("click", function () {
        if (flag == 0) {
            video.play();
            video.style.opacity = 1
            gsap.to("#play-crsr", {
                opacity: 0
            })
            flag = 1;
        } else {
            video.pause();
            video.style.opacity = 0
            gsap.to("#play-crsr", {
                opacity: 1
            })
            flag = 0;
        }

    })

    // For #hamburger
    var first_svg = document.querySelector("#nav-part1 #first_svg");
    var ham = 0;
    first_svg.addEventListener("click", function () {
        if (ham == 0) {
            // hamburger.style.display = "block"
            // for #hamburger
            // var tl = gsap.timeline();
            gsap.to("#hamburger", {
                display: "block"
            })
            gsap.to("#hamburger", {
                // opacity: 1,
                top: 0,
                duration: 0.5
            })
            document.body.style.overflow = 'hidden';
            ham = 1;
        }
        else {
            var tl = gsap.timeline();
            tl.to("#hamburger", {
                // opacity: 0,
                top: "-100vh"
            })
            tl.to("#hamburger", {
                display: "none"
            })
            document.body.style.overflow = 'auto';
            ham = 0;
        }
    })
}

loadingAnimation();
locomotiveAnimation();
handleFixedNav();
textAnimation();

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    cursorAnimation();
    sheryAnimation();
    gsapWithScroll();

}
else {
    var extraImg = document.querySelectorAll(".extraImg");
    extraImg.forEach(function (img) {
        img.style.display = "none";
    })
    moreForMobile();
    gsapForMobile();
}