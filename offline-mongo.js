OfflineMongo = function(options) {
    var self = this;
    var name = options.name;
    if (!options.name)
        name = posts._name;
    Deps.autorun(function() {
        if (options.handler.ready() && Meteor.status().connected) {
            localStorage.setItem(name, JSON.stringify(options.collection.find().fetch()));
        }
        self.collection = new Meteor.Collection(null);
        _.each(JSON.parse(localStorage.getItem(name)), function(item) {
            self.collection.insert(item);
        });
    });
};