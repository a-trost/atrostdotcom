# Web Development Articles

(Explain here how you're reading articles and taking notes in order to inform your own article writing)

## 01/07/2020

https://css-tricks.com/how-auto-margins-work-in-flexbox/

This one blew my mind a bit with just how short and to the point it is. I love it. He links to two other articles he knows on the subject and comes out and says he _also_ wants to explain it.

I get hung up on the fact that my stuff isn't going to be original so this is refreshing to see.

Five paragraphs and 4 codepens and that's the article.

### Web Dev Learnings

I don't use `margin:auto` as much as I should, in combination with flexbox. I also am not fluent with `margin-inline-start` and `margin-block-start` so that's something to look into and get familiar with.

## 01/08/2020

https://css-tricks.com/why-are-accessible-websites-so-hard-to-build/

This one was just a short thought piece on a11y. I kind of expected the answer to be developed further, but I guess the answer is "It fails silently". The end of the piece seemed to offer more of a solution to the question "How do we make accessible sites easier to build?" rather than the actual title.

Either way it was just a handful of paragraphs and a photoshop mockup for an idea, and that's a solid blog post.

I think I'd like to write more pieces like this. Sharing opinions and getting feedback on them to help inform what I think and know about development is a useful thing.

This author writes with pretty dense paragraphs, but none of them were all that difficult to read.

### Web Dev Learnings

In the comments I found the Vox Media Accessiblity guidelines, which were helpful. It also gave me a reminder to check for the silent failures like performance and a11y, not just waiting for the lawsuits to roll in.

https://www.smashingmagazine.com/2020/01/html5-article-section/

### Web Dev Learnings

Wow, this was a super enlightening read. Apparently `<section>` isn't good for all that much and I should be using `<article>` instead for anything like blog posts, even when it's a list of blog post titles and descriptions. Even a user comment on a blog post should be an article. I just finished up making a PDF generate a big ol' `<section>` so that's timely news.


## 01/09/2020

https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/

Simple and to the point article. The facts aren't too complex and the author did a job of cutting to the point. 

### Web Dev Learnings
I've known for a while that you don't want to leave `target="_blank"` without a `rel="noopener noreferrer"` alongside, but I never really knew what the vulnerability was. 

Apparently the new window gets access to the old window and can change the site that they're on, which opens your users up to phishing attacks. Good to know.

