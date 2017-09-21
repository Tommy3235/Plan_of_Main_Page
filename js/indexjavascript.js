//index页面专有JS
//版本：20170921.1
//根据Cookies设置打开网页时操作
function openHtml()
{
	var a = getCookies("bgname");
	var b = document.getElementById("pb");
	var c = getCookies("themecolor");
	var d = getCookies("foregroundcolor");
	b.value = getCookies("favbgname");
	if (a == null || a == "")
	{
		setCookies("bgname", "img/1.jpg", 365);
		document.body.style.backgroundImage = "url(img/1.jpg)";
	}
	else
	{
		document.body.style.backgroundImage = "url('" + a + "')";
	}
	if (c == null || c == "")
	{
		setCookies("themecolor", "#FE4365", 365);
		changeThemeColor("#FE4365");
	}
	else
	{
		changeThemeColor(c);
	}
	if (d == null || c == "")
	{
		setCookies("foregroundcolor", "#000000", 365);
		setForegroundColor("#000000");
	}
	else
	{
		setForegroundColor(d);
	}
}
//小齿轮设置图片更改
function onMouseMovePicture()
{
	var a = document.getElementById("setting_button");
	a.src = "img/set1.png";
}

//小齿轮设置图片更改
function onMouseOutPicture()
{
	var a = document.getElementById("setting_button");
	a.src = "img/set0.png";
}

//设置区域显示
function showDiv()
{
	var a = document.getElementById("setting_panel");
	if (a.style.display == "none")
	{
		a.style.display = "";
	}
	else
	{
		a.style.display = "none";
	}
}

//设置区域隐藏
function hideDiv()
{
	var a = document.getElementById("setting_panel");
	a.style.display = "none";
}

//更改背景图片
function changeBackgroundPicture(a)
{
	document.body.style.backgroundImage = "url('" + a + "')";
	setCookies('bgname', a, 365);
}

//自定义背景
function favoritePicture()
{
	var a = document.getElementById("pb");
	changeBackgroundPicture(a.value);
	setCookies('favbgname', a.value, 365);
	setCookies('bgname', a.value, 365);
}

//更改主题颜色选择部分
function changeThemeColor(choice)
{
	setThemeColor(choice);
	setCookies("themecolor", choice, 365);
}

//更改主题颜色执行部分
function setThemeColor(co)
{
	var b = document.getElementsByClassName("setting_picture");
	var c = document.getElementsByClassName("importantwords");
	for (var i = 0; i < b.length; i++)
	{
		b[i].style.borderColor = co;
	}
	for (var i = 0; i < c.length; i++)
	{
		c[i].style.color = co;
	}
}

//更改前景色
function setForegroundColor(co)
{
	var a = document.getElementsByTagName("a");
	var b = document.getElementById("zhushi");
	for (var i = 0; i < a.length; i++)
	{
		a[i].style.color = co;
	}
	b.style.color = co;
	setCookies("foregroundcolor", co, 365);
}
//超链接特效ON
function onMouseMoveNet(a)
{
	a.style.color = getCookies("themecolor");
}
//超链接特效MOVE
function onMouseOutNet(a)
{
	a.style.color = getCookies("foregroundcolor");;
}
//设置图片特效ON
function onMouseMoveSetting(a)
{
	var b = document.getElementById(a);
	b.style.borderWidth = "2px";
	b.style.borderStyle = "solid";
}
//设置图片特效MOVE
function onMouseOutSetting(a)
{
	var b = document.getElementById(a);
	b.style.borderWidth = "0px";
}