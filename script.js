function myFunction() {
    var f=document.form.first.value;
    var d=document.form.second.value;
    var n=document.form.third.value;
    var f=Number(f);
    var d=Number(d);
    var n=Number(n);
    var m=(f+(2*d));
    var o=f+(3*d);
    
    if(f==0||d==0||n==0){
        alert("Enter First Number, Common Difference , n value")
    }
    else if(n==1 ||n==21||n==31||n==41||n==51||n==61||n==71||n==81||n==91){
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>st</sup> term ?";
    }
    else if(n==2 || n==22||n==32||n==42||n==52||n==62||n==72||n==82||n==92){
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>nd</sup> term ?";
    }
    else if(n==3 || n==23||n==33||n==43||n==53||n==63||n==73||n==83||n==93){
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>rd</sup> term ?";
    }
    else{
        
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .    find "+n +"<sup>th</sup> term ?";
    }
    
  
}
function correctAnswer() {
    var f=document.form.first.value;
    var d=document.form.second.value;
    var n=document.form.third.value;
    var f=Number(f);
    var d=Number(d);
    var n=Number(n);
    var answer=f+(n-1)*d;
    var checkanswer=document.form.writeanswer.value; 
    var checkanswer=Number(checkanswer);
    if (checkanswer == ""){
        alert("Please type Answer");
    }
    else if(checkanswer == answer){
        document.getElementById("x").innerHTML ="Your Answer is Right. Congragulations";
        // document.getElementById("panel").style.display = "block";
    
    }
    
    else{
        document.getElementById("x").innerHTML ="Your Answer is Wrong. Try Again";
    
    // document.getElementById("panel").style.display = "block";
    }
}
function showButton(){
    document.getElementById("originalAnswer").style.display = "block";
}
function Steps(){
    
    var checkanswer=document.form.writeanswer.value; 
    var checkanswer=Number(checkanswer);
    var f=document.form.first.value;
    var d=document.form.second.value;
    var n=document.form.third.value;
    var f=Number(f);
    var d=Number(d);
    var n=Number(n);
    var nminuse=(n-1);
    var nminusevalue=(d*(n-1))
    var answer=f+(n-1)*d;
    if(checkanswer == ""){
            alert("Please Type Answer ")
    }
    else{
        
    document.getElementById("q").innerHTML ="X<sub>n</sub> = f+(n-1)d<br> f = " +f+"<br>d = "+d+"<br>X<sub>"+n+"</sub> = "+f+"+("+n+"-1)"+d+"<br>X<sub>"+n+"</sub> = "+f+"+("+nminuse+")"+d+"<br> = "+f+"+"+nminusevalue+"<br> = " +answer;
    }
}
       
  
  