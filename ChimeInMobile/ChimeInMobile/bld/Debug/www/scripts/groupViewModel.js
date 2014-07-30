var GroupViewModel = (function () {
    function GroupViewModel() {
        this.groupName = ko.observable("groupName"); // array
    }
    GroupViewModel.prototype.getGroup = function () {
    };
    GroupViewModel.prototype.OnShowGroup = function () {
        alert("yay");
    };
    return GroupViewModel;
})();
//# sourceMappingURL=groupViewModel.js.map
