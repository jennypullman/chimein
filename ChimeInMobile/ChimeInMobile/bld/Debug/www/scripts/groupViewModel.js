///<reference path='../scripts/ConstantViewModel.ts' />
var GroupViewModel = (function () {
    function GroupViewModel(constantViewModel, azureHelper) {
        this.currentQuestions = [];
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
        this.groupName = ko.observable(""); // array
    }
    GroupViewModel.prototype.OnShowGroup = function () {
        //alert("yay");
    };
    GroupViewModel.prototype.OnClickQuestionBoard = function () {
        var _this = this;
        var self = this;

        // alert("Opening question board.");
        document.getElementById("groupView").style.display = "none";
        this.constantViewModel.previousPage.push(1 /* GROUPVIEWMODEL */);
        var questionTable = this.azureHelper.getGroupQuestions();

        questionTable.where({ gid: this.groupName() }).read().then(function (success) {
            //alert("in success: " + success);
            if (success.length > 0) {
                for (var i = 0; i < success.length; i++) {
                    _this.currentQuestions.push(success[i]);
                    var id = "group" + i;
                    $("#questionFeed").append("<tr><td id=" + id + " style='cursor:default'>" + success[i].gid + "</td></tr>");
                }
                //this.groups(this.someGroups);
            }
        }, function (error) {
            // alert("in group view model: " + error);
        });
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
//# sourceMappingURL=GroupViewModel.js.map
