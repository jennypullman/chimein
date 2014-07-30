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

        Application.prototype.applyBindings = function (azureHelper) {
            var groupViewModel = new GroupViewModel(this.constantViewModel);
            var homeViewModel = new HomeViewModel(this.constantViewModel, azureHelper);
            var questionBoardViewModel = new QuestionBoardViewModel(this.constantViewModel);
            var pollBoardViewModel = new PollBoardViewModel(this.constantViewModel);
            ko.applyBindings(groupViewModel, document.getElementById("groupViewHeader"));
            ko.applyBindings(homeViewModel, document.getElementById("createGroup"));
            ko.applyBindings(homeViewModel, document.getElementById("showGroups"));
            ko.applyBindings(homeViewModel, document.getElementById("pickGroup"));
            ko.applyBindings(groupViewModel, document.getElementById("questionBoard"));
            ko.applyBindings(groupViewModel, document.getElementById("pollBoard"));
            ko.applyBindings(this.constantViewModel, document.getElementById("backButton"));
        };

        Application.prototype.onDeviceReady = function () {
            var _this = this;
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', function () {
                _this.onPause();
            }, false);
            document.addEventListener('resume', function () {
                _this.onResume();
            }, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            var azureHelper = new AzureHelper();
            azureHelper.getClient(function (client) {
                //alert("client worked");
                azureHelper.login(function (user) {
                    //alert("user worked");
                    _this.applyBindings(azureHelper);
                });
            });
            //alert("all logged in");
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
