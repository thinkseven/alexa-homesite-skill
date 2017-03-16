# alexa-homesite-skill
alexa-homesite-skill

#Certificates Commands
openssl genrsa 2048 > homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.private.pem
openssl req -new -key homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.private.pem -out homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.csr.pem
openssl x509 -req -days 365 -in homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.csr.pem -signkey homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.private.pem -out homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com.crt

What will my login page will receive
https://www.carfu.com/login
?state=abc
&client_id=alexa-skill
&scope=order_car%20basic_profile
&response_type=code
&redirect_uri=https%3A%2F%2Fpitangui.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DAAAAAAAAAAAAAA

Good Ones
http://localhost:4200/?state=abc&client_id=alexa-skill&scope=order_car%20basic_profile&response_type=code&redirect_uri=https%3A%2F%2Flayla.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DM354GXLOSXIRZ3

http://localhost:4200/?state=abc&client_id=alexa-skill&scope=order_car%20basic_profile&response_type=code&redirect_uri=https%3A%2F%2Fpitangui.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DM354GXLOSXIRZ3

Bad One
http://localhost:4200/?state=abc&client_id=alexa-skill&scope=order_car%20basic_profile&response_type=code&redirect_uri=https%3A%2F%2Fpitangui.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DAAAAAAAAAAAAAA

Redirect Url after login and consent page redirection
https://layla.amazon.com/spa/skill/account-linking-status.html?vendorId=M354GXLOSXIRZ3
https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=M354GXLOSXIRZ3
#state=xyz
&access_token=2YotnFZFEjr1zCsicMWpAA
&token_type=Bearer

https://layla.amazon.com/spa/skill/account-linking-status.html?vendorId=M35…tetest1234&access_token=20522e89cb56fbd074fed8d731d80a11&token_type=bearer

https://homesite-alexa-site.fpxbxewtsm.us-east-1.elasticbeanstalk.com/?state=abc&client_id=alexa-skill&scope=order_car%20basic_profile&response_type=code&redirect_uri=https%3A%2F%2Flayla.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DM354GXLOSXIRZ3