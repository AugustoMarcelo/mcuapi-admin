# Project description

This is an admin page to allow the users to edit the MCU API information. To access the site, the user needs to register with his Github account.

# Users

Two types of users will be available on the site:

<details>
  <summary>Editor</summary>

  The user with **Editor** permission will be able to add, edit and list all information regarding movies, tv shows and characters. However, the changes submitted by them will remain pending administrator approval.
</details>

<details>
  <summary>Administrator</summary>

  The user with **Administrator** permission will have the same Editor permission but your submissions will be approved by default instead of remaining pending.
</details>

# Pages

- Login page
  - this page should be divided into the login form on the right and a simple message with the logo on the left

- Movies page *
  - this page should list the movies
  - should have pagination
  - should allow search by movie title
  - the information should be added/edited from a modal

- TV Shows page *
  - this page should list the tv-shows
  - should have pagination
  - should allow search by tv-show title
  - the information should be added/edited from a modal

- Characters page *
  - this page will list the characters
  - should have pagination
  - should allow search by character name/aka
  - the information should be added/edited from a modal

*These data can be self-related. E.g.: a movie could be related to other movies, or could have character appearances. So would be nice to have an area inside the form where we could select other contents and relate them.*

- Submissions page
  - this page should list the submissions
  - should have pagination
  - the Administrator could see all submissions, but the Editor could see only his submissions
  - possible actions to do on a submission:
    - compare the current data and the submitted (if it's a data update)
    - accept the submission (only Administrator)
    - deny the submission (only Administrator)
    - edit the submission (only Administrator)
    - delete the submission
  - a submission should be visually marked if it was accepted, denied or is pending. If denied, feedback should be provided to the editor knows what could be happened.
