import { z } from 'zod';

export const registerSchema = z.object({
  username: z
    .string({
      required_error: 'El nombre de usuario es requerido',
    })
    .min(3)
    .max(255),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'El email no es válido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida y minimo 6 caracteres',
    })
    .min(6)
    .max(255),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'El email no es válido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida y minimo 6 caracteres',
    })
    .min(6)
    .max(255),
});
