import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/utils/prisma';

export const options: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { type: 'email', label: 'Email', placeholder: 'Enter your email' },
        password: { type: 'password', label: 'Password', placeholder: 'Enter your password' },
      },
      authorize: async (credential) => {
        const email = credential?.email;
        const password = credential?.password;

        const findUser = await prisma.user.findUnique({
          where: {
            email,
            password,
          },
        });

        if (findUser) {
          return {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            image: findUser.image,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const findUser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });
      return true;
      if (!findUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email as string,
            image: user.image,
          },
        });
      }
    },
  },
  //   pages: {
  //     signIn: '/login',
  //   },
};
