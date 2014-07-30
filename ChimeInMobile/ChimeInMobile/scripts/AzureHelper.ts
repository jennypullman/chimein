class AzureHelper {
    azureClient: Microsoft.WindowsAzure.MobileServiceClient;
    groups: Microsoft.WindowsAzure.MobileServiceTable;
    users: Microsoft.WindowsAzure.MobileServiceTable;
    groupUsers: Microsoft.WindowsAzure.MobileServiceTable;
    user: string;

    constructor() {
    }

    getClient(callback: (client: Microsoft.WindowsAzure.MobileServiceClient) => void): void {
        if (this.azureClient) {
            callback(this.azureClient);
        }
        else {
            this.azureClient = new WindowsAzure.MobileServiceClient(
                "https://chimein.azure-mobile.net/",
                "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
            callback(this.azureClient);
        }
    }

    login(callback: (user: any) => void): void {
        if (this.user) {
            callback(this.user);
        }
        else {
            //alert("in login");
            this.azureClient.login("facebook").then((results) => {
                //alert("in facebook");
                this.user = results.userId;
                this.getUsers();
                this.getGroupUsers();

                this.users.where({ uid: results.userId }).read().then((success) => {
                    if (success.length > 0) {
                        console.log("User ID" + this.user);
                        console.log("in success");
                        this.user = success[0];
                    }
                    else {
                        console.log("in else");
                        this.users.insert({ uid: results.userId }).done(() => {
                            //alert("IT WORKED");
                        });
                    }
                }, (error) => {
                        console.log("In error");
                    })

            }, (error) => { });
            callback(this.user);
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

