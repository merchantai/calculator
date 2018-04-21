var in1="",
    in2="",
    op,
    result = 0;
 
$(".btn").on("click",function(){  
  switch(this.dataset.num){
    case "+":
      calculate();
      op = "+";
      break;
    case "-":
      calculate();
      op = "-";
      break;
    case "*":
      calculate();
      op = "*";
      break;
    case "/":
      calculate();
      op = "/";
      break;
    case "=":
      if(parseFloat(in1)=== 0 && op==="/"){
          $("#result").html("Divide by 0 error");
          in2 = 0;
          in1 = "";
          result = 0;
        break;
        }
      calculate();
        display();
      in1= result.toString();
      in2="";
      break;
    case "C":
      in1 = "";
      in2 = "";
      $("#result").html("0");
      break;      

    default:
          in1 += this.dataset.num
      if(in1==""){
        $("#result").html("0");
        break;
      }else{
        $("#result").html(in1);
      }
      
  }
});

function calculate(){
  if(in2==""){
    in2 = in1;
    in1= "";
  }else{
    switch(op){
      case "+":
        result = parseFloat(in2)+parseFloat(in1);
        display();
        break;
      case "-":
        result = parseFloat(in2)-parseFloat(in1);
        display();
        break;
      case "*":
        result = parseFloat(in2)*parseFloat(in1);
        display();
        break;
      case "/":
        if(parseFloat(in1)=== 0){
          $("#result").html("Divide by 0 error");
          in2 = 0;
          in1 = "";
          result = 0;
        }else{
        result = parseFloat(in2)/parseFloat(in1);
        }
    }
  }
}

function display(){
  if(in2==""){
    if(in1==""){
      $("#result").html("0");
    }
    in2 = in1;
    in1="";
  }else{
    in2= result;
  in1 = "";
  $("#result").html(in2);
  }
  

}