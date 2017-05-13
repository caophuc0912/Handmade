//Functiuon

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
} /*Lấy giá trị tham số từ URL*/

// Cắt chuỗ hiển thị tên sp
 function catChuoi_theododai(ten,soluongkitu)
 {

    if(ten.length >  soluongkitu)
    {
      
        if(tensp.indexOf(" ")== -1)    //Nếu tên sản phẩm ko có khoảng trắng                           
        {
              ten =  ten.substr(0,(soluongkitu-3))+"...";
        }
        else // nếu có
        {
                 ten = ten.substr(0,soluongkitu); // cắt 20 kí  tự
                // tensp.substr(0,holot.indexOf(" "));
                if(tensp.lastIndexOf(" ") != -1) // tim khoảng trắng cuối cùng
                {
                    ten = ten.substr(0,ten.lastIndexOf(" "))+"..."; // cắt đên khoảng trắng cuối đó
                }
   
        } 
    }
    return ten;
 }

function checkEmail(email) { 
  
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
             return false; // lỗi email
       
    }
    else{ 
           return true; // email Ok
    } 
}



function checkHoten( str) {
  
   var validcharacters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm â ă ê ô ơ ư á à ả ã ạ é è ẻ ẽ ẹ í ì ỉ ĩ ị ó ò ỏ õ ọ ú ù ủ ũ ụ á à ả ã ạ ắ ằ ẳ ẵ ặ ấ ầ ẩ ẫ ậ ế ề ể ễ ệ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ứ ừ ử ữ ự đ Â Ă Ê Ô Ơ Ư Á À Ả Ã Ạ É È Ẻ Ẽ Ẹ Í Ì Ỉ Ĩ Ị Ó Ò Ỏ Õ Ọ Ú Ù Ủ Ũ Ụ Á À Ả Ã Ạ Ắ Ằ Ẳ Ẵ Ặ Ấ Ầ Ẩ Ẫ Ậ Ể Ề Ế Ễ Ệ Ổ Ồ Ố Ỗ Ộ Ớ Ờ Ở Ỡ Ợ Ứ Ừ Ử  Ữ Ự Đ";//Các kí tự đang nhập
    for (var i = 0; i < str.length; ++i) {
        if (validcharacters.indexOf(str.substr(i, 1)) == -1) // nếu kí tự ko có trong chuối cho cho phép
        {
            return false; // chuỗi sai
           
        }   
    }
     return true; // đúng
}
function checkTaikhoan( str) {
    var validcharacters = "qwertyuiopasdfghjklzxcvbnm1234567890";//Các kí tự đang nhập
    for (var i = 0; i < str.length; ++i) {
        if (validcharacters.indexOf(str.substr(i, 1)) == -1) // nếu kí tự ko có trong chuối cho cho phép
        {
            return false; // chuỗi sai
           
        }   
    }
     return true; // đúng
}
 function checkMatkhau( str) {
     var validcharacters = "!@#$$%^&*_qwertyuiopasdfghjklzxcvbnm1234567890";//Các kí tự đang nhập
    for (var i = 0; i < str.length; ++i) {
        if (validcharacters.indexOf(str.substr(i, 1)) == -1) // nếu kí tự ko có trong chuối cho cho phép
        {
            return false; // chuỗi sai
           
        }   
    }
    return true; // đúng
}
//hàm chuyển màu
    function rgb2hex(rgb) {
         rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
         function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

// Initialize app
var myApp = new Framework7();
var host = "http://localhost:8080/handmade/";
var host_anh = "http://localhost:8080/handmade/img/"
var isLogin;
var uid;
var idshop;
var taikhoan;
var array_tenanh = [];
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

