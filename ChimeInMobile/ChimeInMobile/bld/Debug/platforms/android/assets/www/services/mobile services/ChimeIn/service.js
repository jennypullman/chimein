// http://go.microsoft.com/fwlink/?LinkID=290993&clcid=0x409
var ChimeInClient
document.addEventListener("deviceready", function () {    
    ChimeInClient = new WindowsAzure.MobileServiceClient(
                    "https://chimein.azure-mobile.net/",
                    "SmtMiptFTkxedMRKLwXOKitBIQxUlW95");
});