# Simple JSON Validator

First, this is my first pass at a simple JSON validator. I understand that the code
in `json-validator.js` is not the prettiest or most efficient, but for now, it *works*.

I plan to refactor this code using more functional techniques at a later date.

## What will it validate?
This validator is intended for validating *one layer* of JSON. It will validate the following:
* strings
* booleans
* numbers
* objects
* array of objects

Here is some example JSON:

```
{
  "about": {
    "sectionTitle": "About",
    "fullName": "Eric Fuller",
    "bioIntro": "Hi! My name is Eric. Welcome to my page that showcases some of the things I've been working on while enrolled in the BOV Academy.I am a front-end developer with a passion for learning new things. I intend on graduating from BOV Academy as a Fullstack Javscript Developer. When I'm not coding, I enjoy the outdoors, traveling, and eating great food."
  },
  "skills": {
    "sectionTitle": "Skills",
    "description": "Below is a list of technologies I am comfortable working with."
  },
  "technologies": [
    {
      "name": "HTML5",
      "percent": 90
    },
    {
      "name": "CSS",
      "percent": 90
    }
  ],
  "contact": {
    "sectionTitle": "Contact",
    "name": "Eric Fuller",
    "title": "Senior Frontend Developer",
    "email": "info@glassmoonmedia.com",
    "website": "http://www.ericfuller.net",
    "twitter": "http://www.twitter.com/ericpfuller",
    "github": "http://www.github.com/efuller"
  }
}
```
