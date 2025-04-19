const { PrismaClient } = require('./../prisma/generated/prisma/client');
const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
}


async function disconnectDB() {
  try {
    await prisma.$disconnect();
    console.log("Database disconnected successfully.");
  } catch (error) {
    console.error("Error while disconnecting:", error.message);
  }
}

module.exports = {
  connectDB,
  disconnectDB,
  prisma, 
};
