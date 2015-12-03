let date = new ReactiveDict('date'),
  citationToDisplay = new ReactiveDict('citation'),
  setDateTime = () => {
    date.set('datetime', new Date());

    let qry = {$or: [
      {displayToday: date.get('datetime').toLocaleString()},
      {displayed:
      {$exists: false}
      }
    ]};

    citationToDisplay.set('display', Citations.findOne(
      qry,
      {
        fields: {cite: 1, author: 1, like: 1, dislike: 1},
        sort: {displayToday: -1},
        limit: 1
      }
    ));

    Citations.update(citationToDisplay.get('display'),
      {
        $set: {
          displayToday: date.get('datetime').toLocaleString(),
          displayed: true
        }
      }
    );
  };

setDateTime(); // init first value
Meteor.setInterval(setDateTime, 86400000); // init interval, change each day

Meteor.publish('userExtraData', function() {
  if(!this.userId) return null;

  return Meteor.users.find(this.userId, {fields: {
    firstname: 1,
    lastname: 1
  }});
});

Meteor.publish('oneCitation', function() {
  let self = this;

  // added before changed
  self.added(
    Meteor.settings.public.config.collections.prefix + "-citations",
    1,
    {cite: date.get('datetime').toLocaleString(), author: 1, like: 1, dislike: 1}
  );

  // track change to publish new item
  Tracker.autorun(() => {
    let oneCitation = citationToDisplay.get('display');
    self.changed(
      Meteor.settings.public.config.collections.prefix + "-citations",
      1,
      {cite: oneCitation.cite, author: oneCitation.author, like: oneCitation.like, dislike: oneCitation.dislike}
    );
  });

  self.ready();
});
