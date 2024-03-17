//console.dir(document)

//select element by getElementById--->work for id
// const mainHeading=document.getElementById("main-heading")
// console.log(mainHeading)

//select element by queryselector-->work for id,class or any hmtl element--->gives the first element
// const heading=document.querySelector("#main-heading")
// console.log(heading)
//andr andr ka chiz bhi isme le skte hai
// const mainHeading=document.querySelector(".headline h2")
// console.log(mainHeading);



//textContent--->jiska dsplay hidden hai wobhi dega (span ka text show krega)
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent="Changed";
// console.log(mainHeading.textContent);

//innerText--->srf jiska display hiden nae hai utna hi text rhega (span ka text show nae krega)
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.innerText="Changed";
// console.log(mainHeading.innerText);


//change the style of element
// const mainHeading=document.querySelector(".headline h2")
// mainHeading.style.color="blue";
// mainHeading.style.backgroundColor="white";


//get and set attribute
// const link=document.querySelector("a")
// console.log(link.getAttribute("href").slice(1))
// link.setAttribute("href","https://codprog.com")

// const input=document.querySelector(".form-todo input")
// console.log(input.getAttribute("type"))


//slect multiple item by class name
// const links=document.getElementsByClassName("nav-list");//--->give html collection named object
// console.log(links)
// console.log(typeof(links))
// console.log(Array.isArray(links))
// console.log(links[1])
// console.log(links[0])

//queryselectorAll--->slect multiple element with classname id or tag
// const link=document.querySelectorAll(".nav-list")
// console.log(link)
// console.log(link[0])
// console.log(typeof(link))t

//tag name
// const navLinks=document.getElementsByTagName("a");
//for of loop
// for(let navItem of navLinks){
//     navItem.style.color="blue"
// }
//simple for loop
// for(let i=0;i<navLinks.length;i++){
//     const navItem=navLinks[i];
//     navItem.style.color="red"
// }
//forech loop--->drct use nae hoga kuki wo object hai aur forech array pe lgta hai to pehle array banana hoga
// let navLinks=document.getElementsByTagName("a");//let kuki humlog change krre type
// navLinks=Array.from(navLinks);
// console.log(Array.isArray(navLinks))

// navLinks.forEach((navItem)=>{
//     navItem.style.color="red"
// })

//innerHtml---->koi bhi element ke bich kch bhi hoga wo uska innerHtml hoga
// const div=document.querySelector("section")
// console.log(div.innerHTML)
// div.innerHTML="<h1>Inner html changed</h1>"
// div.innerHTML+="<button class=\"btn\">Learn More</button>"//"\"\"" yeh kuki ek line me bht bar " " yeh na kr skte 

//traverse dom tree
// const rootNode=document.getRootNode()
// console.log(rootNode)
// console.log(rootNode.childNodes)
// const htmlEl=rootNode.childNodes[1];
// console.dir(htmlEl.childNodes)//ims space aur next line bhi count kr dega
// console.log(htmlEl.parentNode)
// console.log(htmlEl.firstChild)
// console.log(htmlEl.firstChild.nextSibling)
// console.log(htmlEl.firstChild.nextSibling.nextSibling)
// console.dir(htmlEl.children)//without extra space or nex line character


//classlist,add and remove ,toggle classes
// const todoSection=document.querySelector(".section-todo");
// console.log(todoSection.classList)//print all the classes inside totoSection
// todoSection.classList.add('bg-dark')
// todoSection.classList.remove('bg-dark')
// console.log(todoSection.classList.contains('bg-dark'))

//toggle
//agar yeh bg-dark class nae exist krta to add kr dega agar exist krta hai to remove kr dega
// todoSection.classList.toggle('bg-dark');//nae tha to add kiya
// todoSection.classList.toggle('bg-dark');//tha to remove kr diya


//add html element

//using innerHtml--->
// const todoList=document.querySelector(".todo-list");
// todoList.innerHTML=todoList.innerHTML+ "<li>Todo2</li>"
// todoList.innerHTML=todoList.innerHTML+ "<li>Todo3</li>"
//yeh tb use karo jab pura html change krna ho tb lekin isko add krne ke liye use mat krna


//append
// const todoItem=document.createElement("li");
// const text=document.createTextNode("Teach Students")
// todoItem.append(text)
// todoItem.textContent="Teach Students"
// const todoList=document.querySelector(".todo-list");
// todoList.append(todoItem)

//prepend
// todoList.prepend(todoItem)

//remove
// const todo1=document.querySelector(".todo-list li")
// todo1.remove()


//before-->for eg agar ul element ke pehle add krna hai
// const todoItem=document.createElement("li");
// todoItem.textContent="Todo 1"
// const todoList=document.querySelector(".todo-list");
// todoList.before(todoItem)


//after--->for eg agar ul element ke pehle add krna hai
// const todoItem=document.createElement("li");
// todoItem.textContent="Todo 1"
// const todoList=document.querySelector(".todo-list");
// todoList.after(todoItem)

//clone nodes
// const ul=document.querySelector(".todo-list")
// const li=document.createElement("li")
// li.textContent="Todo2"
// ul.append(li)
// ul.prepend(li)//-->append se hatke prepend me jaega kuki li ek hi item hai to yaa to append hoga ya prepend to humlog ko clone krn ahoga
// const li2=li.cloneNode(true)//-->true kuki deep cloning krna hai yani text content bhi clone krna hai
// ul.prepend(li2)


//static live vs live list--->we can use any

//static list--->quearySelectorAll dega srf
// const listItems=document.querySelectorAll(".todo-list li")
// const fifthli=document.createElement("li")
// fifthli.textContent="Todo 5"
// const ul=document.querySelector(".todo-list")
// ul.append(fifthli)
// console.log(listItems)//--->lekin yaha srf 4 hi li items show krega kuki yeh static list hai upodate nae hota


//live list--->getElementByClassname or tag will keep live update of added items
// const ul=document.querySelector(".todo-list")
// const listItems=ul.getElementsByTagName("li")
// const fifthli=document.createElement("li")
// fifthli.textContent="Todo 5"
// ul.append(fifthli)
// console.log(listItems)//-->yeh dega updated no. of items


//how to dimensions of element-->height,width
// const sectionTodo=document.querySelector(".section-todo")
// const info=sectionTodo.getBoundingClientRect()
// console.log(info)


//events
//how to add event
// const btn=document.querySelector(".btn-headline")
//we use addEvenListner method
// function clickMe(){
//     console.log("Your clicked me")
// }
// btn.addEventListener("click",function(){
//     console.log('You clicked me')
// })

// btn.addEventListener("click",()=>{
//     console.log('You clicked me')
// })

//this keyword 
// btn.addEventListener("click",function(){ //-->this value is btn
//     console.log('You clicked me')
//     console.log(this)
// })
// btn.addEventListener("click",()=>{ //this value is window
//     console.log('You clicked me')
//     console.log(this)
// })


//click event on multiple button
// const allBtn=document.querySelectorAll("button")
// console.log(allBtn)
// for(let button of allBtn){
//     button.addEventListener("click",function(){
//         console.log(this)
//     })
// }

// allBtn.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this)
//     })
// })

//event object
// const firstButton=document.querySelector("#btn1")
// firstButton.addEventListener("click",function(event){//rbowser yeh clallback function ko ek object deta hai joki yeh event hai jiske andr usefull things hai
//     console.log("You clicked me")
// })

// for(let button of allBtn){
//     button.addEventListener("click",(e)=>{
//         console.log(e.target) //target mtlb jab event hua tb konsa element event create kiya
//     })
// }

// for(let button of allBtn){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget)  //jab event hua tb konse elemt pe attach tha
//     })
// }


//project on click event
// const mainButton=document.querySelector("button")
// const body=document.body
// const currentColor=document.querySelector(".current-color")
// function randomColorGenerator(){
//     const red=Math.floor(Math.random() * 255)
//     const green=Math.floor(Math.random() * 255)
//     const blue=Math.floor(Math.random() * 255)
//     const color=`rgb(${red},${green},${blue})`
//     return color;
// }

// mainButton.addEventListener("click",()=>{
//     const randomColor=randomColorGenerator()
//     body.style.background=randomColor
//     currentColor.textContent=randomColor
// })


//keypress event--->keyboard pe konsa key press hua
// const body=document.body
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })


//mouseover
// const mainBtn=document.querySelector(".btn-headline")
// mainBtn.addEventListener("mouseover",()=>console.log("mouseover event occur"))
// mainBtn.addEventListener("mouseleave",()=>console.log("mouseleave event occur"))

//event bubbling--->grandParent,Parent,Chilren
//agar child me event hai usko click kiye to parent aur grand parent wala bhi print hoga 
//event uppr se capture hoga aur niche se fire hoga

//even delegation
//event srf granParent pe lagao baki andr jaha bhi click hoga uss chiz se event fire ho jaega


const todoForm=document.querySelector(".form-todo")
const todoInput=document.querySelector(".form-todo input[type='text']")
const todoList=document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault() //by default jo page refresh hota hai wo nae hoga
    console.log(todoInput.value)
    const todoText=todoInput.value;
    const li=document.createElement("li")
    const newLi=`
    <span>${todoText}</span>
    <div class="todo-button">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn delete">Delete</button>
    </div>`
    li.innerHTML=newLi
    todoList.append(li)
})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        const delElement=e.target.parentNode.parentNode
        delElement.remove()
    }
    if(e.target.classList.contains("done")){
        const liSpanText=e.target.parentNode.previousElementSibling
        liSpanText.style.textDecoration="line-through"
    }
})