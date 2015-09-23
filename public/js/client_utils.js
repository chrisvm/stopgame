
////type: "error", "alert"
////tootltip Message: Message to show
////alert_data : var data = {'btn' : btn.id, 'inp': input.id};
function set_alert(type, tooltip_message, alert_data) {
    var $go_button = $('#'+alert_data.btn);
    var $input = $('#'+alert_data.inp);
    var $feedback, addedClasses;

    if (type == 'alert') {
        // set warning to form-group
        addedClasses = "has-warning has-feedback";
        $feedback = $('<span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>');
    } else if (type == 'error') {
        addedClasses = "has-error has-feedback";
        $feedback = $('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
    } else {
        return;
    }

    // add alert clases
    var $input_group = $("#input-group");
    $input_group.addClass(addedClasses);

    $go_button.tooltip({
        "title": tooltip_message,
        "placement": "bottom",
        "trigger": "manual"
    });
    $go_button.tooltip("show");

    // set icon feedback
    $input_group.append($feedback);

    // set disappereance callback
    setTimeout(function () {
        $go_button.tooltip("hide");
        $feedback.remove();
        $input_group.removeClass(addedClasses);
        $input.attr("disabled", false);
        $go_button.attr("disabled", false);
    }, 1500);
}