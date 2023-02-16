const matchBtn = document.querySelector('.btn.match');
const exploreBtn = document.querySelector('.explore')

exploreBtn.addEventListener('click',()=>{
  exploreBtn.innerHTML = "<i class='bx bxs-user-detail' ></i> Exploring..."
  setTimeout(()=>{
    exploreBtn.innerHTML = "<i class='bx bx-user-pin' ></i>Explore onother freind"
    matchBtn.innerHTML = "<i class='bx bxs-user-plus'></i>Match now"
    matchfreind()
  },3000);
})

matchBtn.addEventListener('click',()=>{
  matchBtn.classList.add('matching');
  setTimeout(()=>{
    matchBtn.classList.remove('matching')
    matchBtn.classList.add('matched')
    matchBtn.innerHTML = "<i class='bx bxs-user-check' ></i>freind matched"
  },5000);
  if (matchBtn.classList.contains('matching')){
    matchBtn.innerHTML = "<i class='bx bxs-user-voice' ></i> Maching.."
  }  
})















matchfreind = ()=>{
  const name = document.querySelector('.info .name')
  const image = document.querySelector('.p-img img')
  const location = document.querySelector('.info .location')
  const phone = document.querySelector('.info .phone')
  const email = document.querySelector('.info .mail')
  fetch('https://random-data-api.com/api/v2//users? response_type=json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        name.innerHTML = data.first_name+''+data. last_name
        image.src = data.avatar
        location.innerHTML= `<i class="fa-solid fa-location-dot"></i>`+data.address.city
        phone.innerHTML= `<i class='bx bxs-phone-call'></i>`+data.phone_number
        email.innerHTML=`<i class='bx bx-mail-send'></i>`+ data.email

        
        
      })
}
matchfreind()