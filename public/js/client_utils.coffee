set_alert = (type, message, alert_data) ->
    $go_button = $('#'+alert_data.btn)
    $input = $('#'+alert_data.inp)

    if type is 'alert'
        # set warning to form-group
        addedClasses = "has-warning has-feedback"
        $feedback =
          $('<span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>')

    else if type is 'error'
        addedClasses = "has-error has-feedback"
        $feedback =
          $('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')

    else
        return

    # add alert clases
    $input_group = $("#input-group")
    $input_group.addClass(addedClasses)

    $go_button.tooltip(
        title: message,
        placement: "bottom"
        trigger: "manual"
    )
    $go_button.tooltip("show")

    # set icon feedback
    $input_group.append($feedback)

    # set disappereance callback
    setTimeout(() ->
        $go_button.tooltip("destroy")
        $feedback.remove()
        $input_group.removeClass(addedClasses)
        $input.attr("disabled", false)
        $go_button.attr("disabled", false)
    , 1500)


toggle_sidebar = () ->
    event.preventDefault()
    $("#wrapper").toggleClass("toggled")
