var c = document.body.children;
var windowHeight= $(window).height();
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

$(window).scroll(function() {
	var height = $(window).scrollTop();

  if(height < windowHeight) {
console.log($('#sidebar:eq(1)'));
		$('.sidebar').removeClass('active');
		$('.sidebar:eq(0)').addClass('active');
	} 
else if(height>=windowHeight && height<(2*windowHeight)){

		$('.sidebar').removeClass('active');
		$('.sidebar:eq(1)').addClass('active');
	}

});

$('.sidebar').click(function(){
var t=$(this).index()*windowHeight +1;
$('.sidebar').removeClass('active');
$('.sidebar:eq('+$(this).index()+')').addClass('active');
window.scrollTo({left:0,top: t,behavior: 'smooth'});

});