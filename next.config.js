/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  async redirects() {
    return [
      {
        source: '/survey',
        destination: 'https://forms.gle/uGGKHmFGc6VsggLD9',
        permanent: true,
        basePath: false
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/TnnsgFJ8gn',
        permanent: true,
        basePath: false
      },
      {
        source: '/github',
        destination: 'https://github.com/Craig-UK',
        permanent: true,
        basePath: false
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/CraigDevUK',
        permanent: true,
        basePath: false
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/CraigDevUK',
        permanent: true,
        basePath: false
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/company/just-craig-development-ltd',
        permanent: true,
        basePath: false
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/people/craigdevuk/61550988152517/',
        permanent: true,
        basePath: false
      },
      {
        source: '/threads',
        destination: 'https://www.threads.net/@craigdevuk',
        permanent: true,
        basePath: false
      }
    ]
  },
  webpack (config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }
    return config
  }
}
module.exports = nextConfig
