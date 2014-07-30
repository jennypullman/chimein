///<reference path='../scripts/ConstantViewModel.ts' />
var GroupViewModel = (function () {
    function GroupViewModel(constantViewModel) {
        this.constantViewModel = constantViewModel;
        this.groupName = ko.observable("groupName"); // array
    }
    GroupViewModel.prototype.getGroup = function () {
    };
    GroupViewModel.prototype.OnShowGroup = function () {
        alert("yay");
    };
    GroupViewModel.prototype.OnClickQuestionBoard = function () {
        alert("Opening question board.");
        document.getElementById("groupView").style.visibility = "hidden";
        document.getElementById("questionView").style.visibility = "visible";
    };
    GroupViewModel.prototype.OnClickPollBoard = function () {
        alert("Opening poll board.");
        document.getElementById("groupView").style.visibility = "hidden";
        this.constantViewModel.previousPage.push(1 /* GROUPVIEWMODEL */);
        document.getElementById("pollView").style.visibility = "visible";
        this.constantViewModel.currentPage = 3 /* POLLBOARDVIEWMODEL */;
    };
    return GroupViewModel;
})();
//# sourceMappingURL=groupViewModel.js.map
