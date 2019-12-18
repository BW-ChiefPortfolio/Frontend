=============== Git Flow ================

Clone the project.

Create/checkout to a branch with your name: git checkout -b [your name goes here]

Once you have completed a task you were working on, make sure to: * git add . * git commit -m "here goes the message" * git push origin [your personal branch name here]

Checkout back to master branch

Run bash command: git fetch

Pull from master: git pull origin master

Check if there are any merge conflicts, and fix them if there are any.

While remaining in the master branch, pull the code from your personal branch that you previously pushed: git pull origin [your personal branch name]

Check for conflicts again, and make sure the localhost website is running without any errors.

If everything is good, push to master: git push origin master

In the terminal, checkout to your personal branch again: git checkout [your personal branch name]

Update your personal branch with the master: git pull origin master

Continue coding!
