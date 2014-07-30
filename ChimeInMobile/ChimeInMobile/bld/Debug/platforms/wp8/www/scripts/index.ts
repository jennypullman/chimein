﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module ChimeInMobile {
    "use strict";

    export var application;
    class Application {
        initialize(): void {
            document.addEventListener('deviceready', () => { this.onDeviceReady(); }, false);
        }

        onDeviceReady(): void {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', () => { this.onPause(); }, false);
            document.addEventListener('resume', () => { this.onResume(); }, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            var azureHelper = new AzureHelper();
            azureHelper.getClient();
            //azureHelper.getGroups();
            azureHelper.login();
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
