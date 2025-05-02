import Student from "../model/model.js";

export const createStudent = async (req, res, next) => {
  try {
    let result = await Student.create(req.body);
    res.status(201).json({
      status: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
