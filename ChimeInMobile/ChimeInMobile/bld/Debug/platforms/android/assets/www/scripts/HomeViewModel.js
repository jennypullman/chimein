///<reference path='../scripts/ConstantViewModel.ts' />
var HomeViewModel = (function () {
    function HomeViewModel(constantViewModel, azureHelper, user, groupViewModel) {
        var _this = this;
        this.selection = "";
        this.currentGroups = [];
        this.groupViewModel = groupViewModel;
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
                for (var i = 0; i < success.length; i++) {
                    _this.currentGroups.push(success[i]);
                    var id = "group" + i;
                    console.log(success[i].gid);
                    $("#groupList").append("<tr><td id=" + id + " style='cursor:default'>" + success[i].gid + "</td></tr>");
                    $("#groupList td").click(function () {
                        self.OnPickGroup($(this).text());
                    });
                }
                //this.groups(this.someGroups);
                //alert(self.groups().length);
            }
        }, function (error) {
            //alert("in homes view model: " + error);
        });
    }
    HomeViewModel.prototype.OnShowAllGroups = function () {
        for (var group in this.groups) {
            console.log(group.id);
        }
        document.getElementById("groupList").style.display = "inline";
        //alert("showing all groups");
    };
    HomeViewModel.prototype.OnShowGroupsByDate = function () {
        document.getElementById("groupList").style.display = "inline";
        //alert("showing groups by date");
    };
    HomeViewModel.prototype.OnShowGroupsByCategory = function () {
        document.getElementById("groupList").style.display = "inline";
        //alert("showing groups by category");
    };
    HomeViewModel.prototype.OnShowFavoriteGroups = function () {
        document.getElementById("groupList").style.display = "inline";
        //alert("showing favorite groups");
    };
    HomeViewModel.prototype.OnCreateGroup = function () {
        //alert("creating group");
        document.getElementById("groupTable").style.display = "none";
        document.getElementById("createGroupForm").style.display = "inline";
    };
    HomeViewModel.prototype.OnAddGroup = function () {
        var groupName = document.getElementById("groupNameInput").value;
        var password = document.getElementById("passwordInput").value;

        //alert(groupName);
        //alert(password);
        //this.azureHelper.azureClient.getTable('questions').insert({ id: groupName, password: password }).done((success) => alert("success"));
        document.getElementById("createGroupForm").style.display = "none";
        document.getElementById("groupTable").style.display = "inline";
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
    HomeViewModel.prototype.OnPickGroup = function (elem) {
        alert("picking group");
        alert(elem);
        this.groupViewModel.groupName(elem);
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
