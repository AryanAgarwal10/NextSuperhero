/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI:"mongodb+srv://CityHunter:h7iHGpOsgqV3DU8e@cluster0.ir5b9uc.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig