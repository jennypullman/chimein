///<reference path='../scripts/ConstantViewModel.ts' />
class GroupViewModel {
    groupName: KnockoutObservable<string>; // array
    constantViewModel: ConstantViewModel;
    azureHelper: AzureHelper;
    currentQuestions: any[] = [];
    constructor(constantViewModel: ConstantViewModel, azureHelper:AzureHelper) {
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        this.groupName = ko.observable(""); // array
    }

    OnShowGroup(): void {
        //alert("yay");
    }
    OnClickQuestionBoard(): void {
        var self = this;
       // alert("Opening question board.");
        document.getElementById("groupView").style.display = "none";
        this.constantViewModel.previousPage.push(viewModel.GROUPVIEWMODEL);
        var questionTable = this.azureHelper.getGroupQuestions();

        questionTable.where({ gid: this.groupName() }).read().then((success) => {
            //alert("in success: " + success);
            if (success.length > 0) {
                //alert("success length: " + success.length);
                for (var i = 0; i < success.length; i++) {
                    this.currentQuestions.push(success[i]);
                    var id: string = "group" + i;
                    $("#questionFeed").append("<tr><td id=" + id + " style='cursor:default'>" + success[i].gid + "</td></tr>");
                }
                //this.groups(this.someGroups);
            }
        }, (error) => {
               // alert("in group view model: " + error);
            });
        document.getElementById("questionView").style.display = "inline";
        this.constantViewModel.currentPage = viewModel.QUESTIONBOARDVIEWMODEL;
    }
    OnClickPollBoard(): void {
        alert("Opening poll board.");
        document.getElementById("groupView").style.display = "none";
        this.constantViewModel.previousPage.push(viewModel.GROUPVIEWMODEL);
        document.getElementById("pollView").style.display = "inline";
        this.constantViewModel.currentPage = viewModel.POLLBOARDVIEWMODEL;
    }
} 