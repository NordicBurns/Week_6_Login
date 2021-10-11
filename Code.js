function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML =
            "Craps - You Lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML =
            "Doubles - You Win";
    } else {
        document.getElementById("finalRes").innerHTML =
            "Draw - Try Again";
    }
}

function Blastoff() {
    var currTime = 50;
    document.getElementById("CountdownTimer").innerHTML = currTime + (str.fontcolor("aqua"));
    document.getElementById("CountdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function btrBlastOff() {
    console.log("bteBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        setTimeout(function () {
            if (currTime > 25) {
                document.getElementById("CountdownTimer").innerHTML = currTime;
            } else {
                document.getElementById("CountdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}