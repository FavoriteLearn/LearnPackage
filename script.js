function navclick(x)
{
	window.location.assign(x);
}
$(function()
{
	$( '#lesshow' ).click(function()
	{
		$( '#lesdes' ).toggle('slow');
	});
	$( '#lesshow2' ).click(function()
	{
		$( '#lesdes2' ).toggle('slow');
	});
	$( '#lesshow3' ).click(function()
	{
		$( '#lesdes3' ).toggle('slow');
	});
	$( '#lesshow4' ).click(function()
	{
		$( '#lesdes4' ).toggle('slow');
	});
	$( '#lesshow5' ).click(function()
	{
		$( '#lesdes5' ).toggle('slow');
	});
	$( '#lesshow6' ).click(function()
	{
		$( '#lesdes6' ).toggle('slow');
	});
	$( '#lesshow7' ).click(function()
	{
		$( '#lesdes7' ).toggle('slow');
	});
});
$(function()
{
	$( '#hidecfoot' ).click(function() 
	{
		$( '#cfoot' ).slideToggle();
	});
});
$(function()
{
	$( '#cans' ).click(function() 
	{
		$( '#cfoot' ).slideToggle();
	});
});
$(function()
{
	$( '#author1' ).click(function()
	{
		$( '#auth_descrip1' ).slideToggle()
	});
	$( '#author2' ).click(function()
	{
		$( '#auth_descrip2' ).slideToggle()
	});
	$( '#author3' ).click(function()
	{
		$( '#auth_descrip3' ).slideToggle()
	});
});
$(function()
{
	$( '#hidecfoot' ).trigger('click');
	$( '#author1' ).trigger('click');
	$( '#author2' ).trigger('click');
	$( '#author3' ).trigger('click');
});
$(function()
{
	$( '#cl' ).click(function()
	{
		$( '#idea' ).hide('slow');
	});
});
function hit()
{
	$( '#cl' ).trigger('click');
};
$(document).ready(function()
{
	setTimeout(hit,20000); 
});
function searchTags() { 
	let input = document.getElementById('searchbar').value;
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('searched'); 
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerText.toLowerCase().includes("<"+input+">")) { 
			x[i].style.display="none"; 
		} 
		else { 
			x[i].style.display="table-row";				 
		}
	}
}