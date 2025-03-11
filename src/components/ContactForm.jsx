import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { toast } from 'sonner'

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
        import.meta.env.VITE_GMAIL_SERVICE,
        import.meta.env.VITE_ID_TEMPLATE,
        {
          user_name: data.fullName,
          user_email: data.email,
          user_message: data.message,
        },
        import.meta.env.VITE_APIKEY_EMAIL
      );
      toast.success('Mensaje enviado exitosamente!')
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error('Fallo en el envío. Intenta de nuevo más tarde.')
    }
  };

  return (

    <div className="max-w-3xl mx-auto p-4 md:p-8 text-white rounded-lg">
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
          className="flex text-base flex-row gap-2 text-[#0d639b] dark:text-[#009aff]
               rounded-3xl py-3 px-5 mt-2 cursor-pointer shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border dark:border-[#f4f4f40e] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]
               "
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
