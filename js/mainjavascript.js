//共有JS
//版本：20170920.1
//添加Cookies
function setCookies(name, value, time)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + time);
	document.cookie = name + "=" + escape(value) + ";" + ";path=/localserver/" + ";expires=" + exdate.toGMTString();
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