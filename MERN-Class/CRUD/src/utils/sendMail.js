// App password: goiu iccb sjtm eojp
import nodemailer from "nodemailer";

let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // User and Pass must be genuine
    user: "thesaantdahal@gmail.com",
    pass: "goiu iccb sjtm eojp",
  },
};

export const sendEMail = async (mailInfo) => {
  try {
    let transport = nodemailer.createTransport(transporterInfo);
    let info = await transport.sendMail(mailInfo);
  } catch (error) {
    console.log("Error in sending mail: ", error.message);
  }
};
