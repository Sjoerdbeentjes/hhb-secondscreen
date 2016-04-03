var timeNow = $('.progress-bar').attr( 'aria-valuenow' );

function timeGame(){
	if (timeNow > 0) {
	  timeNow--;
	  $('.progress-bar').css('width', timeNow+'%');
	  console.log(timeNow);
	  setTimeout(timeGame, 100);
	}
}

timeGame()
