/* eslint-disable consistent-return */
import { deleteHutAdmin, createHutAdmin, updateHutAdmin } from './api/admin.api';

const deleteAdminUser = async (params) => {
  try {
    const res = await deleteHutAdmin(params);
    return res;
  } catch (e) {
    return e;
  }
};

const createAdminUser = async (params) => {
  try {
    const res = await createHutAdmin(params);
    return res;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data.message);
      return err.response.data;
    } else {
      console.log(err.message);
      return err.message
    }
  }
};

const updateAdminUser = async (body, id) => {
  try {
    const res = await updateHutAdmin(body, id);
    return res;
  } catch (e) {
    return e;
  }
};

export { deleteAdminUser, createAdminUser, updateAdminUser };
