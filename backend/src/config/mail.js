import 'dotenv/config';

export default {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  default: {
    from: process.env.SMTP_FROM,
  },
};
