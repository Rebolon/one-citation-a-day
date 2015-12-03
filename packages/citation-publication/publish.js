Meteor.publish('userExtraData', function() {
  if(!this.userId) return null;

  return Meteor.users.find(this.userId, {fields: {
    firstname: 1,
    lastname: 1
  }});
});

let date = new ReactiveDict('date'),
  setDateTime = () => {
    date.set('datetime', new Date());
  };

setDateTime(); // init first value
Meteor.setInterval(setDateTime, 2000); // init interval

Meteor.publish('oneCitation', function() {
  console.info('publish oneCitation', date.get('datetime'));
  let oneCitation,
    oldId,
    self = this;
  // added before changed
  self.added(
    Meteor.settings.public.config.collections.prefix + "-citations",
    1,
    {cite: date.get('datetime').toLocaleString(), author: 1, like: 1, dislike: 1}
  );

  Tracker.autorun(() => {
    console.log('date changed', date.get('datetime'));

    let qry = {$or: [
        {displayToday: date.get('datetime').toLocaleString()},
        {displayed:
        {$exists: false}
        }
      ]},
      newId;
//test of added... how to retreive citation
    self.changed(
      Meteor.settings.public.config.collections.prefix + "-citations",
      1,
      {cite: date.get('datetime').toLocaleString(), author: 1, like: 1, dislike: 1}
    );

    /*oneCitation = Citations.findOne(
        qry,
        {fields: {cite: 1, author: 1, like: 1, dislike: 1},
        sort: {displayToday: -1},
        limit: 1});
    console.log(oneCitation._id);
    /*
    newId = oneCitation._id;
    self.added(
      Meteor.settings.public.config.collections.prefix + "-citations",
      newId,
      {cite: 1, author: 1, like: 1, dislike: 1}
    );
    self.removed(
      Meteor.settings.public.config.collections.prefix + "-citations",
      oldId
    );

    if (oneCitation.count() === 0) {
      console.info(date.get('datetime').toLocaleString());
      console.info('no citation found', qry);
    } else {
      console.info('citation found', newId);
      Citations.update(newId, {$set: {displayToday: date.get('datetime').toLocaleString(), displayed: true}});
    }
*/
    oldId = newId;
  });

  self.ready();
  //return oneCitation;
});
