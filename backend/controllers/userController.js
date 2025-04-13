import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc Register a new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc Get user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc Get all users
// @route GET /api/users
// @access private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc Get user by Id
// @route GET /api/users:id
// @access private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get all users");
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc Update user
// @route PUT /api/users/:id
// @access private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUserById,
  getUsers,
  deleteUser,
  updateUser,
};
