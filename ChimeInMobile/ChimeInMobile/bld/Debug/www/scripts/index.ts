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

<<<<<<< HEAD
        applyBindings(user: string, azureHelper: AzureHelper): void {
            var groupViewModel = new GroupViewModel(this.constantViewModel);
            var homeViewModel = new HomeViewModel(this.constantViewModel, azureHelper, user);
            var questionBoardViewModel = new QuestionBoardViewModel(this.constantViewModel);
            var pollBoardViewModel = new PollBoardViewModel(this.constantViewModel);
=======
        //onLogin(azureClient: Microsoft.WindowsAzure.MobileServiceClient): void {
        //    this.azureHelper.login(azureClient).then {

                
        //    });
        //}

        onDeviceReady(): void {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', () => { this.onPause(); }, false);
            document.addEventListener('resume', () => { this.onResume(); }, false);
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
>>>>>>> testiiiinnnng
            ko.applyBindings(groupViewModel, document.getElementById("groupViewHeader"));
            ko.applyBindings(homeViewModel, document.getElementById("createGroup"));
            ko.applyBindings(homeViewModel, document.getElementById("showGroups"));
            ko.applyBindings(homeViewModel, document.getElementById("pickGroup"));
            ko.applyBindings(groupViewModel, document.getElementById("questionBoard"));
            ko.applyBindings(groupViewModel, document.getElementById("pollBoard"));
            ko.applyBindings(this.constantViewModel, document.getElementById("backButton"));
<<<<<<< HEAD
        }

        onDeviceReady(): void {
            // Handle the Cordova pause and resume events
            alert("in device ready");
            document.addEventListener('pause', () => { this.onPause(); }, false);
            document.addEventListener('resume', () => { this.onResume(); }, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            var azureHelper = new AzureHelper();
            azureHelper.getClient((client) => {
                alert("client worked");
                azureHelper.login(client, (user) => {
                    alert("user worked");
                    alert("call back user: " + user);
                    this.applyBindings(user, azureHelper);
                });
            });
            
            alert("all logged in");
=======
            ko.applyBindings(homeViewModel, document.getElementById("groupList"));
>>>>>>> testiiiinnnng
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
