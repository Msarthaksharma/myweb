
function show()
{
	sidebar=document.getElementsByClassName("bar");
	//console.log(sidebar[0]);
	if(sidebar[0].style.display=="none") 
	{
		sidebar[0].style.display = "block";
	}
	else
	{
		sidebar[0].style.display="none";
	}
}
