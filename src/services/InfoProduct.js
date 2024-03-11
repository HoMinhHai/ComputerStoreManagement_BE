import db from '../models/index'
import Sequelize from 'sequelize'

let getAll = async () => {
    let data = await db.Product.findAll({ raw: true });
    let object = data.map(item => ({
        id: item.id,
        name: item.Name,
        image: item.Image
    }));
    return { object };

}
let get10NewestProduct = async () => {
    let data = await db.Product.findAll({
        order: [['id', 'DESC']],
        limit: 10,
        raw: true
    });
    let object = data.map(item => ({
        id: item.id,
        name: item.Name,
        image: item.Image,
        descripton: item.Description,
        price: item.Price,
    }));
    return { object };

}
let get10BestSelling = async () => {
    try {
        const topProducts = await db.BillDetail.findAll({
            attributes: [
                'ProductId',
                [Sequelize.fn('SUM', Sequelize.col('Quantity')), 'totalQuantity']
            ],
            group: ['ProductId'],
            order: [[Sequelize.literal('totalQuantity'), 'DESC']],
            limit: 10,
            raw: true
        });

        const productIds = topProducts.map(product => product.ProductId);

        const topProductDetails = await db.Product.findAll({
            where: { id: productIds },
            raw: true
        });

        const formattedTopProducts = topProductDetails.map(product => ({
            id: product.id,
            name: product.Name,
            image: product.Image,
            description: product.Description,
            price: product.Price
        }));

        return { object: formattedTopProducts };
    } catch (error) {
        console.error(error);
        return { object: [] };
    }

}
let getProductsAreSelling = async () => {
    try {
        const latestPromotions = await db.Promotion.findAll({
            order: [['StartDate', 'DESC']],
            limit: 10,
        });
        const productIds = latestPromotions.map(promotion => promotion.Product);
        const latestProducts = await db.Product.findAll({
            where: { id: productIds },
        });

        const formattedTopProducts = latestProducts.map(product => ({
            id: product.id,
            name: product.Name,
            image: product.Image,
            description: product.Description,
            price: product.Price
        }));

        return { object: formattedTopProducts };
    } catch (error) {
        console.error(error);
        return { object: [] };
    }
}
module.exports = { getAll, get10NewestProduct, get10BestSelling, getProductsAreSelling }