# Public Infrastructure Security Cyber Education System
> Next.js web app for PISCES

## Adding a Blog Post
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Open the `_posts` folder
4. Right-click and Create a new file ending in `.md` give it a proper date formatted name
5. At the top of the file, insert the following text:
```
---
title: ''
excerpt: ''
coverImage: ''
date: ''
author:
  name: 
ogImage:
  url: ''
video: ''
---
```
1. Fill out the fields relevant to the post (the `coverImage`, `ogImage` and `video` fields can be ommitted)
2. Write the blogpost using [markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
3. If the blogpost includes an embedded video, put the URL to the video in the `video` field.
4. Save the file (*Ctrl + S*) 
5.  On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
6.  Next to the _post file you just created, click the "+" button. It should now show up under **"Staged Changes"**.
7.  In the top box (**"Message"**) type a commit message (something like *"Added 123.md"*)
8.  Above the top box, click the "✓" (**"Commit"**) button
9.  The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes

## Adding a Resource Link
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Open the `_data/resources-data.js` file
4. Under the `links` array, copy lines 3 - 7
5. Past the copied lines *at the start* of line 3
6. Update the values for `url`, `title` and `type` to match the new resource
7. Save the file
8. On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
9. Next to the `_data/resources-data.js` you just edited, click the "+" button. It should now show up under **"Staged Changes"**.
10. In the top box (**"Message"**) type a commit message (something like *"Added CISA link"*)
11. Above the top box, click the "✓" (**"Commit"**) button
12. The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes

## Adding a Resource Document
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Navigate to the `public/assets/documents` folder
4. Add another document by right-clicking and selecting **"Upload"**
5. Rename the document to something with underscores (like "flier_pisces_pnnl.pdf")
6. Open the `_data/resources-data.js` file
7. Under the `documents` array, copy the first 5 lines
8. Past the copied lines *at the start* of the `documents` line
9.  Update the values for `title` and `type` to match the new resource
10. Change the `url` value to match the document you added (should be `/assets/documents/your_new_document.pdf`)
11. Save the file
12. On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
13. Next to the `_data/resources-data.js` you just edited, click the "+" button. It should now show up under **"Staged Changes"**.
14. Next to the `public/assets/documents/your_new_document.pdf` you just added, click the "+" button. It should now show up under **"Staged Changes"**.
15. In the top box (**"Message"**) type a commit message (something like *"Added CISA document"*)
16. Above the top box, click the "✓" (**"Commit"**) button
17. The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes

## Changing Board Member Data
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Open the `_data/board-data.js` file
4. Edit any of the **name**, **description**, or **url** fields (*Note: if you add a new board member, upload the photo to the `public/assets/board-members/` folder then reference it within the **url** field*).
5. Save the file
6. On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
7. Next to the `_data/board-data.js` you just edited, click the "+" button. It should now show up under **"Staged Changes"**.
8. If you added any photos, next the photo file you just added, click the "+" button. It should now show up under **"Staged Changes"**.
9. In the top box (**"Message"**) type a commit message (something like *"Changed Board Members"*)
10. Above the top box, click the "✓" (**"Commit"**) button
11. The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes

## Changing Academic Data
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Open the `_data/academic-data.js` file
4. Edit any of the **title**, **text** fields
5. Save the file
6. On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
7. Next to the `_data/academic-data.js` you just edited, click the "+" button. It should now show up under **"Staged Changes"**.
8. In the top box (**"Message"**) type a commit message (something like *"Changed Academic Data"*)
9.  Above the top box, click the "✓" (**"Commit"**) button
10. The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes

## Changing Community Data
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Open the `_data/community-data.js` file
4. Edit any of the **title**, **text** fields
5. Save the file
6. On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
7. Next to the `_data/community-data.js` you just edited, click the "+" button. It should now show up under **"Staged Changes"**.
8. In the top box (**"Message"**) type a commit message (something like *"Changed Community Data"*)
9.  Above the top box, click the "✓" (**"Commit"**) button
10. The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes

## Changing PISCES Data
1. Go to [https://github.dev/pisces-intl/pisces-intl.github.io](https://github.dev/pisces-intl/pisces-intl.github.io)
2. Sign in with your GitHub credentials
3. Open the `_data/pisces-data.js` file
4. Edit any of the **title**, **text** fields
5. Save the file
6. On the left-hand panel, click the **"Source Control"** tab (*Ctrl+Shift+G*)
7. Next to the `_data/pisces-data.js` you just edited, click the "+" button. It should now show up under **"Staged Changes"**.
8. In the top box (**"Message"**) type a commit message (something like *"Changed PISCES Data"*)
9.  Above the top box, click the "✓" (**"Commit"**) button
10. The changes will be committed directly to the `main` branch, which will be automatically deployed within a few minutes