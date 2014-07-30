var AzureHelper = (function () {
    function AzureHelper() {
    }
    AzureHelper.prototype.getClient = function () {
        this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
    };

    AzureHelper.prototype.login = function () {
        this.azureClient.login("facebook").then(function (results) {
        }, function (error) {
        });
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
