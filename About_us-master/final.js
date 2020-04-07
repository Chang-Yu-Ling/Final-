var c = document.body.children;
var temp;
function blur(){
document.getElementById("member_box").style.filter = "blur(8px)";
document.getElementById("member_box2").style.zIndex = "1";
}
function deblur(){
document.getElementById("member_box").style.filter = "none";
document.getElementById("member_box2").style.zIndex = "-2";
}

$('.member_card').click(function(){
var a = $(this).parent().index();


if(document.getElementById("member_box").style.filter=='none'
||document.getElementById("member_box").style.filter=='')
{	
$('.member_details:eq('+a+')').transition('fade in');
blur();
temp=a;
}

})

$(document).mouseup(function (e) {
    var container =$('.member_details:eq('+temp+')'); 
	var b=document.getElementsByClassName("member_details");

    if (!container.is(e.target) && container.has(e.target).length === 0&&
document.getElementById("member_box").style.filter=='blur(8px)' ){
	$(container).transition('fade out');
	deblur();    
	temp=null;
}

});

