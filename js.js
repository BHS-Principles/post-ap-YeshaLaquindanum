alert("please work");


var list = [
    "frozen burritos",
    "frozen pizza",
    "frozen hotdog",
]

var btn = document.getElementById("mybutton")
var action = function(event){
    alert("yay");
};

for(var i = 0; i < 3; i++){
    var newbtn = btn.cloneNode(true);
    newbtn.innerHTML = list[1];
    document.body.append(newbtn);

    newbtn.addEventListener("click", action);  

    }
