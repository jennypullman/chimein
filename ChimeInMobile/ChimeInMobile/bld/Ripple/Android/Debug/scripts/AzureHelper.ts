class AzureHelper {
    azureClient: Microsoft.WindowsAzure.MobileServiceClient;
    groups: Microsoft.WindowsAzure.MobileServiceTable;

    constructor() {
    }

    login() {
        if (this.azureClient) {
        }
        else {
            this.azureClient = new WindowsAzure.MobileServiceClient(
                "https://chimein.azure-mobile.net/",
                "SmtMiptFTkxedMRKLwXOKitBIQxUlW95");
        }
    }

    logout() {
        this.azureClient.logout();
    }

    getUser(): string {
        return this.azureClient.currentUser.userId;
    }

    getGroups(): Microsoft.WindowsAzure.MobileServiceTable {
        this.groups = this.groups || this.azureClient.getTable('groups');
        return this.groups;
    }
}
