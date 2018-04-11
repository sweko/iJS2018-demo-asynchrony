function delay(ms) {
    return new Promise(resolve => setTimeout(()=>resolve(), ms));
}

async function edinDva(){

    const array = ["Един","Два","Три","Четири","Пет"];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
        await delay(1000);            
    }
}

edinDva();
