var AzureHelper = (function () {
    function AzureHelper() {
    }
    AzureHelper.prototype.getClient = function (callback) {
        if (this.azureClient) {
            callback(this.azureClient);
        } else {
            this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
            callback(this.azureClient);
        }
    };

    AzureHelper.prototype.login = function (callback) {
        var _this = this;
        if (this.user) {
            callback(this.user);
        } else {
            //alert("in login");
            this.azureClient.login("facebook").then(function (results) {
                //alert("in facebook");
                _this.user = results.userId;
                _this.getUsers();
                _this.getGroupUsers();

                _this.users.where({ uid: results.userId }).read().then(function (success) {
                    if (success.length > 0) {
                        console.log("User ID" + _this.user);
                        console.log("in success");
                        _this.user = success[0];
                    } else {
                        console.log("in else");
                        _this.users.insert({ uid: results.userId }).done(function () {
                            //alert("IT WORKED");
                        });
                    }
                }, function (error) {
                    console.log("In error");
                });
            }, function (error) {
            });
            callback(this.user);
        }
    };

    AzureHelper.prototype.logout = function () {
        this.azureClient.logout();
    };

    AzureHelper.prototype.getUser = function () {
        return this.azureClient.currentUser.userId;
    };

    AzureHelper.prototype.getUsers = function () {
        this.users = this.users || this.azureClient.getTable('users');
        return this.users;
    };

    AzureHelper.prototype.getGroups = function () {
        this.groups = this.groups || this.azureClient.getTable('groups');
        return this.groups;
    };

    AzureHelper.prototype.getGroupUsers = function () {
        this.groupUsers = this.groupUsers || this.azureClient.getTable('groupUsers');
        return this.groupUsers;
    };
    return AzureHelper;
})();
//# sourceMappingURL=AzureHelper.js.map
