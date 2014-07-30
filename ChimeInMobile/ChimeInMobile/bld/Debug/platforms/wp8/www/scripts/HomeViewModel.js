///<reference path='../scripts/ConstantViewModel.ts' />
var HomeViewModel = (function () {
    function HomeViewModel(constantViewModel, azureHelper) {
        this.selection = "";
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        this.groups = ko.observableArray([]);
        for (var i = 0; i < azureHelper.azureClient.getTable("groupUsers").length; i++) {
            this.groups.push(azureHelper.groupUsers[i]);
            alert(this.groups[i]);
        }
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
