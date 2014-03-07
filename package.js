Package.describe({
    summary: "A package that provides offline collections"
});

Package.on_use(function(api, where) {
    api.use(['minimongo', 'mongo-livedata', 'appcache', 'underscore'], 'client');

    api.add_files(['offline-mongo.js'], 'client');

    if (api.export) {
        api.export('OfflineMongo', 'client');
    }
});