
const Mailjet = require ('node-mailjet')

const mailjet = new Mailjet({
    apiKey:"a9297d84f9341b98ab3757d83edf7aaf",
    apiSecret:"ffd28e6a0ebfdaba95e9c5a3ac2f6355"
  });

  const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "vinop99713@gyxmz.com",
                Name: "Trial User"
              },
              To: [
                {
                  Email: "apapitest@gmail.com",
                  Name: "Ap this side"
                }
              ],
              Subject: "Your email flight plan!",
              TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
              HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
          ]
        })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })