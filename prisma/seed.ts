// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles


    // users seed

    const user1 = await prisma.user.upsert({
      where: { email: "kokodo@yahoo.fr" },
      update: {},
      create: {
        firstName: "Kokodo",
        lastName: "Morine",
        email: "kokodo@yahoo.fr",
        hash: "123456789",
        telephone: "+225588555",
        gender: "Male",
        photo: "maledr.jpg",
        birthday: "1970-01-01T00:00:00.000Z",
      },
    });

    const user2 = await prisma.user.upsert({
      where: { email: "treserioer@yahoo.fr" },
      update: {},
      create: {
        firstName: "Treserioer",
        lastName: "Morine",
        email: "treserioer@yahoo.fr",
        hash: "123456789",
        telephone: "+225588555",
        gender: "Male",
        photo: "maledr.jpg",
        birthday: "1990-01-01T00:00:00.000Z",
      },
    });

    const user3 = await prisma.user.upsert({
      where: { email: "gerduir@yahoo.fr" },
      update: {},
      create: {
        firstName: "Gerduir",
        lastName: "Morine",
        email: "gerduir@yahoo.fr",
        hash: "123456789",
        telephone: "+225588555",
        gender: "Male",
        photo: "maledr.jpg",
        birthday: "1986-01-01T00:00:00.000Z",
      },
    });

    const user4 = await prisma.user.upsert({
      where: { email: "derui@yahoo.fr" },
      update: {},
      create: {
        firstName: "Derui",
        lastName: "Morine",
        email: "derui@yahoo.fr",
        hash: "123456789",
        telephone: "+225588555",
        gender: "Male",
        photo: "maledr.jpg",
        birthday: "1980-01-01T00:00:00.000Z",
      },
    });

    
    // article seed

  const article1 = await prisma.article.upsert({
    where: { title: 'Article 1' },
    update: {},
    create: {
      title: 'Article 1',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1
    },
  });

  const article2 = await prisma.article.upsert({
    where: { title: "Article 2" },
    update: {},
    create: {
      title: "Article 2",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1
    },
  });

  const article3 = await prisma.article.upsert({
    where: { title: 'Article 2' },
    update: {},
    create: {
      title: 'Article 2',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1
    },
  });

  const article4 = await prisma.article.upsert({
    where: { title: "Article 3" },
    update: {},
    create: {
      title: "Article 3",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1
    },
  });

  const article5 = await prisma.article.upsert({
    where: { title: 'Article 4' },
    update: {},
    create: {
      title: 'Article 4',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1
    },
  });

  const article6 = await prisma.article.upsert({
    where: { title: "Article 5" },
    update: {},
    create: {
      title: "Article 5",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1
    },
  });

  // services seed

  const service1 = await prisma.service.upsert({
    where: { title: "Médecine générale" },
    update: {},
    create: {
      title: "Médecine générale",
      description:'Fièvre, Rhume, Grippe, Maux de tête ou autre maladie qui requiert la médecine générale',
      photo: "jason.jpg",
    },

  });

  const service2 = await prisma.service.upsert({
    where: { title: "Gynécologie obstétrique" },
    update: {},
    create: {
      title: "Gynécologie obstétrique",
      description:'Gynécologie-Obstétrique, Planification familiale, Diagnostic prénatal',
      photo: "jason.jpg",
    },

  });

  const service3 = await prisma.service.upsert({
    where: { title: "Pédiatrie" },
    update: {},
    create: {
      title: "Pédiatrie",
      description:'Tout problème lié aux enfants, y compris les problèmes mentaux et physiques',
      photo: "jason.jpg",
      },

  });

  // referents seed

  const referent1 = await prisma.referent.upsert({
    where: { email: "remeo@yahoo.fr" },
    update: {},
    create: {
      firstName: "Kouadio",
      lastName: "Morine",
      email: "remeo@yahoo.fr",
      telephone: "+225588555",
      gender: "Male",
    },

  });

  const referent2 = await prisma.referent.upsert({
    where: { email: "prutoe@yahoo.fr" },
    update: {},
    create: {
      firstName: "Kouadio",
      lastName: "Morine",
      email: "prutoe@yahoo.fr",
      telephone: "+225588555",
      gender: "Male",
    },

  });

  const referent3 = await prisma.referent.upsert({
    where: { email: "predurerdf@yahoo.fr" },
    update: {},
    create: {
      firstName: "Kouadio",
      lastName: "Morine",
      email: "predurerdf@yahoo.fr",
      telephone: "+225588555",
      gender: "Male",
    },

  });

  const referent4 = await prisma.referent.upsert({
    where: { email: "vuturer@yahoo.fr" },
    update: {},
    create: {
      firstName: "Kouadio",
      lastName: "Morine",
      email: "vuturer@yahoo.fr",
      telephone: "+225588555",
      gender: "Male",
    },

  });

  const referent5 = await prisma.referent.upsert({
    where: { email: "frertui@yahoo.fr" },
    update: {},
    create: {
      firstName: "Kouadio",
      lastName: "Morine",
      email: "frertui@yahoo.fr",
      telephone: "+225588555",
      gender: "Male",
    },

  });

  const referent6 = await prisma.referent.upsert({
    where: { email: "podoreru@yahoo.fr" },
    update: {},
    create: {
      firstName: "Kouadio",
      lastName: "Morine",
      email: "podoreru@yahoo.fr",
      telephone: "+225588555",
      gender: "Male",
    },

  });

    // badges seed

    // const badge1 = await prisma.badge.upsert({
    //   where: { qrcodeId: 123366 },
    //   update: {},
    //   create: {
    //     qrcodeId: 123366,
    //     userId: 1,
    //     referents: "podoreru@yahoo.fr"
    //   },
    // });

  console.log(
    {
      user1, user2, user3, user4, // user seed
      article1,article2,article3,article4,article5,article6, // article seed
      service1, service2, service3, // services seed
      referent1, referent2, referent3,referent4, referent5, referent6, // referents seed

  }
  );
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

