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
                document.getElementById("groupView").style.visibility = "hidden";
                break;
            case viewModel.HOMEVIEWMODEL:
                document.getElementById("homeView").style.visibility = "hidden";
                break;
            case viewModel.POLLBOARDVIEWMODEL:
                document.getElementById("pollBoardView").style.visibility = "hidden";
                break;
            case viewModel.QUESTIONBOARDVIEWMODEL:
                document.getElementById("questionBoardView").style.visibility = "hidden";
                break;
        }
        this.forwardPage.push(this.currentPage);
        this.currentPage = this.previousPage.pop();
        switch (this.currentPage) {
            case viewModel.GROUPVIEWMODEL:
                document.getElementById("groupView").style.visibility = "visible";
                break;
            case viewModel.HOMEVIEWMODEL:
                document.getElementById("homeView").style.visibility = "visible";
                break;
            case viewModel.POLLBOARDVIEWMODEL:
                document.getElementById("pollBoardView").style.visibility = "visible";
                break;
            case viewModel.QUESTIONBOARDVIEWMODEL:
                document.getElementById("questionBoardView").style.visibility = "visible";
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