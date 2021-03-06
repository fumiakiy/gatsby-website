---
slug: "/blog/on-being-an-op-of-openid-connect"
date: "Sun, 16 Mar 2014 21:43:57 GMT"
title: "On being an OP of OpenID Connect"
epoch: "1395006237"
---
        
The more I understand OpenID Connect, the more I understand that it is really only for those few big guys, when it comes to a server implementation.

Looking at some code and spec and it sounds easy to be an Open ID provider (i.e. a server), for it’s as simple as implementing OAuth2 server. But this id\_token thing is new for me. I got used to using Facebook’s signed\_request, but only as a client or a relying party. Now when it comes to becoming a server, it seems you must implement this mechanism by yourself.

Components that construct id\_token are freely available out there - JSON WebToken, Base64, and HMAC signatures. But the real problem is that you have to manage the cryptographic signature that you rely on very carefully. For example, Google rotates its public key every day (and it says it’s cacheable! is it really?). If it is one of reference implementations, I have to implement it in a similar way too. Sigh.

This alone makes me believ the points made in my previous entry stronger - this is really only for big guys. If you can’t do this, you can’t afford storing people’s passwords in your system.

I personally have no problem asking Google and Facebook to behave as my identity provider for all websites that require my information to do some awesome stuff. But I also know, as one of those online service providers, that people do hate logging in via a third party token; they prefer give us their email addresses and passwords. It’s likely due to experiences that hurt these people when they gave a service their Facebook access\_token; a service may have posted something embarrassing on behalf of them, for example.

Those who had hard time in that way may have learned that giving garbage email address and using 1password is the safest way because most service providers like us are potentially evil. All of us.

I wonder how OpenID Connect crosses this hurdle - becoming a server is hard and that may be fine, but it is a big problem if using it as a client (RP) may not help a service grow its user base because of the very issue OpenID Foundation is trying to tackle - our passwords may have to be stored in these many places because that is what users want us to do.

