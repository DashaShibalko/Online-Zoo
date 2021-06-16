const DONATE = document.querySelector(".variant__btn");
const DONATEVOL = document.querySelector(".footer-btn__donate")
const QUICK_DONAT_BTN = document.querySelector(".quick-form__btn")
const AMOUNT_BTNS = document.querySelectorAll(".together-care__list-btn")

const AMOUNT = document.querySelector(".make-donation__amount-btn")
const NEXT1 = document.querySelector(".make-donation__next-btn");
const NEXT2 = document.querySelector(".next-second");
const BACK2 = document.querySelector(".make-donation__back-second");
const BACK3 = document.querySelector(".make-donation__back-third");

const POPUP_TOGETHER = document.querySelector(".together-care__fixed-overlay");
const POPUP_DONATION = document.querySelector(".make-donation__fixed-overlay")

const DONATION_STEP1 = document.querySelector(".make-donation__first");
const DONATION_STEP2 = document.querySelector(".make-donation__second");
const DONATION_STEP3 = document.querySelector(".make-donation__third");

const LIST_DONATION_BTNS = document.querySelectorAll(".make-donation__list-donation");

function together_popUp(){
  POPUP_TOGETHER.style.display = "block"; 
  document.body.style.overflow = "hidden"; 
}

QUICK_DONAT_BTN.addEventListener('click',()=>{
  POPUP_DONATION.style.display = "block"; 
  document.body.style.overflow = "hidden";
  let inputValue=document.querySelector(".quick-form__input").value;
  console.log(inputValue)
  if(inputValue==''){
    AMOUNT.style["background-color"] = "rgba(0, 160, 146, 0.5)";
    LIST_DONATION_BTNS[0].classList.toggle("list-donation__active");
  }
  else{
    AMOUNT.style["background-color"] = "#00a092";
    document.querySelector(".make-donation__input").value=inputValue;
  }
})

DONATE.addEventListener('click', together_popUp);
DONATEVOL.addEventListener('click', together_popUp);

AMOUNT_BTNS.forEach((elem)=>{
  elem.addEventListener('click', ()=>{
    POPUP_TOGETHER.style.display = "none";
    POPUP_DONATION.style.display = "block";
    let amount = elem.firstElementChild.innerHTML;
    if(elem.classList.contains("together-care__other-amount")){
      AMOUNT.style["background-color"] = "#00a092";
    }
    else{
      LIST_DONATION_BTNS.forEach((item)=>{
        item.classList.remove("list-donation__active");
      })
      LIST_DONATION_BTNS.forEach((item)=>{
        if(item.firstElementChild.innerHTML==amount){
          item.classList.toggle("list-donation__active");
        } 
      })
    }
  })
})
const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const re_card_number = /^\d{16}$/;
const re_card_cvv = /^\d{3}$/;
const re_donation = /^\d{1,4}$/;

function checkInfo(re,value,elem){
  if(!re.test(value)){
    elem.style.border = "1px solid red";
  }
  else{ 
    elem.style.border = "1px solid black";
  }
  return re.test(value);
}

POPUP_TOGETHER.addEventListener('click', (e)=>{
  if(e.target.classList.contains("together-care__btn-cross") || e.target==POPUP_TOGETHER){
    POPUP_TOGETHER.style.display = "none";
    document.body.style.overflow = "auto"; 
  }
})
POPUP_DONATION.addEventListener('click',(e)=>{
  if(e.target==POPUP_DONATION){
    POPUP_DONATION.style.display = "none";
    document.body.style.overflow = "auto"; 
  }
})

NEXT1.addEventListener('click', ()=>{
  if(checkInfo(re_donation,document.querySelector(".make-donation__input").value,document.querySelector(".make-donation__input")) && AMOUNT.style["background-color"]=="rgb(0, 160, 146)"){
    DONATION_STEP1.classList.toggle("make-donation__display-none");
    DONATION_STEP2.classList.toggle("make-donation__display-none");
    console.log('11')
  }
  if(AMOUNT.style["background-color"]!="rgb(0, 160, 146)"){
    DONATION_STEP1.classList.toggle("make-donation__display-none");
    DONATION_STEP2.classList.toggle("make-donation__display-none");
  }

  
})
NEXT2.addEventListener('click', ()=>{
  if(re_email.test(document.getElementById("email").value)){
    document.getElementById("email").style.border = "1px solid black";
    if(document.getElementById("name").value!=''){
      document.getElementById("name").style.border = "1px solid black";
      DONATION_STEP2.classList.toggle("make-donation__display-none");
      DONATION_STEP3.classList.toggle("make-donation__display-none");
    }
    else{
      console.log("not name");
      document.getElementById("name").style.border = "1px solid red";
    }
  }
  else{
    console.log("not email");
    document.getElementById("email").style.border = "1px solid red";
  }
  
})
BACK2.addEventListener('click', (e)=>{
  DONATION_STEP2.classList.toggle("make-donation__display-none");
  DONATION_STEP1.classList.toggle("make-donation__display-none");
})
BACK3.addEventListener('click', (e)=>{
  DONATION_STEP3.classList.toggle("make-donation__display-none");
  DONATION_STEP2.classList.toggle("make-donation__display-none");
})

const COMPLETE = document.querySelector(".complete");

COMPLETE.addEventListener('click', ()=>{
  if(checkInfo(re_card_number, document.getElementById("cardName").value, document.getElementById("cardName")) 
        && checkInfo(re_card_cvv, document.getElementById("cvvNumber").value, document.getElementById("cvvNumber"))){
          console.log(document.getElementById('year').value,document.getElementById('month').value);
    if(document.getElementById('month').value != "Month" && document.getElementById('year').value != "Year"){
      document.getElementById('month').style.border = "1px solid black";
      document.getElementById('year').style.border = "1px solid black";
      document.body.style.overflow = "auto";
      POPUP_DONATION.style.display = "none";
      alert( "Thank you for your donation");
    }
    else{
      document.getElementById('month').style.border = "1px solid red";
      document.getElementById('year').style.border = "1px solid red";
    }
  }
})




//auto-carousel
function timer(){
  if(position_cards >= max_cards){
    position_cards=0;
  FEEDBACK_CARDS.style.transform = `translateX(-${position_cards}%)`
  }
  else{
    position_cards++;
    FEEDBACK_CARDS.style.transform = `translateX(-${position_cards*25}%)`
  }
}
 let timerId = setInterval(timer, 15000); 


const BTN_LEFT = document.querySelector(".feedback-button__left")
const BTN_RIGHT = document.querySelector(".feedback-button__right")
const FEEDBACK_CARDS = document.querySelector(".cards")
let position_cards = 0;
let max_cards = 3;

BTN_RIGHT.addEventListener('click',()=>{
  if(position_cards >= max_cards){
    position_cards=0;
    FEEDBACK_CARDS.style.transform = `translateX(-${position_cards}%)`;
  }
  else{
    position_cards++;
    FEEDBACK_CARDS.style.transform = `translateX(-${position_cards*25}%)`;
  }
  clearInterval(timerId);
  setTimeout(()=>{
    timerId=setInterval(timer,15000);
  },60000)
})
BTN_LEFT.addEventListener('click',()=>{
  if(position_cards == 0) {
    position_cards=max_cards;
    FEEDBACK_CARDS.style.transform = `translateX(-${position_cards*25}%)`;
    console.log(position_cards)
  }
  else{
    position_cards--;
    FEEDBACK_CARDS.style.transform = `translateX(-${position_cards*25}%)`;
  }
  clearInterval(timerId);
  setTimeout(()=>{
    timerId=setInterval(timer,15000);
  },60000)
})
FEEDBACK_CARDS.addEventListener('click', ()=>{
  clearInterval(timerId);
  setTimeout(()=>{
    timerId=setInterval(timer,15000);
  },60000)
})








  function Carousel(setting) {
    if(document.querySelector(setting.wrap) === null) {
      console.error(`Carousel not fount selector ${setting.wrap}`);
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
      
      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}0%)`;
    };


    // Next slide
    this.next_slide = () => {
      ++privates.opt.position;

      if(privates.opt.position >= privates.opt.max_position) {
        privates.opt.position = 0;
      }

      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}0%)`;
    };



    /* Privates properties */
    privates.setting = setting;

    privates.sel = {
      "main": document.querySelector(privates.setting.main),
      "wrap": document.querySelector(privates.setting.wrap),
      "children": document.querySelector(privates.setting.wrap).children,
      "prev": document.querySelector(privates.setting.prev),
      "next": document.querySelector(privates.setting.next)
    };

    privates.opt = {
      "position": 0,
      "max_position": document.querySelector(privates.setting.wrap).children.length/2 -1 
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

  }


  let a = new Carousel({
    "main": ".carousel",
    "wrap": ".slides",
    "prev": ".meet-friends__btns-left",
    "next": ".meet-friends__btns-right"
  });

