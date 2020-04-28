$(document).ready(function() {

	function printCard(container, object, template) {
		var source = template.html();
		var template = Handlebars.compile(source);
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
			data.response.forEach(item =>
				printCard($('.cds-container'), item, $('#entry-template')))
		},

		error: () => console.log('Error')
	});
	
	
	
});
