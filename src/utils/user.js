import Api from '../config/api';

export const getUserProfile = async () => {
  try {
    const { data } = await Api.get(
      `me?fields=id,name,email,phoneNumber,organisationUnits[id,name,code]`
    );
    return data;
  } catch (error) {
    throw new Error({ code: 500, message: error.message });
  }
};
