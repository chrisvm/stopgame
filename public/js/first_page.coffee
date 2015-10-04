login_accept = (opts) ->
    # add username to socket
    window.socket.username = opts.username

    # set the loading animation
    spinner_opts =
        "position": "relative"

    spinner = new Spinner(spinner_opts).spin()

    # enter next page
    $("#logo_container").fadeOut("slow", () ->
        $top_container = $('#top_container')

        $top_container.css("margin-top", "100px")
        $top_container.append(spinner.el)
        $top_container.fadeIn(800)

        # make ajax call to
        $.ajax(
            url: "/"
            type: "post"
            data:
                username: window.socket.username
            success: (data, textStatus, jqXHR) ->
                $("#page-content-wrapper").html(data)
            error: (jqXHR, textStatus, errorThrown) ->
                console.log(textStatus)
                $("#page-content-wrapper").html(textStatus)
        )
    )

# set the callback
$(document).ready(() ->
    window.socket.on('user auth_username_response', (opts) ->
        # if already set username, return
        if window.socket.username isnt null
            return

        alertData =
            btn: $("#go_btn").attr('id')
            inp: $("#username").attr('id')


        if opts.status.code is 200
            # enter the games page
            login_accept(opts)

        else if opts.status.code is 300
            # alert user already in server
            window.set_alert("error", "Username taken", alertData)
            setTimeout( () ->
                $("#username").attr("disabled", false)
                $("#go_btn").attr("disabled", false)
            , 1500)
    )
)

login = () ->
    # get user textbox and button
    $username_textbox = $("#username")
    $go_button = $("#go_btn")

    # get username text
    username = $username_textbox.val()

    # disable input
    $username_textbox.attr("disabled", true)
    $go_button.attr("disabled", true)

    alertData =
        btn: $go_button.attr('id')
        inp: $username_textbox.attr('id')

    if username is ''
        # set warning to form-group
        window.set_alert('alert', "Empty Username", alertData)

        # disable disable
        setTimeout( () ->
            $("#username").attr("disabled", false)
            $("#go_btn").attr("disabled", false)
        , 1500)

        return false

    # create the opts
    opts =
        username: username

    # send the user.auth_username message
    window.socket.emit('user auth_username', opts)
    return false

$("#go_btn").click(login)
