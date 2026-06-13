import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Imię musi zawierać co najmniej 2 znaki'),
  email: z.string().email('Nieprawidłowy adres email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Wiadomość musi zawierać co najmniej 10 znaków'),
  consent: z.boolean().refine(val => val === true, {
    message: 'Musisz wyrazić zgodę na przetwarzanie danych osobowych'
  }),
  honeypot: z.string().max(0), // Should be empty
  recaptchaToken: z.string().min(1, 'Błąd weryfikacji reCAPTCHA')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const careerApplicationSchema = z.object({
  name: z.string().min(2, 'Imię musi zawierać co najmniej 2 znaki'),
  email: z.string().email('Nieprawidłowy adres email'),
  phone: z.string().optional(),
  cv: z.string().url('Nieprawidłowy link do CV'),
  message: z.string().min(10, 'Wiadomość musi zawierać co najmniej 10 znaków'),
  consent: z.boolean().refine(val => val === true, {
    message: 'Musisz wyrazić zgodę na przetwarzanie danych osobowych'
  }),
  honeypot: z.string().max(0),
  recaptchaToken: z.string().min(1, 'Błąd weryfikacji reCAPTCHA')
})

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>

