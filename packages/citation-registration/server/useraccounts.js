Accounts.emailTemplates.siteName = Meteor.settings.sitename;
Accounts.emailTemplates.from = Meteor.settings.emails.inscription.from;
Accounts.emailTemplates.resetPassword.subject = (user) => {
  return `Demande de nouveau mot de passe {{ user.profile.displayName }}`;
};
Accounts.emailTemplates.resetPassword.text = (user, url)  => {
  var signature = Meteor.settings.emails.inscription.signature;

  return `Chère {{ user.profile.displayName }},\n\n
    Cliquez sur le lien suivant pour choisir un nouveau mot de passe:\n
    {{ url }} \n\n
    Cordialement,\n
    {{signature}}`;
};
Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `Bienvenue sur {{ Meteor.settings.sitename }}, {{ user.profile.name }}`;
};
Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return `Cher utilisateur,\n\n
      Bienvenue dans notre communauté ! Désormais, vous pouvez accéder à une nouvelle citation par jour.\n\n
      Pour valider votre inscription veuillez cliquer sur le lien suivant : {{ url }} \n\n
      Pour toute information complémentaire, écrivez-nous à \n\n
      A très bientôt,\n\n
      L'équipe de Citation du jour`;
};
