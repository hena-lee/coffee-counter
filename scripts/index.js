const state = {
    coffeeCount: 0,
};

const addCoffee = () => {
    const newCoffee = document.createElement("span");
    const coffeeContainer = document.querySelector("#coffeeContainer");
    newCoffee.textContent = "☕";
    coffeeContainer.appendChild(newCoffee);
    state.coffeeCount += 1;
    const coffeeCountContainer = document.querySelector("#coffeeCount")
    coffeeCountContainer.textContent = `${state.coffeeCount}`;
};

const changeLights = () => {
    const coffeeContainer = document.getElementById("coffee");
    const countContainer = document.getElementById("counter");  
    const lightswitch = document.querySelector("#lightSwitch");
    if (lightswitch.innerHTML == 'Dark Mode') {
        lightswitch.innerHTML = 'Light Mode';
        coffeeContainer.style.background= 'rgba( 17, 17, 17, 0.70 )';
        countContainer.style.background = 'rgba( 17, 17, 17, 0.70 )';
    } else {
        lightswitch.innerHTML = 'Dark Mode';
        coffeeContainer.style.background= 'rgba( 255, 255, 255, 0.25 )';
        countContainer.style.background= 'rgba( 255, 255, 255, 0.25 )';
    }
};

const registerEventHandlers = () => {
    const coffeeButton = document.querySelector("#addCoffeeButton");
    coffeeButton.addEventListener("click", addCoffee);
    const lightSwitch = document.querySelector("#lightSwitch");
    lightSwitch.addEventListener("click", changeLights);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

