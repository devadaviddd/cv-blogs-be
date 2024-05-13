#!/bin/sh
npx prisma db pull
npx prisma generate
npm run prod

