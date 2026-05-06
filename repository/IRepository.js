export class IRepository {

    async GetAll() {
        throw new Error(`${this.constructor.name} needs to implement getAll`);
    }

    async GetById(id) {
        throw new Error(`${this.constructor.name} needs to implement getById`);
    }

    async Save(entity) {
        throw new Error(`${this.constructor.name} needs to implement save`);
    }

    async Delete(id) {
        throw new Error(`${this.constructor.name} needs to implement delete`);
    }
    
    async Update(id,article) {
        throw new Error(`${this.constructor.name} needs to implement update`);
    }
}