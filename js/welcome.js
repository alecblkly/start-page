function greetings(){
    let date = new Date();
    let hrs = date.getHours();

    let greeting = `Good ${hrs <= 12 ? "Morning" : hrs <= 18 ? "Afternoon" : "Evening"}`;
        setTimeout(greetings, 150);
        document.getElementById("welcome").textContent = greeting;
}
greetings();