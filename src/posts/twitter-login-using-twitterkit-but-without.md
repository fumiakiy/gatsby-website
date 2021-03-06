---
slug: "/blog/twitter-login-using-twitterkit-but-without"
date: "Fri, 12 Dec 2014 03:25:00 GMT"
title: "Twitter Login using TwitterKit but without TwitterLoginButton"
epoch: "1418354700"
---
        
[Fabric](http://dev.twitter.com) is awesome. It was the happiest experience of my professional life when it was about to installing a SDK, when it was Fabric’s.

The app I was working on require Twitter login, and Fabric provides code that does heavy lifting for it. Unfortunately, [the documentation Twitter provides explains only about how to use the TwitterLoginButton](https://dev.twitter.com/twitter-kit/android/twitter-login) which I didn’t want to use, not because I didn’t like the design but the app I was writing required a smaller button.

So I dig a little bit of its code through Android Studio, another awesome software which made me love to write code in Java and for Android apps. I found a way to use my own button to go through what TwitterKit requires an app to do.

You just need to create a new TwitterAuthClient instance and call authorize method of it. It launches an activity and comes back to the calling activity (yours) by onActivityResult event. You handle the callback by sending the data again to authclient instance and that’s about it.

Sample code is on my github. 

[https://github.com/fumiakiy/CustomButtonTwitterLogin](https://github.com/fumiakiy/CustomButtonTwitterLogin)

