///<reference path='../scripts/ConstantViewModel.ts' />
var HomeViewModel = (function () {
<<<<<<< HEAD
    function HomeViewModel(constantViewModel, azureHelper, user) {
        var _this = this;
=======
    function HomeViewModel(constantViewModel, azureHelper) {
>>>>>>> testiiiinnnng
        this.selection = "";
        alert("in constructor");
        this.constantViewModel = constantViewModel;
<<<<<<< HEAD
        var groupsTable = azureHelper.azureClient.getTable("groupUsers");
        alert("azure user: " + user);

        //alert("groups table: " + groupsTable);
        //alert(groupsTable.length);
        //for (var i = 0; i < groupsTable.length; i++) {
        //    alert(groupsTable[i]);
        //}
        groupsTable.where({ uid: user }).read().then(function (success) {
            alert("in success: " + success);
            if (success.length > 0) {
                for (var i = 0; i < success.length; i++) {
                    _this.groups.push(success[i].gid);
                    alert("groups " + i + " " + success[i].gid);
                }
            }
        }, function (error) {
            alert("in homes view model: " + error);
        });
=======
        this.azureHelper = azureHelper;
        this.groups = ko.observableArray([]);
        for (var i = 0; i < azureHelper.azureClient.getTable("groupUsers").length; i++) {
            this.groups.push(azureHelper.groupUsers[i]);
            alert(this.groups[i]);
        }
>>>>>>> testiiiinnnng
    }
    HomeViewModel.prototype.OnShowAllGroups = function () {
        for (var group in this.groups) {
            console.log(group.id);
        }
        document.getElementById("groupList").style.display = "inline";
        alert("showing all groups");
    };
    HomeViewModel.prototype.OnShowGroupsByDate = function () {
        alert("showing groups by date");
    };
    HomeViewModel.prototype.OnShowGroupsByCategory = function () {
        alert("showing groups by category");
    };
    HomeViewModel.prototype.OnShowFavoriteGroups = function () {
        alert("showing favorite groups");
    };
    HomeViewModel.prototype.OnCreateGroup = function () {
        alert("creating group");
    };
    HomeViewModel.prototype.OnChangeGroups = function () {
        alert("changing group");
        var select = document.getElementById("showGroups");
        this.selection = select.options[select.selectedIndex].id;
        switch (this.selection) {
            case "allGroups":
                this.OnShowAllGroups();
                break;
            case "byDate":
                this.OnShowGroupsByDate();
                break;
            case "byCategory":
                this.OnShowGroupsByCategory();
                break;
            case "favoriteGroups":
                this.OnShowFavoriteGroups();
                break;
        }
    };
    HomeViewModel.prototype.OnPickGroup = function () {
        alert("picking group");
        document.getElementById("homeView").style.display = "none";
        this.constantViewModel.previousPage.push(0 /* HOMEVIEWMODEL */);
        document.getElementById("groupView").style.display = "inline";
        this.constantViewModel.currentPage = 1 /* GROUPVIEWMODEL */;
    };
    HomeViewModel.prototype.getGroups = function () {
        return this.azureHelper.groups;
    };
    HomeViewModel.prototype.Refresh = function () {
    };
    return HomeViewModel;
})();
//# sourceMappingURL=HomeViewModel.js.map
