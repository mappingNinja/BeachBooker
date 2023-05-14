import api from "./api";

const API_PREFIX = "api";

const userLogin = async (body) => {
    const response = await api.post(`${API_PREFIX}/login`, body);
    return response;
};

const getUserDetails = async (userId) => {
    const response = await api.get(`${API_PREFIX}/get-profile-detail/${userId}`);
    return response;
};

const changeUserPassword = async (body) => {
    const response = await api.post(`${API_PREFIX}/change-password`, body);
    return response;
};

const getBeachSearchData = async (text) => {
    console.log('the text is : ', text)
    let params = new URLSearchParams();
    params.append("include", "city");
    params.append("include", "imageFiles");    
    const response = await api.get(`${API_PREFIX}/huts/search/${text}`, { params });
    return response;
};

export {
    getBeachSearchData,
    userLogin,
    getUserDetails,
    changeUserPassword
};