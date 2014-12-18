# künstler

An easy GitHub commit graph art generator. By [Gabriel Ruiz](https://github.com/gruiz17). Original source code is [here](https://github.com/gruiz17/kunstler) if you are cloning this.

Use the Canvas tool to make your art...

![canvas tool](images/artmaker.gif)

Watch the commits in action...

![tons of commits](images/absurd_commits.gif)

...and boom! Your GitHub commit graph looks fancy (note: I already had some art I forgot about in the location I planted the new art, whoops)!

![fancy](images/final_art.png)

# Usage

## Setup
1. Make a new repo in your own profile called "kunstler"
2. Clone my repo
3. `cd` into my repo
4. In command line type `git remote set-url origin https://github.com/[username]/kunstler.git`

## Actual usage
1. `bash kunstler.sh`
2. Go to whatever port sinatra runs on in your browser.
3. Use the canvas tool to input your desired pattern.
4. Enjoy the magic.

# TODO

* Refinements
* Figure out how to reverse commits

# LICENSE

MIT
