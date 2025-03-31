// components/ContactForm.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nombre: z
    .string()
    .min(1, "Nombre es obligatorio")
    .max(50, "Máximo 50 caracteres"),
  empresa: z.string().max(100, "Máximo 100 caracteres").optional(),
  telefono: z
    .string()
    .min(1, "Teléfono es obligatorio")
    .max(20, "Máximo 20 caracteres"),
  correo: z.string().email("Correo inválido").max(100, "Máximo 100 caracteres"),
  direccion: z.string().max(100, "Máximo 100 caracteres").optional(),
  ciudad: z.string().max(100, "Máximo 100 caracteres").optional(),
  comentario: z
    .string()
    .min(1, "Comentario es obligatorio")
    .max(500, "Máximo 500 caracteres"),
});

type FormData = z.infer<typeof schema>;

const inputs = [
  { label: "Nombre (*)", name: "nombre" },
  { label: "Empresa", name: "empresa" },
  { label: "Teléfono (*)", name: "telefono" },
  {
    label: "Correo (*)",
    name: "correo",
    type: "email",
    placeholder: "ejemplo@ejemplo.com",
  },
  { label: "Dirección", name: "direccion" },
  { label: "Ciudad", name: "ciudad" },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    console.log("✅ Submitted:", data);
    // Here you can call an API or send the email
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-sm text-gray-800 space-y-4 font-open-sans"
    >
      <p className="text-center text-sm text-gray-800">
        Por favor llene los datos que aparecen a continuación. Los datos con{" "}
        <span className="font-bold text-red-600">(*)</span> son obligatorios:
      </p>

      {/* Inputs */}
      {inputs.map(({ label, name, type = "text", placeholder }) => (
        <label key={name} className="block">
          {label}
          <input
            type={type}
            placeholder={placeholder}
            {...register(name as keyof FormData)}
            className="w-full border border-yellow-orange rounded-2xl py-2 px-3 mt-1 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          />
          {errors[name as keyof FormData] && (
            <p className="text-red-600 text-xs mt-1">
              {errors[name as keyof FormData]?.message}
            </p>
          )}
        </label>
      ))}

      {/* Comentario */}
      <label className="block">
        Comentario (*)
        <textarea
          {...register("comentario")}
          className="w-full border border-yellow-orange rounded-2xl py-2 px-3 mt-1 min-h-[100px] focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
        />
        {errors.comentario && (
          <p className="text-red-600 text-xs mt-1">
            {errors.comentario.message}
          </p>
        )}
      </label>

      <button
        type="submit"
        className="cursor-pointer bg-blue-light text-white px-6 py-2 rounded-md hover:bg-blue-light/90 transition-colors w-full"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
