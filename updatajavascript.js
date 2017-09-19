//根据Cookies设置打开网页时操作
function openHtml()
{
	var a = getCookies("bgname");
	var c = getCookies("themecolor")
	if (a == null || a == "")
	{
		document.body.style.backgroundImage = "url(img/1.jpg)";
	}
	else
	{
		document.body.style.backgroundImage = "url('" + a + "')";
	}
	if (c == null || c == "")
	{
		changeThemeColor("#FE4365");
	}
	else
	{
		changeThemeColor(c);
	}
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

//更改背景图片
function changeBackgroundPicture(a)
{
	document.body.style.backgroundImage = "url('" + a + "')";
	setCookies('bgname', a, 365);
}

//更改主题颜色执行部分
function setThemeColor(co)
{
	var a = document.getElementsByTagName("h1");
	var b = document.getElementsByTagName("h2");
	for(var i=0;i<a.length;i++)
	{
		a[i].style.color=co;
	}
	for(var i=0;i<b.length;i++)
	{
		b[i].style.color=co;
	}
}
//更改主题颜色选择部分
function changeThemeColor(choice)
{
	switch (choice)
	{
		case "#FE4365": setThemeColor("#FE4365"); break;
		case "#1E90FF": setThemeColor("#1E90FF"); break;
		case "#32CD32": setThemeColor("#32CD32"); break;
		default: setThemeColor(choice); break;
	}
}