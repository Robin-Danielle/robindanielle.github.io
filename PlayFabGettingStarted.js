function DoExampleLoginWithCustomID(){
    PlayFab.settings.titleId = document.getElementById("titleId").value;
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        CustomId: document.getElementById("customId").value,
        CreateAccount: true
    };
    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallBack);
}

var LoginCallBack = function(result,error){
    if(result !== null){
        document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API Call!";
    }else if (error !== null){
        document.getElementById("resultOutput").innerHTML =
        "Something went wrong with your first API call. \n" +
        "Here's some debug information:\n" +
        PlayFab.GenerateErrorReport(error);
    }
}