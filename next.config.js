const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

// module.exports = nextConfig
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
}, nextConfig)

