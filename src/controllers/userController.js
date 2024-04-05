import database from '../models/index'
import UserService from '../services/UserService'
let createNewUser = async (req, res) => {
    let check = await UserService.createNewUser(req.body)
    if (check)
        return res.status(200).json({
            message: 'Create Sucess',
            errCode: 0,
        })
    return res.status(400).json({
        message: 'Email already exists',
        errCode: 1,
    })

}
let editUser = async (req, res) => {
    if (req.body.id) {
        let check = await UserService.updateUser(req.body)
        if (check)
            return res.status(200).json({
                message: 'Updated successfully',
                errCode: 0
            })
        else
            return res.status(400).json({
                message: 'Id does not exitst'
            })
    }
    else
        return res.status(404).json({
            message: 'Missing id Parameter',
            errCode: 1
        })
}
let deleteUser = async (req, res) => {
    if (req.body.id) {
        let check = await UserService.deleteUser(req.body.id)
        if (check)
            return res.status(200).json({
                message: 'Deleted successfully',
                errCode: 0
            })
        else
            return res.status(400).json({
                message: 'Id does not exist',
                errCode: 2
            })
    }
    else
        return res.status(404).json({
            message: 'Missing id Parameter',
            errCode: 1
        })
}
module.exports = {
    editUser,
    deleteUser,
    createNewUser
}