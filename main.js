$(document).ready(function(){
   var stt=0;
   $("#save").click(function(){   //lưu dữ liệu vào bảng bên phải
    var name =$("#namecar").val();
    var image =$('#image').val();
    var type =$('#type').val();
    var money =$('#money').val();
    var people =$('#people').val();
    var number =$('#number').val();
    var email =$('#email').val();
    if(name==""||number==""||image==""||type==""||money==""||people==""||email=="")
    {
      alert( "Vui lòng nhập tất cả trường bắt buộc!");
      return
    }
    stt++;
    $('table').append( "<tr id='stt'>"+ "<td>"+ stt+"</td>"+
                      "<td id='van'>"+"<img src= "+image+ ">"+"</td>"+
                      "<td id='van2'>"+ name +"</td>"+
                      "<td >"+ type +"</td>"+
                      "<td>"+ money +"</td>"+
                      "<td >"+ people +"</td>"+
                      "<td>"+ number+"</td>"+
                      "<td>"+ email+"</td>"+
                      "</tr>")
                      $('input').val("");
    })

    $('#mykey').click(function(e){  //khi nhấn vào dòng ở bảng bên phải
      e.preventDefault();
         $("#table tr ").map(function (index, elem) {
            var arr = [];
            $('td ', this).each(function () {
                var d = $(this).val()||$(this).text();
                arr.push(d);
                // console.log(d);
            $("#namecar").val(arr[2]);
            $('#image').val(arr[1]);
            $('#type').val(arr[3]);
            $('#money').val(arr[4]);
            $('#people').val(arr[5]);
            $('#number').val(arr[6]);
            $('#email').val(arr[7]);
          });
        });
     })
  
     // tim kiem theo từ khóa
  $("#myInput").on({
      keyup: function(){
       var key = $(this).val().toLowerCase();
       $('#mykey tr').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(key)>-1);
       });
      },
     mouseenter: function(){
     $(this).val("Tìm kiếm theo từ khóa")},
     click:function(){
       $(this).val("")
     }
     });

    //  nhan chuot vào ô input
     $("input").on({
       mouseenter:function(){
         $(this).css("background-color","lightblue");
       },
       mouseleave:function() {
         $(this).css("background-color","white")
       }
     })
    
     //nguoi dung nhan nut xoa
     $('#delete').click(function(){
       $('tbody').empty();
     })
      
  });
   
function showlink(){
document.getElementById('image').value="https://static.danhgiaxe.com/data/201525/8-peugeot-rcz-while-most-americans-may-be-unfamiliar-with-this-french-sports-coupe-the-rcz-has-been-racking-up-the-awards-since-its-debut-in-2009-including-top-gears-2010-coupe-of-the-year_2440.jpg";
document.getElementById("errorimage").innerHTML="";
   }

   //validate name
function checkname(){
  var namecar=document.getElementById('namecar').value;
    if(namecar==""){
      document.getElementById("errorname").innerHTML="Vui lòng nhập lại tên!"}
    else{document.getElementById("errorname").innerHTML="";}
}

// validate image
function checkimage(){
  var image=document.getElementById('image').value;
  if(image=="")
  {
    document.getElementById("errorimage").innerHTML="Vui lòng nhập URL hình ảnh!"
  }else
  document.getElementById("errorimage").innerHTML="";
}

// validate type 
function checktype(){
  var type=document.getElementById('type').value;
  if(type=="--Hãng Xe--"){
   document.getElementById("errortype").innerHTML="Vui lòng chọn loại xe!"
  }else
   document.getElementById("errortype").innerHTML="";
}

// validate money 
function checkmoney(){
  var money=document.getElementById('money').value;
  if(money<=0)
    document.getElementById("errormoney").innerHTML="Giá tiền phải là số dương!"
  else
   document.getElementById("errormoney").innerHTML="";
  if(money==""||money<=0)
  {
    document.getElementById("errormoney").innerHTML="Vui lòng nhập lại giá tiền!";
  }
  else if(isNaN(money)){
  } else  document.getElementById("errormoney").innerHTML="";
  
}

// validate people 
function checkpeople(){
  var people=document.getElementById('people').value;
  if(people=="")
  document.getElementById("errorpeople").innerHTML="Vui lòng nhập người liên hệ!"
  else document.getElementById("errorpeople").innerHTML="";
}
    
// validate number 
function numbercheck(){
  var number=document.getElementById('number').value;
  if(number==="+84")
  {document.getElementById("errornumber").innerHTML="Vui lòng nhập số điện thoại!"}
   else if(number.length>13||number.length<10)
   { 
    document.getElementById("errornumber").innerHTML="Số điện thoại không hợp lệ!"
    }
  else{
  document.getElementById("errornumber").innerHTML="";}
}
// validate mail 
    function checkmail(){
      var email=document.getElementById('email').value;
      var regex= /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/ ;
      if(email=="")
        document.getElementById("erroremail").innerHTML="Vui lòng nhập email!"
        else if(!regex.test(email)){
        document.getElementById("erroremail").innerHTML="email không hợp lệ!";
        }
      else
        document.getElementById("erroremail").innerHTML=""
    }
