/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "img.clerk"
            }
        ]
    }
};

export default nextConfig;
