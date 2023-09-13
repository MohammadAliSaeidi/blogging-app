/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "1fid.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
