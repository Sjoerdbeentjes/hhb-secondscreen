var timeNow = $('.bar-1').attr( 'aria-valuenow' );

function timeGame(){
	if (timeNow > 0) {
	  timeNow--;
	  $('.bar-1').css('width', timeNow+'%');
	  console.log(timeNow);
	  setTimeout(timeGame, 1000);
	}
}

timeGame()
