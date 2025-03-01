export const lokiDialogue = {
  meet: 'Ah, a visitor! And here I thought my timeline was finally getting some peace. Tell me, have you read *Physics for Gods: How to Manage a Timeline Without Destroying It*? I’ve been brushing up on physics—yes, me, the God of Mischief, now burdened with actual responsibility. It’s tragic, really. I recently met a certain Dr. Hank Pym from another universe. Quite the genius—if a bit insufferable. He had the audacity to claim he answered *all* my questions correctly. Now, I wonder... can *you* pass my test, or will you crumble under the weight of my superior intellect? ',
  meetSrc: '/src/assets/images/watcher.jpg',
  meetQuestionSrc: '/src/assets/images/watcher.jpg',
  quizPrompt: `So, are you ready for a quiz? Or shall I add "avoiding challenges" to your list of talents?`,
  quizResponses: {
    YES: `Ah, finally! Someone with a modicum of courage. This will be amusing. Try not to embarrass yourself too quickly.`,
    NO: `Oh? A coward? How *disappointing*. But alas, you *will* take the quiz anyway. Consider it an honor—I don’t test just anyone.`,
  },
  finalWords:
    'Well, well, look at you. Surviving my quiz with *some* dignity intact. Usually, it takes people ten entire timelines to even *approach* their original reality… But as you *should* know by now, everything runs through *me* these days. So, instead of making you jump through cosmic hoops, I’ll be *generous* and send you straight back to your timeline. No need to thank me—just a small favor from the God of Mischief.',
  finalWordsSrc: '/src/assets/images/watcher.jpg',
  ageQuestion:
    'Oh, and before you go—I hear you’re turning **34** this year… but deep down, you feel **24**. Now, here’s a question: Should I send you back to when you *were* 24?',
  ageResponses: {
    YES: 'Oh, how *tempting*! But unfortunately, I can’t go around breaking timelines for *birthday gifts*—even I have limits… occasionally.',
    NO: 'Ah, wise choice. If I *did* send you back, you’d have to relive all those *questionable* fashion choices. Trust me, you’re better off.',
  },
  finalFarewell:
    'Happy Birthday! Yes, you *are* 34—I can’t mess with the timeline *this* time… but perhaps another day. However, I *will* grant you this—you’ll **act** 24, **look** 24, and, with any luck, **feel** 24. That’s about as much magic as I’m willing to spend today. Now go, mortal. Enjoy your celebration, and try not to cause *too* much mischief in my absence.',
  goodbyeSrc: '/src/assets/images/watcher.jpg',
}

export const questions = [
  {
    id: 1,
    quote:
      'You think Kang controls time? How precious. Let’s see if your grasp on reality is any stronger than his grasp on patience.',
    question:
      'Oh, Pappu, you’re trying to understand time travel? Adorable. Let’s see if you can at least get this right. If Kang gets thrown into a time loop where he experiences 5 minutes repeatedly but thinks he’s been there for an hour, how much time actually passed?',
    options: [
      {
        text: '5 minutes',
        correct: true,
        response:
          'Finally! Someone who understands basic math. Maybe there’s hope for you yet, Pappu. But don’t let it go to your head—time may be fixed, but your intelligence is still in flux.',
      },
      {
        text: '1 hour (because Kang says so)',
        correct: false,
        response:
          'Oh, wonderful. Let’s just let Kang decide reality now, shall we? While we’re at it, maybe we should also let Thanos handle diplomacy.',
      },
      {
        text: 'Time is a human construct, and I regret asking',
        correct: false,
        response:
          'Philosophical, but utterly useless. Are you trying to impress the Ancient One? Because she’s heard it all before.',
      },
    ],
  },
  {
    id: 2,
    quote:
      "Size isn't everything—something Ant-Man tries to remind himself daily. But let’s see if you understand physics better than Thor understands subtlety.",
    question:
      'Ah, now this one’s fun. You know how Scott Lang shrinks and still manages to throw a punch? Well, imagine this—Sylvie resizes Thor and then punches him. What happens?',
    options: [
      {
        text: 'He barely feels it and keeps monologuing',
        correct: false,
        response:
          'Oh, yes, because obviously, physics bends to Thor’s stupidity. Newsflash: even as a tiny fool, he’d still pack a punch.',
      },
      {
        text: 'Thor goes flying across the room',
        correct: true,
        response:
          'Oh, delightful! I wish I could’ve seen that. Finally, someone who understands that mass doesn’t just disappear. Maybe I’ll keep you around after all.',
      },
      {
        text: 'He gets annoyed, calls Mjolnir, and makes things worse',
        correct: false,
        response:
          'Predictable, but incorrect. Though I must admit, you’re not entirely wrong—Thor does have a habit of making things worse.',
      },
    ],
  },
  {
    id: 3,
    quote:
      'Time travel! A delicate dance that only a select few—like myself—can truly master. Let’s see if you have even a shred of understanding.',
    question:
      'If the TVA erases your timeline but you somehow manage to slip through the cracks and reappear in a different point in time, what fundamental principle have you just manipulated?',
    options: [
      {
        text: 'Newton’s Third Law',
        correct: false,
        response:
          'Ah, yes, because time travel is just a cosmic game of billiards. Perhaps next, you’ll tell me the Multiverse is powered by ‘equal and opposite reactions.',
      },
      {
        text: 'Mobius’ Patience',
        correct: false,
        response:
          'Oh, Mobius does run out of patience, especially with me, but no, manipulating time isn’t directly tied to how much I annoy him. If it were, I’d be the true ruler of time itself.',
      },
      {
        text: 'Space-Time Continuum',
        correct: true,
        response:
          'Ah, so you do have a brain in that head of yours! I was starting to think you were just another variant of Thor—strong opinions, weak grasp of physics.',
      },
    ],
  },
  {
    id: 4,
    quote:
      'Trickery! Pym shrink, Loki shapeshift. We both defy the laws of reality, but let’s see if your brain can keep up with mine.',
    question:
      'If Sylvie were to shrink Thor down to the size of a teacup and then restore him instantly, what force would she need to counteract to prevent turning him into a splattered pancake?',
    options: [
      {
        text: 'Inertia',
        correct: true,
        response:
          'Well, well, you actually know physics! I’d say I’m impressed, but that would mean giving credit where it’s due, and I don’t do that.',
      },
      {
        text: 'Gravity',
        correct: false,
        response:
          'Ah, yes, because clearly, once shrunk, Thor just floats around like an Asgardian balloon. I see you’ve been taking lessons from the Hulk on physics.',
      },
      {
        text: 'Loki’s Ego',
        correct: false,
        response:
          'A clever response, I’ll admit. But my ego is eternal and untouchable. Unlike Thor, who would currently be very touchable in his tiny form.',
      },
    ],
  },
  {
    id: 5,
    quote:
      'Black holes! The universe’s ‘delete’ button. And yet, physicists insist they don’t actually erase information. Let’s see if you can wrap your mortal brain around this one.',
    question:
      'You toss your top-secret quantum encryption key into a black hole. Years later, Hawking radiation leaks out. Does your key...',
    options: [
      {
        text: 'Get deleted from the universe like a bad tweet',
        correct: false,
        response:
          'Oh, how adorable. You actually believe in permanent deletion? My dear, even the most embarrassing things—bad tweets, bad haircuts, bad multiversal decisions—never truly disappear.',
      },
      {
        text: 'Exist somewhere in scrambled form',
        correct: true,
        response:
          'Well, well, look at you. You’ve grasped one of the universe’s biggest headaches. Perhaps I should make you my apprentice… though, given the company I keep, that’s not much of a compliment.',
      },
      {
        text: 'Reappear in an alternate reality where Tony Stark still dodged Thanos',
        correct: false,
        response:
          'A tempting thought. But if that were true, I’d have already found a timeline where Thor respects personal space. Alas, no such luck.',
      },
    ],
  },
]
