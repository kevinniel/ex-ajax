console.log("test");


$(document).ready(function(){
	// $.ajax({
	// 	method: "GET",
	// 	url: "http://swapi.co/api/planets/1"
	// })
	// .done(function( planet ) {
	// 	p = new Planet(
	// 		planet.climate,
	// 		planet.diameter,
	// 		planet.gravity,
	// 		planet.name,
	// 		planet.orbital_period,
	// 		planet.population,
	// 		planet.terrain
	// 	);

	// 	$('.test').append(p.formatList());
	// });

	$.ajax({
		method: "GET",
		url: "http://swapi.co/api/vehicles/4"
	})
	.done(function( vehicles ) {
		console.log(vehicles)
		// p = new Planet(
		// 	planet.climate,
		// 	planet.diameter,
		// 	planet.gravity,
		// 	planet.name,
		// 	planet.orbital_period,
		// 	planet.population,
		// 	planet.terrain
		// );

		// $('.test').append(p.formatList());
	});
});