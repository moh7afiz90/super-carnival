## Git commands

<!-- Basic Commands -->

### git init
- Initialize local Git Repository

### git add
- Add file(s) to index
```git
git add . /*to add all files*/

git add <file_name>  /*To add specific file name*/
```

### git status
- Check status of working tree and staging area

```git
git status
```

### git commit
- commit changes to the index when you are ready
```git
git commit -m "committing message"
```

### git push
- Push to remote Repository
```git
git push origin master

```

### git pull
- Pull latest from Remote Repository
```Git
git pull

```

### git clone
- Clone Repository into a new directory
```Git
git clone //Repo name

```
### stash
- git stash is useful when you have some changes that you want to save but are not ready to make a commit.

- How to use:
```git
git stash save "worked "
/*we should write a message a remind us what we are doing*/
git stash list
/*to check list of stash */
git stash apply stash@{stashID}
/*like: git stash apply stash@{0}*/
git stash pop
/*it is going to apply this changes and get rid of them from the stash*/
```

### fetch
- git-fetch - Download objects and refs from another repository
