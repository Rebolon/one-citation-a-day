Citations = new Meteor.Collection(Meteor.settings.public.config.collections.prefix + "-citations");

Citations.deny({
  "insert": () => {
    return true;
  },
  "update": () => {
    return true;
  },
  "remove": () => {
    return true;
  }
});


Citations.allow({
  "insert": (doc) => {
    if (Meteor.user()) {
      return true;
    }

    return false;
  },

  "update": () => {
    if (Meteor.user()) {
      return true;
    }

    return false;
  },

  "remove": () => {
    if (Meteor.user()) {
      return true;
    }

    return false;
  }
});