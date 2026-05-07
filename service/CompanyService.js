import { Company } from '../domain/Company.js'

export class CompanyService {
    constructor(repository) {
        this._repository = repository;
    }

    async GetAll () {
        const companies = await this._repository.GetAll();
        return companies;
    }

    async GetById(id) {
        if (!id.trim()) throw new Error('Id invalid');
        return this._repository.GetById(id);
    }

    async Save(company) {
        if (!company.Name.trim()) throw new Error('Invalid name, just like you!');
        if (!company.Address.trim()) throw new Error('Invalid address, just like you!');
        if (!company.City.trim()) throw new Error('Invalid city, just like you!');
        if (!company.Activity.trim()) throw new Error('Invalid activity, just like you!');
        if (!company.Description.trim()) throw new Error('Invalid description, just like you!');
        
        const newCompany = new Company({
            Id: Company.generateId(),
            Name: company.Name,
            Address: company.Address,
            City: company.City,
            Activity: company.Activity,
            Description: company.Description
        });
        return this._repository.Save(newCompany);
    }
}