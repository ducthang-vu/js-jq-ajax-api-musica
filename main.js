$(document).ready(function() {

	var source = $('#entry-template').html();
	var template = Handlebars.compile(source);

	function printCard(container, object) {
		var context = {
			poster: object.poster,
			title: object.title,
			author: object.author,
			year: object.year
		}
		
		container.append(template(context));
	}


	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET", 

		success: data => {
			// print all on page load
			data.response.forEach(item => printCard($('.cds-container'), item))

			// print when select input is changed
			$('#genre-select').change(function() {
				$('.cds-container').html('');

				var userChoise = $(this).children(':selected').val();
				data.response.forEach(item => {
					if (userChoise === 'all' || item.genre === userChoise) printCard($('.cds-container'), item);
				});
			})
		},

		error: () => console.log('Error')
	});
});
