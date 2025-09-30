"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser"

import { Button } from "./ui";

export const ContactForm = () => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const handlerSubmit = async (values: { name: string; cellphone: string; email: string; message: string }) => {
        try {
            await emailjs.send(
                serviceID!,
                templateID!,
                values,
                userID!,
            );
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    }

  const formik = useFormik({
    initialValues: {
        name: "",
        cellphone: "",
        email: "",
        message: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required('El nombre es obligatorio')
        .min(5, 'El nombre debe tener al menos 5 caracteres')
        .max(20, 'El nombre es muy largo')
        .matches(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
        cellphone: Yup.string().required('El teléfono es obligatorio')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números')
        .min(10, 'El teléfono debe tener 10 dígitos')
        .max(10, 'El teléfono debe tener 10 dígitos'),
        email: Yup.string().email('El correo electrónico es inválido')
        .required('El correo electrónico es obligatorio'),
        message: Yup.string().required('El mensaje es obligatorio')
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .max(150, 'El mensaje es muy largo, por favor sé más breve'),
    }),
    onSubmit: async (values) => {
      await handlerSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Tu nombre"
            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          />
          {(formik.errors.name && formik.touched.name) && (<p className="text-sm text-destructive">{formik.errors.name}</p>)}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="cellphone"
            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            Teléfono *
          </label>
          <input
            type="text"
            id="cellphone"
            name="cellphone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cellphone}
            placeholder="2212345678"
            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          />
          {(formik.errors.cellphone && formik.touched.cellphone) && (<p className="text-sm text-destructive">{formik.errors.cellphone}</p>)}
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Email *
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="ejemplo@correo.com"
          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        />
        {(formik.errors.email && formik.touched.email) && (<p className="text-sm text-destructive">{formik.errors.email}</p>)}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows={4}
          maxLength={150}
          placeholder="Cuéntame sobre tu evento especial o lo que tienes en mente..."
          className="resize-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-2 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        />
        {(formik.errors.message && formik.touched.message) && (<p className="text-sm text-destructive">{formik.errors.message}</p>)}
      </div>
      <Button type="submit" className="w-full" size="lg" disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}>
        {formik.isSubmitting ? "Enviando..." : "Enviar Solicitud de Cita"}
      </Button>
    </form>
  );
};
