Parancsok:
git add . -> összes cuclit (amit nem támogat a gt) hozzáadja
git status -> a jelenleg fájlokat mutatja
git commit -a -m 'szöveg' -> updatelt fájlokat commitolja


- Törlés folyamat:
git rm -r fájlnév
git commit -m 'vmi commit'
git push origin <your-git-branch> (typically 'master', but not always)

/////////--------------///////////

A git nem tol fel mindent automatikusan, ezért létrekell hozni egy ilyen fájlt a számára.

.gitignore és benne a fájlnév -> ignorálja azt a fájlt amit nem szeretnénk fetölteni
