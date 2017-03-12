#run the app:
     $ DEBUG=webapp:* npm start

#eb commands
eb init --platform node.js --region us-west-2
eb create --sample node-express-env
eb open
eb deploy