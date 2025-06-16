/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
