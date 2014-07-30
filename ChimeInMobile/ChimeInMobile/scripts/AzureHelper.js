var AzureHelper = (function () {
    //loggedIn: boolean;
    function AzureHelper() {
    }
<<<<<<< HEAD
    AzureHelper.prototype.getClient = function (callback) {
        alert("in get client");
        if (this.azureClient) {
            alert("out get client if");
            callback(this.azureClient);
        } else {
            this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
            alert("out get client");
            callback(this.azureClient);
        }
    };

    AzureHelper.prototype.login = function (azureClient, callback) {
        var _this = this;
        alert("in login");
        if (this.user) {
            alert("in get user");
            callback(this.user);
        } else {
            alert("in else login");
            alert(this.azureClient);
            azureClient.login("facebook").then(function (results) {
                alert("in facebook");
                _this.user = results.userId;
                alert("in facebook, user: " + _this.user);

                //this.loggedIn = true;
                _this.getUsers();

                _this.users.where({ uid: results.userId }).read().then(function (success) {
                    if (success.length > 0) {
                        console.log("User ID" + _this.user);
                        console.log("in success");
                        _this.user = success[0].uid;
                        alert("out login if");
                        callback(_this.user);
                    } else {
                        console.log("in else");
                        _this.users.insert({ uid: results.userId }).done(function () {
                            alert("IT WORKED");
                        });
                        alert("out login else");
                        callback(_this.user);
                    }
                }, function (error) {
                    console.log("In error");
                });
            }, function (error) {
            });
        }
=======
    //getClient(): void {
    //    this.azureClient = new WindowsAzure.MobileServiceClient(
    //        "https://chimein.azure-mobile.net/",
    //        "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
    //}
    AzureHelper.prototype.login = function () {
        var _this = this;
        this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");
        var res;
        this.azureClient.login("facebook").then(function (results) {
            res = results;
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
>>>>>>> testiiiinnnng
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
<<<<<<< HEAD
=======
        alert(this.groupUsers);
>>>>>>> testiiiinnnng
        return this.groupUsers;
    };
    return AzureHelper;
})();
//# sourceMappingURL=AzureHelper.js.map
