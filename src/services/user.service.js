/* eslint-disable consistent-return */
import { userLogin, getUserDetails, changeUserPassword } from "./api/user.api";


const authLogin = async (body) => {
    try {
        const res = await userLogin(body);
        return res;
    } catch (e) {
        console.log(e, "e");
    }
};

const getUserMe = async (userId) => {
    try {
        const res = await getUserDetails(userId);
        return res;
    } catch (e) {
        console.log(e, "e");
    }
};

const changePassword = async (body) => {
    try {
        const res = await changeUserPassword(body);
        return res;
    } catch (e) {
        console.log(e, "e");
    }
};



export {
    authLogin,
    getUserMe,
    changePassword
};