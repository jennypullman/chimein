﻿var AzureHelper = (function () {
    function AzureHelper() {
    }
    AzureHelper.prototype.login = function () {
        if (this.azureClient) {
        } else {
            this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "SmtMiptFTkxedMRKLwXOKitBIQxUlW95");
        }
    };

    AzureHelper.prototype.logout = function () {
        this.azureClient.logout();
    };

    AzureHelper.prototype.getUser = function () {
        return this.azureClient.currentUser.userId;
    };

    AzureHelper.prototype.getGroups = function () {
        this.groups = this.groups || this.azureClient.getTable('groups');
        return this.groups;
    };
    return AzureHelper;
})();
//# sourceMappingURL=AzureHelper.js.map
