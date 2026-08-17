const BOOKS = [
  {
    id: 'testing',
    title: 'Software Testing for Beginners',
    shortTitle: 'Testing for Beginners',
    symbol: 'T',
    level: 'Beginner',
    description: 'Learn how software testers think, plan tests, find bugs, report defects and understand modern web and API testing.',
    chapters: [
      {
        title: 'What Is Software Testing?',
        intro: 'Testing is not just clicking around an application. It is a disciplined way of learning whether software behaves as expected and where it may fail.',
        sections: [
          {h:'Why do we test?', p:['Software is built by people, and people can misunderstand requirements, make coding mistakes or miss unusual situations. Testing helps reveal those problems before users depend on the product.','A good tester asks two questions repeatedly: “Does this work as intended?” and “What happens when someone does something unexpected?”']},
          {h:'Verification and validation', p:['Verification asks whether we built the product correctly according to specifications. Validation asks whether we built the right product for the user’s real need. Both matter.']},
          {callout:'Beginner mindset: Do not try only the happy path. Try normal inputs, boundaries, missing data, invalid data and realistic user mistakes.'}
        ],
        qa:[['Is testing the same as debugging?','No. Testing discovers and demonstrates failures. Debugging is the developer activity of locating the cause and fixing it.'],['Can testing prove software has zero bugs?','No. Testing can increase confidence and reveal defects, but it cannot prove that no undiscovered defect exists.'],['Who is responsible for quality?','The whole team. Testers specialize in quality investigation, but developers, product owners, designers and operations all contribute.']],
        quiz:{q:'Which statement best describes testing?', options:['Proving software has no bugs','Investigating software to find risks and build confidence','Only checking the user interface'], answer:1}
      },
      {
        title: 'SDLC, STLC and the Tester’s Role',
        intro: 'Understanding where testing fits in the development lifecycle helps you know what to do before, during and after coding.',
        sections:[
          {h:'SDLC in simple terms',p:['The Software Development Life Cycle usually includes requirements, design, development, testing, deployment and maintenance. In Agile teams these activities often overlap and repeat in short iterations.']},
          {h:'STLC in simple terms',p:['The Software Testing Life Cycle commonly includes requirement analysis, test planning, test design, environment setup, execution, defect reporting and closure.']},
          {h:'Shift left',p:['Modern teams involve testers earlier. Reviewing a requirement before coding can prevent a defect instead of merely finding it later.']},
          {example:'Example: A login requirement says passwords must be “secure.” A tester can ask before development: minimum length? special characters? lockout after failed attempts? Those questions remove ambiguity early.'}
        ],
        qa:[['What is STLC?','A structured sequence of testing activities from understanding requirements through planning, execution, reporting and closure.'],['Does Agile remove the need for testing phases?','No. The activities still happen, but they are often continuous and integrated into each sprint.']],
        quiz:{q:'What does “shift left” encourage?',options:['Testing only after release','Involving quality activities earlier','Moving all testing to production'],answer:1}
      },
      {
        title: 'Test Scenarios and Test Cases',
        intro: 'A test scenario tells you what to check. A test case explains exactly how to check it and what result you expect.',
        sections:[
          {h:'From requirement to scenario',p:['For a login page, scenarios may include successful login, wrong password, blank fields, locked account and password visibility.']},
          {h:'A useful test case',p:['A practical test case contains an ID, title, preconditions, steps, test data, expected result and actual result/status during execution. Keep steps clear enough that another tester can repeat them.']},
          {h:'Positive and negative tests',p:['Positive tests use valid actions and data. Negative tests intentionally use invalid or unexpected conditions to verify the system handles them safely.']},
          {example:'TC-LOGIN-003 — Enter a registered email with an incorrect password. Expected: login is rejected and a safe error message appears without revealing whether the account exists.'}
        ],
        qa:[['What is the difference between a scenario and a test case?','A scenario is a high-level condition to test; a test case gives detailed steps, data and expected results.'],['Should every test case be very long?','No. It should be just detailed enough to be repeatable and unambiguous.']],
        quiz:{q:'Which belongs in a test case?',options:['Only the feature name','Steps and expected result','Developer salary'],answer:1}
      },
      {
        title: 'Testing Techniques',
        intro: 'You cannot test every possible input. Test design techniques help you choose a small number of powerful tests.',
        sections:[
          {h:'Equivalence partitioning',p:['Group inputs that should behave similarly, then test a representative value from each group. If age accepts 18–60, useful groups are below 18, 18–60 and above 60.']},
          {h:'Boundary value analysis',p:['Defects frequently occur near limits. For the 18–60 example, test values such as 17, 18, 19, 59, 60 and 61.']},
          {h:'Decision tables',p:['When outcomes depend on combinations of conditions, a decision table makes those combinations visible and reduces missed cases.']},
          {callout:'A small set of carefully chosen tests is often more valuable than a huge set of repetitive tests.'}
        ],
        qa:[['Why are boundaries important?','Comparison and validation mistakes often appear at minimums, maximums and just outside them.'],['When is a decision table useful?','When multiple conditions combine to produce different outcomes or business rules.']],
        quiz:{q:'For a valid range 1–100, which is a strong boundary set?',options:['20, 40, 60','0, 1, 2, 99, 100, 101','Only 50'],answer:1}
      },
      {
        title: 'Defects and Bug Reports',
        intro: 'Finding a bug is only half the job. A clear report helps the team reproduce, understand and fix it quickly.',
        sections:[
          {h:'What makes a strong bug report?',p:['Use a specific title, environment, preconditions, exact reproduction steps, expected result, actual result, evidence and severity. Avoid emotional or vague wording.']},
          {h:'Severity vs priority',p:['Severity describes technical or user impact. Priority describes how urgently the business wants the issue fixed. A typo on the home page may be low severity but high priority before a major launch.']},
          {example:'Weak: “Login broken.” Better: “Login button remains disabled after entering a valid email and 12-character password on Safari 18.”'}
        ],
        qa:[['What is reproducibility?','The ability to make the same defect occur again using documented conditions and steps.'],['Who sets priority?','It is usually a product/business decision made with engineering and QA input.']],
        quiz:{q:'What should a bug title communicate?',options:['A concise observable problem','The tester’s mood','Every possible detail'],answer:0}
      },
      {
        title: 'Web, Mobile and API Testing Basics',
        intro: 'Different interfaces introduce different risks. The testing mindset stays the same, but the checks change.',
        sections:[
          {h:'Web testing',p:['Check functional behavior, responsive layouts, browser compatibility, navigation, forms, accessibility basics, error handling and network conditions.']},
          {h:'Mobile testing',p:['Consider screen sizes, orientation, permissions, interruptions, slow networks, battery behavior, installation/update flows and device differences.']},
          {h:'API testing',p:['An API test sends a request and checks the response status, body, headers, validation, authorization and business rules. Tools such as Postman are commonly used for learning.']},
          {example:'GET /users/42 might be expected to return HTTP 200 and the correct user. GET /users/999999 may be expected to return 404 without leaking internal error details.'}
        ],
        qa:[['What does HTTP 200 usually mean?','The request was successfully handled.'],['Is a good UI enough if the API is wrong?','No. UI and API layers can fail independently, so both may need testing.']],
        quiz:{q:'Which is especially relevant to mobile testing?',options:['Device orientation and permissions','Printer toner','Database table naming'],answer:0}
      },
      {
        title: 'Regression, Smoke and Exploratory Testing',
        intro: 'These terms describe different testing goals. Knowing when to use each one is essential on real projects.',
        sections:[
          {h:'Smoke testing',p:['A small, fast set of critical checks that determines whether a build is stable enough for deeper testing.']},
          {h:'Regression testing',p:['Rechecking existing behavior after changes to detect unintended side effects. Good automation often focuses heavily on stable regression scenarios.']},
          {h:'Exploratory testing',p:['Learning, test design and execution happen together. The tester follows observations and risks instead of only executing predefined cases.']},
          {callout:'Exploratory testing is not random clicking. Strong exploratory sessions have a purpose, time box and notes.'}
        ],
        qa:[['When should smoke tests run?','Often after a new build or deployment, before investing in broader testing.'],['Why automate regression tests?','Stable, repetitive checks can run frequently and consistently, freeing people for higher-value investigation.']],
        quiz:{q:'What is the main purpose of regression testing?',options:['Find side effects of changes','Design the logo','Replace all manual testing'],answer:0}
      },
      {
        title: 'Your First Testing Project',
        intro: 'Put the concepts together by testing a small real application as if you were joining a QA team.',
        sections:[
          {h:'Choose a feature',p:['Pick a familiar public demo app or a simple local application. Start with login, signup, search or a calculator.']},
          {h:'Create your mini test pack',p:['Write 8–12 scenarios, convert the most important ones into detailed test cases, identify boundaries, execute them and write at least two sample bug reports—even if you must invent realistic defects for practice.']},
          {h:'Build a beginner portfolio',p:['Keep your test plan, cases and sample defects in GitHub. Add a short README explaining what you tested, your assumptions and what you learned.']},
          {callout:'Next step: learn basic SQL, HTTP/API concepts, browser developer tools, Git and one test automation language such as Java, JavaScript or Python.'}
        ],
        qa:[['Do I need coding to start manual testing?','No. You can learn core testing without coding, though technical skills greatly expand your opportunities.'],['What should a beginner portfolio show?','Clear thinking, well-designed tests, concise defect reporting and evidence that you understand risk—not just a large quantity of documents.']],
        quiz:{q:'What is a good first portfolio project?',options:['A small feature tested thoroughly','A 500-page document with no examples','Only screenshots'],answer:0}
      }
    ]
  },
  {
    id: 'english',
    title: 'English for Beginners',
    shortTitle: 'English for Beginners',
    symbol: 'E',
    level: 'Beginner · A1–A2',
    description: 'Build practical everyday English with simple grammar, useful vocabulary, short conversations and confidence-building exercises.',
    chapters: [
      {
        title:'Start Speaking: Greetings & Introductions',
        intro:'You do not need perfect grammar to begin speaking. Start with short, useful patterns you can repeat every day.',
        sections:[
          {h:'Useful greetings',p:['Say “Good morning” in the morning, “Good afternoon” later in the day, and “Good evening” when you meet someone in the evening. “Hello” and “Hi” work in most everyday situations.']},
          {h:'Introduce yourself',p:['A simple pattern is: “Hi, I’m Ravi. I’m from Bengaluru. I work in software.” Ask the other person: “What’s your name?” or “Where are you from?”']},
          {example:'A: Hi, I’m Maya. Nice to meet you.\nB: Hi Maya, I’m Arun. Nice to meet you too.'}
        ],
        qa:[['What is a natural reply to “How are you?”','“I’m good, thanks. How are you?” is simple and natural.'],['Is “Myself Ravi” a natural introduction?','In standard conversational English, prefer “I’m Ravi” or “My name is Ravi.”']],
        quiz:{q:'Which introduction sounds most natural?',options:['Myself John','I’m John. Nice to meet you.','John myself'],answer:1}
      },
      {
        title:'The Building Blocks: I, You, He, She, It, We, They',
        intro:'Pronouns replace names and nouns. Learning them makes simple sentences much easier.',
        sections:[
          {h:'Subject pronouns',p:['Use I for yourself, you for the person or people you speak to, he for a male person, she for a female person, it for a thing or sometimes an animal, we for yourself plus others, and they for multiple people or things.']},
          {h:'The verb “be”',p:['Use “I am,” “you are,” “he/she/it is,” “we are,” and “they are.” In conversation, contractions are common: I’m, you’re, he’s, she’s, we’re, they’re.']},
          {example:'I am tired. → I’m tired.\nShe is a doctor. → She’s a doctor.\nThey are ready. → They’re ready.'}
        ],
        qa:[['Which is correct: “He are happy” or “He is happy”?','“He is happy” is correct.'],['Can “you” mean more than one person?','Yes. English uses “you” for one person and for multiple people.']],
        quiz:{q:'Choose the correct sentence.',options:['They is ready.','They are ready.','They am ready.'],answer:1}
      },
      {
        title:'Simple Present: Everyday Life',
        intro:'Use the simple present for routines, facts, habits and things that are generally true.',
        sections:[
          {h:'Basic pattern',p:['With I/you/we/they, use the base verb: “I work.” With he/she/it, usually add -s: “She works.”']},
          {h:'Questions and negatives',p:['Use do with I/you/we/they and does with he/she/it: “Do you drive?” “Does he work here?” For negatives: “I do not know” / “I don’t know”; “She does not eat meat” / “She doesn’t eat meat.”']},
          {callout:'After “does” or “doesn’t,” use the base verb: “Does she work?” — not “Does she works?”'}
        ],
        qa:[['Why do we say “He works”?','In the simple present, third-person singular subjects (he/she/it) generally take a verb ending in -s or -es.'],['Which is correct: “She doesn’t likes tea”?','Use “She doesn’t like tea.” The helping verb “does” carries the tense.']],
        quiz:{q:'Which sentence is correct?',options:['He go to work at 9.','He goes to work at 9.','He going to work at 9.'],answer:1}
      },
      {
        title:'Talking About Now: Present Continuous',
        intro:'Use the present continuous for actions happening now or around the current time.',
        sections:[
          {h:'The pattern',p:['Use am/is/are + verb-ing: “I am reading,” “She is cooking,” “They are waiting.”']},
          {h:'Simple present vs present continuous',p:['“I work in Bengaluru” describes a normal fact or routine. “I am working from home today” describes a temporary situation happening around now.']},
          {example:'A: What are you doing?\nB: I’m waiting for the bus.\nA: Do you take this bus every day?\nB: Yes, I do.'}
        ],
        qa:[['Is “I am go to office” correct?','No. Say “I am going to the office” for an action now, or “I go to the office” for a routine.'],['What is the -ing form of “make”?','“Making.” The final silent e is dropped.']],
        quiz:{q:'You are on a call right now. Which fits?',options:['I talk to my manager now.','I am talking to my manager now.','I talking my manager now.'],answer:1}
      },
      {
        title:'Past and Future Basics',
        intro:'You can tell simple stories and make plans with only a few dependable patterns.',
        sections:[
          {h:'Simple past',p:['Regular verbs often add -ed: work → worked, call → called. Common irregular verbs change form: go → went, see → saw, have → had, eat → ate.']},
          {h:'Future with “will” and “going to”',p:['Use “will” for quick decisions, promises or predictions: “I’ll call you.” Use “going to” for plans or intentions: “I’m going to visit Mysuru this weekend.”']},
          {example:'Yesterday I went to the market. Today I am working. Tomorrow I’m going to meet a friend.'}
        ],
        qa:[['What is the past of “go”?','“Went.”'],['Is “I will went” correct?','No. After “will,” use the base verb: “I will go.”']],
        quiz:{q:'Which sentence is correct?',options:['Yesterday I go home early.','Yesterday I went home early.','Yesterday I will go home early.'],answer:1}
      },
      {
        title:'Questions for Real Conversations',
        intro:'Good conversations become easier when you can ask clear questions and listen for the important part of the answer.',
        sections:[
          {h:'Question words',p:['Who asks about a person. What asks about a thing or action. Where asks about a place. When asks about time. Why asks for a reason. How asks about method, condition or degree.']},
          {h:'Useful everyday questions',p:['“Where do you live?” “What do you do?” “How much is this?” “When does the train leave?” “Could you help me?” “Can you say that again?”']},
          {callout:'Polite repair phrases are powerful: “Sorry, I didn’t understand.” “Could you speak a little slower?” “What does ___ mean?”'}
        ],
        qa:[['How can I ask someone to repeat politely?','Say “Could you say that again, please?” or “Sorry, could you repeat that?”'],['What is wrong with “Where you are going?”','For this continuous question, use “Where are you going?”']],
        quiz:{q:'Which is the best question about a place?',options:['Where do you live?','When do you live?','Why do you live?'],answer:0}
      },
      {
        title:'Useful English for Work, Travel and Shopping',
        intro:'Memorizing useful sentence patterns gives you immediate confidence in common situations.',
        sections:[
          {h:'At work',p:['“Could you send me the file?” “I’ll check and get back to you.” “Can we move the meeting to 3 p.m.?” “I have a question about this task.”']},
          {h:'While travelling',p:['“Where is platform two?” “How long does it take?” “Is breakfast included?” “I have a reservation under the name Jain.”']},
          {h:'While shopping',p:['“How much is this?” “Do you have this in a different size?” “Can I pay by card?” “Could I get a receipt, please?”']},
          {example:'Instead of translating a whole sentence from your first language, learn reusable chunks such as “Could you…?”, “I’d like…”, “How long…?”, and “Where can I…?”'}
        ],
        qa:[['What does “I’d like” mean?','It is a polite shortened form of “I would like,” often used when requesting or ordering something.'],['Is “Give me water” always wrong?','It is grammatically possible but can sound abrupt. “Could I have some water, please?” is more polite in many situations.']],
        quiz:{q:'Which is a polite request?',options:['Send file.','Could you send me the file, please?','You send file now.'],answer:1}
      },
      {
        title:'A 30-Day English Practice Plan',
        intro:'Consistency beats intensity. A small routine every day is more useful than studying for hours once a week.',
        sections:[
          {h:'Your daily 20 minutes',p:['Spend 5 minutes reading aloud, 5 minutes listening to simple English, 5 minutes speaking about your day, and 5 minutes writing three to five sentences.']},
          {h:'Build from sentences, not isolated words',p:['When you learn “appointment,” also learn “I have an appointment at 10.” When you learn “available,” learn “Are you available tomorrow?” This makes vocabulary easier to use in real speech.']},
          {h:'Record yourself',p:['Once or twice a week, record a one-minute voice note about your day. Listen back and notice one pronunciation or grammar point to improve—not twenty things at once.']},
          {callout:'Goal for the first month: speak clearly enough to be understood. Accuracy can improve step by step.'}
        ],
        qa:[['Should I wait until my grammar is perfect before speaking?','No. Speak with the grammar you know, then improve through feedback and repetition.'],['How many new words should I learn?','There is no magic number. A manageable set of useful words and phrases that you actually review and use is better than a huge forgotten list.']],
        quiz:{q:'Which practice habit is most sustainable?',options:['20 focused minutes every day','Eight hours once a month','Only memorizing word lists'],answer:0}
      }
    ]
  }
];
