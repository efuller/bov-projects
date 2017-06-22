# Simple Link Harvester

Not a perfect implementation, but this will do a pretty good job of finding all external links that have just
link text inside them as well as any email address links.

## How to use

You can either upload `.txt` files or `.js` files and harvest links from their contents.

You can also just paste in text to the text area.

Here is some sample text you can enter in:

```
Lorem ipsum dolor <a href="mailto:sit@amet.com">site</a> consectetur <span>adipiscing elit</span>, 
sed do <strong>eiusmod tempor incididunt</strong> ut <a href="http://exampleurl1.com">labore et</a> 
dolore <a href="mailto:magna@aliqua.com">Ut</a>. <em>enim ad minim</em> veniam, <a href="#anchor">quis 
nostrud</a> exercitation ullamco laboris nisi ut <a href="https://exampleurl2.com">aliquip</a> ex ea 
commodo consequat.</p>
```
