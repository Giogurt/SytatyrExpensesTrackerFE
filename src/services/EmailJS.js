import emailjs from "@emailjs/browser";

export const sendEmail = (to, message) => {
  emailjs
    .send(
      "service_80bwxyr",
      "template_3l7nwwj",
      {
        to_name: to,
        message: message,
      },
      "pjus25NzPlSRtZO9n"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        throw new Error(error)
      }
    );
};
