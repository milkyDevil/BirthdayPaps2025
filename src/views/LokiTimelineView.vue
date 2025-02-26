<!-- Since Loki is the God of Mischief, the next timeline should be full of illusions, tricks, and deception. Here’s an idea:

Loki’s Timeline – The Trickster’s Test
As soon as Pappu arrives, he sees two Lokis standing in front of him.
One of them says, “Welcome! I am the real Loki. The other one is just an illusion. If you want to move forward, you must pick the real me.”
The other Loki laughs and says, “Don’t listen to him! He’s the illusion. I am the real Loki.”
Task 1: Pappu must ask them one yes/no question to figure out the real Loki. (Like a logic puzzle)
Whether he picks the right one or not, Loki laughs and says, “Just kidding! There was never a real or fake one. It was all in your head.”
More Trick-Based Tasks
Mischief Maze: Loki asks Pappu to escape a maze, but every wrong turn teleports him back to the start. (He has to answer STEM questions to get directions).
The Disappearing Cup: Loki presents three cups (like a magician) and says, “Under one of these cups is your next clue.” But no matter which cup Pappu picks, Loki makes it disappear and laughs. Eventually, he just hands him the clue for fun.
Illusion Battle: Loki creates multiple copies of himself. Pappu must find the real Loki by answering a science question.
A Deal with Loki: Loki offers two doors—one leads to the next timeline, and one resets everything. Pappu must outsmart Loki’s deception.

Loki Appears (Introduction)
Loki’s Image (Smirking) + Text
“Ah, another traveler! I am Loki, the God of Mischief. If you want to move forward, let’s play a little game, shall we?”
“Begin Challenge” Button

2️⃣ Trick 1 – Two Lokis
Two Loki images (One real, one illusion).
Pappu must click on the real Loki.
If wrong → Loki mocks Pappu and resets the challenge.

✅ How to Implement?

Show two identical Loki images.
Randomly assign the “real” one.
On click → Check if it’s correct.

3️⃣ Trick 2 – Portal Maze
Loki creates three portals (one real, two fake).
Pappu must choose the correct one.
If he chooses wrong → Loki laughs and sends him back.
✅ How to Implement?

Show three glowing portals (CSS animation).
Randomly assign the “real” portal.
On click → Either advance or restart.

Trick 3 – Reverse Question
Loki asks a normal-looking question.
But the correct answer is actually the opposite of what seems right.
Example:
“Which of these is NOT one of Loki’s abilities?”
A. Illusions
B. Shape-shifting
C. Controlling Mjolnir
D. Teleportation
The correct answer (C. Controlling Mjolnir) is actually a trick, because people might think it’s D!
✅ How to Implement?

Display a question with 4 options.
When user selects → Show Loki’s reaction (mocking or praising).

function lokiTrick() {
    for (var i = 0; i < 3; i++) {
      (function (j) {
        setTimeout(() => {
          console.log(`Loki says: I am illusion ${j}`);
        }, j * 1000);
      })(i);
    }
  
    Promise.resolve().then(() => console.log("Loki's true illusion appears!"));
  }
  
  lokiTrick();

  Options:
A)

yaml
Copy
Edit
Loki's true illusion appears!  
Loki says: I am illusion 0  
Loki says: I am illusion 1  
Loki says: I am illusion 2  
B)

yaml
Copy
Edit
Loki says: I am illusion 0  
Loki says: I am illusion 1  
Loki says: I am illusion 2  
Loki's true illusion appears!  
C)

yaml
Copy
Edit
Loki's true illusion appears!  
Loki says: I am illusion 2  
Loki says: I am illusion 2  
Loki says: I am illusion 2  
D)

yaml
Copy
Edit
Loki says: I am illusion 0  
Loki says: I am illusion 0  
Loki says: I am illusion 0  
Loki's true illusion appears!  
Correct Answer:
✅ A)

yaml
Copy
Edit
Loki's true illusion appears!  
Loki says: I am illusion 0  
Loki says: I am illusion 1  
Loki says: I am illusion 2  

Loki’s Reaction:
✅ If correct:
"Ah, a mortal who sees through my illusions? Impressive! But can you handle the next trick?"

❌ If wrong:
"Haha! You fell for the trick! I am the God of Mischief, after all!"

Loki’s Reaction:
✅ If correct:
"Clever mortal! But are you truly worthy of Odin’s wisdom?"

❌ If wrong:
"Ha! Did you really think you could predict my moves? I am the Trickster God!"

Loki’s Reactions
✅ If correct:
"Hmm... I must admit, mortal, you might be worth keeping around."

❌ If wrong:
"HA! You thought you could predict MY timeline? I am time itself!"

function lokiMagic(x) {
  return (function (y) {
    return (function (z) {
      return x + y + z;
    })(x);
  })(x + 1);
}

console.log(lokiMagic(5));

Options:
(A) 15
(B) 16
(C) 17
(D) Error

Answer:
✅ (B) 16

Loki’s Reactions:
✅ If correct:
"Oh, so you do have a brain! Pity I still outsmart you."

❌ If wrong:
"You remind me of Thor... and not in a good way." -->
<template>
  hi
</template>