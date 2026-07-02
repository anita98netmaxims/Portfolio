import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill all fields.",
      });

      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully."
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.log(err);

      setStatus({
        type: "error",
        message: "Failed to send message."
      });
    }

    setLoading(false);

    setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 4000);
  };

  return {
    formData,
    loading,
    status,
    handleChange,
    sendEmail,
  };
}