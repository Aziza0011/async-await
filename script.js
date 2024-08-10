let API = "https://jsonplaceholder.typicode.com/comments"
let card = document.querySelector('div')

let myfunction = async (olma)=>{
    console.log('loading.....');

    const request =await fetch(olma)
    const data = await request.json(request)
    console.log(data);

   
    console.log('ishladi')
    
    for(item of data){
        card.innerHTML += `
        <div> 
        <h2>${item.email}</h2>
        <h3>${item.body}</h3>
        <h1>${item.name}</h1>
        <p>${item.id}</p>
        </div>`
    }
}
   


myfunction(API)