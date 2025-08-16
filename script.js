var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 98%",
    end: "70% 50%",
    scrub: true,
    markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
},'sameTime')

tl.to("#orangeSlice",{
    top: "160%",
    left: "22%"
},'sameTime')

tl.to("#orange",{
    width: "15%",
    top: "160%",
    right: "5%",
},'sameTime')

tl.to("#leaf1",{
    top: "110%",
    left: "80%",
    rotate: "320deg"
},'sameTime')

tl.to("#leaf",{
    top: "110%",
    left: "0%",
    rotate: "280deg"
},'sameTime')

