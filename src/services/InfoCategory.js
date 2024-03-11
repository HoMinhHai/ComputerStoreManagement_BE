import db from '../models/index'
let getAll = async () => {
    let data = await db.Category.findAll({ raw: true });

    let names = data.map(item => item.Name);

    return { names };
}
module.exports = { getAll: getAll }