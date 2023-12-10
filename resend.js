const { Resend } =  require('resend');

const resend = new Resend('re_Qis361Dw_BhpnqK7424DDLLKkRqDEKUxR');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'musicloverap01@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});