class clock{
    constructor (hh,mm,ss,country){
        (this.hh=hh);
        (this.mm=mm);
        (this.ss=ss);
        (this.country = country);
    }
    static clockArr=[];

    show(){
        let ho=this.hh;
        let mi=this.mm;
        let se=this.ss;
        
        if(ho>23 ||mi>59|| se>59 || se<0 || mi<0 || ho<0){
            alert("Please insert digits by the right format: hours must be between 0-23. min and sec between 0-59, and all positive")
        }
       
        let tmpArr=[ho,mi,se];
        for (let i = 0; i < tmpArr.length; i++) {
            if(tmpArr[i].length>2){
alert(`2 digit max in each number box`);
            }
            else {
                if(tmpArr[i].length==1){
                    
                    tmpArr[i]="0"+tmpArr[i];
                }
                
            }
            
           
        }
        console.log(tmpArr);
        console.log(+this.hh+":"+this.mm+":"+this.ss+"   "+this.country);
        let str=`${tmpArr[0]} : ${tmpArr[1]} : ${tmpArr[2]}`;
        return str;
        document.getElementById("div02").innerHTML=str;
    }

    convertToseconds(){
        var num=parseInt(this.hh)*3600;
        num+=parseInt(this.mm)*60;
        num+=parseInt(this.ss);
        return num;
        
        
    }
}

function rendi(){
    var ty=document.getElementById("hour").value;
    var ty01=document.getElementById("min").value;
    var ty02=document.getElementById("sec").value;
    var ty03=document.getElementById("country").value;
   var temp=new clock(ty,ty01,ty02,ty03);
   clock.clockArr.push(temp);
   document.getElementById("hour").value = "";
   document.getElementById("min").value = "";
   document.getElementById("sec").value = "";
   document.getElementById("country").value = "";
   console.log(clock.clockArr);
   
   temp.show();
   temp.convertToseconds();
   if(clock.clockArr.length==5){print02()};
}

function print02(){
    var str01="";
    for (let index = 0; index < clock.clockArr.length; index++) {
        str01+=`<h5>${clock.clockArr[index].country}</<h5><h6>${clock.clockArr[index].show()}</h6>${clock.clockArr[index].convertToseconds()}<h6></h6><br>`;       
    }
    document.getElementById("div02").innerHTML+=str01;
}