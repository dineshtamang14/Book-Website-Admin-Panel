import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import {
  getCustomerStart,
  getCustomerSuccess,
  getCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
  updateCustomerStart,
  updateCustomerSuccess,
  updateCustomerFailure,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailure,
} from "./userListRedux";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};


// for customers

export const getCustomers = async (dispatch) => {
  dispatch(getCustomerStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getCustomerSuccess(res.data));
  } catch (err) {
    dispatch(getCustomerFailure());
  }
};

export const deleteCustomer = async (id, dispatch) => {
  dispatch(deleteCustomerStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteCustomerSuccess(id));
  } catch (err) {
    dispatch(deleteCustomerFailure());
  }
};

export const updateCustomer = async (id, customer, dispatch) => {
  dispatch(updateCustomerStart());
  try {
    // update
    dispatch(updateCustomerSuccess({ id, customer }));
  } catch (err) {
    dispatch(updateCustomerFailure());
  }
};
export const addCustomer = async (customer, dispatch) => {
  dispatch(addCustomerStart());
  try {
    const res = await userRequest.post(`/auth/register`, customer);
    dispatch(addCustomerSuccess(res.data));
  } catch (err) {
    dispatch(addCustomerFailure());
  }
};