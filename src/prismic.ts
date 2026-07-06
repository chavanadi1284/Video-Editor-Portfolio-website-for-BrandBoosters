import * as prismic from '@prismicio/client'

// Retrieve repository name from environment variables
const repoName = import.meta.env.VITE_PRISMIC_REPO || ''

// Export the initialized client or null if not configured yet
export const client = repoName ? prismic.createClient(repoName) : null
