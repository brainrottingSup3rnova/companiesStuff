import { CompanyService } from '../service/CompanyService.js';
import { CompanyFirebaseRepository } from '../repository/CompanyFirebaseRepository.js';

const companyService = new CompanyService(new CompanyFirebaseRepository());

const list = document.getElementById('companiesList');
const companyName = document.getElementById('companyName');
const companyAddress = document.getElementById('companyAddress');
const companyDescription = document.getElementById('companyDescription');

function renderCompanyDetail(company) {
    companyName.value = company.Name || 'No name found';
    companyAddress.value = company.Address || 'No address found';
    companyDescription.textContent = company.Description || 'No description found';
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

init();