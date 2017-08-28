//小齿轮设置图片更改1
function onMouseMovePicture()
{
	var a = document.getElementById("setting_button");
	a.src = "img/set1.png";
}

//小齿轮设置图片更改2
function onMouseOutPicture()
{
	var a = document.getElementById("setting_button");
	a.src = "img/set0.png";
}

//鼠标指针移动到小齿轮上，图片更改。
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

//隐藏背景图片设置区域
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

//添加Cookies
function setCookies(name, value, time)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + time);
	document.cookie = name + "=" + escape(value) + ";" + ";path=/" + ";expires=" + exdate.toGMTString();
}

//获取Cookies
function getCookies(name)
{
	if (document.cookie.length > 0)
	{
		start = document.cookie.indexOf(name + "=")
		if (start != -1)
		{
			start = start + name.length + 1;
			end = document.cookie.indexOf(";", start);
			if (end == -1)
				end = document.cookie.length;
			return unescape(document.cookie.substring(start, end));
		}
	}
	return "";
}

//根据Cookies设置打开网页时操作
function openHtml()
{
	var a = getCookies("bgname");
	var b = document.getElementById("pb");
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
}

//测试用函数
function haha()
{
	alert(getCookies("bgname"));
	document.getElementById("hahaha").value = getCookies("bgname");
}

function onMouseMoveSetting(a)
{
	var b = document.getElementById(a);
	b.style.borderWidth = "2px";
	b.style.borderStyle = "solid";
	b.style.borderColor = "#FE4365"
}

function onMouseOutSetting(a)
{
	var b = document.getElementById(a);
	b.style.borderWidth = "0px";
}