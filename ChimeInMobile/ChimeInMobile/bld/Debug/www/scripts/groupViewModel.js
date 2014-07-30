///<reference path='../scripts/ConstantViewModel.ts' />
var GroupViewModel = (function () {
    function GroupViewModel(constantViewModel, azureHelper) {
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        this.groupName = ko.observable("groupName"); // array
    }
    GroupViewModel.prototype.OnShowGroup = function () {
        alert("yay");
    };
    GroupViewModel.prototype.OnClickQuestionBoard = function () {
        alert("Opening question board.");
        document.getElementById("groupView").style.display = "none";
        this.constantViewModel.previousPage.push(1 /* GROUPVIEWMODEL */);
        document.getElementById("questionView").style.display = "inline";
        this.constantViewModel.currentPage = 2 /* QUESTIONBOARDVIEWMODEL */;
    };
    GroupViewModel.prototype.OnClickPollBoard = function () {
        alert("Opening poll board.");
        document.getElementById("groupView").style.display = "none";
        this.constantViewModel.previousPage.push(1 /* GROUPVIEWMODEL */);
        document.getElementById("pollView").style.display = "inline";
        this.constantViewModel.currentPage = 3 /* POLLBOARDVIEWMODEL */;
    };
    return GroupViewModel;
})();
//# sourceMappingURL=groupViewModel.js.map
