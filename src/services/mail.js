import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv';
import { mailBody } from '../utils/mailBody';

dotenv.config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

export const sendEmail = async (emailArray, subject, htmlContent) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = mailBody(subject, htmlContent);
  sendSmtpEmail.sender = {
    name: 'PSS Notification',
    email: 'notification@pssinsight.com',
  };
  sendSmtpEmail.to = emailArray.map(email => ({ email }));
  sendSmtpEmail.replyTo = { email: 'notification@pssinsight.com' };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return response;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};
