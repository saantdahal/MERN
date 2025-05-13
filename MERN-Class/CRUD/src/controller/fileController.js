export const handleSingleFile = async (req, res) => {
  try {
    let link = `mongodb+srv://curd-practice:XDRaVDLWM0sJdIqp@cluster0.tobhffg.mongodb.net/${req.file.filename}`;
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      data: link,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "File not uploaded",
      error: error.message,
    });
  }
};

export const handleMultipleFile = async (req, res) => {
  try {
    let link = req.files.map((value, index) => {
      return `mongodb+srv://curd-practice:XDRaVDLWM0sJdIqp@cluster0.tobhffg.mongodb.net/${value.filename}`;
    });
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      data: link,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "File not uploaded",
      error: error.message,
    });
  }
};
