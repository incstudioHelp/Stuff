exports.handler = (context, event, callback) => {
  const client = context.getTwilioClient();
  console.log("Sending text...");
  client.messages.create({
    to: context.PHONE_NUMBER,
    from: context.TWILIO_NUMBER,
    body: `New idea 💡: ${event.TranscriptionText}`
  }).then((message) => {
    console.log(`Sent message ${message.sid}`);
    callback(null, `Sent message ${message.sid}`);
  }).catch((error) => {
    console.error(`Uh oh: ${error}`);
    callback(error);
  });
};
