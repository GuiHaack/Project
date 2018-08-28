function myFunction() {
    var link= document.getElementById('url').value;

    var link30=link.substr(7,12);

    document.getElementById('url').value= "http://chr.dc/"+link30;
}