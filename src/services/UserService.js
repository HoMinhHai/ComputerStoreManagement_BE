import db from '../models/index'
import bcrypt from 'bcryptjs'
var salt = bcrypt.genSaltSync(10);
let process = async (data) => {

    await db.Account.create({
        Username: data.email,
        Password: await hashPassword(data.password),
        State: data.state === "on" ? 1 : 0
    })
}
let updateUser = async (data) => {
    try {
        let user = await db.User.findOne({ where: { id: data.id } })
        if (user) {
            db.User.update({
                FirstName: data.FirstName,
                LastName: data.LastName,
                Address: data.Address
            }, { where: { id: data.id } })
            user.FirstName = data.FirstName
            user.LastName = data.LastName
            user.Address = data.Address
            await user.save()
            return 1;
        }


        else
            return 0;
    }
    catch (e) {
        console.log('An error has occured')
    }

}
let deleteUser = async (inputId) => {
    try {
        let user = await db.User.findOne({ where: { id: inputId } })
        if (user) {
            await db.User.destroy({ where: { id: inputId } })
            return 1;
        }
        else
            return 0;
    }
    catch (e) {
        console.log('An error has occurred ')
    }
}
let getUser = async (id) => {
    try {
        let users = [];
        if (id == 'ALL') {
            users = await db.User.findAll()
        }
        else
            users = await db.User.findOne({
                where: { id: id }
            })
        return users;
    }
    catch (e) {

    }
}
let process_Login = async (email, pass) => {
    let user = await db.Account.findOne({
        where: { Username: email }
    })
    if (!user)
        return 0;
    let checkpassword = bcrypt.compareSync(pass, user.Password);
    if (checkpassword) {
        let { Username: username, Password: password } = user;
        return { username, password };
    }

    return 1;
}
let checkEmailIsExist = async (inputEmail) => {
    try {
        let user = await db.User.findOne({ where: { Email: inputEmail } })
        if (user)
            return true
        return false;
    }
    catch (e) {

    }
}
let createNewUser = async (data) => {
    try {
        if (await checkEmailIsExist(data.Email) == true)
            return 0;
        else {

            await db.User.create({
                Email: data.Email,
                Password: await hashPassword(data.Password),
                FirstName: data.FirstName,
                LastName: data.LastName,
                Address: data.Address,
                PhoneNumber: data.PhoneNumber,
                Gender: data.Gender,
                RoleId: data.RoleId,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            return 1;
        }

    }
    catch (e) {
        console.log('An error has occurred');
    }
}
let hashPassword = async (password) => {
    try {
        var hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw new Error(error);
    }
}
let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: userId }, raw: true })
            if (user) {
                user.email = "new",
                    user.password = "new",
                    await user.save()
                resolve(user)
            }

            else
                resolve({})
        }
        catch (e) {
            reject(e)
        }
    })
}

module.exports = { process: process, hash: hashPassword, process_Login: process_Login, getUser, createNewUser, checkEmailIsExist, deleteUser, updateUser }