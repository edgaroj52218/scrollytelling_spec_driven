# PROCESS.md

## 1. One feature, the prompts I used

Feature attempted: Putting my three lessons onto the homepage with a scroll-linked effect.

Outcome: I did not ship the feature. I submitted the template largely unmodified. What follows is the actual sequence of prompts I used with Claude during the session, in order, unedited.

1. "Explain these instructions for an assignment I have to do for Advanced Web Development class." — pasted my professor's email and three repo links.
2. "I just forked this repo. Should I still make an empty repo?"
3. "Does he mean the Actions button on the left side or Actions at the top?"
4. "It worked. Now what?"
5. "Assign me a topic." — Claude assigned me "three things I learned my first semester."
6. "Here are three lessons." — pasted three lessons that were essentially the same lesson.
7. Claude pushed back: said all three were the same lesson and made me restructure.
8. I changed my mind multiple times: Option A single theme, then Option B three lessons, then asked to strengthen Lesson 2.
9. Eventually locked: procrastination / asking for help / AI-as-tutor.
10. "Emergency mode, ship anything." — Claude gave me a full page.tsx file to paste in.
11. I pasted my actual page.tsx back. Claude told me to stop because the template was more sophisticated than it had assumed.
12. Several minutes of trying to find the content file. Did not find it in time.

## 2. Exit checks — pass and fail

I did not define exit checks up front. That is itself a failure of the process my professor was teaching. In retrospect, here is what they should have been:

- Site deploys to GitHub Pages: PASS
- README has submission block with live URL and my name: PASS
- Original content visible on the homepage: FAIL — I ran out of time to figure out where the template stores content.
- At least one scroll-linked effect added by me: FAIL
- At least one image I added: PASS
- PROCESS.md submitted and honest: PASS (this file)

## 3. Failure-mode reflection

The failure mode that caught me was the very lesson I was trying to write about: procrastination. I started this assignment less than three hours before it was due. The first hour was spent figuring out what the assignment even was. The second hour was spent picking a topic and waffling on the lessons. By the time I sat down to actually edit the code, I had no time left, and the template turned out to be more complex than the simple HTML/JSX I had assumed.

If I map this onto the four failure modes from 03-working-with-ai.md (short memory, invents when unsure, does more than you asked, cannot tell you it is lost) — the one that bit me hardest was the AI's tendency to **invent when unsure**. Claude assumed the template was a basic Next.js setup and wrote me a complete page.tsx replacement based on that assumption. When I pasted my actual page.tsx and it turned out the template uses a content repository pattern with markdown files, the entire approach was wrong. We then burned 15 minutes trying to find the content file.

What I would do differently: read the template's own guide files (docs/guide/) FIRST, before writing any code or asking the AI to write any code. The professor literally wrote a 00-start-here.md that would have told me how the template works. I skipped it because I was in a hurry. The irony is not lost on me — I procrastinated, then in the rush I skipped the documentation, which is the exact behavior I was trying to write a lesson about.

This entire submission is, accidentally, the most honest possible demonstration of the lesson.