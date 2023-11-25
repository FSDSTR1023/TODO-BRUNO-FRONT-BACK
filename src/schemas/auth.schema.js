import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: 'Username is required',
      })
      .min(3)
      .max(255),
    name: z.string({
      required_error: 'Name is required',
    }),
    surname: z.string({
      required_error: 'Surname is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({
        message: 'Invalid email',
      }),
    password: z
      .string({
        required_error: 'Password is required and must be 6 characters minimum',
      })
      .min(6)
      .max(255),
    confirmPassword: z.string({
      required_error: 'Confirm password is required',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Enter a valid email',
    }),
  password: z
    .string({
      required_error: 'Password is required and must be 6 characters minimum',
    })
    .min(6)
    .max(255),
});
