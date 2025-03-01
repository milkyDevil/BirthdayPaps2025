export const deadpoolDialogue = {
  meet: "Oh hey, fresh meat! You look like you just got lost in a multiversal fanfic—don't worry, happens to the best of us. So, long story short: Scarlet Witch hit me with a ‘talkative idiot’ curse (rude, right?), and Iron Man—because he totally owes her one—took time from his billionaire spa days to whip up this quiz. Now, I could totally ace it myself... but, uh, let’s just say my brain is more ‘chimichanga storage’ than ‘physics vault.’ So congrats, Pappu! You’re my nerdy lifeline! Get all five right, and boom—curse gone, Deadpool free, and you? Well, you get the honor of knowing you saved the most handsome mercenary in the multiverse. No pressure!",
  meetSrc: '/src/assets/images/watcher.jpg',

  goodbye:
    'Alright, Pappu, I officially owe you one—don’t let it go to your head! Now, heads up: your next stop is Loki’s timeline, and trust me, that guy lies more than a politician at a campaign rally. If he offers you a deal, a trinket, or—even worse—a ‘friendly’ hug, just run. Oh, and one more thing… Doctor Strange saw 14,000,605 futures, but guess what? None of them had me actually saying this—Happy Birthday, Pappu! Consider it a multiversal exclusive! Now go, before I get all emotional and ruin my bad-boy image!',
  goodbyeSrc: '/src/assets/images/watcher.jpg',
}

export const questions = [
  {
    id: 1,
    question:
      'Alright, science whiz, let’s say you’re flying your fancy new suit at nearly the speed of light. To an observer chilling on Earth, what happens to your suit’s length and your onboard clock?',
    options: [
      {
        text: 'The suit shrinks, and the clock slows down.',
        correct: true,
        response:
          "Holy Schrödinger’s cat! You nailed it! I might just shed a single tear—oh wait, that’s just my healing factor acting up. If Einstein were alive, he’d probably high-five you. But since he's not, you’ll have to settle for my imaginary high-five… wait, did you feel that? Nah, must be relativity messing with your perception of awesome!",
      },
      {
        text: 'The suit stretches like Mr. Fantastic, and the clock slows down.',
        correct: false,
        response:
          "Oh wow, Pappu, I didn't know physics worked like my ego—expanding all the time! Sadly, in this universe, things don’t stretch unless you’re Reed Richards. Try again!",
      },
      {
        text: 'The suit stays the same, but time still gets lazy.',
        correct: false,
        response:
          'Ah yes, the rare ‘Laws of Physics? Never heard of ‘em’ answer. Maybe in some multiverse, Einstein is just a barista, but not in this one, buddy. Now use that brain, not just the good looks!',
      },
    ],
  },
  {
    id: 2,
    question:
      "Alright, you’ve been zapped down to the quantum realm—don’t ask, let’s just say Pym Particles were involved. Now, you're staring at two entangled particles chilling millions of light-years apart. Feeling all-knowing, you measure the spin of one. What happens to its long-distance twin?",
    options: [
      {
        text: 'Boom! Its spin is instantly determined in a correlated way, no matter the distance.',
        correct: true,
        response:
          "Holy non-locality, Batman! Look at you bending the rules of the universe like Loki with a PhD in quantum mischief! You just outplayed Einstein (again) and made spooky action at a distance look like child’s play. If quantum entanglement had a VIP section, you'd be sipping cosmic cocktails next to me—because obviously, I get in everywhere. Welcome to the elite club of physics nerds who actually get this stuff… and don’t make my brain hurt!",
      },
      {
        text: "It stays in superposition until the first particle's state is sent at light speed.",
        correct: false,
        response:
          'Oof. That answer was so bad, even Heisenberg is uncertain about what you were thinking. You just violated the sacred laws of quantum weirdness! If information traveled at light speed here, Einstein would rise from the grave just to shake his head at you. Spooky action at a DISTANCE, remember? Not at a speed limit!. Want to try again before I call Doctor Strange to fix this mess?',
      },
      {
        text: 'It collapses randomly, completely ignoring the first particle—because physics loves chaos.',
        correct: false,
        response:
          "Wow. I haven’t seen someone mess up quantum physics this badly since Schrödinger forgot to feed his cat. Should I call Ant-Man to shrink down and explain it to you in slow motion. If entanglement worked that way, I'd have to send my own healing factor a memo every time I got stabbed.",
      },
    ],
  },
  {
    id: 3,
    question:
      'Alright, genius, you’ve been shrunk down to the size of a quark—hope you’re not claustrophobic. Inside the nucleus of an atom, you see protons packed tighter than my schedule. Now tell me, what’s stopping them from yeeting themselves apart?',
    options: [
      {
        text: 'The strong nuclear force, mediated by photons, counteracts the repulsion.',
        correct: false,
        response:
          'Oh wow, you just gave photons a whole new job! Next, are you gonna tell me gravity is just really sad electrons? I hate to break it to you, but photons do light, not nuclear glue. Try again before I start using quantum mechanics to teleport away from this disaster!',
      },
      {
        text: 'The weak nuclear force, mediated by bosons, prevents them from separating.',
        correct: false,
        response:
          'Ah yes, the weak nuclear force… the force so weak, even my grandma could beat it in an arm-wrestling match. If you think that’s holding the nucleus together, I’ve got some vibranium stocks to sell you. Wanna try again before I start crying in subatomic frustration?',
      },
      {
        text: 'The strong nuclear force, mediated by gluons, holds them together despite their repulsion.',
        correct: true,
        response:
          'Damn, Einstein! You sure you’re not a variant of Tony Stark? That was some genius-level stuff. You just stuck that answer together stronger than a proton in a neutron’s warm embrace! You, my friend, have officially earned a gold star in Quantum Glue-ology. If I had a gluon for every right answer you gave, I could hold my life together… but hey, let’s not ask for miracles!',
      },
    ],
  },
  {
    id: 4,
    question:
      "Alright, listen up, Tiny Tornado. Let’s say you start flapping your arms like a lunatic—no reason, just because you're you. Fast forward a month, and bam! A hurricane shows up in the Pacific. Coincidence, or did you just break physics?",
    options: [
      {
        text: 'My flapping caused the hurricane. Time to take responsibility.',
        correct: false,
        response:
          'Oh wow, look at you, Butterfly Boy! Next, you’ll tell me every time you sneeze, someone in Wakanda loses Wi-Fi.',
      },
      {
        text: 'The hurricane was inevitable—flapping or not.',
        correct: true,
        response:
          'Ding-ding-ding! We have a winner! Science prevails! And guess what? You now have my respect… for the next five seconds. Use them wisely.',
      },
      {
        text: 'This is all Loki’s fault somehow.',
        correct: false,
        response:
          'Blaming Loki? That’s so last season. Might as well blame Doctor Strange’s cape while you’re at it.',
      },
    ],
  },
  {
    id: 5,
    question:
      'Alright, science nerd, let’s say you’re strutting through a party full of physicists, feeling all smug. Suddenly—bam!—the Higgs field disappears. Do you:',
    options: [
      {
        text: 'Keep your mass, but now Einstein owes you an explanation (and probably a drink).',
        correct: true,
        response:
          'Ding-ding! Science wins! And congrats, you just joined the exclusive club of ‘People Who Understand Mass’—membership: you and literally no one at a flat Earth convention.',
      },
      {
        text: 'Float away like a massless photon, gracefully ignoring gravity.',
        correct: false,
        response:
          'Look at you, cosmic dandelion! Just don’t let Thor see you floating—he might mistake you for Mjolnir’s long-lost twin.',
      },
      {
        text: 'Collapse into a quantum mess of pure energy—so, Monday.',
        correct: false,
        response:
          'Ah yes, spontaneous energy conversion! Also known as ‘me after three chimichangas and a questionable life decision.’',
      },
    ],
  },
]
