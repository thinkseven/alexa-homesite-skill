export class oauth2 {
    access_token: string;
    token_type: string;
}

export class AlexaContext {
    private state: string;
    private client_id: string;
    private scope: string;
    private response_type: string;
    private redirect_uri: string;
    private oauth: oauth2;
    private redirectPatternMatchUrls: string[] = ["https://layla.amazon.com/spa/skill/account-linking-status.html?vendorId=M354GXLOSXIRZ3", "https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=M354GXLOSXIRZ3","https%3A%2F%2Flayla.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DM354GXLOSXIRZ3","https%3A%2F%2Fpitangui.amazon.com%2Fspa%2Fskill%2Faccount-linking-status.html%3FvendorId%3DM354GXLOSXIRZ3"];

    constructor(state: string, redirect_uri: string) {
        console.log(state);
        console.log(redirect_uri);
        this.state = state;
        this.redirect_uri = redirect_uri;
    }

    updateOAuth(oauth2: oauth2) {
        this.oauth = oauth2;
    }

    private IsMatched(redirectUrl: string): Boolean {
        for (let url of this.redirectPatternMatchUrls) {
            if (url === redirectUrl) {
                return true;
            }
        }
        return false;
    }

    getRedirectUrl(): string {
        if (this.IsMatched(this.redirect_uri)) {
            return decodeURIComponent(this.redirect_uri + "#state" + this.state + "&access_token=" + this.oauth.access_token + "&token_type=" + this.oauth.token_type);
        }
        return "";
    }
}
