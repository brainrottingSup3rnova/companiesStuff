import { IRepository } from './IRepository.js';
import { Company } from '../domain/Company.js';

const DB_BASE_URL = 'https://companytracker-1b5eb-default-rtdb.europe-west1.firebasedatabase.app';

export class CompanyFirebaseRepository extends IRepository {
  async GetAll() {
    const res = await fetch(`${DB_BASE_URL}/companies.json`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const data = await res.json();
    if (!data) return [];

    return Object.keys(data).map(id => {
      const item = data[id];
      return new Company({ Id: id, Name: item.Name ?? '', Address: item.Address ?? '', City: item.City ?? '', Activity: item.Activity ?? '', Description: item.Description ?? '' });
    });
  }

  async GetById(id) {
    const res = await fetch(`${DB_BASE_URL}/companies/${id}.json`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const data = await res.json();
    if (!data) throw new Error(`Company with id "${id}" not found`);
    return new Company({ Id: id, Name: item.Name ?? '', Address: item.Address ?? '', City: item.City ?? '', Activity: item.Activity ?? '', Description: item.Description ?? '' });
  }

  async Save(company) {
    await fetch(`${DB_BASE_URL}/companies/${company.Id}.json`, {
      method: 'PUT',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(company.toJSON())
    });
  }
}