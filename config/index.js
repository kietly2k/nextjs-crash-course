const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://kietly2k.github.io/nextjs-crash-course/'