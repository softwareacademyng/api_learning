


const getData = async ()=>{
    const response = await fetch("https://student-api.softwareacademy.ng/api/");
    try {
        const row = document.getElementById("row");
        row.innerHTML = ``;
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        console.log(data);
        data.map(item=>{
            row.innerHTML += `
            <div class="column">
                <div class="box-img" style="background:url(${item.menu_img}) no-repeat center/cover">
                
                </div>
                
                <h2>${item.menu_name}</h2>
                <p>
                    ${item.description}
                </p>
                <a href="#">readmore</a>
            </div>
            
            `
        })

    } catch (error) {
        console.log(error.message);
    }
}

getData();