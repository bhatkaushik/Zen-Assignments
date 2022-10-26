//Code 1: https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title
        this.studio = studio
        this.rating = rating
    }

}

let getPG = (movies) => movies.filter(movie => movie.rating === 'PG').map((movie) => movie.title);

var movie = new Movie("Casino Royale", "Eon Productions", "PG13")
var movie1 = new Movie("Interstellar", "Syncopy", "PG")
var movie2 = new Movie("3 idiots", "vinod chopra films", "PG")

console.log(getPG([movie, movie1, movie2]))

// Output:
// ['Casino Royale' ,'Interstellar', '3 idiots']


//Code 2: https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    radius: number
    color: String

    constructor(...args: any) {
        if (args.length == 1) {
            this.radius = args[0]
        } else if (args.length == 2) {
            this.radius = args[0]
            this.color = args[1]
        }
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius): void {
        this.radius = radius;
    }

    getColor(): String {
        return this.color;
    }

    setColor(color): void {
        this.color = color;
    }

    toString(): String {
        return `${Circle.name}[radius=${this.radius}, color=${this.color}]`
    }

    getArea(): number {
        return 3.14 * (this.radius * this.radius)
    }

    getCircumference(): number {
        return 2 * 3.14 * this.radius;
    }
}

//Code 3: Write a “person” class to hold all the details.

class Person {
    constructor(name, age, dob) {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }
}

var person = new Person("Kaushik",23, "28/08/1999")

//Code 4: write a class to calculate uber price.

class UberBill {
    constructor(customerName, distanceCovered, destination) {
        this.customerName = customerName;
        this.distanceCovered = distanceCovered;
        this.destination = destination;
    }

    initBilling() {
        console.log(`Thank you for using Uber, ${this.customerName}!\nYou have reached your destination ${this.destination}`)
        console.log(`Your total payable amount is ${this.calculateAmount()} Rs.`)
    }

    calculateAmount() {
        let amount = this.distanceCovered * 12 //12 Rs. per km
        return amount;
    }
}

var bill = new UberBill("Kaushik", 18, "Vijaynagar")
bill.initBilling()

//Output:
// Thank you for using Uber, Kaushik!
// You have reached your destination Vijaynagar
// Your total payable amount is 216 Rs.
