class User {

    constructor(id, username, email, country) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.country = country;
    }

    getLanguage() {
        if(this.country === "BR") {
            return "PR";
        }
        return "ES";
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }
}

module.exports = User;