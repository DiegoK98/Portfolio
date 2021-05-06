function myFunc(birthDate)
{
    var ageInMS = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageInMS);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    document.getElementById("ageID").innerHTML = age;
}

window.onload = myFunc(new Date(1998, 2, 27));