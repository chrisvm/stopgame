class Freebase
    constructor: (url) ->
        # set base config
        this.set_config()
        # if url given, assign as home api url
        if url?
            this.conf.base_url = url

    # sets default config
    set_config = () ->
        conf =
            base_url: 'https://www.googleapis.com/freebase/v1/mqlread'
            api_key: '<enter api key here>'
        this.conf = conf

    # run a freebase mql query and run callback with results
    mql = (mql_query, callback) ->
        # set needed data
        base_url = this.conf.base_url
        data = "query=#{JSON.stringify(mql_query)}"

        # send the ajax req
        ajax_params =
            dataType: "json"
            url: base_url
            data: data
            processData: false
            jsonp: false
            success:  (response) ->
                # run the callback with the response
                callback(response)
        $.ajax(ajax_params)
