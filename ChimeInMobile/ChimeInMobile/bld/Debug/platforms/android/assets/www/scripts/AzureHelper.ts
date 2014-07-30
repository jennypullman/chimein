
class AzureHelper {
    azureClient: Microsoft.WindowsAzure.MobileServiceClient;
    groups: Microsoft.WindowsAzure.MobileServiceTable;
    users: Microsoft.WindowsAzure.MobileServiceTable;
    groupUsers: Microsoft.WindowsAzure.MobileServiceTable;
    user: string;

    constructor() {
    }

    //getClient(): void {
    //    this.azureClient = new WindowsAzure.MobileServiceClient(
    //        "https://chimein.azure-mobile.net/",
    //        "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
    //}


    login() {
        this.azureClient = new WindowsAzure.MobileServiceClient(
            "https://chimein.azure-mobile.net/",
            "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
        var res;
        this.azureClient.login("facebook").then((results) => {
            res = results;
            this.user = results.userId;
            this.getUsers();
            this.getGroupUsers();
            var uids: string[] = [];
            alert("holy fuck were here");
            for (var user in this.azureClient.getTable('users')) {
                alert(user);
                if (user.uid == results.userId) {
                    uids.push(user.uid);
                    alert(user.uid);
                }
            }
            this.users.where({ uid: results.userId }).read().then((success) => {
                if (success.length > 0) {
                    console.log("User ID" + this.user);
                    console.log("in success");
                    this.user = success[0];
                }
                else {
                    console.log("in else");
                    this.users.insert({ uid: results.userId }).done(() => {
                        alert("IT WORKED");
                    });
                }
            }, (error) => {
                    console.log("In error");
                })


            this.groupUsers.where({ uid: results.userId }).read().then((success) => {
                // success code here
            }, (error) => {
                    console.log(error);
                });
        }, (error) => {
            alert(error);
        });
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
        alert(this.groupUsers);
        return this.groupUsers;
    }
}