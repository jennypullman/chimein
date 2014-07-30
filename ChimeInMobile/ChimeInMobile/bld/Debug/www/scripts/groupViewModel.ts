///<reference path='../scripts/ConstantViewModel.ts' />
class GroupViewModel {
    groupName: KnockoutObservable<string>; // array
    constantViewModel: ConstantViewModel;
    constructor(constantViewModel: ConstantViewModel) {
        this.constantViewModel = constantViewModel;
        this.groupName = ko.observable("groupName"); // array
    }

    getGroup(): void {
        
    }
    OnShowGroup(): void {
        //alert("yay");
    }
    OnClickQuestionBoard(): void {
        //alert("Opening question board.");
        document.getElementById("groupView").style.visibility = "hidden";
        document.getElementById("questionView").style.visibility = "visible";
    }
    OnClickPollBoard(): void {
        //alert("Opening poll board.");
        document.getElementById("groupView").style.visibility = "hidden";
        this.constantViewModel.previousPage.push(viewModel.GROUPVIEWMODEL);
        document.getElementById("pollView").style.visibility = "visible";
        this.constantViewModel.currentPage = viewModel.POLLBOARDVIEWMODEL;
    }
} 