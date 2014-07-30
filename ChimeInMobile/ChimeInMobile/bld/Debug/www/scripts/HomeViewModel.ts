class HomeViewModel {
    selection: string = "";
    constructor() {
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
        document.getElementById("groupView").style.visibility = "visible";
    }
    Refresh(): void {
    }
}  