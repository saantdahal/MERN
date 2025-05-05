import { studentModel } from "../model/model.js";

export const createStudent = async (req, res, next) => {
  try {
    let result = await studentModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllStudents = async (req, res, next) => {
  try {
    let result = await studentModel.find({});
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificStudent = async (req, res, next) => {
  try {
    let result = await studentModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update student
export const updateStudent = async (req, res, next) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let result = await studentModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
