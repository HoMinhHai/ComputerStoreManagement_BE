import database from '../models/index'
import UserService from '../services/UserService'
import Category from '../services/InfoCategory'
import InfoProduct from '../services/InfoProduct'
let homePage = async (req, res) => {
    let data = await database.Account.findAll({ raw: true })
    console.log(data)
    return res.render('homepage.ejs', { data: data })
}
let CRUD = async (req, res) => {
    return res.render('accountManagement.ejs')
}
let postCRUD = (req, res) => {
    UserService.process(req.body)
    return res.send("Chào buổi tối")
}
let deleteCRUD = (req, res) => {
    let id = req.query.id
}
let checkLogin = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    if (!email || !password) {
        return res.status(400).json({
            error: "Email or Password is empty"
        })
    }

    let account = await UserService.process_Login(email, password)

    if (account == 0) {
        return res.status(404).json({
            error: "Email doesn't exist"
        })
    }

    if (account == 1) {
        return res.status(401).json({
            error: "Password is incorrect"
        })
    }

    else
        return res.status(200).json({
            message: "Logged in successfully",
            user: account
        })
}
let getAllCategories = async (req, res) => {
    let data = await Category.getAll()
    if (data) {
        return res.status(200).json({
            message: 'success',
            list: data
        })
    }
    return res.status(404).json({
        message: 'list is empty'
    })
}

let getUser = async (req, res) => {
    let id = req.query.id;
    if (!id)
        return res.status(404).json({
            message: 'id is null',
            errCode: 1,
        })
    let user = await UserService.getUser(id);
    if (user)
        return res.status(200).json({
            message: 'Success',
            errCode: 0,
            list: user
        })
    else
        return res.status(400).json({
            message: 'List is empty',
            errCode: 2,
        })
}
let getAllProducts = async (req, res) => {
    let data = await InfoProduct.getAll()
    if (data) {
        return res.status(200).json({
            message: 'success',
            list: data
        })
    }
    return res.status(404).json({
        message: 'list is empty'
    })
}
let get10NewestProduct = async (req, res) => {
    let data = await InfoProduct.get10NewestProduct();
    if (data) {
        return res.status(200).json({
            message: 'success',
            list: data
        })
    };
    return res.status(404).json({
        message: 'list is empty'
    });
}
let get10BestSelling = async (req, res) => {
    let data = await InfoProduct.get10BestSelling();
    if (data) {
        return res.status(200).json({
            message: 'success',
            list: data
        })
    };
    return res.status(404).json({
        message: 'list is empty'
    });
}
let get10NewestPromotionProduct = async (req, res) => {
    let data = await InfoProduct.getProductsAreSelling();
    if (data) {
        return res.status(200).json({
            message: 'success',
            list: data
        })
    };
    return res.status(404).json({
        message: 'list is empty'
    });
}
module.exports = {
    homePage,
    CRUD,
    postCRUD,
    checkLogin,
    getAllCategories,
    getAllProducts,
    get10NewestProduct,
    get10BestSelling,
    get10NewestPromotionProduct,
    getUser
}