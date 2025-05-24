class Dvd {
    constructor(title, director, year, genre) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
    }
    getTitle() {
        return this.title;
    }
    getDirector() {
        return this.director;
    }
    getYear() {
        return this.year;
    }
    getGenre() {
        return this.genre;
    }
    getInfo() {
        return `${this.title} (${this.year}) - ${this.director} - ${this.genre}`;
    }
}
// Array of DVD objects
const dvd1 = new Dvd("Inception", "Christopher Nolan", 2010, "Sci-Fi");
const dvd2 = new Dvd("The Godfather", "Francis Ford Coppola", 1972, "Crime");
const dvd3 = new Dvd("The Dark Knight", "Christopher Nolan", 2008, "Action");
const dvd4 = new Dvd("Pulp Fiction", "Quentin Tarantino", 1994, "Crime");

// Creating an array of DVD objects
// const dvds = new Array(4);

// one way to create an array of DVD objects
const dvds = [dvd1, dvd2, dvd3, dvd4];
// adding to dvd array
// dvds[0] = dvd1;
// dvds[1] = dvd2;
// dvds[2] = dvd3;
// dvds[3] = dvd4;


console.log(dvds[1].getInfo());

