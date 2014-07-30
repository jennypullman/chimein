///<reference path='../scripts/ConstantViewModel.ts' />
class HomeViewModel {
    selection: string = "";
    constantViewModel: ConstantViewModel;
<<<<<<< HEAD
    groups: KnockoutObservableArray<any>;
    constructor(constantViewModel: ConstantViewModel, azureHelper: AzureHelper, user) {
        alert("in constructor");
        this.constantViewModel = constantViewModel;
        var groupsTable = azureHelper.azureClient.getTable("groupUsers");
        alert("azure user: " + user);
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
        });
=======
    azureHelper: AzureHelper;
    groups: KnockoutObservableArray<any>;
    constructor(constantViewModel: ConstantViewModel, azureHelper: AzureHelper) {
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        this.groups = ko.observableArray([]);
        for (var i = 0; i < azureHelper.azureClient.getTable("groupUsers").length; i++) {
            this.groups.push(azureHelper.groupUsers[i]);
            alert(this.groups[i]);
        }
>>>>>>> testiiiinnnng
    }
    OnShowAllGroups(): void {
        for (var group in this.groups) {
            console.log(group.id);
        }
        document.getElementById("groupList").style.display = "inline";
        alert("showing all groups");
    }
    OnShowGroupsByDate(): void {
        alert("showing groups by date");
    }
    OnShowGroupsByCategory(): void {
        alert("showing groups by category");
    }
    OnShowFavoriteGroups(): void {
        alert("showing favorite groups");
    }
    OnCreateGroup(): void {
        alert("creating group");
    }
    OnChangeGroups(): void {
        alert("changing group");
        var select = <HTMLSelectElement> document.getElementById("showGroups");
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
    }
    OnPickGroup(): void {
        alert("picking group");
        document.getElementById("homeView").style.display = "none";
        this.constantViewModel.previousPage.push(viewModel.HOMEVIEWMODEL);
        document.getElementById("groupView").style.display = "inline";
        this.constantViewModel.currentPage = viewModel.GROUPVIEWMODEL;
    }
    getGroups(): Microsoft.WindowsAzure.MobileServiceTable {
        return this.azureHelper.groups;
    }
    Refresh(): void {
    }
}  