export class Customer {
    public name: string;
    public address: string;
    public email: string;
    public mobile: string;

    constructor(name: string, address: string, email: string, mobile: string) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.mobile = mobile;
    }

    // Optional: A method to display customer details
    public displayCustomerDetails(): void {
        console.log(`Customer Details:
        Name: ${this.name}
        Address: ${this.address}
        Email: ${this.email}
        Mobile: ${this.mobile}`);
    }
}
