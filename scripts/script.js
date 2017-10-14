function likeOnClick(eve) {
	var str = eve.innerHTML;
	if (str.length != 1)
	{
		var number = parseInt(str.substr(1, str.length - 1));
		number++;
		eve.innerHTML = "▲" + number;
	} else {
		eve.innerHTML = "▲" + '1';
	}
	
}

function backToTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function search() {
	var queryContent = $(".nav-bar__search-box--normal").val();
	var url = "https://www.zhihu.com/search?type=content&q=" + queryContent;
	$(window).attr('location',url);
}

$(".nav-bar__search-box-btd--normal").focus(function () {
	$(".nav-bar__search-box-btd--normal").addClass("nav-bar__search-box-btd--focus");
	$(".nav-bar__search-box--normal").addClass("nav-bar__search-box--focus");
});

$(".nav-bar__search-box--normal").focus(function () {
	$(".nav-bar__search-box-btd--normal").addClass("nav-bar__search-box-btd--focus");
});

$(".nav-bar__search-box--normal").blur(function () {
	$(".nav-bar__search-box-btd--normal").removeClass("nav-bar__search-box-btd--focus");
});