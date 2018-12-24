$(document).ready(function(){
  // $('.hotel-view').hide().fadeIn(1000);
  // $('.flight-view').hide().slideDown(2000);
  // $('.car-view').hide().slideDown(2000);
  // $('.tours-view').hide().slideDown(2000);
  datePicker();
  iconHover();
  cycleBackgrounds();
  //pageTransition();
});


function datePicker() {
  $('.flight-view__search__date').datepicker({
    format: 'dd/mm/yyyy',
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  });
}

function passengerNum(){
  $('.flight-view__search__passenger').selectmenu();
}



function iconHover(){
  var searchInputs = $('.flight-view__search__passenger,.flight-view__search__date,.flight-view__search__destination');
  $(searchInputs).hover(function(){
    $('.search__icon--hover').toggleClass('search__icon--hover--green');
  });
}

function cycleBackgrounds() {
    var index = 0;

    $imageEls = $('.tours-view .tours-view__header'); // Get the images to be cycled.

    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;

        // Show the next
        $imageEls.eq(index).addClass('show');

        // Hide the previous
        $imageEls.eq(index - 1).removeClass('show');
    }, 2000);
}


function pageTransition() {
	$('.side-nav__link').on('click', function(event) {
		event.preventDefault();

		var href = $(this).attr('href');

		window.history.pushState(null, null, href);

    // $('.side-nav__link').removeClass('side-nav__link--active')
    // $(this).addClass('side-nav__item--active')

		$.ajax({
			url: href,
			success: function(data) {
				$('main').fadeOut(250, function() {
					var newPage = $(data).filter('main').html();

					$('main').html(newPage);
					$('main').fadeIn(250);

				});
			}
		});
	});
}
