// 1
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    createUser(name, email) {
        return new User(name, email)
    }
}

const user = new User("sds", "asdfs")
console.log(user1.createUser("Haha", "aejfae"))


// 2
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    getId() {
        console.log('#' + this.id)
    }

    isAdmin() {
        if (this.name === "Admin") {
            console.log("true")
        } else {
            console.log("false")
        }
    }
}


// 3
const user1 = new User(100, "Admin")
user1.getId()
user1.isAdmin()
const user2 = new User(215, "SimpleUser")
user2.getId()
user2.isAdmin()


class AreaOfCircle {
    constructor(radius) {
        this.radius = radius
    }

    get radius() {
        return Math.PI * this._radius * this._radius
    }

    set radius(radius) {
        this._radius = radius
    }

}

const area = new AreaOfCircle(2)
console.log(area.radius)
area.radius = 10
console.log(area.radius)


// 4
class Course {
    constructor(grade) {
        this.grade = grade
    }

    getCertificate() {
        if (this.getGrade()) {
            return "Выдать сертификат"
        } else {
            return "Курс не пройден"
        }
    }

    getGrade() {
        if (this.grade > 3) {
            return true
        } else {
            return false
        }
    }
}

const course = new Course(5)
console.log(course.getCertificate())

const course1 = new Course(2)
console.log(course1.getCertificate())