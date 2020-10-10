function navclick(x)
{
	window.location.assign(x);
}
$(function()
{
	$( '#hidecfoot' ).click(function() 
	{
		$( '#cfoot' ).slideToggle();
	});
});
$(function()
{
	$( '#hidecfoot' ).trigger('click');
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