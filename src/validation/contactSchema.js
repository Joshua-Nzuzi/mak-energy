import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom est requis")
    .max(100, "Le nom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ '-]+$/, "Le nom contient des caractères invalides"),

  email: z
    .string()
    .email("Email invalide")
    .max(100, "Email trop long"),

  phone: z
    .string()
    .optional()
    .regex(/^(\+243|0)(8[0-9]{8})$/, "Numéro congolais invalide")
    .or(z.literal("")), // autorise champ vide

  subject: z
    .string()
    .max(150, "Sujet trop long")
    .optional(),

  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message est trop long")
    .refine(msg => !/(https?:\/\/|<script|SELECT|INSERT|DELETE|DROP)/i.test(msg), {
      message: "Le message contient des éléments suspects",
    }),

  botcheck: z
    .string()
    .max(0, "Bot détecté"), // honeypot invisible
});
