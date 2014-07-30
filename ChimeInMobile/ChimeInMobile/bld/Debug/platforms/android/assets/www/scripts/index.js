// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
var ChimeInMobile;
(function (ChimeInMobile) {
    "use strict";

    ChimeInMobile.application;
    var Application = (function () {
        function Application() {
        }
        Application.prototype.initialize = function () {
            var _this = this;
            document.addEventListener('deviceready', function () {
                _this.onDeviceReady();
            }, false);
            this.constantViewModel = new ConstantViewModel();
        };

        //onLogin(azureClient: Microsoft.WindowsAzure.MobileServiceClient): void {
        //    this.azureHelper.login(azureClient).then {
        //    });
        //}
        Application.prototype.onDeviceReady = function () {
            var _this = this;
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', function () {
                _this.onPause();
            }, false);
            document.addEventListener('resume', function () {
                _this.onResume();
            }, false);
            alert("in device ready");

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            this.azureHelper = new AzureHelper();

            //this.azureHelper.getClient();
            this.azureHelper.login();

            //azureHelper.getGroups();
            var groupViewModel = new GroupViewModel(this.constantViewModel, this.azureHelper);
            var homeViewModel = new HomeViewModel(this.constantViewModel, this.azureHelper);
            var questionBoardViewModel = new QuestionBoardViewModel(this.constantViewModel, this.azureHelper);
            var pollBoardViewModel = new PollBoardViewModel(this.constantViewModel, this.azureHelper);
            ko.applyBindings(groupViewModel, document.getElementById("groupViewHeader"));
            ko.applyBindings(homeViewModel, document.getElementById("createGroup"));
            ko.applyBindings(homeViewModel, document.getElementById("showGroups"));
            ko.applyBindings(homeViewModel, document.getElementById("pickGroup"));
            ko.applyBindings(groupViewModel, document.getElementById("questionBoard"));
            ko.applyBindings(groupViewModel, document.getElementById("pollBoard"));
            ko.applyBindings(this.constantViewModel, document.getElementById("backButton"));
            ko.applyBindings(homeViewModel, document.getElementById("groupList"));
        };

        Application.prototype.onPause = function () {
            // TODO: This application has been suspended. Save application state here.
        };

        Application.prototype.onResume = function () {
            // TODO: This application has been reactivated. Restore application state here.
        };
        return Application;
    })();

    window.onload = function () {
        ChimeInMobile.application = new Application();
        ChimeInMobile.application.initialize();
    };
})(ChimeInMobile || (ChimeInMobile = {}));
//# sourceMappingURL=index.js.map
