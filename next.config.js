/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com']
  }
}
