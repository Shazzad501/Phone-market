
const loadAllPhones = async(status,searchText) =>{
  document.getElementById('spinner').style.display = 'none'
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`)
const data = await res.json()
if(status){
  displayAllPhones(data.data)

}
else{
  displayAllPhones(data.data.slice(0, 6))

}



}


const displayAllPhones=(phones)=>{
  const phoneContainer = document.getElementById('phones-container')
  
  phoneContainer.innerHTML = " "
  phones.forEach(phone => {
    const{image,slug,brand}=phone

    const div = document.createElement('div')
    div.innerHTML=`
    <div class="card bg-base-100 w-96 pt-8 shadow-xl">
  <figure>
    <img
      src=${phone.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.brand}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions justify-end">
      <button onclick ="phoneDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
    </div>
  </div>
</div>`
phoneContainer.appendChild(div)
    
  });
}

const  handleShowAll=()=>{
  loadAllPhones(true)

}

const handleSearch=()=>{
  document.getElementById('spinner').style.display ='block'
  const searchText = document.getElementById('search-box').value
  setTimeout(() => {
    loadAllPhones(false,searchText)
  }, 3000);
}

const phoneDetails =async(slugs)=>{
 const response =await fetch(` https://openapi.programming-hero.com/api/phone/${slugs}`)
 const data = await response.json()
 console.log(data.data);
 const{image,slug,brand}= data.data
 const modalcontainer = document.getElementById('modal-container')
 
 modalcontainer.innerHTML = `
 <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">${phone.brand}</h3>
      <p class="py-4">${phone.slug}</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
 `
 
 my_modal_1.showModal()

}

loadAllPhones(false,"iphone")
