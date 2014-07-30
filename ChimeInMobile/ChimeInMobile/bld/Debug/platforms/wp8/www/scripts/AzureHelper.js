var AzureHelper = (function () {
    function AzureHelper() {
    }
    //getClient(): void {
    //    this.azureClient = new WindowsAzure.MobileServiceClient(
    //        "https://chimein.azure-mobile.net/",
    //        "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
    //}
    AzureHelper.prototype.login = function () {
        var _this = this;
        this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
        this.azureClient.login("facebook").then(function (results) {
            _this.user = results.userId;
            _this.getUsers();
            _this.getGroupUsers();
            var uids = [];
            alert("holy fuck were here");
            for (var user in _this.azureClient.getTable('users')) {
                alert(user);
                if (user.uid == results.userId) {
                    uids.push(user.uid);
                    alert(user.uid);
                }
            }
            _this.users.where({ uid: results.userId }).read().then(function (success) {
                if (success.length > 0) {
                    console.log("User ID" + _this.user);
                    console.log("in success");
                    _this.user = success[0];
                } else {
                    console.log("in else");
                    _this.users.insert({ uid: results.userId }).done(function () {
                        alert("IT WORKED");
                    });
                }
            }, function (error) {
                console.log("In error");
            });

            _this.groupUsers.where({ uid: results.userId }).read().then(function (success) {
                // success code here
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            alert(error);
        });
        alert(this.groupUsers);
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
        alert(this.groupUsers);
        return this.groupUsers;
    };
    return AzureHelper;
})();
//# sourceMappingURL=AzureHelper.js.map
