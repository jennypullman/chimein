// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module ChimeInMobile {
    "use strict";

    export var application;
    class Application {
        constantViewModel: ConstantViewModel;
        azureHelper: AzureHelper;
        initialize(): void {
            document.addEventListener('deviceready', () => { this.onDeviceReady(); }, false);
            this.constantViewModel = new ConstantViewModel();
        }

        applyBindings(user: string, azureHelper: AzureHelper): void {
            var groupViewModel = new GroupViewModel(this.constantViewModel, azureHelper);
            var homeViewModel = new HomeViewModel(this.constantViewModel, azureHelper, user);
            var questionBoardViewModel = new QuestionBoardViewModel(this.constantViewModel, azureHelper);
            var pollBoardViewModel = new PollBoardViewModel(this.constantViewModel, azureHelper);
            ko.applyBindings(groupViewModel, document.getElementById("groupViewHeader"));
            ko.applyBindings(homeViewModel, document.getElementById("homeView"));
            //ko.applyBindings({ groups: [{ gid: "GROUP NAME" }] });
            //ko.applyBindings(homeViewModel, document.getElementById("showGroups"));
            //ko.applyBindings(homeViewModel, document.getElementById("pickGroup"));
            ko.applyBindings(groupViewModel, document.getElementById("questionBoard"));
            ko.applyBindings(groupViewModel, document.getElementById("pollBoard"));
            ko.applyBindings(this.constantViewModel, document.getElementById("backButton"));
            alert("bindings worked");
            //var viewModel = {
            //    sample: ko.observable() // Initially blank
            //};
            //viewModel.sample("Hello, world!"); // Text appears
        }

        onDeviceReady(): void {
            // Handle the Cordova pause and resume events
            alert("in device ready");
            document.addEventListener('pause', () => { this.onPause(); }, false);
            document.addEventListener('resume', () => { this.onResume(); }, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            var azureHelper = new AzureHelper();
            azureHelper.getClient((client) => {
                //alert("client worked");
                azureHelper.login(client, (user) => {
                    //alert("user worked");
                    //alert("call back user: " + user);
                    this.applyBindings(user, azureHelper);
                });
            });
            
            //alert("all logged in");
        }

        onPause(): void {
            // TODO: This application has been suspended. Save application state here.
        }

        onResume(): void {
            // TODO: This application has been reactivated. Restore application state here.
        }

    }

    window.onload = function () {
        application = new Application();
        application.initialize();
    }
}
