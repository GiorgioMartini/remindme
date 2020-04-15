
# Remindme challgenge

Thanks for the opprtunity, to see the project, please follow these steps

  - Clone this repo
  - run `yarn` and then `yarn sart`


About the solution:
  - I used some context for managing the state of the reminders.
  - I created a reusable useServices hook that fetches categories and providers based on categories.
  - I used tachyons css for styling.
  - I added two tests with react-testing-library.

If you save a reminder, and ten go back to it it still there, and you can update it and see it in the next page. We would add another reminder, as they are pushed into an array, but currently only one can be added, I would need to add abutton to create new reminder, clear the cache of the currently edited reminder and start adding a new one.

Eventually we could also edit specific reminders by clicking on them on the reminders overview and being redirected to them by using their id on a url. Right now its just implemented as a simple component that shows the id of the clicked reminder.
