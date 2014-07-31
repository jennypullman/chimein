///<reference path='../scripts/ConstantViewModel.ts' />
class HomeViewModel {
    selection: string = "";
    constantViewModel: ConstantViewModel;
    azureHelper: AzureHelper;
    groups: KnockoutObservableArray<any>;
    someGroups: Array<any>;
    currentGroups: any[] = [];
    groupViewModel: GroupViewModel;
    constructor(constantViewModel: ConstantViewModel, azureHelper: AzureHelper, user, groupViewModel:GroupViewModel) {
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
        groupsTable.where({ uid: user }).read().then((success) => {
            //alert("in success: " + success);
            if (success.length > 0) {
                //alert("success length: " + success.length);
                for (var i = 0; i < success.length; i++) {
                    this.currentGroups.push(success[i]);
                    var id: string = "group" + i;
                    console.log(success[i].gid);
                    $("#groupList").append("<tr><td id=" + id + " style='cursor:default'>" + success[i].gid + "</td></tr>");
                    $("#groupList td").click(function () {
                        self.OnPickGroup($(this).text())
                    });
                }
                //this.groups(this.someGroups);
                //alert(self.groups().length);
            }
        }, (error) => {
            //alert("in homes view model: " + error);
        });
    }
    OnShowAllGroups(): void {
        for (var group in this.groups) {
            console.log(group.id);
        }
        document.getElementById("groupList").style.display = "inline";
        //alert("showing all groups");
    }
    OnShowGroupsByDate(): void {
        document.getElementById("groupList").style.display = "inline";
        //alert("showing groups by date");
    }
    OnShowGroupsByCategory(): void {
        document.getElementById("groupList").style.display = "inline";
        //alert("showing groups by category");
    }
    OnShowFavoriteGroups(): void {
        document.getElementById("groupList").style.display = "inline";
        //alert("showing favorite groups");
    }
    OnCreateGroup(): void {
        //alert("creating group");
        document.getElementById("groupTable").style.display = "none";
        document.getElementById("createGroupForm").style.display = "inline";
    }
    OnAddGroup(): void {
        var groupName: string = (<HTMLInputElement>document.getElementById("groupNameInput")).value;
        var password: string = (<HTMLInputElement>document.getElementById("passwordInput")).value;
        //alert(groupName);
        //alert(password);
        //this.azureHelper.azureClient.getTable('questions').insert({ id: groupName, password: password }).done((success) => alert("success"));
        document.getElementById("createGroupForm").style.display = "none";
        document.getElementById("groupTable").style.display = "inline";
    }
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
    OnPickGroup(elem: string): void {
        alert("picking group");
        alert(elem);
        this.groupViewModel.groupName(elem);
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