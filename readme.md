# A tailwind 2 boilerplate

```
yarn install
``` then:

```
yarn run dev
    Watches and serves.

yarn run build
    Builds.
```

Reinit the repo with

```
rm -rf .git
git init
```

Why yarn?

If you're using node 15+, npm doesn't (at the moment) support it. If you using node < 15, feel free to replace yarn with npm.

No yarn? No problem

```
brew install yarn
```

Why the compat version of tailwind?

Parcel 1 doesn't support PostCSS8, only 7. Once parcel 2 is out, I'll migrate to PostCSS8 and the mainline tailwind.