const displayform = _("displayForm");
//console.log(displayForm);//test function ok
const forLogin = _("forLogin");
const formId = _("formId");
const formContenaire = _("formContenaire");

displayform.addEventListener("click", showForm);

function _(e) {
    return document.getElementById(e);
}
function showForm() {
    document.querySelector(".formWrapper .card").classList.toggle('show');
}
