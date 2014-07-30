class ConstantViewModel {

    previousPage: viewModel[] = [];
    forwardPage: viewModel[] = [];
    currentPage: viewModel = viewModel.HOMEVIEWMODEL;
    constructor() {
    }
    OnBack() {
        if (this.previousPage.length <= 0) {
            return;
        }
        switch (this.currentPage) {
            case viewModel.GROUPVIEWMODEL:
                document.getElementById("groupView").style.display = "none";
                break;
            case viewModel.HOMEVIEWMODEL:
                document.getElementById("homeView").style.display = "none";
                break;
            case viewModel.POLLBOARDVIEWMODEL:
                document.getElementById("pollView").style.display = "none";
                break;
            case viewModel.QUESTIONBOARDVIEWMODEL:
                document.getElementById("questionView").style.display = "none";
                break;
        }
        this.forwardPage.push(this.currentPage);
        this.currentPage = this.previousPage.pop();
        switch (this.currentPage) {
            case viewModel.GROUPVIEWMODEL:
                document.getElementById("groupView").style.display = "inline";
                break;
            case viewModel.HOMEVIEWMODEL:
                document.getElementById("homeView").style.display = "inline";
                break;
            case viewModel.POLLBOARDVIEWMODEL:
                document.getElementById("pollView").style.display = "inline";
                break;
            case viewModel.QUESTIONBOARDVIEWMODEL:
                document.getElementById("questionView").style.display = "inline";
                break;
        }
    }
} 
enum viewModel {
    HOMEVIEWMODEL,
    GROUPVIEWMODEL,
    QUESTIONBOARDVIEWMODEL,
    POLLBOARDVIEWMODEL
}