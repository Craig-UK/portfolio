---
title: 'Full Stack Next App called "Promptopia"'
date: '2023-05-29'
last-updated: '2023-07-19'
author: 'Craig Climie'
image: '/assets/images/2023/may/promptopia/logo.svg'
summary: 'An application developed using Next.js 13 that allows user to post AI "Prompts".'
---

***PLEASE NOTE: PLEASE DO NOT ATTEMPT TO LOGIN TO THIS WEB APPLICATION WITH YOUR GOOGLE ACCOUNT***

This is a NextJS React web application developed using the "Next.js 13 Full Course 2023 | Build and Deploy a Full Stack App Using the Official React Framework" tutorial by JavaScript Mastery.

I've built a project that allows users to share useful prompts that other users can use when using AI tools such as ChatGPT, etc.

This project makes use of Next.js 13, TailwindCSS, MongoDB, and more.

Thanks to JavaScript Mastery for this project (find the links below)

After using Next.js since around version 12, I finally saw this tutorial by JavaScript Mastery that used Next.js version 13 along with the new App router. Aswell as Next.js 13, I finally got to try out TailwindCSS which I have been really eager to try out. This tutorial also made use of MongoDB and demonstrated how to integrate MongoDB with Next.js 13 and the App router.

So, all in all, from this tutorial, I learned alot about how to integrate multiple systems and frameworks (mostly CSS frameworks) with the new Next.js 13 App router and API routes. This tutorial also demonstrated how to use Google's OAuth authentication to allow users to sign in to their Google account's and post their recommended AI prompts found through systems such as ChatGPT, etc.

***!!!PLEASE DO NOT ATTEMPT TO LOGIN TO YOUR GOOGLE ACCOUNT, I AM GOING TO DISABLE THIS FEATURE. IT WAS MAINLY FOR TESTING OUT GOOGLE'S OAUTH AUTHENTICATION INTEGRATION!!!***

Overall, this tutorial taught me alot about how to integrate multiple systems and frameworks, such as TailwindCSS, to build a fully functional and full-stack application using Next.js 13's newest features while also getting to learn how to integrate Google's OAuth Authentication and creating profiles for each individual user.

## Home Page

***Top of Home Page***

The top of the Home Page is just some "Branding" text that explains to the user
the purpose of this web application.

![Image with Branding Text for a web application](</assets/images/2023/may/promptopia/Home Page - Top.png>)

***Home Page with Post Feed***

The Home Page also includes the "Post Feed". This feed is used to display the posts, or
in this case the "prompts" that all users have created and posted to the application.

This feed displays the username and email of the user that created the 'prompt'. This
also includes the text of the 'prompt' that can be used by users to use in AI tools
such as ChatGPT, etc. and also includes the 'tag' of the 'prompt' which could be
'Web Application', 'Blog', 'Travel', etc. and this is chosen by the user when they
are creating the 'prompt'.

![Image with a Post feed on the Home Page of a web application](</assets/images/2023/may/promptopia/Home Page - Includes Feed - Edited.png>)

![Image of a Post feed](</assets/images/2023/may/promptopia/Home Page - Feed - Edited.png>)

Also, as can be seen in the images above, to the right of the 'Prompt' box, there is an
icon. This icon can be clicked by the user and when it is clicked the text of the
'prompt' will be copied to the users clipboard and will also display a 'checkmark' icon
if the prompt text has been successfully copied to the users clipboard.

## Profile Page

The profile page appears when a user clicks on another user's username on a prompt on
the feed. The profile page shows the username of the user and the 'prompts' or 'posts'
that the specified user has created and successfully posted to the web application.

The profile page can also be displayed when the user clicks on their profile picture
at the top right of the web application. ***!!!THE LOGIN FEATURE SHOULD BE CURRENTLY
DISABLED, SO THIS WAY OF DISPLAYING THE PROFILE PAGE IS NOT
POSSIBLE!!!***

![Profile page which shows Posts created by a user](</assets/images/2023/may/promptopia/Profile Page - Edited.png>)

As with the feed on the Home page, and as can be seen in the images above, to the right
of the 'Prompt' box, there is an icon. This icon can be clicked by the user and when it
is clicked the text of the 'prompt' will be copied to the users clipboard and will also
display a 'checkmark' icon if the prompt text has been successfully copied to the users
clipboard.

## Create Post Page

***!!!THIS PAGE IS ONLY ACCESSIBLE WHEN A USER IS LOGGED IN, HOWEVER THE LOGIN FEATURE
SHOULD BE CURRENTLY DISABLED, SO THIS PAGE IS NOT ABLE TO BE ACCESSED!!!***

Finally, the 'Create Post' page.

The create post page is used to... well... create posts, or in this case, create
'prompts'. This page allows the user to specify the text of the prompt and a 'prompt'
tag.

![A page used to create posts](</assets/images/2023/may/promptopia/Create Post Page - Edited.png>)

Thank you all for reading my Dev Blog about this project. If you have read this far,
thank you and I hope you enjoyed. What would you like to know more about or what could I improve about my dev blogs in the future?

I appreciate your feedback, feel free to contact me with your answers through my "Contact" form or through my Twitter or Instagram pages. You can also feel free to contact me through email by [emailing me](mailto:contact@justcraigdev.com).

Next.js 13 Full Course 2023 by JavaScript Mastery: [watch it here.](https://www.youtube.com/watch?v=wm5gMKuwSYk)

My GitHub Repository: [This is my GitHub repository that I used to upload my project.](https://github.com/Craig-UK/full-stack-application-next13)

Official GitHub: [This is the official GitHub Repository that was used in JavaScript Mastery's video.](https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing)

My GitHub: [Visit my GitHub profile here.](https://github.com/Craig-UK)

Deployed Project: [This project was deployed on Vercel. View the deployed project here.](https://full-stack-application-next13.vercel.app)
