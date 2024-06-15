/** @type {import('next').NextConfig} */
module.exports = {
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'avatar.githubusercontent.com',
                    port: '',
                    pathname: '/u/**',
               },
          ],
     },
}