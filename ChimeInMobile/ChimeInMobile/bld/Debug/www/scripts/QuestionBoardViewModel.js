///<reference path='../scripts/ConstantViewModel.ts' />
var QuestionBoardViewModel = (function () {
    function QuestionBoardViewModel(constantViewModel, azureHelper, groupViewModel) {
        this.constantViewModel = constantViewModel;
        this.groupViewModel = groupViewModel;
        this.azureHelper = azureHelper;
    }
    QuestionBoardViewModel.prototype.OnAddQuestion = function () {
        var text = document.getElementById("questionArea").value;

        // alert(text);
        this.azureHelper.groupQuestions.insert({ gid: "Seattle Mayor Speech 8/1/14", textcontent: text, rating: 0 });
        $("#questionFeed").append("<tr><td>" + text + "</td></tr>");
    };
    return QuestionBoardViewModel;
})();
//# sourceMappingURL=QuestionBoardViewModel.js.map
