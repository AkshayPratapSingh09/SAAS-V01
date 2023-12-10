const mailjet = require('node-mailjet').connect(
    
  )
  const request = mailjet.post('send').request({
    FromEmail: 'pilot@mailjet.com',
    FromName: 'Mailjet Pilot',
    Subject: 'Your email flight plan!',
    'Text-part':
      'Dear passenger, welcome to Mailjet! May the delivery force be with you!',
    'Html-part':
      '<h3>Dear passenger, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!<br />May the delivery force be with you!',
    Recipients: [{ Email: 'apapitest@gmail.com' }],
  })
  request
    .then(result => {
      console.log(result.body)
    })
    .catch(err => {
      console.log(err.statusCode)
    })