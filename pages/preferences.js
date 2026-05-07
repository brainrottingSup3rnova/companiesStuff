import { CompanyService } from '../service/CompanyService.js';
import { CompanyFirebaseRepository } from '../repository/CompanyFirebaseRepository.js';

const companyService = new CompanyService(new CompanyFirebaseRepository());

const btnSave = document.getElementById('btnSave');

const inputName = document.getElementById('companyName');
const inputAddress = document.getElementById('companyAddress');
const inputCity = document.getElementById('companyCity');
const inputActivity = document.getElementById('companyActivity');
const inputDescription = document.getElementById('companyDescription');

btnSave.addEventListener('click', async () => {
    const newCompany = {
        Name: inputName.value,
        Address: inputAddress.value,
        City: inputCity.value,
        Activity: inputActivity.value,
        Description: inputDescription.value
    };
    await companyService.Save(newCompany);
});
