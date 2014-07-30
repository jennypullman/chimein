
class AzureHelper {
    azureClient: Microsoft.WindowsAzure.MobileServiceClient;
    groups: Microsoft.WindowsAzure.MobileServiceTable;
    users: Microsoft.WindowsAzure.MobileServiceTable;
    groupUsers: Microsoft.WindowsAzure.MobileServiceTable;
    user: string;

    constructor() {
    }
    getClient(callback: (client: Microsoft.WindowsAzure.MobileServiceClient) => void): void {
        //alert("in get client");
        if (this.azureClient) {
            //alert("out get client if");
            callback(this.azureClient);
        }
        else {
            this.azureClient = new WindowsAzure.MobileServiceClient(
                "https://chimein.azure-mobile.net/",
                "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
            //alert("out get client");
            callback(this.azureClient);
        }
    }

    login(azureClient: Microsoft.WindowsAzure.MobileServiceClient, callback: (user: any) => void): void {
        alert("in login");
        if (this.user) {
            //alert("in get user");
            callback(this.user);
        }
        else {
            //alert("in else login");
            //alert(this.azureClient);
            azureClient.login("facebook").then((results) => {
                //alert("in facebook");
                this.user = results.userId;
                //alert("in facebook, user: " + this.user);
                //this.loggedIn = true;
                this.getUsers();

                this.users.where({ uid: results.userId }).read().then((success) => {
                    if (success.length > 0) {
                        console.log("User ID" + this.user);
                        console.log("in success");
                        this.user = success[0].uid;
                        //alert("out login if");
                        //this.getGroupUsers().insert({uid: this.user, gid: "Lydia's Group" }).done(() => {
                        //    
                        //});
                        callback(this.user);
                    }
                    else {
                        //console.log("in else");
                        this.users.insert({ uid: results.userId }).done(() => {
                            alert("IT WORKED");
                        });
                        //alert("out login else");
                        callback(this.user);
                    }
                }, (error) => {
                        console.log("In error");
                    })

            }, (error) => { });
        }
    }

    logout(): void {
        this.azureClient.logout();
    }


    getUser(): string {
        return this.azureClient.currentUser.userId;
    }

    getUsers(): Microsoft.WindowsAzure.MobileServiceTable {
        this.users = this.users || this.azureClient.getTable('users');
        return this.users;
    }

    getGroups(): Microsoft.WindowsAzure.MobileServiceTable {
        this.groups = this.groups || this.azureClient.getTable('groups');
        return this.groups;
    }

    getGroupUsers(): Microsoft.WindowsAzure.MobileServiceTable {
        this.groupUsers = this.groupUsers || this.azureClient.getTable('groupUsers');
        return this.groupUsers;
    }
}
