class Duck {
    constructor(name, color, age, weight, photo) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.photo = photo;
    }

    Show = () => {
        var printDetails = `name: ${this.name}, color: ${this.color}, age: ${this.age}, weight: ${this.weight}`;
        var photo = this.photo
        return { printDetails, photo };
    }

    Quack = () => {
        var pArr = document.querySelector(".form1 p");
        if (pArr) {
            pArr.remove();
        }
        var text = document.createElement("p");
        text.innerHTML = "Quack ".repeat(this.age * this.weight / 2);
        text.classList.add("subtitle");
        text.id="newQuack";
        document.querySelector(".form1").append(text);
        var audio = new Audio("duck-quack-112941.mp3");
        playSound(audio);
    }
}

Submit = () => {
    var detailes = document.getElementById("duckForm");
    newDuck = new Duck(detailes.Dname.value, detailes.Color.value, detailes.Age.value, detailes.Weight.value, detailes.Photo.value);
    document.getElementById("Quack").style.visibility = "visible";
    document.getElementById("Show").style.visibility = "visible";
    document.getElementById("btn").disabled = true;
    detailes.reset();
}

ShowDetails = () => {
    var pArr = document.querySelector(".form1 p");
        if (pArr) {
            pArr.remove();
        }
    var duckDetails = newDuck.Show();
    var print = document.createElement("p");
    print.innerHTML = duckDetails.printDetails;
    print.id = "newPar";
    print.classList.add("subtitle");
    document.querySelector(".form1").append(print);
    var Dimage = document.createElement("img");
    Dimage.src = `${duckDetails.photo}`;
    var src = document.getElementById("newPar");
    src.appendChild(Dimage);
}

function playSound(audio, numberOfTimes = 3, delay = 1500, firstTime = true) {
    if (firstTime) {
        audio.play();
    }

    Repeat = () => {
        if (!firstTime) {
            audio.play();
        }
        numberOfTimes--;
        if (numberOfTimes > 0) {
            playSound(audio, numberOfTimes, delay, false);
        }
    }

    setTimeout(Repeat, delay)
}

