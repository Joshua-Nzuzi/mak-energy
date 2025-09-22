// import { z } from 'zod';

// export const contactSchema = z.object({
//   name: z
//     .string()
//     .min(2, "Le nom est requis")
//     .max(100, "Le nom est trop long")
//     .regex(/^[a-zA-ZÀ-ÿ '-]+$/, "Le nom contient des caractères invalides"),

//   email: z
//     .string()
//     .email("Email invalide")
//     .max(100, "Email trop long"),

//   phone: z
//     .string()
//     .optional()
//     .refine(val => !val || /^(\+243|0)(8[0-9]{8})$/.test(val), {
//       message: "Numéro congolais invalide",
//     }),

//   subject: z
//     .string()
//     .max(150, "Sujet trop long")
//     .optional(),

//   message: z
//     .string()
//     .min(10, "Le message doit contenir au moins 10 caractères")
//     .max(1000, "Le message est trop long")
//     .refine(msg => !/(https?:\/\/|<script|SELECT|INSERT|DELETE|DROP)/i.test(msg), {
//       message: "Le message contient des éléments suspects",
//     }),

//   botcheck: z
//     .string()
//     .max(0, "Bot détecté"),
// });

import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom est requis (minimum 2 caractères)" })
    .max(100, { message: "Le nom est trop long (maximum 100 caractères)" })
    .regex(/^[a-zA-ZÀ-ÿ '-]+$/, {
      message: "Le nom ne doit contenir que des lettres, espaces, apostrophes ou tirets"
    }),

  email: z
    .string()
    .email({ message: "Adresse email invalide" })
    .max(100, { message: "Adresse email trop longue (maximum 100 caractères)" }),

  phone: z
    .string()
    .optional()
    .refine(val => !val || /^(\+243|0)(8[0-9]{8})$/.test(val), {
      message: "Numéro de téléphone congolais invalide (ex: +2438XXXXXXXX ou 08XXXXXXXX)"
    }),

  subject: z
    .string()
    .max(150, { message: "Le sujet est trop long (maximum 150 caractères)" })
    .optional(),

  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(1000, { message: "Le message est trop long (maximum 1000 caractères)" })
    .refine(msg => !/(https?:\/\/|<script|SELECT|INSERT|DELETE|DROP)/i.test(msg), {
      message: "Le message contient des éléments suspects"
    }),

  botcheck: z
    .string()
    .max(0, { message: "Bot détecté 🚨" }),
})
