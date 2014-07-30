class AzureHelper {
    azureClient: Microsoft.WindowsAzure.MobileServiceClient;
    groups: Microsoft.WindowsAzure.MobileServiceTable;

    constructor() {
    }

    getClient(): void {
        this.azureClient = new WindowsAzure.MobileServiceClient(
            "https://chimein.azure-mobile.net/",
            "SmtMiptFTkxedMRKLwXOKitBIQxUlW95");
    }

    login() {
        this.azureClient.login("facebook").then((results) => { }, (error) => { });
    }

    logout(): void {
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
