---
layout: post

ogtype: article

title:  "Error NET::ERR_CERT_COMMON_NAME_INVALID with Aruba domain and GitHub pages"
date:   2025-07-05 15:47:00 +0200

categories: website
description: How to fix certificate error NET::ERR_CERT_COMMON_NAME_INVALID when publishing sites with GitHub pages using custom Aruba domain
ogdescription: How to fix certificate error NET::ERR_CERT_COMMON_NAME_INVALID when publishing sites with GitHub pages using custom Aruba domain
excerpt_separator: <!--more-->
---

I've recently (last year) moved from a register.it to an Aruba domain as the latter was offering a much cheaper option.
Aruba is a bit more complicated to setup as we need to configure the DNS entries ourselves (comparing to register.it where the setup was seamless, or at least so I remember).
After initial success following the guide, returning on my website some time later, I'vea been met with the error **NET::ERR_CERT_COMMON_NAME_INVALID**. <!--more--> I've searched the web and applied some proposed fixes and forgot about it (the DNS changes may take some hours to take effect). 

Some months later I again go back to my website to find the issue still present. I decided to investigate once more and found that I'm a *dumb dumb*.

Check the [official GitHub guide](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https#verifying-the-dns-configuration) in here you can see how to setup the DNS records to properly works with HTTPS.

What I did wrong was not setting up the `www.` subdomain correctly pointing it to `stefanogavioli.github.com` rather than to `MYUSERNAME.github.com`. Ah the shame.

Another thing I did in Aruba DNS panel was **enabling *DNSSEC***. As the DNS name change usually takes some time and the error almost immediately (some minutes) went away. I'd say it should be a good idea if you're struggling with the same error to enable DNSSEC too :)