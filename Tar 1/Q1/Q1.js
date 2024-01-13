class Counter{

    // constructor(val){
    //     this.val=val;
    // }

    Initialize = num => this.val=num;

    Increment = () => this.val++;

    Go = () => {
        var toPrint="";
        for (let index = 0; index <= this.val; index++) {
            toPrint += `${index} `;
        }
        return toPrint;
    }

}

Init = () => {
    var newInput = document.getElementById("floatingInput").value;
    newCounter= new Counter ();
    newCounter.Initialize(newInput);
}

Add = () => {
    if (typeof newCounter === 'undefined') {
        Init();
    }
    newCounter.Increment();
    document.getElementById("floatingInput").value=newCounter.val;
}

Print = () => {
    if (typeof newCounter === 'undefined') {
        Init();
    }
    var pArr = document.querySelector(".form-signin p");
        if (pArr) {
            pArr.remove();
        }
    var par= document.createElement("p");
    par.innerHTML=newCounter.Go();
    par.classList.add("copyright")
    document.querySelector(".form-signin").append(par);
}