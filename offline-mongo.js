OfflineMongo = function(options) {
    var self = this;
    var name = options.name;
    if (!options.name)
        name = options.collection._name;
    Deps.autorun(function() {
        if (options.handler.ready() && Meteor.status().connected) {
            localStorage.setItem(name, JSON.stringify(options.collection.find().fetch()));
        }
        self.collection = new Meteor.Collection(null);
        _.each(JSON.parse(localStorage.getItem(name)), function(item) {
            if (item._id) {
                self.collection.insert(item);
            }
        });
    });
};