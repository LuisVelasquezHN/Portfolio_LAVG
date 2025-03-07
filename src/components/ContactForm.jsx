import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

const schema = yup.object().shape({
  fullName: yup.string().required("Nombre es requerido."),
  email: yup.string().email("Correo Inválido").required("Correo Electrónico es requerido."),
  message: yup.string().required("El mensaje no puede estar vacío."),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: data.fullName,
          from_email: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 text-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Nombre Completo"
              className="w-full px-4 py-2 dark:bg-[#1010106c] bg-[#f5f7f783] border border-[#f4f4f40e] dark:text-white/80 text-[#515151] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)]"
            />
            <p className="text-[#ff8b8b] pl-2 text-sm">{errors.fullName?.message}</p>
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-2 dark:bg-[#1010106c] bg-[#f5f7f783] border border-[#f4f4f40e] dark:text-white/80 text-[#515151] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)]"
            />
            <p className="text-[#ff8b8b] pl-2 text-sm">{errors.email?.message}</p>
          </div>
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-2 dark:bg-[#1010106c] bg-[#f5f7f783] border border-[#f4f4f40e] dark:text-white/80 text-[#515151] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)]"
          />
          <p className="text-[#ff8b8b] pl-2 text-sm">{errors.message?.message}</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex text-base flex-row gap-2 text-[#232323] dark:text-[#f4f4f4]
              bg-gradient-to-br from-[#eeeeee] via-[#eaeaea] to-blue-400 dark:bg-gradient-to-br dark:from-[#313131] dark:via-[#020202] dark:to-[#181818]
               rounded-3xl py-3 px-5 mt-2 cursor-pointer border dark:border-[#505050] border-[#c6c6c6]
               hover:from-[#313131] hover:via-[#020202] hover:to-[#181818] hover:text-[#f4f4f4] 
               dark:hover:font-semibold dark:hover:from-[#eeeeee] dark:hover:via-[#eaeaea] dark:hover:to-blue-400 dark:hover:text-[#181818]"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M21 2L2 11l7 2 2 7 11-19z" />
          </svg>
        </button>
      </form>
    </div>
  );
};
