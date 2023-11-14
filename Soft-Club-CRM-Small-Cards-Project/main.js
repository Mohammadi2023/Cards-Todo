let box = document.querySelector('.box')
let btnadd = document.querySelector(".btnadd")
let diaadd = document.querySelector(".diaadd")
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let inp4 = document.querySelector(".inp4")
let btnadddia = document.querySelector('.btnadddia')
let btnclose = document.querySelector(".btnclose")


let diaedit111 = document.querySelector('.diaedit111')
let inp111 = document.querySelector(".inp111")
let inp222 = document.querySelector(".inp222")
let inp333 = document.querySelector(".inp333")
let inp444 = document.querySelector(".inp444")

let btnadddia111 = document.querySelector('.btnadddia111')
let btnclose222 = document.querySelector(".btnclose222")

let diaedit = document.querySelector('.diaedit')
let inp11 = document.querySelector(".inp11")
let inp22 = document.querySelector(".inp22")
let inp33 = document.querySelector(".inp33")
let inp44 = document.querySelector(".inp44")

let btnadddia11 = document.querySelector('.btnadddia11')
let btnclose22 = document.querySelector(".btnclose22")

btnclose222.onclick=()=>{
    diaedit111.close()
}



async function get(){
    try {
        const responce = await fetch('https://64f82679824680fd217f2db9.mockapi.io/api/v1/users')
        let data = await responce.json()
        getdata(data)
    } catch (error) {
        console.log(error);
    }
}

 async function postuser(user){
    try {
        let responce = await fetch('https://64f82679824680fd217f2db9.mockapi.io/api/v1/users',{
            method: "POST",
            headers: {
                Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        get()
    } catch (error) {
        console.log(error);
    }
}

btnadd.onclick=()=>{
    diaadd.showModal()
    
}

btnadddia.onclick = () =>{
    let user = {
        name: inp1.value,
        email: inp2.value,
        city: inp3.value,
        phone: inp4.value
    }
    postuser(user)
    diaadd.close()
}

btnclose.onclick = () =>{
    diaadd.close()
}
btnclose22.onclick = () =>{
    diaedit.close()
}

 async function deleteuser(id){
let responce = await fetch(`https://64f82679824680fd217f2db9.mockapi.io/api/v1/users/${id}`,{
    method: "DELETE"
})
 get()
}
let idx = null
btnadddia11.onclick=()=>{
    let user = {
        name: inp11.value,
        email: inp22.value,
        city: inp33.value,
        phone: inp44.value
    }
    edituser(idx, user)
    diaedit.close()

}

 async function edituser(id, user){
    try {
        let responce =  await fetch(`https://64f82679824680fd217f2db9.mockapi.io/api/v1/users/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        get()
    } catch (error) {
        console.log(error);
    }
}

// let searchinp = document.querySelector(".searchinp")

// searchinp.oninput= async ()=>{
//     try {
//         const responce = await fetch(`http://localhost:3000/data?q=${searchinp.value}`)
//         let data = await responce.json()
//         getdata(data)
//     } catch (error) {
//         console.log(error);
//     }
// }


function getdata(data){
    box.innerHTML = ""
    data.forEach(eleme => {
        let card = document.createElement('div')
        card.classList.add('card')
        let pp = document.createElement('p')
        pp.classList.add("soft")
        pp.innerHTML = "Soft Club"
        let pppq = document.createElement('p')
        pppq.innerHTML = "31/12"
        pppq.classList.add('bgadd')
        let pdawn = document.createElement('p')
        pdawn.innerHTML = "hello"
        pdawn.classList.add("hello")

        let name1 = document.createElement('h1')
        name1.innerHTML = eleme.name
        name1.classList.add("name")
        let emaill = document.createElement("p")
        emaill.innerHTML = eleme.email
        emaill.classList.add("email")
        let cityy = document.createElement("p")
        cityy.innerHTML = eleme.city
        cityy.classList.add("city")
        let month = document.createElement("p")
        month.innerHTML = eleme.phone
        month.classList.add("month")
        let start = document.createElement("p")
        start.innerHTML = "Started"
        start.classList.add("start")
        let info = document.createElement('button')
        info.innerHTML = "Info"
        info.classList.add("info")
        info.onclick=()=>{
            diaedit111.showModal()
           inp111.value = eleme.name
           inp222.value = eleme.email
           inp333.value = eleme.city
           inp444.value = eleme.phone
        } 
      
        let edit = document.createElement("button")
        edit.innerHTML = "Edit"
        edit.classList.add("edit")
        edit.onclick=()=>{
            idx = eleme.id
            inp11.value = eleme.name
            inp22.value = eleme.email
            inp33.value = eleme.city
            inp44.value = eleme.phone
            diaedit.showModal()
        }

        let del = document.createElement("button")
        del.innerHTML = "Delete"
        del.classList.add("del")
         del.onclick=()=>{
            deleteuser(eleme.id)
         }
       

        card.append(pp,pppq,pdawn,name1,emaill,cityy,month,start,info,edit,del)
        box.appendChild(card)
    });
}
get()