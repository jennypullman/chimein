///<reference path='../scripts/ConstantViewModel.ts' />
class PollBoardViewModel {
    constantViewModel: ConstantViewModel;
    azureHelper: AzureHelper;
    constructor(constantViewModel: ConstantViewModel, azureHelper: AzureHelper) {
        this.constantViewModel = constantViewModel;
        this.azureHelper = azureHelper;
    }
} 