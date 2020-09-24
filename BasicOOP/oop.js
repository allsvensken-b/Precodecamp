class UserTemplate {

    constructor(name, password, age) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
        this.createdDay = Date.now() //The first problem.
    }

    login() {
        this.connected = true
        console.log('Your login status : ', this.connected)
    }

    //This is the second problem.
    logout() {
        this.connected = false
        console.log('Your login status : ', this.connected)
    }

    //This is the last problem.
    checkStatus() {
        console.log('Your login status : ', this.connected)
    }



    
}