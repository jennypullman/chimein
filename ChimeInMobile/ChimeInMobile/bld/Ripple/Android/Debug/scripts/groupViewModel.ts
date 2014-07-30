class GroupViewModel {
    groupName: KnockoutObservable<string>; // array
    constructor() {
        this.groupName = ko.observable("groupName"); // array
    }

    getGroup(): void {
        
    }
    OnShowGroup(): void {
        alert("yay");
    }
} 