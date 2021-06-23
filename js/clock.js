function clock(){
    let date = new Date();
    let hrs = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    let time = `${hrs}:${mins}`;
      setInterval(clock, 1000);
      document.getElementById("clock").innerHTML = time;
}
clock();
