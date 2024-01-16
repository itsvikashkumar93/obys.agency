// Locomotive 
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
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
        duration: 0.8,
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
        delay: 6,
        // duration: 0.3,
        // stagger: 0.2
    })



    // ----------------------------------------------------------------------------

    // tl.to("#loader", {
    //     opacity: 0,
    //     duration: 0.2,
    //     delay: 3.5
    // })

    // tl.from("#page1", {
    //     delay: 0.2,
    //     y: 1600,
    //     opacity: 0
    // })

    // tl.to("#loader", {
    //     display: "none"
    // })

}

// For cursor moving effect
// function cursorAnimation() {
//     // First select document i.e. html ko select kro
//     document.addEventListener("mousemove", function (dets) {
//         gsap.to("#crsr", {
//             left: dets.x,
//             top: dets.y
//         })
//     })


// Function to handle fixed navigation
function handleFixedNav() {
    const navPart1 = document.getElementById('nav-part1');
    const offset = 200; // Adjust this offset based on your design

    // Listen to scroll events
    window.addEventListener('scroll', function () {
        // Add or remove the 'fixed' class based on the scroll position
        if (window.scrollY > offset) {
            navPart1.classList.add('fixed');
        } else {
            navPart1.classList.remove('fixed');
        }
    });
}

function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        // debug: true,
        config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": -0.91, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7666557722625823 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.76, "range": [0, 10] }, "metaball": { "value": 0.6, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.37, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] } },
        gooey: true
    })

    // document.querySelector("#page3 h3").addEventListener("mouseover", function () {
    //     Shery.textAnimate("#page3 h3", {
    //         style: 5,
    //         y: 10,
    //         delay: 0.1,
    //         duration: 0.4,
    //         ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //         multiplier: 0.1,
    //     })
    // });
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
    })
}

function gsapWithScroll() {
    // for #page3-div h1
    gsap.from("#page3-div h1", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3-div h1",
            scroller: "#main",
            markers: true,
            start: "top 90%",
            end: "top 70%",
            scrub: 2
        }
    })

    gsap.to("#page3-div .underline", {
        // opacity: 1,
        // backgroundColor: "#ffffffc4",
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".underline",
            scroller: "#main",
            markers: true,
            start: "top 90%",
            end: "top 65%",
            scrub: 2
            // stagger: 2
        }
    })
    gsap.to("#page4 .underline", {
        // opacity: 1,
        // backgroundColor: "#ffffffc4",
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page4 .underline",
            scroller: "#main",
            markers: true,
            start: "top 90%",
            end: "top 65%",
            scrub: 2
            // stagger: 2
        }
    })

    gsap.to("#box1 .underline-small", {
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".underline-small",
            scroller: "#main",
            markers: true,
            start: "top 90%",
            end: "top 65%",
            scrub: 2,
            // stagger: 0.2
        }
    })

    gsap.to("#box2 .underline-small", {
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#box2 .underline-small",
            scroller: "#main",
            markers: true,
            start: "top 90%",
            end: "top 65%",
            scrub: 2,
            // stagger: 0.2
        }
    })
    gsap.to("#box3 .underline-small", {
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#box3 .underline-small",
            scroller: "#main",
            markers: true,
            start: "top 70%",
            end: "top 55%",
            scrub: 2,
            // stagger: 0.2
        }
    })
}


loadingAnimation();
locomotiveAnimation();
sheryAnimation();
cursorAnimation();
// textillateAnimation();
gsapWithScroll()
handleFixedNav();

// Check kro
// gsap.from("#nav", {
//     opacity: 0,
//     delay: 6
// }, "-=2")


// function textillateAnimation(){
//     gsap.from("#footer h1", {
//         y: 20,
//         opacity: 0,
//         onStart: function(){
//             $('#footer h1').textillate({ in: { effect: 'fadeIn' } });

//         }
//     })
// }