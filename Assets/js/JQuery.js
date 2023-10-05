$(function () {   
    $("#pagindex").show();
    $("#pagsecundaria").hide();
    $("#pagcontacto").hide();
    $("#pagregistro").hide();

    $("#index").on("click", function (event) {
        $("#pagindex").show();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#indexs").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").show();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#indexc").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").show();
        $("#pagregistro").hide();
    });

    $("#indexr").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").show();
    });

    $("#secundariai").on("click", function (event) {
        $("#pagindex").show();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#secundaria").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").show();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#secundariac").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").show();
        $("#pagregistro").hide();
    });

    $("#secundariar").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").show();
    });

    $("#contactoi").on("click", function (event) {
        $("#pagindex").show();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#contactos").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").show();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#contacto").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").show();
        $("#pagregistro").hide();
    });

    $("#contactor").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").show();
    });

    $("#registroi").on("click", function (event) {
        $("#pagindex").show();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#registros").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").show();
        $("#pagcontacto").hide();
        $("#pagregistro").hide();
    });

    $("#registroc").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").show();
        $("#pagregistro").hide();
    });

    $("#registro").on("click", function (event) {
        $("#pagindex").hide();
        $("#pagsecundaria").hide();
        $("#pagcontacto").hide();
        $("#pagregistro").show();
    });
});