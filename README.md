# The Storyblok Next Ultimate Tutorial

In this tutorial series, you will learn how to build a headless website using Storyblok and Next.js. Starting with the fundamental integration of Storyblok in Next.js, more advanced functionalities are explained in bite-sized content pieces, such as dynamic page rendering, dynamic menus, custom components, multilingual content and more.

You can switch between the different branches of this repository; there is one branch for each tutorial part. Alternatively, you may want to check out the live demos on StackBlitz. You can even replicate the corresponding Storyblok space for each of the tutorial parts in order to explore its exact configuration. 

## Tutorial Parts

### Part 1
 - Tutorial: [Add a headless CMS to Next.js 3 in 5 minutes](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes)
 - Live demo: [Open in StackBlitz](https://stackblitz.com/edit/nextjs-5-minutes)
 - Branch: [part-1](https://github.com/storyblok/next.js-ultimate-tutorial/tree/part-1)
 - Storyblok space: [Create your own copy](https://app.storyblok.com/#!/build/166651)
 

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

## How to get started?

### 1. Clone the repo

```sh
  $ git clone https://github.com/storyblok/next.js-ultimate-tutorial.git
```

### 2. Install all dependecies 
```sh
$  yarn # or npm install
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```pages/_app.js```.

```js
// in pages/_app.js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components,
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
# to run in developer mode
$ yarn dev # or npm run dev
```

```sh
# to build your project
$ yarn build # or npm run build
```



## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)


  