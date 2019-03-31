---
title: Redirect HTTP to HTTPS
category: "Programming"
image: "./react-virtual-dom-cover.png"
date: "2015-10-05"
type: "blog"
desc: "Learn how to use your .htaccess file to secure your website from http to https."
---

Create an `.htaccess` file in the root of your public directory.

```htaccess
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://example.com/$1 [R=301,L]
```