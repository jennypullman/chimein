var AzureHelper = (function () {
    function AzureHelper() {
    }
    AzureHelper.prototype.getClient = function (callback) {
        //alert("in get client");
        if (this.azureClient) {
            //alert("out get client if");
            callback(this.azureClient);
        } else {
            this.azureClient = new WindowsAzure.MobileServiceClient("https://chimein.azure-mobile.net/", "JXYobPzySaNOpAAksQlMfAEUzGQcaB35");

            //alert("out get client");
            callback(this.azureClient);
        }
    };

    AzureHelper.prototype.login = function (azureClient, callback) {
        var _this = this;
        //alert("in login");
        if (this.user) {
            //alert("in get user");
            callback(this.user);
        } else {
            //alert("in else login");
            //alert(this.azureClient);
            azureClient.login("facebook").then(function (results) {
                console.log(results);
                _this.user = results.userId.split(":")[1];
                ;

                //alert(this.user);
                //alert("in facebook, user: " + this.user);
                //this.loggedIn = true;
                _this.getUsers();

                _this.users.where({ uid: _this.user }).read().then(function (success) {
                    if (success.length > 0) {
                        console.log("User ID" + _this.user);
                        console.log("in success");

                        //alert("out login if");
                        //this.getGroupUsers().insert({uid: this.user, gid: "Lydia's Group" }).done(() => {
                        //
                        //});
                        callback(_this.user);
                    } else {
                        //console.log("in else");
                        _this.users.insert({ uid: results.userId }).done(function () {
                            //alert("eIT WORKED");
                        });

                        //alert("out login else");
                        callback(_this.user);
                    }
                }, function (error) {
                    console.log("In error");
                });
            }, function (error) {
            });
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
    AzureHelper.prototype.getGroupQuestions = function () {
        this.groupQuestions = this.groupQuestions || this.azureClient.getTable('questions');
        return this.groupQuestions;
    };
    return AzureHelper;
})();
//# sourceMappingURL=AzureHelper.js.map
