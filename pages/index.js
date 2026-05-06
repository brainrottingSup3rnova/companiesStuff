import { CompanyService } from '../service/CompanyService.js';
import { CompanyFirebaseRepository } from '../repository/CompanyFirebaseRepository.js';

const companyService = new CompanyService(new CompanyFirebaseRepository());

const list = document.getElementById(companiesList);
const companyName = document.getElementById(listOfCompanies.html);
const companyAddress = document.getElementById();
const companyDescription = document.getElementById(description);
const btnSave = document.getElementById(btnSave);

const inputName = document.getElementById(companyName);
const inputAddress = document.getElementById(companyAddress);
const inputCity = document.getElementById(companyCity);
const inputActivity = document.getElementById(companyActivity);
const inputDescription = document.getElementById(companyDescription);

function renderCompanyDetail(company) {
    companyName = company.Name || 'No name found';
    companyAddress = company.Address || 'No address found';
    companyDescription = company.Description || 'No description found'
}

async function init() {
    try {
        list.innerHTML = '';
        const companies = await companyService.GetAll();
        companies.forEach((company, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'list-group-item list-group-item-action text-start py-2 px-2';
            btn.innerHTML = `
                    <div class="fw-medium small">${company.Name || 'No name found'}</div>
                    <div class="article-date mt-1">${company.Activity || 'No activity found'}</div>
                `;
            btn.addEventListener('click', () => {
                list.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
                renderCompanyDetail(company);
            });
            list.appendChild(btn);
            if (index === 0) btn.click();
        });
    } catch (e) {
        throw new Error("smth went wrong ig");
    }
}

btnSave.addEventListener('click', async () => {
    const newCompany = {
    Title: inputName,
    Address: inputAddress,
    City: inputCity,
    Activity: inputActivity,
    Description: inputDescription
  };
  await companyService.Save(newCompany);
});

init();