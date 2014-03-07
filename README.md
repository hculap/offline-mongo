<h2>OfflineMongo - Meteor Smart Package</h2>

OfflineMongo is a small package that provides offline collections. To store data from "Online Collection" uses LocalStorage. this package also uses APPCACHE to turn ouer static files available offline.

<h3>Getting Started</h3>
<ol>
<li>`npm install -g meteorite` (if not already installed)</li>
<li>`mrt add OfflineMongo` </li>
</ol>

<h3>How to use?</h3>
First we need to create Collection, Publication, Subscription, Subscription Handler;

Collection: 
```javascript
Example = new Meteor.Collection('example'); // collections/example.js
```

Publication: 
```javascript
Meteor.publish('example' function(){ return Example.find(); }); // server/publications.js
```

Subscription and Subscription Handler: 
```javascript
subHandler = Meteor.subscribe('example'); // client/main.js
``` 

Ok, now we are ready to add our "Offline Collection";

So under the Subscription Handler we add: 
```javascript
exampleOffline = new OfflineMongo({name: 'exampleName', collection: Example, handler: subHandler});
```
Note that name is optional (it is only key for local storage).

Now to access our offline data just type:
```javascript
exampleOffline.collection
```


<h3>License</h3>

OfflineMongo is licensed under the MIT license.
