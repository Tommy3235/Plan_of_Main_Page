// JS文件版本：15
//-------------------------------
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
//更改主题颜色选择部分
function changeThemeColor(choice)
{
	switch (choice)
	{
		case "#FE4365": setThemeColor("#FE4365"); setCookies("themecolor", "#FE4365", 365); break;
		case "#1E90FF": setThemeColor("#1E90FF"); setCookies("themecolor", "#1E90FF", 365); break;
		case "#32CD32": setThemeColor("#32CD32"); setCookies("themecolor", "#32CD32", 365); break;
		default: setThemeColor(choice); setCookies("themecolor", choice, 365); break;
	}
}
//超链接特效ON
function onMouseMoveNet(a)
{
	a.style.color = getCookies("themecolor");
}
//超链接特效MOVE
function onMouseOutNet(a)
{
	a.style.color = "#000000";
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
	var c = getCookies("themecolor")
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
}

//超链接特效
function onMouseMoveNet(a)
{
	a.style.color = getCookies("themecolor");
}
//超链接特效
function onMouseOutNet(a)
{
	a.style.color = "#000000";
}
//======================================
//测试用函数
function getThemeColor()
{
	var a = document.getElementsById("testha");
	return a.value;
}
function haha()
{
	alert(getCookies("bgname"));
}

function onMouseMoveSetting(a)
{
	var b = document.getElementById(a);
	b.style.borderWidth = "2px";
	b.style.borderStyle = "solid";
}

function onMouseOutSetting(a)
{
	var b = document.getElementById(a);
	b.style.borderWidth = "0px";
}