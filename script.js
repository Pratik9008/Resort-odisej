
var tl = gsap.timeline();
var pg2h1 = document.querySelectorAll("#page2 h1");
pg2h1.forEach(function(elem){
  var clutter = ""
  var pg2Text = elem.textContent;
  var splittedText = pg2Text.split("");
  splittedText.forEach(function(e){
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter;
 })

tl.from("#pg1Heading", {
  y:-50,
  opacity:0,
  delay:1,
  duration:1,
})

tl.from("#page1 img", {
  scale: 0.5,
  delay:-0.5,
  duration:0.8,
})

tl.from("nav a", {
  y:-50,
  opacity:0,
  delay:0.2,
  duration:0.8,
  stagger:0.3
})

function imgPin(){
  gsap.to("#page1 img",{
    top:-200,
    opacity:0,
    scrollTrigger:{
      trigger:"#page1 img",
      scroller:"body",
      scrub:0,
      start:"top 0",
      end:"top -200%",
      pin:true
    }
  })
}

gsap.to("#page2 h1 span",{
  color:"#E3E3C4",
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page2 h1 span",
    scroller:"body",
    scrub:1,
    start:"top 70%",
    end:"top -35%"
  }
})

imgPin()

gsap.to("#page1 h1",{
  scale:0,
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"body",
    scrub:1,
    start:"top 2%",
    end:"top -40%",
    pin:true,
  }
})

var pg3h1 = document.querySelectorAll("#page3 h1");
pg3h1.forEach(function(elem){
  var clutter = ""
  var pg3Text = elem.textContent;
  var splittedText = pg3Text.split("");
  splittedText.forEach(function(e){
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter;
 })

 gsap.to("#page3 h1 span",{
  color:"#434B34",
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page3 h1 span",
    scroller:"body",
    scrub:1,
    start:"top 80%",
    end:"top 22%"
  }
})

gsap.from("#pg3pt1 p",{
  y:35,
  opacity:0,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#pg3pt1 p",
    scroller:"body",
    scrub:1,
    start:"top 95%",
    end:"top 52%"
  }
})

gsap.from("#pg3pt1 a",{
  y:35,
  opacity:0,
  scrollTrigger:{
    trigger:"#pg3pt1 a",
    scroller:"body",
    scrub:1,
    start:"top 95%",
    end:"top 52%"
  }
})

gsap.from("#pg3pt1 img",{
  y:35,
  opacity:0,
  scrollTrigger:{
    trigger:"#pg3pt1 img",
    scroller:"body",
    scrub:1,
    start:"top 95%",
    end:"top 52%"
  }
})

gsap.from("#pg3pt2 #pg3pt2Image1",{
  y:40,
  opacity:0,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#pg3pt2 #pg3pt2Image1",
    scroller:"body",
    scrub:1,
    start:"top 95%",
    end:"top 52%"
  }
})

gsap.from("#pg3pt2 #pg3pt2Image2",{
  y:40,
  opacity:0,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#pg3pt2 #pg3pt2Image2",
    scroller:"body",
    scrub:1,
    start:"top 95%",
    end:"top 52%"
  }
})