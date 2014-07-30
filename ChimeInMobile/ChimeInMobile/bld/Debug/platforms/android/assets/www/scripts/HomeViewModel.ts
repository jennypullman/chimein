///<reference path='../scripts/ConstantViewModel.ts' />
class HomeViewModel {
    selection: string = "";
    constantViewModel: ConstantViewModel;
    constructor(constantViewModel: ConstantViewModel) {
        this.constantViewModel = constantViewModel;
    }
    OnShowAllGroups(): void {
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
        document.getElementById("homeView").style.visibility = "hidden";
        this.constantViewModel.previousPage.push(viewModel.HOMEVIEWMODEL);
        document.getElementById("groupView").style.visibility = "visible";
        this.constantViewModel.currentPage = viewModel.GROUPVIEWMODEL;
    }
    Refresh(): void {
    }
}  