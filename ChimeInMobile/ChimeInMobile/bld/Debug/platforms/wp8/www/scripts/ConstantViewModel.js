var ConstantViewModel = (function () {
    function ConstantViewModel() {
        this.previousPage = [];
        this.forwardPage = [];
        this.currentPage = 0 /* HOMEVIEWMODEL */;
    }
    ConstantViewModel.prototype.OnBack = function () {
        if (this.previousPage.length <= 0) {
            return;
        }
        switch (this.currentPage) {
            case 1 /* GROUPVIEWMODEL */:
                document.getElementById("groupView").style.visibility = "hidden";
                break;
            case 0 /* HOMEVIEWMODEL */:
                document.getElementById("homeView").style.visibility = "hidden";
                break;
            case 3 /* POLLBOARDVIEWMODEL */:
                document.getElementById("pollBoardView").style.visibility = "hidden";
                break;
            case 2 /* QUESTIONBOARDVIEWMODEL */:
                document.getElementById("questionBoardView").style.visibility = "hidden";
                break;
        }
        this.forwardPage.push(this.currentPage);
        this.currentPage = this.previousPage.pop();
        switch (this.currentPage) {
            case 1 /* GROUPVIEWMODEL */:
                document.getElementById("groupView").style.visibility = "visible";
                break;
            case 0 /* HOMEVIEWMODEL */:
                document.getElementById("homeView").style.visibility = "visible";
                break;
            case 3 /* POLLBOARDVIEWMODEL */:
                document.getElementById("pollBoardView").style.visibility = "visible";
                break;
            case 2 /* QUESTIONBOARDVIEWMODEL */:
                document.getElementById("questionBoardView").style.visibility = "visible";
                break;
        }
    };
    return ConstantViewModel;
})();
var viewModel;
(function (viewModel) {
    viewModel[viewModel["HOMEVIEWMODEL"] = 0] = "HOMEVIEWMODEL";
    viewModel[viewModel["GROUPVIEWMODEL"] = 1] = "GROUPVIEWMODEL";
    viewModel[viewModel["QUESTIONBOARDVIEWMODEL"] = 2] = "QUESTIONBOARDVIEWMODEL";
    viewModel[viewModel["POLLBOARDVIEWMODEL"] = 3] = "POLLBOARDVIEWMODEL";
})(viewModel || (viewModel = {}));
//# sourceMappingURL=ConstantViewModel.js.map
