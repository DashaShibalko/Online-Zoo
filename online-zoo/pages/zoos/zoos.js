//aside
const ASIDE = document.querySelector(".live-animals");
const ANIMALS__LIST = document.querySelector(".live-animals__links");
const ANIMALS_ICONS = document.querySelectorAll('.live-animal__icon');
const ARROW = document.querySelector(".arrows");
//const ARROW_DOWN = document.querySelector(".down-arrow__container");
let position = 0;

//watch more animals in aside 
document.querySelector(".down-arrow__container").addEventListener('click', (e) => {
  position++;
  if(position > 4){
    ANIMALS__LIST.style.transform =  `translateY(0%)`;
    position = 0;
  }
  else{
    ANIMALS__LIST.style["transform"]=  `translateY(-${position*13}%)`;
  }
});

// const returnAside = () => {
//   ASIDE.style.width = "220px"
// }

//watch sidebar
ARROW.addEventListener('click', () => {
  if(ARROW.classList.contains("open-close__sidebar")){
    ASIDE.style.width = "300px";
    ARROW.style.transform = "rotate(180deg)";
    ARROW.style.margin = "0 0 0 135px"

    ANIMALS_ICONS.forEach((elem)=>{
      
      elem.firstElementChild.style.margin = "33px 20px";
      elem.firstElementChild.firstElementChild.style.fill = "#f58021";
      elem.firstElementChild.style["background-color"] = "#20113d";
      elem.lastElementChild.style.display = "flex";
      elem.lastElementChild.firstElementChild.innerText = "Watch live from China's  Panda Center ";
    })
    ARROW.classList.toggle("open-close__sidebar");
  }
  else{
    ASIDE.style.width = "220px";
    ARROW.style.transform = "rotate(0deg)";
    ARROW.style.margin = "0 0 0 54px"

    ANIMALS_ICONS.forEach((elem)=>{
      
      elem.firstElementChild.style.margin = "33px auto";
      elem.firstElementChild.firstElementChild.style.fill = "#20113d";
      elem.firstElementChild.style["background-color"] = "#f58021";
      elem.lastElementChild.style.display = "none";
      if(elem.firstElementChild.classList.contains("icon__active")){
        elem.firstElementChild.style["background-color"] = "white";
      } 
    })
    
    ARROW.classList.toggle("open-close__sidebar");
  }


});







const MAIN_VIDEO = document.getElementById("mainVideo");
//carousel for video 
function Carousel(setting) {
    if(document.querySelector(setting.wrap) === null) {
      console.error(`Carousel not found selector ${setting.wrap}`);
      return;
    }

    /* Scope privates methods and properties */
    let privates = {};

    /* Public methods */
    // Prev slide
    this.prev_slide = () => {
      --privates.opt.position;

      if(privates.opt.position < 0) {
        privates.sel.wrap.classList.add('s-notransition');
        privates.opt.position = privates.opt.max_position - 1;
      }
      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position*33}%)`;
    };


    // Next slide
    this.next_slide = () => {
      ++privates.opt.position;
      if(privates.opt.position >= privates.opt.max_position) {
        privates.opt.position = 0;
      }

      privates.sel.wrap.style.transform = `translateX(-${privates.opt.position*33}%)`;
    };



    /* Privates properties */
    privates.setting = setting;

    privates.sel = {
      "main": document.querySelector(privates.setting.main),
      "wrap": document.querySelector(privates.setting.wrap),
      "prev": document.querySelector(privates.setting.prev),
      "next": document.querySelector(privates.setting.next)
    };

    privates.opt = {
      "position": 0,
      "max_position": document.querySelector(privates.setting.wrap).children.length-2
    };
    // Control
    if(privates.sel.prev !== null) {
      privates.sel.prev.addEventListener('click', () => {
        this.prev_slide();
      });
    }

    if(privates.sel.next !== null) {
      privates.sel.next.addEventListener('click', () => {
        this.next_slide();
      });
    }
    
    privates.sel.wrap.addEventListener('click', (event) =>{
      console.log(event.target.nextSibling);
      let temp = MAIN_VIDEO.src ;
      MAIN_VIDEO.src = event.target.nextElementSibling.src;
      event.target.nextElementSibling.src = temp;
    })


  }


  let a = new Carousel({
    "main": ".more-views__wrap",
    "wrap": ".more-views__list",
    "prev": ".more-views__left",
    "next": ".more-views__right"
  });

