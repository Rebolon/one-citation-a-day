App.info({
  id: "com.christmas.citation.rebolon",
  name: "Citations de noël",
  description: "Une citation par jour, pour toute l'année",
  author: "Benjamin RICHARD, Rebolon",
  email: "richard.tribes@gmail.com",
  website: "https://about.me/benjamin.richard"
});

// Set up resources such as icons and launch screens.
App.icons({
  'android_mdpi': 'private/icons/android_mdpi.png',
  'android_ldpi': 'private/icons/android_ldpi.png',
  'android_hdpi': 'private/icons/android_hdpi.png',
  'android_xhdpi': 'private/icons/android_xhdpi.png',
});

App.launchScreens({
  'android_mdpi_portrait': 'private/splash/android_mdpi.png',
  'android_ldpi_portrait': 'private/splash/android_ldpi.png',
  'android_hdpi_portrait': 'private/splash/android_hdpi.png',
  'android_xhdpi_portrait': 'private/splash/android_xhdpi.png'
  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
//App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');

// Pass preferences for a particular PhoneGap/Cordova plugin
