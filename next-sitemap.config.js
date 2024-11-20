/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zoffy.me',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
