// var names = ["One", "Two", "Three", "Four", "Five"];
// names.forEach(name => console.log(name));

function delay(ms: number = 1000) {
    return new Promise(resolve => setTimeout(()=>resolve(), ms));
}


async function counting() {
    console.log("One");

    await delay();
    console.log("Two");

    await delay();
    console.log("Three");

    await delay();
    console.log("Four");

    await delay();
    console.log("Five");
}


counting();