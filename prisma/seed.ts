// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

    // article seed


  const post3 = await prisma.article.upsert({
    where: { title: '8 Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: '33 Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1
    },
  });

  const post4 = await prisma.article.upsert({
    where: { title: "9 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "44 What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1
    },
  });

  const post5 = await prisma.article.upsert({
    where: { title: '6 Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: '11 Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1
    },
  });

  const post6 = await prisma.article.upsert({
    where: { title: " 7 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "22 What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1
    },
  });

  const post7 = await prisma.article.upsert({
    where: { title: '10 Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: '55 Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1
    },
  });

  const post8 = await prisma.article.upsert({
    where: { title: "11 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "66 What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1
    },
  });

  // services seed

  const post10 = await prisma.service.upsert({
    where: { title: "11 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "11 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post11 = await prisma.service.upsert({
    where: { title: "112 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "112 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post12 = await prisma.service.upsert({
    where: { title: "113 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "113 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post13 = await prisma.service.upsert({
    where: { title: "114 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "114 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post14 = await prisma.service.upsert({
    where: { title: "115 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "115 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post15 = await prisma.service.upsert({
    where: { title: "116 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "116 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post16 = await prisma.service.upsert({
    where: { title: "117 What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "117 What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  console.log({post3,post4,post5,post6,post7,post8,post10, post11, post12,post13, post14,post15,post16 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });