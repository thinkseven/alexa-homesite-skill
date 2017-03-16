#run the app:
     $ DEBUG=webapp:* npm start

#eb commands
eb init --platform node.js --region us-east-1
eb create --sample homesite-alexa-site
eb open
eb deploy