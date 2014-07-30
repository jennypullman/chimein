///<reference path='../scripts/ConstantViewModel.ts' />
var HomeViewModel = (function () {
    function HomeViewModel(constantViewModel, azureHelper, user) {
        this.selection = "";
        var self = this;

        //alert("in constructor");
        self.constantViewModel = constantViewModel;
        var groupsTable = azureHelper.azureClient.getTable("groupUsers");

        //alert("azure user: " + user);
        //alert("groups table: " + groupsTable);
        //alert(groupsTable.length);
        //for (var i = 0; i < groupsTable.length; i++) {
        //    alert(groupsTable[i]);
        //}
        self.groups = ko.observableArray([]);
        self.groups.subscribe(function (newValue) {
            alert("The person's new name is " + newValue);
        });

        //this.someGroups = [];
        //this.groups.push("foo");
        //alert(this.groups.peek());
        groupsTable.where({ uid: user }).read().then(function (success) {
            //alert("in success: " + success);
            if (success.length > 0) {
                alert("success length: " + success.length);
                for (var i = 0; i < success.length; i++) {
                    $("#groupList").append("<tr><td>" + success[i].gid + "</td></tr>");
                }

                //this.groups(this.someGroups);
                alert(self.groups().length);
            }
        }, function (error) {
            alert("in homes view model: " + error);
        });
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
