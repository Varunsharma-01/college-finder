let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
let clgArr = await getColleges(country);
console.log(clgArr);
show(clgArr);
})

function show(clgArr) {
    let list = document.querySelector("#list");
    list.innerText="";
    for(clg of clgArr){
        console.log(clg.name);
        
        let li = document.createElement("li");
        li.innerText= clg.name;
        list.appendChild(li);
        list.style.color="black";
        list.style.backgroundColor="white";
    }
    
}

async function getColleges(country) {
    try{
        let res= await axios.get(url+country);
        return res.data;

    }catch(err){
        console.log("error is :",err);
        return [];
    }
    
} 