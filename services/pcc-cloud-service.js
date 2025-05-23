const apiClient = require("../config/axios");

const createPCCAcount = async (reference, name, privateKey) => {
  try {
    const response = await apiClient.post("/api/admin/account/setup", {
      reference,
      name,
      privateKey,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deactivatePCCAccount = async (id, isActive, isArchived) => {
  try {
    const response = await apiClient.put(`/api/admin/account/status/${id}`, {
      isActive,
      isArchived,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createPCCAccountDevice = async (reference, name, accountId) => {
  try {
    const response = await apiClient.post("/api/admin/reader", {
      reference,
      name,
      accountId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updatePCCDeviceStatus = async (id, isActive, isArchived) => {
  try {
    const response = await apiClient.put(`/api/admin/reader/status/${id}`, {
      isActive,
      isArchived,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createPCCAccountAdmin = async (email, name, accountId) => {
  try {
    const response = await apiClient.post("/api/admin/user/admin", {
      email,
      name,
      accountId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPCCAcount,
  deactivatePCCAccount,
  createPCCAccountDevice,
  updatePCCDeviceStatus,
  createPCCAccountAdmin,
};
