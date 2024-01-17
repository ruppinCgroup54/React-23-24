class clock {
  constructor(hh, mm, ss, country) {
    this.hh = hh;
    this.mm = mm;
    this.ss = ss;
    this.country = country;
  }
  static clockArr = [];

  show() {

    let tmpArr = [this.hh, this.mm, this.ss];
    for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i].length == 1) {
          tmpArr[i] = "0" + tmpArr[i];
      }
    }
    let str = `${tmpArr[0]} : ${tmpArr[1]} : ${tmpArr[2]}`;
    return str;
  }

  convertToseconds() {
    var num = parseInt(this.hh) * 3600;
    num += parseInt(this.mm) * 60;
    num += parseInt(this.ss);
    return num;
  }
}

function rendi(e) {

    e.preventDefault();

  var form = document.getElementById("my-form");

  var temp = new clock(
    form.hour.value,
    form.min.value,
    form.sec.value,
    form.country.value
  );

  clock.clockArr.push(temp);

  form.reset();

  temp.show();

  temp.convertToseconds();
  
  if (clock.clockArr.length == 5) {
    print02();
  }
}

function print02() {
  var str01 = "";
  for (let index = 0; index < clock.clockArr.length; index++) {
    str01 += `<h5>${clock.clockArr[index].country}</<h5><h6>${clock.clockArr[
      index
    ].show()}</h6>${clock.clockArr[index].convertToseconds()}<h6></h6><br>`;
  }

  
  document.getElementById("div02").innerHTML += str01;
}
