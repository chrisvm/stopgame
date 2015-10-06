class MissingRequiredPropertiesException
    constructor: (@message) ->
        this.name = 'MissingRequiredPropertiesException'

class Topic
    constructor: (opts) ->
        # the required properties of the rule
        required_props = ['name', 'rules']

        # check for required properties
        if not this.has_props(required_props, opts)
            throw new MissingRequiredPropertiesException("#{required_props} are not found")

        # set the props
        {
            name: @name,
            rules: @rules,
            short: @short
        } = opts
        @fbase = new Freebase()
        return

    # check if props are existent
    has_props: (props, obj) ->
        # if not obj given, use self
        if not obj?
            obj = this

        # check all props
        for prop in props
            if not prop of obj
                return false
        return true

    # validate some text against the topic
    validate: (text, callback) ->
        # run mql query
        this.query text, (response) ->
            # get results
            results = response.result

            # validate results
            if results.length > 0
                callback(true)
                return

            # no result from query
            callback(false)
            return
        return

    # check all topics rule for a result
    check: (result) ->
        # check all 'is' rules
        if 'is' of this.rules
            for is_rule in this.rules.is
                # check a prop to be in the allowed values
                for prop, value of is_rule
                    if result[prop] isnt value
                        return false
        return true

    # search a topic with text
    query: (search, callback) ->
        query = {}
        for is_rule in this.rules.is
            for prop, value of is_rule
                query[prop] = value
        query.name = search
        this.fbase.mql([query], callback)

### Example of Rule
PersonRule:
    name: 'Person'
    short: 'person'
    rules:
        is: [
            type: '/people/person'
        ]
###
