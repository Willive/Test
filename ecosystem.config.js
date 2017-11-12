module.exports = {
    apps: [{
      name: 'wweb',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-54-173-55-82.compute-1.amazonaws.com',
        key: '~/will-web.pem',
        ref: 'origin/master',
        repo: 'git@github.com:Willive/wweb.git',
        path: '/home/ubuntu/webapp',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }