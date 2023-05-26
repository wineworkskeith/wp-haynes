jQuery( document ).ready(function($) {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    ///////////////////////////////////////////////////////////////////////////////////////
    // DESKTOP ANIMATIONS (MEDIUM UP)
    ///////////////////////////////////////////////////////////////////////////////////////
    mm.add("(min-width: 40.0625em)", () => {
        ////////////////////////////////////////////////////////////////
        // START HEADER ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.to("header.header", {
            scrollTrigger: {
                trigger: ".home__video__logo",
                scrub: true,
                // markers: true,
                start: "bottom top",
            }, 
            duration: 1, 
            ease: "power2",
            onComplete: function() {
                $('.header').addClass('active'); 
            },
            onReverseComplete: function() {
                $('.header').removeClass('active');
            },
        });
        ////////////////////////////////////////////////////////////////
        // END HEADER ANIMATION
        ////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////
        // START FIRST IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                id: "image-stack-1",
                // markers: true,
                trigger: ".home__stack__images",
                scrub: true,
                start: "center center",
                pin: '.home__stack',
                start: "center center",
                // end: "bottom top", // default values
                end: "+=2500 top",
            },
        })
        .to(".home__stack__images__1", {top: '-100vh' }, 0)
        .to(".home__stack__images__2", { top: '-100vh' }, ">")
        .to(".home__stack__images__3", { top: '-100vh' }, ">")
        .to(".home__stack__images__4", { top: '-100vh' }, ">")
        ////////////////////////////////////////////////////////////////
        // END FIRST IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////
        // START SECOND IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                id: "image-stack-2",
                // markers: true,
                trigger: ".home__stack2__stack__images",
                scrub: true,
                start: "center center",
                pin: '.home__stack2',
                start: "center center",
                end: "+=2500 top",
                pinSpacing: "margin",
            },
        })
        .to(".home__stack2__text",  {
            top: '0',
        }, 0)
        .to(".home__stack2__stack__images__1",  {
            top: '-100vh',
            onStart:function(){
                $('div[data-slide="1"],div[data-slide="3"],div[data-slide="4"]').removeClass('active');
                $('div[data-slide="2"]').addClass('active');
            },
            onReverseComplete:function(){
                $('div[data-slide="1"]').addClass('active');
                $('div[data-slide="2"],div[data-slide="3"],div[data-slide="4"]').removeClass('active');
            },
        }, ">")
        .to(".home__stack2__stack__images__2",  { 
            top: '-100vh',
            onStart:function(){
                $('div[data-slide="1"],div[data-slide="2"],div[data-slide="4"]').removeClass('active');
                $('div[data-slide="3"]').addClass('active');
            },
            onReverseComplete:function(){
                $('div[data-slide="2"]').addClass('active');
                $('div[data-slide="1"],div[data-slide="3"],div[data-slide="4"]').removeClass('active');
            },
        }, ">")
        .to(".home__stack2__stack__images__3",  {
            top: '-100vh',
            onStart:function(){
                $('div[data-slide="1"],div[data-slide="2"],div[data-slide="3"]').removeClass('active');
                $('div[data-slide="4"]').addClass('active');
            },
            onReverseComplete:function(){
                $('div[data-slide="3"]').addClass('active');
                $('div[data-slide="1"],div[data-slide="2"],div[data-slide="4"]').removeClass('active');
            },
        }, ">")
        .to(".home__stack2__stack__images__4",  {
            top: '-100vh',
        }, ">")
        .to(".home__stack2__stack__text",  {
            transform: 'translate(-50%, -100vh)',
        }, "<")
        .to(".home__stack2__text",  {
            top: '-100vh',
            duration: 2,
        }, "<")
        ////////////////////////////////////////////////////////////////
        // END SECOND IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START BACKGROUND COLOR ANIMATION
        ////////////////////////////////////////////////////////////////
        let black = "#010101";
        let white = "#fff";
        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__video",
                scrub: true,
                // markers: true,
                start: "top top",
            }, 
            duration: 1, 
            backgroundColor: black, 
            immediateRender: false,
            ease: "power2",
        });

        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__stack",
                scrub: true,
                // markers: true,
                start: "70% center",
                immediateRender: false,
            }, 
            duration: 1, 
            backgroundColor: white, 
            ease: "power2",
            onStart:function(){
                $('header.header').addClass('light');
            },
            onReverseComplete:function(){
                $('header.header').removeClass('light');
            },
        });

        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__stack2",
                scrub: true,
                // markers: true,
                start: "10% 70%",
                end: "20% top",
            }, 
            duration: 1, 
            backgroundColor: black, 
            immediateRender: false,
            ease: "power2",
            onStart:function(){
                $('header.header').removeClass('light');
            },
            onReverseComplete:function(){
                $('header.header').addClass('light');
            },
        });

        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                // markers: true,
                start: "top 70%",
                end: "40% top",
            }, 
            duration: 1, 
            backgroundColor: white, 
            immediateRender: false,
            ease: "power2",
            onStart:function(){
                $('header.header').addClass('light');
            },
            onReverseComplete:function(){
                $('header.header').removeClass('light');
            },
        });
        ////////////////////////////////////////////////////////////////
        // END BACKGROUND COLOR ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START PAPER SKETCH ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.to(".home__people__bg", {
            scrollTrigger: {
                trigger: ".home__people",
                scrub: true,
                // markers: true,
                start: "-=100 center",
            }, 
            duration: 3, 
            ease: "power2",
            y: '-24%',
        });
        ////////////////////////////////////////////////////////////////
        // END PAPER SKETCH ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START HOME PEOPLE SECTION ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                trigger: ".home__people",
                scrub: true,
                pin: true,
                // markers: true,
                start: "bottom bottom",
            }, 
            duration: 1, 
            ease: "power2"
        })
        .to(".home__people__text", {y: '-100%', duration: 2})
        ////////////////////////////////////////////////////////
        // END HOME PEOPLE SECTION ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START LOTTIE ANIMATION
        ////////////////////////////////////////////////////////////////
        LottieScrollTrigger({
            target: "#home__people__bg__bottom",
            path: "https://lottie.host/122f21e0-27a7-4599-8dc3-17b13cb93c35/muigIIqAjO.json",
            speed: "medium",
            pin: false,
            //markers: true,
            // start: "top top",
            // end: "bottom bottom",
            scrub: 0.5 // seconds it takes for the playhead to "catch up"
        });

        function LottieScrollTrigger(vars) {
            let playhead = {frame: 0},
                target = gsap.utils.toArray(vars.target)[0],
                speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
                st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
                ctx = gsap.context && gsap.context(),
                animation = lottie.loadAnimation({
                    container: target,
                    renderer: vars.renderer || "svg",
                    loop: false,
                    autoplay: false,
                    path: vars.path,
                    rendererSettings: vars.rendererSettings || { preserveAspectRatio: 'xMidYMid slice' }
                });
                for (let p in vars) { // let users override the ScrollTrigger defaults
                    st[p] = vars[p];
                }
            animation.addEventListener("DOMLoaded", function() {
            let createTween = function() {
                animation.frameTween = gsap.to(playhead, {
                    frame: animation.totalFrames - 1,
                    ease: "none",
                    onUpdate: () => animation.goToAndStop(playhead.frame, true),
                    scrollTrigger: st
                });
                return () => animation.destroy && animation.destroy();
            };
            ctx && ctx.add ? ctx.add(createTween) : createTween();
            // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
            ScrollTrigger.sort();
            ScrollTrigger.refresh();    
            });
            return animation;
        } // function LottieScrollTrigger
        ////////////////////////////////////////////////////////////////
        // END LOTIE ANIMATION
        ////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////
        // START HOME ALMANAC SECTION ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                pin: true,
                // markers: true,
                start: "bottom bottom",
            }, 
            duration: 1, 
            ease: "power2"
        })

        gsap.to(".home__almanac__title", {
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                // markers: true,
                start: "center 85%",
            }, 
            duration: 2, 
            ease: "power2",
            top: '20vh',
        });

        gsap.to(".home__almanac__text", {
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                // markers: true,
                start: "center 65%",
            }, 
            duration: 4, 
            ease: "power2",
            bottom: '0',
        });
        ////////////////////////////////////////////////////////
        // END HOME ALMANAC SECTION ANIMATION
        ////////////////////////////////////////////////////////
    });


    ///////////////////////////////////////////////////////////////////////////////////////
    // MOBILE ANIMATIONS (SMALL ONLY)
    ///////////////////////////////////////////////////////////////////////////////////////
    mm.add("(max-width: 40em)", () => {
        ////////////////////////////////////////////////////////////////
        // START HEADER ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.to("header.header", {
            scrollTrigger: {
                trigger: ".home__video__logo",
                scrub: true,
                // markers: true,
                start: "bottom top",
            }, 
            duration: 1, 
            ease: "power2",
            onComplete: function() {
                $('.header').addClass('active'); 
            },
            onReverseComplete: function() {
                $('.header').removeClass('active');
            },
        });
        ////////////////////////////////////////////////////////////////
        // END HEADER ANIMATION
        ////////////////////////////////////////////////////////////////
        
        ////////////////////////////////////////////////////////////////
        // START FIRST IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                id: "image-stack-1",
                // markers: true,
                trigger: ".home__stack__images",
                scrub: true,
                start: "center center",
                pin: '.home__stack',
                end: "+=1500 top",
            }
        })
        .to(".home__stack__images__1",  { top: '-100vh' }, 0)
        .to(".home__stack__images__2",  { top: '-100vh' }, ">")
        .to(".home__stack__images__3",  { top: '-100vh' }, ">")
        .to(".home__stack__images__4",  { top: '-100vh' }, ">")
        ////////////////////////////////////////////////////////////////
        // END FIRST IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////
        // START SECOND IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                id: "image-stack-2",
                // markers: true,
                trigger: ".home__stack2__stack__images",
                scrub: true,
                start: "center center",
                pin: '.home__stack2',
            }
        })
        .to(".home__stack2__stack__images__1",  {
            top: '-100vh',
            onStart:function(){
                $('div[data-slide="1"],div[data-slide="3"],div[data-slide="4"]').removeClass('active');
                $('div[data-slide="2"]').addClass('active');
            },
            onReverseComplete:function(){
                $('div[data-slide="1"]').addClass('active');
                $('div[data-slide="2"],div[data-slide="3"],div[data-slide="4"]').removeClass('active');
            },
        }, 0)
        .to(".home__stack2__stack__images__2",  { 
            top: '-100vh',
            onStart:function(){
                $('div[data-slide="1"],div[data-slide="2"],div[data-slide="4"]').removeClass('active');
                $('div[data-slide="3"]').addClass('active');
            },
            onReverseComplete:function(){
                $('div[data-slide="2"]').addClass('active');
                $('div[data-slide="1"],div[data-slide="3"],div[data-slide="4"]').removeClass('active');
            },
        }, ">")
        .to(".home__stack2__stack__images__3",  {
            top: '-100vh',
            onStart:function(){
                $('div[data-slide="1"],div[data-slide="2"],div[data-slide="3"]').removeClass('active');
                $('div[data-slide="4"]').addClass('active');
            },
            onReverseComplete:function(){
                $('div[data-slide="3"]').addClass('active');
                $('div[data-slide="1"],div[data-slide="2"],div[data-slide="4"]').removeClass('active');
            },
        }, ">")
        .to(".home__stack2__stack__images__4",  {
            top: '-100vh',
        }, ">")
        .to(".home__stack2__stack__text",  {
            transform: 'translate(-50%, -100vh)',
        }, "<")
        .to(".home__stack2__text",  {
            top: '-100vh',
            duration: 2,
        }, "<")
        ////////////////////////////////////////////////////////////////
        // END SECOND IMAGE STACK ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START BACKGROUND COLOR ANIMATION
        ////////////////////////////////////////////////////////////////
        let black = "#010101";
        let white = "#fff";
        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__video",
                scrub: true,
                // markers: true,
                start: "top top",
            }, 
            duration: 1, 
            backgroundColor: black, 
            immediateRender: false,
            ease: "power2",
        });

        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__stack",
                scrub: true,
                // markers: true,
                start: "85% center",
                immediateRender: false,
            }, 
            duration: 1, 
            backgroundColor: white, 
            ease: "power2",
        });

        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__stack2",
                scrub: true,
                // markers: true,
                start: "10% 70%",
                end: "20% top",
            }, 
            duration: 1, 
            backgroundColor: black, 
            immediateRender: false,
            ease: "power2",
        });

        gsap.to("#content", {
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                // markers: true,
                start: "top 70%",
                end: "40% top",
            }, 
            duration: 1, 
            backgroundColor: white, 
            immediateRender: false,
            ease: "power2",
        });
        ////////////////////////////////////////////////////////////////
        // END BACKGROUND COLOR ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START PAPER SKETCH ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.to(".home__people__bg", {
            scrollTrigger: {
                trigger: ".home__people",
                scrub: true,
                // markers: true,
                start: "-=100 center",
            }, 
            duration: 3, 
            ease: "power2",
            y: '-29%',
        });
        ////////////////////////////////////////////////////////////////
        // END PAPER SKETCH ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START HOME PEOPLE SECTION ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                trigger: ".home__people",
                scrub: true,
                // pin: true,
                // markers: true,
                start: "bottom bottom",
            }, 
            duration: 1, 
            ease: "power2"
        })
        .to(".home__people__text", {y: '-100%', duration: 2})
        ////////////////////////////////////////////////////////
        // END HOME PEOPLE SECTION ANIMATION
        ////////////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////
        // START LOTTIE ANIMATION
        ////////////////////////////////////////////////////////////////
        LottieScrollTrigger({
            target: "#home__people__bg__bottom",
            path: "https://lottie.host/122f21e0-27a7-4599-8dc3-17b13cb93c35/muigIIqAjO.json",
            speed: "medium",
            pin: false,
            // markers: true,
            start: "-=100 bottom",
            end: "bottom center",
            scrub: 0.5 // seconds it takes for the playhead to "catch up"
        });

        function LottieScrollTrigger(vars) {
            let playhead = {frame: 0},
                target = gsap.utils.toArray(vars.target)[0],
                speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
                st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
                ctx = gsap.context && gsap.context(),
                animation = lottie.loadAnimation({
                    container: target,
                    renderer: vars.renderer || "svg",
                    loop: false,
                    autoplay: false,
                    path: vars.path,
                    rendererSettings: vars.rendererSettings || { preserveAspectRatio: 'xMidYMid slice' }
                });
                for (let p in vars) { // let users override the ScrollTrigger defaults
                    st[p] = vars[p];
                }
            animation.addEventListener("DOMLoaded", function() {
            let createTween = function() {
                animation.frameTween = gsap.to(playhead, {
                    frame: animation.totalFrames - 1,
                    ease: "none",
                    onUpdate: () => animation.goToAndStop(playhead.frame, true),
                    scrollTrigger: st
                });
                return () => animation.destroy && animation.destroy();
            };
            ctx && ctx.add ? ctx.add(createTween) : createTween();
            // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
            ScrollTrigger.sort();
            ScrollTrigger.refresh();    
            });
            return animation;
        } // function LottieScrollTrigger
        ////////////////////////////////////////////////////////////////
        // END LOTIE ANIMATION
        ////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////
        // START HOME ALMANAC SECTION ANIMATION
        ////////////////////////////////////////////////////////////////
        gsap.timeline({
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                pin: true,
                // markers: true,
                start: "bottom bottom",
            }, 
            duration: 1, 
            ease: "power2"
        })

        gsap.to(".home__almanac__title", {
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                // markers: true,
                start: "center 85%",
            }, 
            duration: 2, 
            ease: "power2",
            top: '30vh',
        });

        gsap.to(".home__almanac__text", {
            scrollTrigger: {
                trigger: ".home__almanac",
                scrub: true,
                // markers: true,
                start: "center 65%",
            }, 
            duration: 4, 
            ease: "power2",
            bottom: '0',
        });
        ////////////////////////////////////////////////////////
        // END HOME ALMANAC SECTION ANIMATION
        ////////////////////////////////////////////////////////
    });
});