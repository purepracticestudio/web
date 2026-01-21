
$(function(){

	$("#BTN").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#NAV").show();
		$("#NAV li").on("click", CLOSECLOSE );
	}
	
	function CLOSECLOSE(){
		$("#NAV").hide();
		$("#NAV li").off("click");
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#NAV li").removeAttr("style");
		}
	}
	
});

