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
                document.getElementById("groupView").style.display = "none";
                break;
            case 0 /* HOMEVIEWMODEL */:
                document.getElementById("homeView").style.display = "none";
                break;
            case 3 /* POLLBOARDVIEWMODEL */:
                document.getElementById("pollView").style.display = "none";
                break;
            case 2 /* QUESTIONBOARDVIEWMODEL */:
                document.getElementById("questionView").style.display = "none";
                break;
        }
        this.forwardPage.push(this.currentPage);
        this.currentPage = this.previousPage.pop();
        switch (this.currentPage) {
            case 1 /* GROUPVIEWMODEL */:
                document.getElementById("groupView").style.display = "inline";
                break;
            case 0 /* HOMEVIEWMODEL */:
                document.getElementById("homeView").style.display = "inline";
                break;
            case 3 /* POLLBOARDVIEWMODEL */:
                document.getElementById("pollView").style.display = "inline";
                break;
            case 2 /* QUESTIONBOARDVIEWMODEL */:
                document.getElementById("questionView").style.display = "inline";
                break;
        }
    };
    ConstantViewModel.prototype.OnGoHome = function () {
        this.previousPage.push(this.currentPage);
        switch (this.currentPage) {
            case 1 /* GROUPVIEWMODEL */:
                document.getElementById("groupView").style.display = "none";
                break;
            case 0 /* HOMEVIEWMODEL */:
                document.getElementById("homeView").style.display = "none";
                break;
            case 3 /* POLLBOARDVIEWMODEL */:
                document.getElementById("pollView").style.display = "none";
                break;
            case 2 /* QUESTIONBOARDVIEWMODEL */:
                document.getElementById("questionView").style.display = "none";
                break;
        }
        this.currentPage = 0 /* HOMEVIEWMODEL */;
        document.getElementById("homeView").style.display = "inline";
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
