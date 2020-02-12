class Planet {
	constructor (
		climate,
		diameter,
		gravity,
		name,
		orbital_period,
		population,
		terrain
	) {
		this.climate = climate;
		this.diameter = diameter;
		this.gravity = gravity;
		this.name = name;
		this.orbital_period = orbital_period;
		this.population = population;
		this.terrain = terrain;
	}

	formatList() {
		let html = "<ul>";
		html += "<li>" + this.climate + "</li>";
		html += "<li>" + this.diameter + "</li>";
		html += "<li>" + this.gravity + "</li>";
		html += "<li>" + this.name + "</li>";
		html += "<li>" + this.orbital_period + "</li>";
		html += "<li>" + this.population + "</li>";
		html += "<li>" + this.terrain + "</li>";
		html += "</ul>";
		return html;
	}

}