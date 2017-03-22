# alexa-homesite-skill
alexa-homesite-skill

#Certificates Commands
openssl genrsa 2048 > homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.private.pem
openssl req -new -key homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.private.pem -out homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.csr.pem
openssl x509 -req -days 365 -in homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.csr.pem -signkey homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.private.pem -out homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.crt