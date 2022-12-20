// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

  // users seed

  const user1 = await prisma.user.upsert({
    where: { email: 'kokodo@yahoo.fr' },
    update: {},
    create: {
      firstName: 'Kokodo',
      lastName: 'Morine',
      email: 'kokodo@yahoo.fr',
      hash: '123456789',
      telephone: '+225588555',
      role: 'PATIENT',
      photo: 'maledr.jpg',
      birthday: '1970-01-01T00:00:00.000Z',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'treserioer@yahoo.fr' },
    update: {},
    create: {
      firstName: 'Treserioer',
      lastName: 'Morine',
      email: 'treserioer@yahoo.fr',
      hash: '123456789',
      telephone: '+225588555',
      role: 'PATIENT',
      photo: 'maledr.jpg',
      birthday: '1990-01-01T00:00:00.000Z',
    },
  });

  const user3 = await prisma.user.upsert({
    where: { email: 'gerduir@yahoo.fr' },
    update: {},
    create: {
      firstName: 'Gerduir',
      lastName: 'Morine',
      email: 'gerduir@yahoo.fr',
      hash: '123456789',
      telephone: '+225588555',
      role: 'PATIENT',
      photo: 'maledr.jpg',
      birthday: '1986-01-01T00:00:00.000Z',
    },
  });

  const user4 = await prisma.user.upsert({
    where: { email: 'derui@yahoo.fr' },
    update: {},
    create: {
      firstName: 'Derui',
      lastName: 'Morine',
      email: 'derui@yahoo.fr',
      hash: '123456789',
      telephone: '+225588555',
      role: 'PATIENT',
      photo: 'maledr.jpg',
      birthday: '1980-01-01T00:00:00.000Z',
    },
  });

  const user5 = await prisma.user.upsert({
    where: { email: 'vodro@yahoo.fr' },
    update: {},
    create: {
      firstName: 'Vodro',
      lastName: 'Morine',
      email: 'vodro@yahoo.fr',
      hash: '123456789',
      telephone: '+225588555',
      role: 'PATIENT',
      photo: 'maledr.jpg',
      birthday: '1980-01-01T00:00:00.000Z',
    },
  });

  const user6 = await prisma.user.upsert({
    where: { email: 'louir@yahoo.fr' },
    update: {},
    create: {
      firstName: 'Louis',
      lastName: 'Morine',
      email: 'louir@yahoo.fr',
      hash: '123456789',
      telephone: '+225588555',
      role: 'PATIENT',
      photo: 'maledr.jpg',
      birthday: '1980-01-01T00:00:00.000Z',
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
      userId: 1,
    },
  });

  const article2 = await prisma.article.upsert({
    where: { title: 'Article 2' },
    update: {},
    create: {
      title: 'Article 2',
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 1,
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
      userId: 2,
    },
  });

  const article4 = await prisma.article.upsert({
    where: { title: 'Article 3' },
    update: {},
    create: {
      title: 'Article 3',
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 2,
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
      userId: 2,
    },
  });

  const article6 = await prisma.article.upsert({
    where: { title: 'Article 5' },
    update: {},
    create: {
      title: 'Article 5',
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      userId: 3,
    },
  });

  // services seed

  const service1 = await prisma.service.upsert({
    where: { title: 'Médecine générale' },
    update: {},
    create: {
      title: 'Médecine générale',
      description:
        'Fièvre, Rhume, Grippe, Maux de tête ou autre maladie qui requiert la médecine générale',
      photo: 'jason.jpg',
    },
  });

  const service2 = await prisma.service.upsert({
    where: { title: 'Gynécologie obstétrique' },
    update: {},
    create: {
      title: 'Gynécologie obstétrique',
      description:
        'Gynécologie-Obstétrique, Planification familiale, Diagnostic prénatal',
      photo: 'jason.jpg',
    },
  });

  const service3 = await prisma.service.upsert({
    where: { title: 'Pédiatrie' },
    update: {},
    create: {
      title: 'Pédiatrie',
      description:
        'Tout problème lié aux enfants, y compris les problèmes mentaux et physiques',
      photo: 'jason.jpg',
    },
  });

  // referents seed

  const referent1 = await prisma.referent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      firstName: 'Kouadio',
      lastName: 'Morine',
      email: 'remeo@yahoo.fr',
      telephone: '+225588555',
      userId: 1,
    },
  });

  const referent2 = await prisma.referent.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      firstName: 'Prodo',
      lastName: 'Morine',
      email: 'prutoe@yahoo.fr',
      telephone: '+225588555',
      userId: 2,
    },
  });

  const referent3 = await prisma.referent.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      firstName: 'Romelu',
      lastName: 'Morine',
      email: 'predurerdf@yahoo.fr',
      telephone: '+225588555',
      userId: 3,
    },
  });

  const referent4 = await prisma.referent.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      firstName: 'Deruni',
      lastName: 'Morine',
      email: 'vuturer@yahoo.fr',
      telephone: '+225588555',
      userId: 4,
    },
  });

  const referent5 = await prisma.referent.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      firstName: 'Volomer',
      lastName: 'Morine',
      email: 'frertui@yahoo.fr',
      telephone: '+225588555',
      userId: 5,
    },
  });

  const referent6 = await prisma.referent.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      firstName: 'Cgonei',
      lastName: 'Morine',
      email: 'podoreru@yahoo.fr',
      telephone: '+225588555',
      userId: 6,
    },
  });

  // Qrcode SEED

  const qrcode1 = await prisma.qrcode.upsert({
    where: { code: 'name+Referent+111' },
    update: {},
    create: {
      code: 'name+Referent+111',
      userId: 1,
    },
  });

  const qrcode2 = await prisma.qrcode.upsert({
    where: { code: 'name+Referent+222' },
    update: {},
    create: {
      code: 'name+Referent+222',
      userId: 2,
    },
  });

  const qrcode3 = await prisma.qrcode.upsert({
    where: { code: 'name+Referent+333' },
    update: {},
    create: {
      code: 'name+Referent+333',
      userId: 3,
    },
  });

  const qrcode4 = await prisma.qrcode.upsert({
    where: { code: 'name+Referent+444' },
    update: {},
    create: {
      code: 'name+Referent+444',
      userId: 4,
    },
  });

  const qrcode5 = await prisma.qrcode.upsert({
    where: { code: 'name+Referent+555' },
    update: {},
    create: {
      code: 'name+Referent+555',
      userId: 5,
    },
  });

  const qrcode6 = await prisma.qrcode.upsert({
    where: { code: 'name+Referent+665' },
    update: {},
    create: {
      code: 'name+Referent+665',
      userId: 6,
    },
  });

  // Ticket SEED

  const ticket1 = await prisma.ticket.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      userId: 1,
      serviceId: 1,
    },
  });

  const ticket2 = await prisma.ticket.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      userId: 2,
      serviceId: 1,
    },
  });

  const ticket3 = await prisma.ticket.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      userId: 3,
      serviceId: 2,
    },
  });

  console.log({
    // user seed
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    // article seed
    article1,
    article2,
    article3,
    article4,
    article5,
    article6,
    // services seed
    service1,
    service2,
    service3,
    // referents seed
    referent1,
    referent2,
    referent3,
    referent4,
    referent5,
    referent6,
    // qrcode seed
    qrcode1,
    qrcode2,
    qrcode3,
    qrcode4,
    qrcode5,
    qrcode6,
    // ticket seed
    ticket1,
    ticket2,
    ticket3,
  });
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
