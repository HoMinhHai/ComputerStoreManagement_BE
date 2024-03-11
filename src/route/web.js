import express from "express";
import homeController from "../controllers/homeController";
import userController from '../controllers/userController'
let router = express.Router();
let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send('Hello World')
    })
    router.get("/homepage", homeController.homePage)
    router.get("/CRUD", homeController.CRUD)
    router.get("/api/getInfoUser", homeController.getUser)
    router.post('/postCRUD', homeController.postCRUD)
    router.post('/login', homeController.checkLogin)
    router.get('/getAllCategories', homeController.getAllCategories)
    router.get('/getAllProducts', homeController.getAllProducts)
    router.get('/get10NewestProduct', homeController.get10NewestProduct)
    router.get('/get10BestSellingProduct', homeController.get10BestSelling)
    router.get('/get10NewestPromotionProduct', homeController.get10NewestPromotionProduct)
    router.post('/api/create-new-user', userController.createNewUser)
    router.put('/api/edit-user', userController.editUser)
    router.delete('/api/delete-user', userController.deleteUser)
    return app.use("/", router)
}
module.exports = initWebRoutes