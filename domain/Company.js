export class Company {
    constructor({ Id = null, Name = '', Address = '', City = '', Activity= '', Description= ''} = {}) {
        this.Id = Id;
        this.Name = Name;
        this.Address = Address;
        this.City = City;
        this.Activity = Activity;
        this.Description = Description;
    }

    toJSON() {
        return {
            Id: this.Id,
            Name: this.Name,
            Address: this.Address,
            City: this.City,
            Activity: this.Activity,
            Description: this.Description
        };
    }

    static generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (Math.random() * 16) | 0;
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
    }
}