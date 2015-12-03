Template.main.onCreated(function() {
  this.subscribe('oneCitation');
});

Template.main.helpers({
  "oneCite": () => {
    let oneCitation = Citations.findOne();
    console.info("citation a afficher: ", oneCitation);
    return oneCitation;
  }
})