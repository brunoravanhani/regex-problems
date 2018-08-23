
function camelcase(s) {
    var regex = /[A-Z]?[a-z]+/g;
    return s.match(regex).length; 
}
