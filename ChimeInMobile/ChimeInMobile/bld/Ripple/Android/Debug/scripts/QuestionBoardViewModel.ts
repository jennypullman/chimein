///<reference path='../scripts/ConstantViewModel.ts' />
class QuestionBoardViewModel {
    constantViewModel: ConstantViewModel;
    azureHelper: AzureHelper;
    groupViewModel: GroupViewModel;
    constructor(constantViewModel: ConstantViewModel, azureHelper: AzureHelper, groupViewModel: GroupViewModel) {
        this.constantViewModel = constantViewModel;
        this.groupViewModel = groupViewModel;
        this.azureHelper = azureHelper;
    }
    OnAddQuestion() {
        var text: string = (<HTMLButtonElement>document.getElementById("questionArea")).value;
       // alert(text);
        this.azureHelper.groupQuestions.insert({ gid: "Seattle Mayor Speech 8/1/14", textcontent: text, rating: 0 });
        $("#questionFeed").append("<tr><td>" + text + "</td></tr>");
    }
} 