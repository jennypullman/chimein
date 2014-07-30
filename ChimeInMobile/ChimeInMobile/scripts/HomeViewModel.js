///<reference path='../scripts/ConstantViewModel.ts' />
var HomeViewModel = (function () {
    function HomeViewModel(constantViewModel, azureHelper) {
        this.selection = "";
        alert("in constructor");
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        var groupsTable = azureHelper.azureClient.getTable("groupUsers");
        /*alert("azure user: " + user);
        //alert("groups table: " + groupsTable);
        //alert(groupsTable.length);
        //for (var i = 0; i < groupsTable.length; i++) {
        //    alert(groupsTable[i]);
        //}
        groupsTable.where({ uid: user }).read().then((success) => {
        alert("in success: " + success);
        if (success.length > 0) {
        for (var i = 0; i < success.length; i++) {
        this.groups.push(success[i].gid);
        alert("groups " + i + " " + success[i].gid);
        }
        }
        }, (error) => {
        alert("in homes view model: " + error);
        });*/
    }
    HomeViewModel.prototype.OnShowAllGroups = function () {
        for (var group in this.groups) {
            console.log(group.id);
        }

        //document.getElementById("groupList").style.display = "inline";
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

    //OnChangeGroups(): void {
    //    alert("changing group");
    //    var select = <HTMLSelectElement> document.getElementById("showGroups");
    //    this.selection = select.options[select.selectedIndex].id;
    //    switch (this.selection) {
    //        case "allGroups":
    //            this.OnShowAllGroups();
    //            break;
    //        case "byDate":
    //            this.OnShowGroupsByDate();
    //            break;
    //        case "byCategory":
    //            this.OnShowGroupsByCategory();
    //            break;
    //        case "favoriteGroups":
    //            this.OnShowFavoriteGroups();
    //            break;
    //    }
    //}
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
