export class User {
    public name: string;
    public userId: string;
    public role: string;

    constructor(name: string, userId: string, role: string) {
        this.name = name;
        this.userId = userId;
        this.role = role;
    }
}