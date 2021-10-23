//getData

async function getData1(url) {

    let res = await fetch(url)
    let data = await res.json()

    return data;
}

//showData

function append1(data,container) {

    data.forEach(({strMeal,strMealThumb,strYoutube,strInstructions})=>{

        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerText ="Category-"+ strMeal;
        p.style.fontSize="30px"
        p.style.color="navy"
        p.style.marginLeft="35%"

        let des = document.createElement('p')
        des.innerText =strInstructions;

        let youtube = document.createElement('P')
        youtube.innerText="YouTube Link -"+strYoutube;
    
      

        let img = document.createElement("img")

        img.src = strMealThumb;
        img.style.marginLeft="35%"
        img.style.width="30%"

        div.append(img,p,des,youtube);

        container.append(div)


    })
}

export {getData1,append1}