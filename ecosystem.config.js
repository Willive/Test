module.exports = {
    apps: [{
      name: 'node',
      script: './src/index.js'
    }],
    deploy: {
      production: {
        user: process.env.USER,
        host: process.env.HOST,
        key: process.env.KEY,
        ref: process.env.REF,
        repo: process.env.REPO,
        path: process.env.APP_PATH,
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }