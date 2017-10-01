//updata专有JS
//版本：20171001.1
//根据Cookies设置打开网页时操作
function openHtml()
{
	var a = getCookies("bgname");
	var c = getCookies("themecolor");
	var d = getCookies("foregroundcolor");
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
	if (d == null || c == "")
	{
		setForegroundColor("#000000");
	}
	else
	{
		setForegroundColor(d);
	}
}

//更改主题颜色选择部分
function changeThemeColor(choice)
{
	setThemeColor(choice);
}

//更改主题颜色执行部分
function setThemeColor(co)
{
	var a = document.getElementsByTagName("h1");
	var b = document.getElementsByTagName("h2");
	for (var i = 0; i < a.length; i++)
	{
		a[i].style.color = co;
	}
	for (var i = 0; i < b.length; i++)
	{
		b[i].style.color = co;
	}
}

//更改前景色
function setForegroundColor(co)
{
	var a = document.getElementById("mainpage");
	var c = document.getElementsByClassName("zhushi");
	a.style.color = co;
	for (var i = 0; i < c.length; i++)
	{
		c[i].style.borderColor = co;
	}
}
