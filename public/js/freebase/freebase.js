var Freebase;

Freebase = function(url) {
  this.set_config();
  if (url != null) {
    return this.conf.base_url = url;
  }
};

Freebase.prototype.set_config = function() {
  var conf;
  conf = {
    base_url: 'https://www.googleapis.com/freebase/v1/mqlread',
    api_key: '<enter api key here>'
  };
  return this.conf = conf;
};

Freebase.prototype.mql = function(mql_query, callback) {
  var base_url, data;
  base_url = this.conf.base_url;
  data = {
    query: JSON.stringify(mql_query)
  };
  return $.getJSON(base_url + '?callback=?', data, function(response) {
    return callback(response);
  });
};
