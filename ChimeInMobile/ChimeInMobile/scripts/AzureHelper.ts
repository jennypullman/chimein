class AzureHelper {
    azureClient: Microsoft.WindowsAzure.MobileServiceClient;
    groups: Microsoft.WindowsAzure.MobileServiceTable;

    constructor() {
    }

    login(callback: (client: Microsoft.WindowsAzure.MobileServiceClient) => void) {
        if (this.azureClient) {
            callback(this.azureClient);
        }
        else {
            this.azureClient = new WindowsAzure.MobileServiceClient(
                "https://chimein.azure-mobile.net/",
                "SmtMiptFTkxedMRKLwXOKitBIQxUlW95");
            callback(this.azureClient);
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
