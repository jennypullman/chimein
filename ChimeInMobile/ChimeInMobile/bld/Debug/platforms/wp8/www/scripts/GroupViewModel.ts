///<reference path='../scripts/ConstantViewModel.ts' />
class GroupViewModel {
    groupName: KnockoutObservable<string>; // array
    constantViewModel: ConstantViewModel;
    azureHelper: AzureHelper;
    constructor(constantViewModel: ConstantViewModel, azureHelper:AzureHelper) {
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        this.groupName = ko.observable("groupName"); // array
    }

    OnShowGroup(): void {
        alert("yay");
    }
    OnClickQuestionBoard(): void {
        alert("Opening question board.");
        document.getElementById("groupView").style.display = "none";
        document.getElementById("questionView").style.display = "inline";
    }
    OnClickPollBoard(): void {
        alert("Opening poll board.");
        document.getElementById("groupView").style.display = "none";
        this.constantViewModel.previousPage.push(viewModel.GROUPVIEWMODEL);
        document.getElementById("pollView").style.display = "inline";
        this.constantViewModel.currentPage = viewModel.POLLBOARDVIEWMODEL;
    }
} 