export class Verify {
    user: { name: string; password: string; email: string };
    constructor(user: { name: string; password: string; email: string }) {
        this.user = user;
    }

    verify() {
        if (this.user.name.length < 4) {
            return false;
        }
        if (this.user.password.length < 8) {
            return false;
        }
        if (this.user.email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) === null) {
            return false;
        }
        return true;
    }
    is_empty() {
        for (let key in this.user) {
            if (this.user[key] === "") {
                return false;
            }
        }
        return true;
    }
}
