const BOOKS = [
  {
    "id": "testing",
    "title": "Software Testing for Beginners",
    "shortTitle": "Testing for Beginners",
    "symbol": "T",
    "level": "Beginner",
    "description": "A 100-page practical introduction to manual testing, web and mobile testing, APIs, defects, SQL, automation and QA career skills.",
    "pageCount": 100,
    "chapters": [
      {
        "module": "Module 1 — Testing Foundations",
        "title": "What Software Testing Really Means",
        "intro": "Software testing is a systematic investigation of a product to discover risks, defects and missing expectations. It builds evidence about quality rather than proving perfection.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Software testing is a systematic investigation of a product to discover risks, defects and missing expectations. It builds evidence about quality rather than proving perfection.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind what software testing really means. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A tester checks a login with valid data, invalid data, blank fields and unusual sequences instead of only confirming one successful login.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “What Software Testing Really Means” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 1 takeaway: Software testing is a systematic investigation of a product to discover risks, defects and missing expectations. It builds evidence about quality rather than proving perfection."
          }
        ],
        "qa": [
          [
            "What is the main purpose of what software testing really means?",
            "Software testing is a systematic investigation of a product to discover risks, defects and missing expectations. It builds evidence about quality rather than proving perfection."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “What Software Testing Really Means”?",
          "options": [
            "Software testing is a systematic investigation of a product to discover risks, defects and missing expectations. It builds evidence about quality rather than proving perfection.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Why Software Needs Testing",
        "intro": "Requirements can be misunderstood, code can contain mistakes, integrations can fail and users can behave in unexpected ways. Testing reduces uncertainty before those problems become costly.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Requirements can be misunderstood, code can contain mistakes, integrations can fail and users can behave in unexpected ways. Testing reduces uncertainty before those problems become costly.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind why software needs testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A discount feature works for one item but applies the wrong total when a cart contains mixed tax categories.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Why Software Needs Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 2 takeaway: Requirements can be misunderstood, code can contain mistakes, integrations can fail and users can behave in unexpected ways. Testing reduces uncertainty before those problems become costly."
          }
        ],
        "qa": [
          [
            "What is the main purpose of why software needs testing?",
            "Requirements can be misunderstood, code can contain mistakes, integrations can fail and users can behave in unexpected ways. Testing reduces uncertainty before those problems become costly."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Why Software Needs Testing”?",
          "options": [
            "Requirements can be misunderstood, code can contain mistakes, integrations can fail and users can behave in unexpected ways. Testing reduces uncertainty before those problems become costly.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Quality Is a Team Responsibility",
        "intro": "Quality is created by product decisions, design, code, tests, deployment and support. Testers specialize in investigation, but they do not own quality alone.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Quality is created by product decisions, design, code, tests, deployment and support. Testers specialize in investigation, but they do not own quality alone.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind quality is a team responsibility. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A tester, developer and product owner review a confusing refund rule together before implementation.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Quality Is a Team Responsibility” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 3 takeaway: Quality is created by product decisions, design, code, tests, deployment and support. Testers specialize in investigation, but they do not own quality alone."
          }
        ],
        "qa": [
          [
            "What is the main purpose of quality is a team responsibility?",
            "Quality is created by product decisions, design, code, tests, deployment and support. Testers specialize in investigation, but they do not own quality alone."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Quality Is a Team Responsibility”?",
          "options": [
            "Quality is created by product decisions, design, code, tests, deployment and support. Testers specialize in investigation, but they do not own quality alone.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Testing vs Debugging",
        "intro": "Testing exposes a failure and gathers evidence. Debugging is the engineering activity of finding the underlying cause and changing the code or configuration.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Testing exposes a failure and gathers evidence. Debugging is the engineering activity of finding the underlying cause and changing the code or configuration.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind testing vs debugging. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "QA reproduces a crash on file upload; the developer traces it to an unhandled null value and fixes it.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Testing vs Debugging” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 4 takeaway: Testing exposes a failure and gathers evidence. Debugging is the engineering activity of finding the underlying cause and changing the code or configuration."
          }
        ],
        "qa": [
          [
            "What is the main purpose of testing vs debugging?",
            "Testing exposes a failure and gathers evidence. Debugging is the engineering activity of finding the underlying cause and changing the code or configuration."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Testing vs Debugging”?",
          "options": [
            "Testing exposes a failure and gathers evidence. Debugging is the engineering activity of finding the underlying cause and changing the code or configuration.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Verification and Validation",
        "intro": "Verification asks whether the product matches its specification. Validation asks whether the product solves the user problem in a useful way.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Verification asks whether the product matches its specification. Validation asks whether the product solves the user problem in a useful way.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind verification and validation. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A form can match the written requirement yet still be frustrating if users cannot understand its error messages.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Verification and Validation” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 5 takeaway: Verification asks whether the product matches its specification. Validation asks whether the product solves the user problem in a useful way."
          }
        ],
        "qa": [
          [
            "What is the main purpose of verification and validation?",
            "Verification asks whether the product matches its specification. Validation asks whether the product solves the user problem in a useful way."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Verification and Validation”?",
          "options": [
            "Verification asks whether the product matches its specification. Validation asks whether the product solves the user problem in a useful way.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "The Tester Mindset",
        "intro": "Good testers are curious, skeptical without being negative, and willing to ask what could go wrong. They observe patterns and challenge assumptions with evidence.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Good testers are curious, skeptical without being negative, and willing to ask what could go wrong. They observe patterns and challenge assumptions with evidence.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind the tester mindset. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "When a field says “maximum 50 characters,” the tester tries 49, 50, 51, spaces, emoji and pasted text.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “The Tester Mindset” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 6 takeaway: Good testers are curious, skeptical without being negative, and willing to ask what could go wrong. They observe patterns and challenge assumptions with evidence."
          }
        ],
        "qa": [
          [
            "What is the main purpose of the tester mindset?",
            "Good testers are curious, skeptical without being negative, and willing to ask what could go wrong. They observe patterns and challenge assumptions with evidence."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “The Tester Mindset”?",
          "options": [
            "Good testers are curious, skeptical without being negative, and willing to ask what could go wrong. They observe patterns and challenge assumptions with evidence.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Happy Paths and Unhappy Paths",
        "intro": "A happy path is the expected successful flow. Unhappy paths cover invalid, interrupted, incomplete or exceptional situations that real users will eventually encounter.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A happy path is the expected successful flow. Unhappy paths cover invalid, interrupted, incomplete or exceptional situations that real users will eventually encounter.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind happy paths and unhappy paths. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "For checkout, test successful payment as well as declined cards, network loss, duplicate taps and expired sessions.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Happy Paths and Unhappy Paths” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 7 takeaway: A happy path is the expected successful flow. Unhappy paths cover invalid, interrupted, incomplete or exceptional situations that real users will eventually encounter."
          }
        ],
        "qa": [
          [
            "What is the main purpose of happy paths and unhappy paths?",
            "A happy path is the expected successful flow. Unhappy paths cover invalid, interrupted, incomplete or exceptional situations that real users will eventually encounter."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Happy Paths and Unhappy Paths”?",
          "options": [
            "A happy path is the expected successful flow. Unhappy paths cover invalid, interrupted, incomplete or exceptional situations that real users will eventually encounter.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Risk-Based Thinking",
        "intro": "Not every feature deserves the same test depth. Prioritize areas with high business impact, technical complexity, frequent change or a history of defects.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Not every feature deserves the same test depth. Prioritize areas with high business impact, technical complexity, frequent change or a history of defects.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind risk-based thinking. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A payment calculation receives deeper testing than a decorative profile background.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Risk-Based Thinking” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 8 takeaway: Not every feature deserves the same test depth. Prioritize areas with high business impact, technical complexity, frequent change or a history of defects."
          }
        ],
        "qa": [
          [
            "What is the main purpose of risk-based thinking?",
            "Not every feature deserves the same test depth. Prioritize areas with high business impact, technical complexity, frequent change or a history of defects."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Risk-Based Thinking”?",
          "options": [
            "Not every feature deserves the same test depth. Prioritize areas with high business impact, technical complexity, frequent change or a history of defects.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "Test Evidence and Confidence",
        "intro": "A test result becomes useful when it records what was checked, under what conditions and what happened. Evidence helps teams make release decisions.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A test result becomes useful when it records what was checked, under what conditions and what happened. Evidence helps teams make release decisions.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind test evidence and confidence. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A bug report includes browser version, test account, screenshot and exact timestamp instead of only saying “page failed.”",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Test Evidence and Confidence” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 9 takeaway: A test result becomes useful when it records what was checked, under what conditions and what happened. Evidence helps teams make release decisions."
          }
        ],
        "qa": [
          [
            "What is the main purpose of test evidence and confidence?",
            "A test result becomes useful when it records what was checked, under what conditions and what happened. Evidence helps teams make release decisions."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Test Evidence and Confidence”?",
          "options": [
            "A test result becomes useful when it records what was checked, under what conditions and what happened. Evidence helps teams make release decisions.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Testing Foundations",
        "title": "The Limits of Testing",
        "intro": "Exhaustive testing is usually impossible because inputs, devices and states grow too quickly. Testing is about smart sampling and risk reduction.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Exhaustive testing is usually impossible because inputs, devices and states grow too quickly. Testing is about smart sampling and risk reduction.",
              "Think like an investigator. Ask what the user expects, what can fail and what evidence would change your confidence. On this page, focus on the purpose behind the limits of testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A search box accepts thousands of possible strings, so the tester selects representative, boundary and risky cases instead of every string.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “The Limits of Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 10 takeaway: Exhaustive testing is usually impossible because inputs, devices and states grow too quickly. Testing is about smart sampling and risk reduction."
          }
        ],
        "qa": [
          [
            "What is the main purpose of the limits of testing?",
            "Exhaustive testing is usually impossible because inputs, devices and states grow too quickly. Testing is about smart sampling and risk reduction."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “The Limits of Testing”?",
          "options": [
            "Exhaustive testing is usually impossible because inputs, devices and states grow too quickly. Testing is about smart sampling and risk reduction.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "The Software Development Life Cycle",
        "intro": "The SDLC describes how an idea moves through requirements, design, implementation, testing, release and maintenance. Modern teams often repeat these activities in short cycles.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "The SDLC describes how an idea moves through requirements, design, implementation, testing, release and maintenance. Modern teams often repeat these activities in short cycles.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind the software development life cycle. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A two-week sprint includes requirement discussion, coding, testing and a small production release.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “The Software Development Life Cycle” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 11 takeaway: The SDLC describes how an idea moves through requirements, design, implementation, testing, release and maintenance. Modern teams often repeat these activities in short cycles."
          }
        ],
        "qa": [
          [
            "What is the main purpose of the software development life cycle?",
            "The SDLC describes how an idea moves through requirements, design, implementation, testing, release and maintenance. Modern teams often repeat these activities in short cycles."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “The Software Development Life Cycle”?",
          "options": [
            "The SDLC describes how an idea moves through requirements, design, implementation, testing, release and maintenance. Modern teams often repeat these activities in short cycles.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "The Software Testing Life Cycle",
        "intro": "The STLC organizes testing work into requirement analysis, planning, test design, environment setup, execution, defect management and closure.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "The STLC organizes testing work into requirement analysis, planning, test design, environment setup, execution, defect management and closure.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind the software testing life cycle. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Before execution begins, QA identifies scope, data, environments and expected results.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “The Software Testing Life Cycle” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 12 takeaway: The STLC organizes testing work into requirement analysis, planning, test design, environment setup, execution, defect management and closure."
          }
        ],
        "qa": [
          [
            "What is the main purpose of the software testing life cycle?",
            "The STLC organizes testing work into requirement analysis, planning, test design, environment setup, execution, defect management and closure."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “The Software Testing Life Cycle”?",
          "options": [
            "The STLC organizes testing work into requirement analysis, planning, test design, environment setup, execution, defect management and closure.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Waterfall Testing Basics",
        "intro": "In a traditional waterfall model, phases are more sequential and testing may happen after a large development phase. Late discovery can make defects expensive to fix.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "In a traditional waterfall model, phases are more sequential and testing may happen after a large development phase. Late discovery can make defects expensive to fix.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind waterfall testing basics. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A requirement misunderstanding found during final system testing forces design and code changes across several modules.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Waterfall Testing Basics” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 13 takeaway: In a traditional waterfall model, phases are more sequential and testing may happen after a large development phase. Late discovery can make defects expensive to fix."
          }
        ],
        "qa": [
          [
            "What is the main purpose of waterfall testing basics?",
            "In a traditional waterfall model, phases are more sequential and testing may happen after a large development phase. Late discovery can make defects expensive to fix."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Waterfall Testing Basics”?",
          "options": [
            "In a traditional waterfall model, phases are more sequential and testing may happen after a large development phase. Late discovery can make defects expensive to fix.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Agile Testing Basics",
        "intro": "Agile testing happens continuously within short iterations. Testers collaborate early, refine acceptance criteria and test small increments frequently.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Agile testing happens continuously within short iterations. Testers collaborate early, refine acceptance criteria and test small increments frequently.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind agile testing basics. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "QA joins backlog refinement and adds edge cases before a story enters the sprint.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Agile Testing Basics” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 14 takeaway: Agile testing happens continuously within short iterations. Testers collaborate early, refine acceptance criteria and test small increments frequently."
          }
        ],
        "qa": [
          [
            "What is the main purpose of agile testing basics?",
            "Agile testing happens continuously within short iterations. Testers collaborate early, refine acceptance criteria and test small increments frequently."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Agile Testing Basics”?",
          "options": [
            "Agile testing happens continuously within short iterations. Testers collaborate early, refine acceptance criteria and test small increments frequently.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Scrum Terms for Testers",
        "intro": "Common Scrum concepts include product backlog, sprint, daily scrum, review and retrospective. Testers use them to surface risk and coordinate quality work.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Common Scrum concepts include product backlog, sprint, daily scrum, review and retrospective. Testers use them to surface risk and coordinate quality work.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind scrum terms for testers. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "During a daily scrum, QA reports that test data is blocking payment verification and requests help immediately.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Scrum Terms for Testers” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 15 takeaway: Common Scrum concepts include product backlog, sprint, daily scrum, review and retrospective. Testers use them to surface risk and coordinate quality work."
          }
        ],
        "qa": [
          [
            "What is the main purpose of scrum terms for testers?",
            "Common Scrum concepts include product backlog, sprint, daily scrum, review and retrospective. Testers use them to surface risk and coordinate quality work."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Scrum Terms for Testers”?",
          "options": [
            "Common Scrum concepts include product backlog, sprint, daily scrum, review and retrospective. Testers use them to surface risk and coordinate quality work.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Shift Left Testing",
        "intro": "Shift left means moving quality activities earlier, such as reviewing requirements, examples, designs and APIs before implementation is complete.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Shift left means moving quality activities earlier, such as reviewing requirements, examples, designs and APIs before implementation is complete.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind shift left testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A tester notices that “strong password” is undefined and asks for measurable rules before development starts.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Shift Left Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 16 takeaway: Shift left means moving quality activities earlier, such as reviewing requirements, examples, designs and APIs before implementation is complete."
          }
        ],
        "qa": [
          [
            "What is the main purpose of shift left testing?",
            "Shift left means moving quality activities earlier, such as reviewing requirements, examples, designs and APIs before implementation is complete."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Shift Left Testing”?",
          "options": [
            "Shift left means moving quality activities earlier, such as reviewing requirements, examples, designs and APIs before implementation is complete.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Shift Right Testing",
        "intro": "Shift right means learning from production through monitoring, telemetry, controlled experiments and feedback while still protecting users.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Shift right means learning from production through monitoring, telemetry, controlled experiments and feedback while still protecting users.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind shift right testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A team monitors error rate after a release and rolls back when a new endpoint starts returning more 500 errors.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Shift Right Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 17 takeaway: Shift right means learning from production through monitoring, telemetry, controlled experiments and feedback while still protecting users."
          }
        ],
        "qa": [
          [
            "What is the main purpose of shift right testing?",
            "Shift right means learning from production through monitoring, telemetry, controlled experiments and feedback while still protecting users."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Shift Right Testing”?",
          "options": [
            "Shift right means learning from production through monitoring, telemetry, controlled experiments and feedback while still protecting users.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Test Strategy vs Test Plan",
        "intro": "A test strategy explains the broad approach to quality; a test plan applies that approach to a specific product, release or scope.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A test strategy explains the broad approach to quality; a test plan applies that approach to a specific product, release or scope.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind test strategy vs test plan. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "The strategy says critical APIs require automation; a release plan lists which APIs, environments and owners are in scope.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Test Strategy vs Test Plan” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 18 takeaway: A test strategy explains the broad approach to quality; a test plan applies that approach to a specific product, release or scope."
          }
        ],
        "qa": [
          [
            "What is the main purpose of test strategy vs test plan?",
            "A test strategy explains the broad approach to quality; a test plan applies that approach to a specific product, release or scope."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Test Strategy vs Test Plan”?",
          "options": [
            "A test strategy explains the broad approach to quality; a test plan applies that approach to a specific product, release or scope.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Estimating Testing Work",
        "intro": "Testing estimates should account for complexity, dependencies, environments, data, regression, defects and retesting—not only the number of test cases.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Testing estimates should account for complexity, dependencies, environments, data, regression, defects and retesting—not only the number of test cases.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind estimating testing work. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A “small” payment change needs extra time because three banks and two currencies must be validated.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Estimating Testing Work” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 19 takeaway: Testing estimates should account for complexity, dependencies, environments, data, regression, defects and retesting—not only the number of test cases."
          }
        ],
        "qa": [
          [
            "What is the main purpose of estimating testing work?",
            "Testing estimates should account for complexity, dependencies, environments, data, regression, defects and retesting—not only the number of test cases."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Estimating Testing Work”?",
          "options": [
            "Testing estimates should account for complexity, dependencies, environments, data, regression, defects and retesting—not only the number of test cases.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — SDLC, Agile and Test Planning",
        "title": "Entry and Exit Criteria",
        "intro": "Entry criteria describe what must be ready before a test activity starts. Exit criteria define the evidence needed to consider it complete.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Entry criteria describe what must be ready before a test activity starts. Exit criteria define the evidence needed to consider it complete.",
              "Connect testing with the way software is planned and delivered. Early questions often prevent more defects than late execution. On this page, focus on the purpose behind entry and exit criteria. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "System testing begins only after the build is stable and ends when critical tests pass with no open release-blocking defects.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Entry and Exit Criteria” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 20 takeaway: Entry criteria describe what must be ready before a test activity starts. Exit criteria define the evidence needed to consider it complete."
          }
        ],
        "qa": [
          [
            "What is the main purpose of entry and exit criteria?",
            "Entry criteria describe what must be ready before a test activity starts. Exit criteria define the evidence needed to consider it complete."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Entry and Exit Criteria”?",
          "options": [
            "Entry criteria describe what must be ready before a test activity starts. Exit criteria define the evidence needed to consider it complete.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Reading Requirements Like a Tester",
        "intro": "Testers read requirements for ambiguity, missing rules, contradictions, dependencies and testability. Clear questions prevent defects before code exists.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Testers read requirements for ambiguity, missing rules, contradictions, dependencies and testability. Clear questions prevent defects before code exists.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind reading requirements like a tester. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "“User can upload a file” leads to questions about type, size, count, filename, malware scanning and failure messages.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Reading Requirements Like a Tester” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 21 takeaway: Testers read requirements for ambiguity, missing rules, contradictions, dependencies and testability. Clear questions prevent defects before code exists."
          }
        ],
        "qa": [
          [
            "What is the main purpose of reading requirements like a tester?",
            "Testers read requirements for ambiguity, missing rules, contradictions, dependencies and testability. Clear questions prevent defects before code exists."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Reading Requirements Like a Tester”?",
          "options": [
            "Testers read requirements for ambiguity, missing rules, contradictions, dependencies and testability. Clear questions prevent defects before code exists.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Acceptance Criteria",
        "intro": "Acceptance criteria define observable conditions that a story must satisfy. Strong criteria are specific enough to test and discuss.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Acceptance criteria define observable conditions that a story must satisfy. Strong criteria are specific enough to test and discuss.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind acceptance criteria. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A reset link expires after 15 minutes, can be used once and shows a safe message after expiration.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Acceptance Criteria” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 22 takeaway: Acceptance criteria define observable conditions that a story must satisfy. Strong criteria are specific enough to test and discuss."
          }
        ],
        "qa": [
          [
            "What is the main purpose of acceptance criteria?",
            "Acceptance criteria define observable conditions that a story must satisfy. Strong criteria are specific enough to test and discuss."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Acceptance Criteria”?",
          "options": [
            "Acceptance criteria define observable conditions that a story must satisfy. Strong criteria are specific enough to test and discuss.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Test Scenarios",
        "intro": "A test scenario is a high-level condition or user journey to examine. It helps organize coverage without prescribing every click.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A test scenario is a high-level condition or user journey to examine. It helps organize coverage without prescribing every click.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind test scenarios. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Scenarios for login include successful login, invalid password, locked account, expired password and session timeout.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Test Scenarios” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 23 takeaway: A test scenario is a high-level condition or user journey to examine. It helps organize coverage without prescribing every click."
          }
        ],
        "qa": [
          [
            "What is the main purpose of test scenarios?",
            "A test scenario is a high-level condition or user journey to examine. It helps organize coverage without prescribing every click."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Test Scenarios”?",
          "options": [
            "A test scenario is a high-level condition or user journey to examine. It helps organize coverage without prescribing every click.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Writing Clear Test Cases",
        "intro": "A repeatable test case usually includes an ID, purpose, preconditions, steps, data and expected result. Clarity matters more than unnecessary detail.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A repeatable test case usually includes an ID, purpose, preconditions, steps, data and expected result. Clarity matters more than unnecessary detail.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind writing clear test cases. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "TC-LOGIN-004 uses a known locked user, enters valid credentials and expects an account-locked message with no session created.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Writing Clear Test Cases” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 24 takeaway: A repeatable test case usually includes an ID, purpose, preconditions, steps, data and expected result. Clarity matters more than unnecessary detail."
          }
        ],
        "qa": [
          [
            "What is the main purpose of writing clear test cases?",
            "A repeatable test case usually includes an ID, purpose, preconditions, steps, data and expected result. Clarity matters more than unnecessary detail."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Writing Clear Test Cases”?",
          "options": [
            "A repeatable test case usually includes an ID, purpose, preconditions, steps, data and expected result. Clarity matters more than unnecessary detail.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Positive Testing",
        "intro": "Positive tests confirm that valid inputs and intended workflows produce successful outcomes. They establish that core behavior works.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Positive tests confirm that valid inputs and intended workflows produce successful outcomes. They establish that core behavior works.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind positive testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A registered user signs in with correct credentials and reaches the dashboard.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Positive Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 25 takeaway: Positive tests confirm that valid inputs and intended workflows produce successful outcomes. They establish that core behavior works."
          }
        ],
        "qa": [
          [
            "What is the main purpose of positive testing?",
            "Positive tests confirm that valid inputs and intended workflows produce successful outcomes. They establish that core behavior works."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Positive Testing”?",
          "options": [
            "Positive tests confirm that valid inputs and intended workflows produce successful outcomes. They establish that core behavior works.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Negative Testing",
        "intro": "Negative tests check invalid, missing or unexpected inputs and confirm that the system fails safely and clearly.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Negative tests check invalid, missing or unexpected inputs and confirm that the system fails safely and clearly.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind negative testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A user submits an empty mandatory email field and receives inline validation without an API request.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Negative Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 26 takeaway: Negative tests check invalid, missing or unexpected inputs and confirm that the system fails safely and clearly."
          }
        ],
        "qa": [
          [
            "What is the main purpose of negative testing?",
            "Negative tests check invalid, missing or unexpected inputs and confirm that the system fails safely and clearly."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Negative Testing”?",
          "options": [
            "Negative tests check invalid, missing or unexpected inputs and confirm that the system fails safely and clearly.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Preconditions and Test Data",
        "intro": "Preconditions define the state required before execution. Good test data is controlled, realistic and easy to identify or reset.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Preconditions define the state required before execution. Good test data is controlled, realistic and easy to identify or reset.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind preconditions and test data. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A refund test requires an order that is paid, delivered and within the allowed return window.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Preconditions and Test Data” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 27 takeaway: Preconditions define the state required before execution. Good test data is controlled, realistic and easy to identify or reset."
          }
        ],
        "qa": [
          [
            "What is the main purpose of preconditions and test data?",
            "Preconditions define the state required before execution. Good test data is controlled, realistic and easy to identify or reset."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Preconditions and Test Data”?",
          "options": [
            "Preconditions define the state required before execution. Good test data is controlled, realistic and easy to identify or reset.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Expected Results",
        "intro": "Expected results should describe observable behavior, not vague phrases like “works correctly.” They should be linked to a rule or requirement.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Expected results should describe observable behavior, not vague phrases like “works correctly.” They should be linked to a rule or requirement.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind expected results. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Instead of “error shown,” write “HTTP 400 is returned and the UI displays ‘Phone number must contain 10 digits.’”",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Expected Results” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 28 takeaway: Expected results should describe observable behavior, not vague phrases like “works correctly.” They should be linked to a rule or requirement."
          }
        ],
        "qa": [
          [
            "What is the main purpose of expected results?",
            "Expected results should describe observable behavior, not vague phrases like “works correctly.” They should be linked to a rule or requirement."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Expected Results”?",
          "options": [
            "Expected results should describe observable behavior, not vague phrases like “works correctly.” They should be linked to a rule or requirement.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Traceability",
        "intro": "Traceability links requirements to tests and defects so teams can see what is covered, changed or still unverified.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Traceability links requirements to tests and defects so teams can see what is covered, changed or still unverified.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind traceability. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Requirement PAY-12 links to six test cases and one open defect, making release impact visible.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Traceability” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 29 takeaway: Traceability links requirements to tests and defects so teams can see what is covered, changed or still unverified."
          }
        ],
        "qa": [
          [
            "What is the main purpose of traceability?",
            "Traceability links requirements to tests and defects so teams can see what is covered, changed or still unverified."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Traceability”?",
          "options": [
            "Traceability links requirements to tests and defects so teams can see what is covered, changed or still unverified.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Requirements and Test Cases",
        "title": "Maintaining Test Cases",
        "intro": "Test suites are products too. Remove obsolete cases, combine duplicates and update cases when behavior changes so regression remains trustworthy.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Test suites are products too. Remove obsolete cases, combine duplicates and update cases when behavior changes so regression remains trustworthy.",
              "Turn vague requirements into observable conditions. Good test design begins before anyone opens a test tool. On this page, focus on the purpose behind maintaining test cases. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A legacy browser test is retired when the product officially drops support for that browser.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Maintaining Test Cases” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 30 takeaway: Test suites are products too. Remove obsolete cases, combine duplicates and update cases when behavior changes so regression remains trustworthy."
          }
        ],
        "qa": [
          [
            "What is the main purpose of maintaining test cases?",
            "Test suites are products too. Remove obsolete cases, combine duplicates and update cases when behavior changes so regression remains trustworthy."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Maintaining Test Cases”?",
          "options": [
            "Test suites are products too. Remove obsolete cases, combine duplicates and update cases when behavior changes so regression remains trustworthy.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Equivalence Partitioning",
        "intro": "Equivalence partitioning groups values expected to behave similarly, allowing a representative test from each meaningful group.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Equivalence partitioning groups values expected to behave similarly, allowing a representative test from each meaningful group.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind equivalence partitioning. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "For age 18–60, useful partitions are below 18, valid 18–60 and above 60.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Equivalence Partitioning” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 31 takeaway: Equivalence partitioning groups values expected to behave similarly, allowing a representative test from each meaningful group."
          }
        ],
        "qa": [
          [
            "What is the main purpose of equivalence partitioning?",
            "Equivalence partitioning groups values expected to behave similarly, allowing a representative test from each meaningful group."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Equivalence Partitioning”?",
          "options": [
            "Equivalence partitioning groups values expected to behave similarly, allowing a representative test from each meaningful group.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Boundary Value Analysis",
        "intro": "Many defects occur at edges where comparisons change. Test minimums, maximums and values just inside and outside those limits.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Many defects occur at edges where comparisons change. Test minimums, maximums and values just inside and outside those limits.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind boundary value analysis. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "For a quantity 1–99, test 0, 1, 2, 98, 99 and 100.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Boundary Value Analysis” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 32 takeaway: Many defects occur at edges where comparisons change. Test minimums, maximums and values just inside and outside those limits."
          }
        ],
        "qa": [
          [
            "What is the main purpose of boundary value analysis?",
            "Many defects occur at edges where comparisons change. Test minimums, maximums and values just inside and outside those limits."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Boundary Value Analysis”?",
          "options": [
            "Many defects occur at edges where comparisons change. Test minimums, maximums and values just inside and outside those limits.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Decision Table Testing",
        "intro": "Decision tables organize combinations of conditions and outcomes, especially when business rules interact.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Decision tables organize combinations of conditions and outcomes, especially when business rules interact.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind decision table testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Shipping is free only for premium users or orders over ₹999, except restricted locations; a table exposes each combination.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Decision Table Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 33 takeaway: Decision tables organize combinations of conditions and outcomes, especially when business rules interact."
          }
        ],
        "qa": [
          [
            "What is the main purpose of decision table testing?",
            "Decision tables organize combinations of conditions and outcomes, especially when business rules interact."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Decision Table Testing”?",
          "options": [
            "Decision tables organize combinations of conditions and outcomes, especially when business rules interact.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "State Transition Testing",
        "intro": "State transition testing checks how behavior changes as an object moves between states and whether invalid transitions are blocked.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "State transition testing checks how behavior changes as an object moves between states and whether invalid transitions are blocked.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind state transition testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "An order can move from Paid to Shipped, but a Cancelled order must not move back to Shipped.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “State Transition Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 34 takeaway: State transition testing checks how behavior changes as an object moves between states and whether invalid transitions are blocked."
          }
        ],
        "qa": [
          [
            "What is the main purpose of state transition testing?",
            "State transition testing checks how behavior changes as an object moves between states and whether invalid transitions are blocked."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “State Transition Testing”?",
          "options": [
            "State transition testing checks how behavior changes as an object moves between states and whether invalid transitions are blocked.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Use Case Testing",
        "intro": "Use case testing follows end-to-end interactions between an actor and the system, including alternate and failure flows.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Use case testing follows end-to-end interactions between an actor and the system, including alternate and failure flows.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind use case testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A money transfer use case covers recipient selection, amount entry, OTP, success receipt and insufficient-balance flow.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Use Case Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 35 takeaway: Use case testing follows end-to-end interactions between an actor and the system, including alternate and failure flows."
          }
        ],
        "qa": [
          [
            "What is the main purpose of use case testing?",
            "Use case testing follows end-to-end interactions between an actor and the system, including alternate and failure flows."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Use Case Testing”?",
          "options": [
            "Use case testing follows end-to-end interactions between an actor and the system, including alternate and failure flows.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Pairwise Testing",
        "intro": "Pairwise testing selects combinations so every pair of parameter values appears at least once, reducing combinatorial explosion.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Pairwise testing selects combinations so every pair of parameter values appears at least once, reducing combinatorial explosion.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind pairwise testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Instead of testing every browser × OS × language combination, a pairwise set covers each pair efficiently.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Pairwise Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 36 takeaway: Pairwise testing selects combinations so every pair of parameter values appears at least once, reducing combinatorial explosion."
          }
        ],
        "qa": [
          [
            "What is the main purpose of pairwise testing?",
            "Pairwise testing selects combinations so every pair of parameter values appears at least once, reducing combinatorial explosion."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Pairwise Testing”?",
          "options": [
            "Pairwise testing selects combinations so every pair of parameter values appears at least once, reducing combinatorial explosion.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Error Guessing",
        "intro": "Error guessing uses experience and intuition to target common failure patterns not obvious from formal techniques.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Error guessing uses experience and intuition to target common failure patterns not obvious from formal techniques.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind error guessing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A tester tries double-clicking Submit because previous products created duplicate records on repeated clicks.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Error Guessing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 37 takeaway: Error guessing uses experience and intuition to target common failure patterns not obvious from formal techniques."
          }
        ],
        "qa": [
          [
            "What is the main purpose of error guessing?",
            "Error guessing uses experience and intuition to target common failure patterns not obvious from formal techniques."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Error Guessing”?",
          "options": [
            "Error guessing uses experience and intuition to target common failure patterns not obvious from formal techniques.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Checklist-Based Testing",
        "intro": "Checklists capture reusable quality concerns and are useful for consistency, reviews and lightweight regression.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Checklists capture reusable quality concerns and are useful for consistency, reviews and lightweight regression.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind checklist-based testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A form checklist includes labels, keyboard access, validation, max length, copy/paste, errors and responsive layout.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Checklist-Based Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 38 takeaway: Checklists capture reusable quality concerns and are useful for consistency, reviews and lightweight regression."
          }
        ],
        "qa": [
          [
            "What is the main purpose of checklist-based testing?",
            "Checklists capture reusable quality concerns and are useful for consistency, reviews and lightweight regression."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Checklist-Based Testing”?",
          "options": [
            "Checklists capture reusable quality concerns and are useful for consistency, reviews and lightweight regression.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Exploratory Test Charters",
        "intro": "A charter gives exploratory testing a mission, scope and risk focus while leaving room to follow discoveries.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A charter gives exploratory testing a mission, scope and risk focus while leaving room to follow discoveries.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind exploratory test charters. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Explore checkout with poor network conditions to discover ways users could be charged without seeing confirmation.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Exploratory Test Charters” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 39 takeaway: A charter gives exploratory testing a mission, scope and risk focus while leaving room to follow discoveries."
          }
        ],
        "qa": [
          [
            "What is the main purpose of exploratory test charters?",
            "A charter gives exploratory testing a mission, scope and risk focus while leaving room to follow discoveries."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Exploratory Test Charters”?",
          "options": [
            "A charter gives exploratory testing a mission, scope and risk focus while leaving room to follow discoveries.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Test Design Techniques",
        "title": "Combining Techniques",
        "intro": "Strong test design often combines techniques because each reveals different risks. Boundaries, states, decisions and exploration complement one another.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Strong test design often combines techniques because each reveals different risks. Boundaries, states, decisions and exploration complement one another.",
              "Use techniques to choose high-value examples instead of trying random values. Each technique exposes a different class of risk. On this page, focus on the purpose behind combining techniques. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A subscription flow uses decision tables for plan rules, boundaries for dates and exploration for browser back-button behavior.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Combining Techniques” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 40 takeaway: Strong test design often combines techniques because each reveals different risks. Boundaries, states, decisions and exploration complement one another."
          }
        ],
        "qa": [
          [
            "What is the main purpose of combining techniques?",
            "Strong test design often combines techniques because each reveals different risks. Boundaries, states, decisions and exploration complement one another."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Combining Techniques”?",
          "options": [
            "Strong test design often combines techniques because each reveals different risks. Boundaries, states, decisions and exploration complement one another.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Executing Tests Systematically",
        "intro": "Test execution should record actual results, evidence and unexpected observations. Avoid changing several variables at once when investigating a failure.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Test execution should record actual results, evidence and unexpected observations. Avoid changing several variables at once when investigating a failure.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind executing tests systematically. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "When a test fails only on Safari, QA repeats it with the same account and data on Chrome before changing other conditions.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Executing Tests Systematically” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 41 takeaway: Test execution should record actual results, evidence and unexpected observations. Avoid changing several variables at once when investigating a failure."
          }
        ],
        "qa": [
          [
            "What is the main purpose of executing tests systematically?",
            "Test execution should record actual results, evidence and unexpected observations. Avoid changing several variables at once when investigating a failure."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Executing Tests Systematically”?",
          "options": [
            "Test execution should record actual results, evidence and unexpected observations. Avoid changing several variables at once when investigating a failure.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "What Makes a Good Bug Report",
        "intro": "A strong defect report is reproducible, specific and evidence-based. It tells the team what happened, where and how to see it again.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A strong defect report is reproducible, specific and evidence-based. It tells the team what happened, where and how to see it again.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind what makes a good bug report. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "“Checkout shows blank page after applying SAVE20 on Safari 18” is more useful than “checkout broken.”",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “What Makes a Good Bug Report” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 42 takeaway: A strong defect report is reproducible, specific and evidence-based. It tells the team what happened, where and how to see it again."
          }
        ],
        "qa": [
          [
            "What is the main purpose of what makes a good bug report?",
            "A strong defect report is reproducible, specific and evidence-based. It tells the team what happened, where and how to see it again."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “What Makes a Good Bug Report”?",
          "options": [
            "A strong defect report is reproducible, specific and evidence-based. It tells the team what happened, where and how to see it again.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Bug Titles That Help",
        "intro": "A bug title should state the affected area, trigger and observable problem without guessing the root cause.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A bug title should state the affected area, trigger and observable problem without guessing the root cause.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind bug titles that help. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "“Profile photo upload remains at 0% for PNG files above 5 MB” gives immediate context.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Bug Titles That Help” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 43 takeaway: A bug title should state the affected area, trigger and observable problem without guessing the root cause."
          }
        ],
        "qa": [
          [
            "What is the main purpose of bug titles that help?",
            "A bug title should state the affected area, trigger and observable problem without guessing the root cause."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Bug Titles That Help”?",
          "options": [
            "A bug title should state the affected area, trigger and observable problem without guessing the root cause.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Severity and Priority",
        "intro": "Severity describes impact; priority describes urgency. They influence each other but are not the same concept.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Severity describes impact; priority describes urgency. They influence each other but are not the same concept.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind severity and priority. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A spelling error on a campaign banner is low severity but may be high priority before launch.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Severity and Priority” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 44 takeaway: Severity describes impact; priority describes urgency. They influence each other but are not the same concept."
          }
        ],
        "qa": [
          [
            "What is the main purpose of severity and priority?",
            "Severity describes impact; priority describes urgency. They influence each other but are not the same concept."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Severity and Priority”?",
          "options": [
            "Severity describes impact; priority describes urgency. They influence each other but are not the same concept.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Defect Lifecycle",
        "intro": "Defects often move through states such as New, Assigned, In Progress, Fixed, Retest, Reopened and Closed, though workflows vary by team.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Defects often move through states such as New, Assigned, In Progress, Fixed, Retest, Reopened and Closed, though workflows vary by team.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind defect lifecycle. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "QA retests a fixed issue, finds it still fails on Android and reopens it with new evidence.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Defect Lifecycle” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 45 takeaway: Defects often move through states such as New, Assigned, In Progress, Fixed, Retest, Reopened and Closed, though workflows vary by team."
          }
        ],
        "qa": [
          [
            "What is the main purpose of defect lifecycle?",
            "Defects often move through states such as New, Assigned, In Progress, Fixed, Retest, Reopened and Closed, though workflows vary by team."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Defect Lifecycle”?",
          "options": [
            "Defects often move through states such as New, Assigned, In Progress, Fixed, Retest, Reopened and Closed, though workflows vary by team.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Reproducing Intermittent Bugs",
        "intro": "Intermittent defects require disciplined observation of timing, network, account state, device, logs and repetition patterns.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Intermittent defects require disciplined observation of timing, network, account state, device, logs and repetition patterns.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind reproducing intermittent bugs. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A save failure occurs only after the session has been open for 30 minutes, suggesting a token or timeout condition.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Reproducing Intermittent Bugs” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 46 takeaway: Intermittent defects require disciplined observation of timing, network, account state, device, logs and repetition patterns."
          }
        ],
        "qa": [
          [
            "What is the main purpose of reproducing intermittent bugs?",
            "Intermittent defects require disciplined observation of timing, network, account state, device, logs and repetition patterns."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Reproducing Intermittent Bugs”?",
          "options": [
            "Intermittent defects require disciplined observation of timing, network, account state, device, logs and repetition patterns.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Retesting vs Regression",
        "intro": "Retesting checks the specific fix. Regression checks whether the change unintentionally affected existing behavior elsewhere.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Retesting checks the specific fix. Regression checks whether the change unintentionally affected existing behavior elsewhere.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind retesting vs regression. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "After fixing tax rounding, QA retests the reported order and also checks discounts, refunds and invoices.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Retesting vs Regression” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 47 takeaway: Retesting checks the specific fix. Regression checks whether the change unintentionally affected existing behavior elsewhere."
          }
        ],
        "qa": [
          [
            "What is the main purpose of retesting vs regression?",
            "Retesting checks the specific fix. Regression checks whether the change unintentionally affected existing behavior elsewhere."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Retesting vs Regression”?",
          "options": [
            "Retesting checks the specific fix. Regression checks whether the change unintentionally affected existing behavior elsewhere.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "When a Bug Is Not a Bug",
        "intro": "Some reports are expected behavior, environment problems or requirement misunderstandings. Investigate respectfully and clarify with evidence.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Some reports are expected behavior, environment problems or requirement misunderstandings. Investigate respectfully and clarify with evidence.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind when a bug is not a bug. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A feature is unavailable in a test account because the account lacks the required subscription entitlement.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “When a Bug Is Not a Bug” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 48 takeaway: Some reports are expected behavior, environment problems or requirement misunderstandings. Investigate respectfully and clarify with evidence."
          }
        ],
        "qa": [
          [
            "What is the main purpose of when a bug is not a bug?",
            "Some reports are expected behavior, environment problems or requirement misunderstandings. Investigate respectfully and clarify with evidence."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “When a Bug Is Not a Bug”?",
          "options": [
            "Some reports are expected behavior, environment problems or requirement misunderstandings. Investigate respectfully and clarify with evidence.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Test Closure and Reporting",
        "intro": "Closure summarizes scope, results, remaining risks, defect status and lessons. It helps stakeholders understand release confidence.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Closure summarizes scope, results, remaining risks, defect status and lessons. It helps stakeholders understand release confidence.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind test closure and reporting. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A report states that 96% of planned tests passed and one known medium-risk issue remains in a rarely used export flow.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Test Closure and Reporting” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 49 takeaway: Closure summarizes scope, results, remaining risks, defect status and lessons. It helps stakeholders understand release confidence."
          }
        ],
        "qa": [
          [
            "What is the main purpose of test closure and reporting?",
            "Closure summarizes scope, results, remaining risks, defect status and lessons. It helps stakeholders understand release confidence."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Test Closure and Reporting”?",
          "options": [
            "Closure summarizes scope, results, remaining risks, defect status and lessons. It helps stakeholders understand release confidence.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Defects and Test Execution",
        "title": "Learning From Escaped Defects",
        "intro": "A production defect is a chance to improve requirements, design, tests, monitoring or process rather than simply blame a person.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A production defect is a chance to improve requirements, design, tests, monitoring or process rather than simply blame a person.",
              "Execution is disciplined evidence collection. Defect communication should make the next person’s work easier. On this page, focus on the purpose behind learning from escaped defects. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "After a timezone bug reaches production, the team adds timezone examples to requirements and regression data.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Learning From Escaped Defects” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 50 takeaway: A production defect is a chance to improve requirements, design, tests, monitoring or process rather than simply blame a person."
          }
        ],
        "qa": [
          [
            "What is the main purpose of learning from escaped defects?",
            "A production defect is a chance to improve requirements, design, tests, monitoring or process rather than simply blame a person."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Learning From Escaped Defects”?",
          "options": [
            "A production defect is a chance to improve requirements, design, tests, monitoring or process rather than simply blame a person.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Web Application Testing Overview",
        "intro": "Web testing covers functionality, usability, compatibility, accessibility, security basics and behavior across networks and screen sizes.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Web testing covers functionality, usability, compatibility, accessibility, security basics and behavior across networks and screen sizes.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind web application testing overview. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A responsive checkout is tested on narrow and wide screens, keyboard-only navigation and slow mobile data.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Web Application Testing Overview” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 51 takeaway: Web testing covers functionality, usability, compatibility, accessibility, security basics and behavior across networks and screen sizes."
          }
        ],
        "qa": [
          [
            "What is the main purpose of web application testing overview?",
            "Web testing covers functionality, usability, compatibility, accessibility, security basics and behavior across networks and screen sizes."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Web Application Testing Overview”?",
          "options": [
            "Web testing covers functionality, usability, compatibility, accessibility, security basics and behavior across networks and screen sizes.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Browser Compatibility",
        "intro": "Browsers use different engines and can interpret layout, media and APIs differently. Test the browser versions your users actually depend on.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Browsers use different engines and can interpret layout, media and APIs differently. Test the browser versions your users actually depend on.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind browser compatibility. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A date field works in Chrome but renders differently in Safari, breaking a custom validation script.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Browser Compatibility” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 52 takeaway: Browsers use different engines and can interpret layout, media and APIs differently. Test the browser versions your users actually depend on."
          }
        ],
        "qa": [
          [
            "What is the main purpose of browser compatibility?",
            "Browsers use different engines and can interpret layout, media and APIs differently. Test the browser versions your users actually depend on."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Browser Compatibility”?",
          "options": [
            "Browsers use different engines and can interpret layout, media and APIs differently. Test the browser versions your users actually depend on.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Responsive Design Testing",
        "intro": "Responsive testing verifies that content adapts without overlap, clipping, hidden controls or unreadable text as viewport size changes.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Responsive testing verifies that content adapts without overlap, clipping, hidden controls or unreadable text as viewport size changes.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind responsive design testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A sticky footer covers the Pay button on a 360-pixel-wide phone.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Responsive Design Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 53 takeaway: Responsive testing verifies that content adapts without overlap, clipping, hidden controls or unreadable text as viewport size changes."
          }
        ],
        "qa": [
          [
            "What is the main purpose of responsive design testing?",
            "Responsive testing verifies that content adapts without overlap, clipping, hidden controls or unreadable text as viewport size changes."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Responsive Design Testing”?",
          "options": [
            "Responsive testing verifies that content adapts without overlap, clipping, hidden controls or unreadable text as viewport size changes.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Forms and Validation",
        "intro": "Form testing includes required fields, formats, lengths, copy/paste, whitespace, error placement, accessibility and server-side validation.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Form testing includes required fields, formats, lengths, copy/paste, whitespace, error placement, accessibility and server-side validation.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind forms and validation. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A phone field strips spaces correctly but rejects a valid country code when pasted.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Forms and Validation” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 54 takeaway: Form testing includes required fields, formats, lengths, copy/paste, whitespace, error placement, accessibility and server-side validation."
          }
        ],
        "qa": [
          [
            "What is the main purpose of forms and validation?",
            "Form testing includes required fields, formats, lengths, copy/paste, whitespace, error placement, accessibility and server-side validation."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Forms and Validation”?",
          "options": [
            "Form testing includes required fields, formats, lengths, copy/paste, whitespace, error placement, accessibility and server-side validation.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Cookies, Sessions and Storage",
        "intro": "Web apps use cookies and browser storage for sessions and preferences. Test expiry, logout, multiple tabs and privacy-sensitive behavior.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Web apps use cookies and browser storage for sessions and preferences. Test expiry, logout, multiple tabs and privacy-sensitive behavior.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind cookies, sessions and storage. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "After logout, pressing Back must not reveal a cached account page containing personal data.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Cookies, Sessions and Storage” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 55 takeaway: Web apps use cookies and browser storage for sessions and preferences. Test expiry, logout, multiple tabs and privacy-sensitive behavior."
          }
        ],
        "qa": [
          [
            "What is the main purpose of cookies, sessions and storage?",
            "Web apps use cookies and browser storage for sessions and preferences. Test expiry, logout, multiple tabs and privacy-sensitive behavior."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Cookies, Sessions and Storage”?",
          "options": [
            "Web apps use cookies and browser storage for sessions and preferences. Test expiry, logout, multiple tabs and privacy-sensitive behavior.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Links and Navigation",
        "intro": "Navigation tests include internal links, external links, browser back/forward, deep links, redirects and preserved state.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Navigation tests include internal links, external links, browser back/forward, deep links, redirects and preserved state.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind links and navigation. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A filtered product page loses all selected filters when the user opens an item and returns.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Links and Navigation” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 56 takeaway: Navigation tests include internal links, external links, browser back/forward, deep links, redirects and preserved state."
          }
        ],
        "qa": [
          [
            "What is the main purpose of links and navigation?",
            "Navigation tests include internal links, external links, browser back/forward, deep links, redirects and preserved state."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Links and Navigation”?",
          "options": [
            "Navigation tests include internal links, external links, browser back/forward, deep links, redirects and preserved state.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Mobile App Testing Overview",
        "intro": "Mobile apps add device, OS, permission, orientation, installation, interruption and resource constraints to normal functional testing.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Mobile apps add device, OS, permission, orientation, installation, interruption and resource constraints to normal functional testing.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind mobile app testing overview. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A camera feature must handle permission denial and later permission changes from device settings.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Mobile App Testing Overview” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 57 takeaway: Mobile apps add device, OS, permission, orientation, installation, interruption and resource constraints to normal functional testing."
          }
        ],
        "qa": [
          [
            "What is the main purpose of mobile app testing overview?",
            "Mobile apps add device, OS, permission, orientation, installation, interruption and resource constraints to normal functional testing."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Mobile App Testing Overview”?",
          "options": [
            "Mobile apps add device, OS, permission, orientation, installation, interruption and resource constraints to normal functional testing.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Mobile Interruptions",
        "intro": "Real mobile use includes calls, notifications, lock screen, backgrounding, network switching and low battery. Apps should recover predictably.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Real mobile use includes calls, notifications, lock screen, backgrounding, network switching and low battery. Apps should recover predictably.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind mobile interruptions. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A payment confirmation should not be submitted twice when the user backgrounds and returns to the app.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Mobile Interruptions” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 58 takeaway: Real mobile use includes calls, notifications, lock screen, backgrounding, network switching and low battery. Apps should recover predictably."
          }
        ],
        "qa": [
          [
            "What is the main purpose of mobile interruptions?",
            "Real mobile use includes calls, notifications, lock screen, backgrounding, network switching and low battery. Apps should recover predictably."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Mobile Interruptions”?",
          "options": [
            "Real mobile use includes calls, notifications, lock screen, backgrounding, network switching and low battery. Apps should recover predictably.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Installation and Upgrade Testing",
        "intro": "Verify clean installs, updates, data migration, uninstall/reinstall and compatibility with supported OS versions.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Verify clean installs, updates, data migration, uninstall/reinstall and compatibility with supported OS versions.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind installation and upgrade testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "An upgrade from version 4 to 5 must preserve saved drafts created in the previous database schema.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Installation and Upgrade Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 59 takeaway: Verify clean installs, updates, data migration, uninstall/reinstall and compatibility with supported OS versions."
          }
        ],
        "qa": [
          [
            "What is the main purpose of installation and upgrade testing?",
            "Verify clean installs, updates, data migration, uninstall/reinstall and compatibility with supported OS versions."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Installation and Upgrade Testing”?",
          "options": [
            "Verify clean installs, updates, data migration, uninstall/reinstall and compatibility with supported OS versions.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Web and Mobile Testing",
        "title": "Device and Network Conditions",
        "intro": "Test representative devices and realistic network quality, including latency, loss, offline transitions and switching between Wi-Fi and mobile data.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Test representative devices and realistic network quality, including latency, loss, offline transitions and switching between Wi-Fi and mobile data.",
              "Real users have different devices, browsers, screens and network conditions. Compatibility is part of functional quality. On this page, focus on the purpose behind device and network conditions. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "An upload pauses when Wi-Fi disappears and resumes correctly on mobile data without creating duplicates.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Device and Network Conditions” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 60 takeaway: Test representative devices and realistic network quality, including latency, loss, offline transitions and switching between Wi-Fi and mobile data."
          }
        ],
        "qa": [
          [
            "What is the main purpose of device and network conditions?",
            "Test representative devices and realistic network quality, including latency, loss, offline transitions and switching between Wi-Fi and mobile data."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Device and Network Conditions”?",
          "options": [
            "Test representative devices and realistic network quality, including latency, loss, offline transitions and switching between Wi-Fi and mobile data.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "What an API Is",
        "intro": "An API is a contract through which software components exchange requests and responses. API testing checks behavior without depending on the user interface.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "An API is a contract through which software components exchange requests and responses. API testing checks behavior without depending on the user interface.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind what an api is. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A mobile app calls GET /orders/42 and receives structured JSON describing the order.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “What an API Is” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 61 takeaway: An API is a contract through which software components exchange requests and responses. API testing checks behavior without depending on the user interface."
          }
        ],
        "qa": [
          [
            "What is the main purpose of what an api is?",
            "An API is a contract through which software components exchange requests and responses. API testing checks behavior without depending on the user interface."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “What an API Is”?",
          "options": [
            "An API is a contract through which software components exchange requests and responses. API testing checks behavior without depending on the user interface.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "HTTP Methods",
        "intro": "Common HTTP methods include GET for retrieval, POST for creation, PUT or PATCH for updates and DELETE for removal, though exact semantics depend on the API contract.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Common HTTP methods include GET for retrieval, POST for creation, PUT or PATCH for updates and DELETE for removal, though exact semantics depend on the API contract.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind http methods. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "POST /users creates a user while GET /users/123 retrieves that user.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “HTTP Methods” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 62 takeaway: Common HTTP methods include GET for retrieval, POST for creation, PUT or PATCH for updates and DELETE for removal, though exact semantics depend on the API contract."
          }
        ],
        "qa": [
          [
            "What is the main purpose of http methods?",
            "Common HTTP methods include GET for retrieval, POST for creation, PUT or PATCH for updates and DELETE for removal, though exact semantics depend on the API contract."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “HTTP Methods”?",
          "options": [
            "Common HTTP methods include GET for retrieval, POST for creation, PUT or PATCH for updates and DELETE for removal, though exact semantics depend on the API contract.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "Status Codes",
        "intro": "Status codes summarize request outcomes. Test both expected success codes and meaningful client or server errors.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Status codes summarize request outcomes. Test both expected success codes and meaningful client or server errors.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind status codes. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A missing resource may return 404, while invalid input may return 400 or 422 depending on the API design.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Status Codes” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 63 takeaway: Status codes summarize request outcomes. Test both expected success codes and meaningful client or server errors."
          }
        ],
        "qa": [
          [
            "What is the main purpose of status codes?",
            "Status codes summarize request outcomes. Test both expected success codes and meaningful client or server errors."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Status Codes”?",
          "options": [
            "Status codes summarize request outcomes. Test both expected success codes and meaningful client or server errors.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "Request Components",
        "intro": "Requests can contain path parameters, query parameters, headers and bodies. Each area can carry valid, invalid or missing data worth testing.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Requests can contain path parameters, query parameters, headers and bodies. Each area can carry valid, invalid or missing data worth testing.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind request components. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "GET /products?limit=20 uses a query parameter; Authorization is commonly sent as a header.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Request Components” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 64 takeaway: Requests can contain path parameters, query parameters, headers and bodies. Each area can carry valid, invalid or missing data worth testing."
          }
        ],
        "qa": [
          [
            "What is the main purpose of request components?",
            "Requests can contain path parameters, query parameters, headers and bodies. Each area can carry valid, invalid or missing data worth testing."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Request Components”?",
          "options": [
            "Requests can contain path parameters, query parameters, headers and bodies. Each area can carry valid, invalid or missing data worth testing.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "Response Validation",
        "intro": "Do not check only the status code. Validate schema, data types, values, headers, error structure and business rules.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Do not check only the status code. Validate schema, data types, values, headers, error structure and business rules.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind response validation. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A 200 response is still wrong if the returned account balance belongs to another user.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Response Validation” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 65 takeaway: Do not check only the status code. Validate schema, data types, values, headers, error structure and business rules."
          }
        ],
        "qa": [
          [
            "What is the main purpose of response validation?",
            "Do not check only the status code. Validate schema, data types, values, headers, error structure and business rules."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Response Validation”?",
          "options": [
            "Do not check only the status code. Validate schema, data types, values, headers, error structure and business rules.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "API Authentication and Authorization",
        "intro": "Authentication answers who you are; authorization answers what you may do. Test missing, expired and insufficient credentials.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Authentication answers who you are; authorization answers what you may do. Test missing, expired and insufficient credentials.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind api authentication and authorization. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A normal user should receive a denial when calling an admin-only endpoint even with a valid token.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “API Authentication and Authorization” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 66 takeaway: Authentication answers who you are; authorization answers what you may do. Test missing, expired and insufficient credentials."
          }
        ],
        "qa": [
          [
            "What is the main purpose of api authentication and authorization?",
            "Authentication answers who you are; authorization answers what you may do. Test missing, expired and insufficient credentials."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “API Authentication and Authorization”?",
          "options": [
            "Authentication answers who you are; authorization answers what you may do. Test missing, expired and insufficient credentials.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "API Negative Testing",
        "intro": "APIs must reject malformed, missing, oversized and logically invalid data safely without exposing internal details.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "APIs must reject malformed, missing, oversized and logically invalid data safely without exposing internal details.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind api negative testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A POST request with an invalid date should return a controlled validation error, not a stack trace.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “API Negative Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 67 takeaway: APIs must reject malformed, missing, oversized and logically invalid data safely without exposing internal details."
          }
        ],
        "qa": [
          [
            "What is the main purpose of api negative testing?",
            "APIs must reject malformed, missing, oversized and logically invalid data safely without exposing internal details."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “API Negative Testing”?",
          "options": [
            "APIs must reject malformed, missing, oversized and logically invalid data safely without exposing internal details.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "Idempotency and Duplicate Requests",
        "intro": "Some operations should produce the same effect when safely repeated. Payment and order APIs may use idempotency keys to prevent duplicate side effects.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Some operations should produce the same effect when safely repeated. Payment and order APIs may use idempotency keys to prevent duplicate side effects.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind idempotency and duplicate requests. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Retrying the same payment request with the same idempotency key must not charge the customer twice.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Idempotency and Duplicate Requests” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 68 takeaway: Some operations should produce the same effect when safely repeated. Payment and order APIs may use idempotency keys to prevent duplicate side effects."
          }
        ],
        "qa": [
          [
            "What is the main purpose of idempotency and duplicate requests?",
            "Some operations should produce the same effect when safely repeated. Payment and order APIs may use idempotency keys to prevent duplicate side effects."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Idempotency and Duplicate Requests”?",
          "options": [
            "Some operations should produce the same effect when safely repeated. Payment and order APIs may use idempotency keys to prevent duplicate side effects.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "API Collections and Environments",
        "intro": "Tools such as Postman let beginners organize requests, variables and automated assertions across environments.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Tools such as Postman let beginners organize requests, variables and automated assertions across environments.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind api collections and environments. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "The same collection runs against test and staging by changing the base URL and token variables.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “API Collections and Environments” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 69 takeaway: Tools such as Postman let beginners organize requests, variables and automated assertions across environments."
          }
        ],
        "qa": [
          [
            "What is the main purpose of api collections and environments?",
            "Tools such as Postman let beginners organize requests, variables and automated assertions across environments."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “API Collections and Environments”?",
          "options": [
            "Tools such as Postman let beginners organize requests, variables and automated assertions across environments.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — API Testing",
        "title": "End-to-End API Scenarios",
        "intro": "Real API tests chain calls and verify data across services, not just isolated endpoints.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Real API tests chain calls and verify data across services, not just isolated endpoints.",
              "Treat the API contract as testable behavior. Validate authorization, data and business rules—not only the status code. On this page, focus on the purpose behind end-to-end api scenarios. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Create a customer, create an order for that customer, retrieve it and then cancel it while checking each state.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “End-to-End API Scenarios” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 70 takeaway: Real API tests chain calls and verify data across services, not just isolated endpoints."
          }
        ],
        "qa": [
          [
            "What is the main purpose of end-to-end api scenarios?",
            "Real API tests chain calls and verify data across services, not just isolated endpoints."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “End-to-End API Scenarios”?",
          "options": [
            "Real API tests chain calls and verify data across services, not just isolated endpoints.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Database Testing Basics",
        "intro": "Database testing checks that application actions create, update and retrieve correct persistent data while preserving constraints and relationships.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Database testing checks that application actions create, update and retrieve correct persistent data while preserving constraints and relationships.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind database testing basics. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Submitting a profile update changes the intended user row and does not overwrite another user.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Database Testing Basics” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 71 takeaway: Database testing checks that application actions create, update and retrieve correct persistent data while preserving constraints and relationships."
          }
        ],
        "qa": [
          [
            "What is the main purpose of database testing basics?",
            "Database testing checks that application actions create, update and retrieve correct persistent data while preserving constraints and relationships."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Database Testing Basics”?",
          "options": [
            "Database testing checks that application actions create, update and retrieve correct persistent data while preserving constraints and relationships.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "SQL Checks for Testers",
        "intro": "Basic SELECT queries help testers verify stored values, joins and record counts. Use test environments and follow data-access rules.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Basic SELECT queries help testers verify stored values, joins and record counts. Use test environments and follow data-access rules.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind sql checks for testers. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "After creating an order, QA queries by order ID to confirm status, amount and customer reference.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “SQL Checks for Testers” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 72 takeaway: Basic SELECT queries help testers verify stored values, joins and record counts. Use test environments and follow data-access rules."
          }
        ],
        "qa": [
          [
            "What is the main purpose of sql checks for testers?",
            "Basic SELECT queries help testers verify stored values, joins and record counts. Use test environments and follow data-access rules."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “SQL Checks for Testers”?",
          "options": [
            "Basic SELECT queries help testers verify stored values, joins and record counts. Use test environments and follow data-access rules.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Data Integrity",
        "intro": "Integrity means data remains accurate and consistent across operations, constraints and services. Test duplicates, transactions and partial failures.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Integrity means data remains accurate and consistent across operations, constraints and services. Test duplicates, transactions and partial failures.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind data integrity. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "If payment fails, an order should not remain marked Paid because only half of a transaction completed.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Data Integrity” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 73 takeaway: Integrity means data remains accurate and consistent across operations, constraints and services. Test duplicates, transactions and partial failures."
          }
        ],
        "qa": [
          [
            "What is the main purpose of data integrity?",
            "Integrity means data remains accurate and consistent across operations, constraints and services. Test duplicates, transactions and partial failures."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Data Integrity”?",
          "options": [
            "Integrity means data remains accurate and consistent across operations, constraints and services. Test duplicates, transactions and partial failures.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Performance Testing Concepts",
        "intro": "Performance testing studies response time, throughput, resource use and stability under expected or extreme workloads.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Performance testing studies response time, throughput, resource use and stability under expected or extreme workloads.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind performance testing concepts. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A search endpoint averages 200 ms with 50 users but slows to 4 seconds with 2,000 concurrent users.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Performance Testing Concepts” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 74 takeaway: Performance testing studies response time, throughput, resource use and stability under expected or extreme workloads."
          }
        ],
        "qa": [
          [
            "What is the main purpose of performance testing concepts?",
            "Performance testing studies response time, throughput, resource use and stability under expected or extreme workloads."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Performance Testing Concepts”?",
          "options": [
            "Performance testing studies response time, throughput, resource use and stability under expected or extreme workloads.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Load, Stress and Spike Testing",
        "intro": "Load tests expected traffic, stress pushes beyond capacity, and spike tests sudden changes. Each answers a different risk question.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Load tests expected traffic, stress pushes beyond capacity, and spike tests sudden changes. Each answers a different risk question.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind load, stress and spike testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A ticket sale system is tested for a sudden jump from 100 to 10,000 requests per minute.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Load, Stress and Spike Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 75 takeaway: Load tests expected traffic, stress pushes beyond capacity, and spike tests sudden changes. Each answers a different risk question."
          }
        ],
        "qa": [
          [
            "What is the main purpose of load, stress and spike testing?",
            "Load tests expected traffic, stress pushes beyond capacity, and spike tests sudden changes. Each answers a different risk question."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Load, Stress and Spike Testing”?",
          "options": [
            "Load tests expected traffic, stress pushes beyond capacity, and spike tests sudden changes. Each answers a different risk question.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Security Testing Mindset",
        "intro": "Security testing asks how data, identity and privileges could be abused. Beginners should focus on safe validation and follow authorization rules.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Security testing asks how data, identity and privileges could be abused. Beginners should focus on safe validation and follow authorization rules.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind security testing mindset. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Changing an order ID in the URL must not expose another customer’s private order.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Security Testing Mindset” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 76 takeaway: Security testing asks how data, identity and privileges could be abused. Beginners should focus on safe validation and follow authorization rules."
          }
        ],
        "qa": [
          [
            "What is the main purpose of security testing mindset?",
            "Security testing asks how data, identity and privileges could be abused. Beginners should focus on safe validation and follow authorization rules."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Security Testing Mindset”?",
          "options": [
            "Security testing asks how data, identity and privileges could be abused. Beginners should focus on safe validation and follow authorization rules.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Input and Output Security",
        "intro": "Validate untrusted input and encode output appropriately. Test that errors do not leak secrets or internal implementation details.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Validate untrusted input and encode output appropriately. Test that errors do not leak secrets or internal implementation details.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind input and output security. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A malformed request should not return database credentials or a full server stack trace.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Input and Output Security” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 77 takeaway: Validate untrusted input and encode output appropriately. Test that errors do not leak secrets or internal implementation details."
          }
        ],
        "qa": [
          [
            "What is the main purpose of input and output security?",
            "Validate untrusted input and encode output appropriately. Test that errors do not leak secrets or internal implementation details."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Input and Output Security”?",
          "options": [
            "Validate untrusted input and encode output appropriately. Test that errors do not leak secrets or internal implementation details.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Accessibility Basics",
        "intro": "Accessible software supports people using keyboards, screen readers, zoom, high contrast and other assistive technologies.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Accessible software supports people using keyboards, screen readers, zoom, high contrast and other assistive technologies.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind accessibility basics. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Every form field has an associated label and errors are announced in a way screen readers can detect.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Accessibility Basics” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 78 takeaway: Accessible software supports people using keyboards, screen readers, zoom, high contrast and other assistive technologies."
          }
        ],
        "qa": [
          [
            "What is the main purpose of accessibility basics?",
            "Accessible software supports people using keyboards, screen readers, zoom, high contrast and other assistive technologies."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Accessibility Basics”?",
          "options": [
            "Accessible software supports people using keyboards, screen readers, zoom, high contrast and other assistive technologies.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Keyboard and Focus Testing",
        "intro": "Interactive controls should be reachable and usable with a keyboard, with visible focus and logical focus order.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Interactive controls should be reachable and usable with a keyboard, with visible focus and logical focus order.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind keyboard and focus testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A modal opens, focus moves inside it, Tab stays within the modal and focus returns to the trigger when closed.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Keyboard and Focus Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 79 takeaway: Interactive controls should be reachable and usable with a keyboard, with visible focus and logical focus order."
          }
        ],
        "qa": [
          [
            "What is the main purpose of keyboard and focus testing?",
            "Interactive controls should be reachable and usable with a keyboard, with visible focus and logical focus order."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Keyboard and Focus Testing”?",
          "options": [
            "Interactive controls should be reachable and usable with a keyboard, with visible focus and logical focus order.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Database, Performance, Security and Accessibility",
        "title": "Cross-Cutting Quality Risks",
        "intro": "Real defects often cross boundaries between performance, security, data and usability. Good testers think beyond one testing category.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Real defects often cross boundaries between performance, security, data and usability. Good testers think beyond one testing category.",
              "Quality includes data, speed, security and accessibility. These concerns often reveal failures that normal happy-path tests miss. On this page, focus on the purpose behind cross-cutting quality risks. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A slow login retry can become both a usability problem and a security concern if rate limits behave incorrectly.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Cross-Cutting Quality Risks” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 80 takeaway: Real defects often cross boundaries between performance, security, data and usability. Good testers think beyond one testing category."
          }
        ],
        "qa": [
          [
            "What is the main purpose of cross-cutting quality risks?",
            "Real defects often cross boundaries between performance, security, data and usability. Good testers think beyond one testing category."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Cross-Cutting Quality Risks”?",
          "options": [
            "Real defects often cross boundaries between performance, security, data and usability. Good testers think beyond one testing category.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "What Test Automation Is",
        "intro": "Automation uses code or tools to execute repeatable checks and compare outcomes. It supports testing; it does not replace human investigation.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Automation uses code or tools to execute repeatable checks and compare outcomes. It supports testing; it does not replace human investigation.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind what test automation is. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A login regression suite runs automatically on every build while exploratory sessions examine new behavior.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “What Test Automation Is” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 81 takeaway: Automation uses code or tools to execute repeatable checks and compare outcomes. It supports testing; it does not replace human investigation."
          }
        ],
        "qa": [
          [
            "What is the main purpose of what test automation is?",
            "Automation uses code or tools to execute repeatable checks and compare outcomes. It supports testing; it does not replace human investigation."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “What Test Automation Is”?",
          "options": [
            "Automation uses code or tools to execute repeatable checks and compare outcomes. It supports testing; it does not replace human investigation.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "What to Automate First",
        "intro": "Good automation candidates are stable, repeatable, valuable and frequently executed. Avoid automating unstable flows simply because they are visible.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Good automation candidates are stable, repeatable, valuable and frequently executed. Avoid automating unstable flows simply because they are visible.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind what to automate first. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Automate critical API calculations before a constantly changing promotional landing page.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “What to Automate First” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 82 takeaway: Good automation candidates are stable, repeatable, valuable and frequently executed. Avoid automating unstable flows simply because they are visible."
          }
        ],
        "qa": [
          [
            "What is the main purpose of what to automate first?",
            "Good automation candidates are stable, repeatable, valuable and frequently executed. Avoid automating unstable flows simply because they are visible."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “What to Automate First”?",
          "options": [
            "Good automation candidates are stable, repeatable, valuable and frequently executed. Avoid automating unstable flows simply because they are visible.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "The Test Pyramid",
        "intro": "A common model favors many fast unit tests, fewer service or API tests and a smaller number of slower end-to-end UI tests.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A common model favors many fast unit tests, fewer service or API tests and a smaller number of slower end-to-end UI tests.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind the test pyramid. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Hundreds of unit checks validate rules, API tests validate service contracts and a few UI tests verify critical journeys.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “The Test Pyramid” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 83 takeaway: A common model favors many fast unit tests, fewer service or API tests and a smaller number of slower end-to-end UI tests."
          }
        ],
        "qa": [
          [
            "What is the main purpose of the test pyramid?",
            "A common model favors many fast unit tests, fewer service or API tests and a smaller number of slower end-to-end UI tests."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “The Test Pyramid”?",
          "options": [
            "A common model favors many fast unit tests, fewer service or API tests and a smaller number of slower end-to-end UI tests.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "UI Automation Basics",
        "intro": "UI automation interacts with the application as a user would. Reliable locators, explicit waits and isolated data reduce flaky tests.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "UI automation interacts with the application as a user would. Reliable locators, explicit waits and isolated data reduce flaky tests.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind ui automation basics. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A test locates a button by stable accessible role instead of a fragile generated CSS class.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “UI Automation Basics” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 84 takeaway: UI automation interacts with the application as a user would. Reliable locators, explicit waits and isolated data reduce flaky tests."
          }
        ],
        "qa": [
          [
            "What is the main purpose of ui automation basics?",
            "UI automation interacts with the application as a user would. Reliable locators, explicit waits and isolated data reduce flaky tests."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “UI Automation Basics”?",
          "options": [
            "UI automation interacts with the application as a user would. Reliable locators, explicit waits and isolated data reduce flaky tests.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "API Automation Basics",
        "intro": "API tests are often faster and more stable than UI tests, making them strong candidates for regression automation.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "API tests are often faster and more stable than UI tests, making them strong candidates for regression automation.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind api automation basics. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A CI job creates an order through the API and asserts status, totals and schema in seconds.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “API Automation Basics” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 85 takeaway: API tests are often faster and more stable than UI tests, making them strong candidates for regression automation."
          }
        ],
        "qa": [
          [
            "What is the main purpose of api automation basics?",
            "API tests are often faster and more stable than UI tests, making them strong candidates for regression automation."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “API Automation Basics”?",
          "options": [
            "API tests are often faster and more stable than UI tests, making them strong candidates for regression automation.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "Flaky Tests",
        "intro": "A flaky test passes and fails without a real product change. Treat flakiness as a defect in the test system, not normal noise.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A flaky test passes and fails without a real product change. Treat flakiness as a defect in the test system, not normal noise.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind flaky tests. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A test uses a fixed five-second sleep and fails on slower runners; replacing it with a condition-based wait improves reliability.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Flaky Tests” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 86 takeaway: A flaky test passes and fails without a real product change. Treat flakiness as a defect in the test system, not normal noise."
          }
        ],
        "qa": [
          [
            "What is the main purpose of flaky tests?",
            "A flaky test passes and fails without a real product change. Treat flakiness as a defect in the test system, not normal noise."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Flaky Tests”?",
          "options": [
            "A flaky test passes and fails without a real product change. Treat flakiness as a defect in the test system, not normal noise.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "Continuous Integration",
        "intro": "CI automatically builds and checks changes frequently. Tests provide fast feedback before defects move further through the pipeline.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "CI automatically builds and checks changes frequently. Tests provide fast feedback before defects move further through the pipeline.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind continuous integration. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A pull request triggers unit, API and lint checks before merge is allowed.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Continuous Integration” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 87 takeaway: CI automatically builds and checks changes frequently. Tests provide fast feedback before defects move further through the pipeline."
          }
        ],
        "qa": [
          [
            "What is the main purpose of continuous integration?",
            "CI automatically builds and checks changes frequently. Tests provide fast feedback before defects move further through the pipeline."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Continuous Integration”?",
          "options": [
            "CI automatically builds and checks changes frequently. Tests provide fast feedback before defects move further through the pipeline.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "Continuous Delivery and Deployment",
        "intro": "Delivery keeps software releasable; deployment may automatically release approved changes. Quality gates must be fast and trustworthy.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Delivery keeps software releasable; deployment may automatically release approved changes. Quality gates must be fast and trustworthy.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind continuous delivery and deployment. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A pipeline deploys to staging, runs smoke tests and promotes to production only if critical checks pass.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Continuous Delivery and Deployment” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 88 takeaway: Delivery keeps software releasable; deployment may automatically release approved changes. Quality gates must be fast and trustworthy."
          }
        ],
        "qa": [
          [
            "What is the main purpose of continuous delivery and deployment?",
            "Delivery keeps software releasable; deployment may automatically release approved changes. Quality gates must be fast and trustworthy."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Continuous Delivery and Deployment”?",
          "options": [
            "Delivery keeps software releasable; deployment may automatically release approved changes. Quality gates must be fast and trustworthy.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "Test Data in Automation",
        "intro": "Automated tests need predictable, isolated data and cleanup so one run does not corrupt another.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Automated tests need predictable, isolated data and cleanup so one run does not corrupt another.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind test data in automation. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Each test creates a unique customer ID and removes it after execution or uses disposable environments.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Test Data in Automation” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 89 takeaway: Automated tests need predictable, isolated data and cleanup so one run does not corrupt another."
          }
        ],
        "qa": [
          [
            "What is the main purpose of test data in automation?",
            "Automated tests need predictable, isolated data and cleanup so one run does not corrupt another."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Test Data in Automation”?",
          "options": [
            "Automated tests need predictable, isolated data and cleanup so one run does not corrupt another.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — Automation and DevOps",
        "title": "Automation Maintenance",
        "intro": "Automation code needs review, refactoring, monitoring and ownership. A large suite that nobody trusts has little value.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Automation code needs review, refactoring, monitoring and ownership. A large suite that nobody trusts has little value.",
              "Automation is software and needs design, maintenance and trustworthy feedback. Automate for value, not for a high test count. On this page, focus on the purpose behind automation maintenance. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "The team deletes duplicate tests and tracks runtime and failure causes each sprint.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Automation Maintenance” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 90 takeaway: Automation code needs review, refactoring, monitoring and ownership. A large suite that nobody trusts has little value."
          }
        ],
        "qa": [
          [
            "What is the main purpose of automation maintenance?",
            "Automation code needs review, refactoring, monitoring and ownership. A large suite that nobody trusts has little value."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Automation Maintenance”?",
          "options": [
            "Automation code needs review, refactoring, monitoring and ownership. A large suite that nobody trusts has little value.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Testing an E-Commerce Site",
        "intro": "A realistic e-commerce test approach covers catalog, search, cart, price rules, checkout, payment, order history and failure recovery.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A realistic e-commerce test approach covers catalog, search, cart, price rules, checkout, payment, order history and failure recovery.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind testing an e-commerce site. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Test a coupon with multiple products, tax, shipping and a partial refund instead of only adding one item to cart.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Testing an E-Commerce Site” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 91 takeaway: A realistic e-commerce test approach covers catalog, search, cart, price rules, checkout, payment, order history and failure recovery."
          }
        ],
        "qa": [
          [
            "What is the main purpose of testing an e-commerce site?",
            "A realistic e-commerce test approach covers catalog, search, cart, price rules, checkout, payment, order history and failure recovery."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Testing an E-Commerce Site”?",
          "options": [
            "A realistic e-commerce test approach covers catalog, search, cart, price rules, checkout, payment, order history and failure recovery.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Testing a Login Feature End to End",
        "intro": "Login testing combines UI, API, security, session and usability risks in one familiar feature.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Login testing combines UI, API, security, session and usability risks in one familiar feature.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind testing a login feature end to end. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Check valid login, lockout, password reset, session expiry, logout and multiple-device behavior.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Testing a Login Feature End to End” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 92 takeaway: Login testing combines UI, API, security, session and usability risks in one familiar feature."
          }
        ],
        "qa": [
          [
            "What is the main purpose of testing a login feature end to end?",
            "Login testing combines UI, API, security, session and usability risks in one familiar feature."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Testing a Login Feature End to End”?",
          "options": [
            "Login testing combines UI, API, security, session and usability risks in one familiar feature.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Testing a Banking Transfer",
        "intro": "Financial flows need strong validation of authorization, amounts, limits, duplicate protection, state transitions and audit evidence.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Financial flows need strong validation of authorization, amounts, limits, duplicate protection, state transitions and audit evidence.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind testing a banking transfer. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "A repeated Transfer tap must not create two transactions when the first request is still processing.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Testing a Banking Transfer” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 93 takeaway: Financial flows need strong validation of authorization, amounts, limits, duplicate protection, state transitions and audit evidence."
          }
        ],
        "qa": [
          [
            "What is the main purpose of testing a banking transfer?",
            "Financial flows need strong validation of authorization, amounts, limits, duplicate protection, state transitions and audit evidence."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Testing a Banking Transfer”?",
          "options": [
            "Financial flows need strong validation of authorization, amounts, limits, duplicate protection, state transitions and audit evidence.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "A Beginner Test Project",
        "intro": "Build a portfolio project by selecting a public demo app, writing scope, scenarios, test cases, defects and a concise report.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Build a portfolio project by selecting a public demo app, writing scope, scenarios, test cases, defects and a concise report.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind a beginner test project. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Choose a demo shopping site and publish a test plan plus ten strong bug reports in a GitHub repository.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “A Beginner Test Project” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 94 takeaway: Build a portfolio project by selecting a public demo app, writing scope, scenarios, test cases, defects and a concise report."
          }
        ],
        "qa": [
          [
            "What is the main purpose of a beginner test project?",
            "Build a portfolio project by selecting a public demo app, writing scope, scenarios, test cases, defects and a concise report."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “A Beginner Test Project”?",
          "options": [
            "Build a portfolio project by selecting a public demo app, writing scope, scenarios, test cases, defects and a concise report.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "How to Review Your Own Testing",
        "intro": "After testing, ask what risks you covered, what evidence you gathered, what assumptions remain and what you would do with more time.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "After testing, ask what risks you covered, what evidence you gathered, what assumptions remain and what you would do with more time.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind how to review your own testing. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "You notice all tests used one account type, so you add role-based coverage before declaring the feature ready.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “How to Review Your Own Testing” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 95 takeaway: After testing, ask what risks you covered, what evidence you gathered, what assumptions remain and what you would do with more time."
          }
        ],
        "qa": [
          [
            "What is the main purpose of how to review your own testing?",
            "After testing, ask what risks you covered, what evidence you gathered, what assumptions remain and what you would do with more time."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “How to Review Your Own Testing”?",
          "options": [
            "After testing, ask what risks you covered, what evidence you gathered, what assumptions remain and what you would do with more time.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Common QA Interview Questions",
        "intro": "Interviews often test your reasoning about test cases, severity, regression, Agile, APIs and real scenarios rather than memorized definitions alone.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Interviews often test your reasoning about test cases, severity, regression, Agile, APIs and real scenarios rather than memorized definitions alone.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind common qa interview questions. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "When asked to test a lift, discuss users, states, boundaries, safety, interruptions and accessibility.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Common QA Interview Questions” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 96 takeaway: Interviews often test your reasoning about test cases, severity, regression, Agile, APIs and real scenarios rather than memorized definitions alone."
          }
        ],
        "qa": [
          [
            "What is the main purpose of common qa interview questions?",
            "Interviews often test your reasoning about test cases, severity, regression, Agile, APIs and real scenarios rather than memorized definitions alone."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Common QA Interview Questions”?",
          "options": [
            "Interviews often test your reasoning about test cases, severity, regression, Agile, APIs and real scenarios rather than memorized definitions alone.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Answering Scenario Questions",
        "intro": "Structure scenario answers by clarifying requirements, identifying risks, grouping coverage and then giving representative tests.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Structure scenario answers by clarifying requirements, identifying risks, grouping coverage and then giving representative tests.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind answering scenario questions. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "For a pen, consider function, compatibility, usability, durability, negative use and boundaries rather than listing random checks.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Answering Scenario Questions” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 97 takeaway: Structure scenario answers by clarifying requirements, identifying risks, grouping coverage and then giving representative tests."
          }
        ],
        "qa": [
          [
            "What is the main purpose of answering scenario questions?",
            "Structure scenario answers by clarifying requirements, identifying risks, grouping coverage and then giving representative tests."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Answering Scenario Questions”?",
          "options": [
            "Structure scenario answers by clarifying requirements, identifying risks, grouping coverage and then giving representative tests.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Building a QA Resume",
        "intro": "A beginner resume should emphasize testing skills, tools, projects and measurable evidence instead of vague claims.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "A beginner resume should emphasize testing skills, tools, projects and measurable evidence instead of vague claims.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind building a qa resume. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "“Designed 65 test cases and documented 12 reproducible defects for a demo commerce app” is stronger than “good at testing.”",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Building a QA Resume” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 98 takeaway: A beginner resume should emphasize testing skills, tools, projects and measurable evidence instead of vague claims."
          }
        ],
        "qa": [
          [
            "What is the main purpose of building a qa resume?",
            "A beginner resume should emphasize testing skills, tools, projects and measurable evidence instead of vague claims."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Building a QA Resume”?",
          "options": [
            "A beginner resume should emphasize testing skills, tools, projects and measurable evidence instead of vague claims.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "Your First 30 Days in QA",
        "intro": "In a new QA role, learn the product, users, architecture, environments, release process, data and defect patterns before trying to change everything.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "In a new QA role, learn the product, users, architecture, environments, release process, data and defect patterns before trying to change everything.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind your first 30 days in qa. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Spend the first week shadowing flows and reading recent production incidents to understand real risk.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “Your First 30 Days in QA” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 99 takeaway: In a new QA role, learn the product, users, architecture, environments, release process, data and defect patterns before trying to change everything."
          }
        ],
        "qa": [
          [
            "What is the main purpose of your first 30 days in qa?",
            "In a new QA role, learn the product, users, architecture, environments, release process, data and defect patterns before trying to change everything."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “Your First 30 Days in QA”?",
          "options": [
            "In a new QA role, learn the product, users, architecture, environments, release process, data and defect patterns before trying to change everything.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Real Projects, Interviews and Career",
        "title": "A 90-Day Learning Roadmap",
        "intro": "Progress from testing fundamentals to web, API, SQL, automation basics and one portfolio project. Consistent practice beats collecting tools without depth.",
        "sections": [
          {
            "h": "Understand the idea",
            "p": [
              "Progress from testing fundamentals to web, API, SQL, automation basics and one portfolio project. Consistent practice beats collecting tools without depth.",
              "Practice complete scenarios and explain your reasoning. A portfolio becomes convincing when it shows how you think, not only which tools you know. On this page, focus on the purpose behind a 90-day learning roadmap. In a real project, the value of a testing concept comes from using it to make a clearer decision about risk, coverage or release confidence."
            ]
          },
          {
            "h": "How it looks in practice",
            "p": [
              "Weekdays can combine 30 minutes of concepts with 30 minutes of hands-on testing and weekly reflection.",
              "When you practise this, write down the starting condition, the action you take and the observable result. That simple habit turns an impression into evidence another team member can understand and reproduce."
            ]
          },
          {
            "h": "Try it yourself",
            "p": [
              "Choose a familiar application such as a shopping, banking, travel or messaging app. Apply the idea of “A 90-Day Learning Roadmap” to one feature and write at least three checks or observations.",
              "Then ask: What important assumption did I make? What user, data, device, state or failure condition did I not cover? Add one more test based on that answer."
            ]
          },
          {
            "callout": "Page 100 takeaway: Progress from testing fundamentals to web, API, SQL, automation basics and one portfolio project. Consistent practice beats collecting tools without depth."
          }
        ],
        "qa": [
          [
            "What is the main purpose of a 90-day learning roadmap?",
            "Progress from testing fundamentals to web, API, SQL, automation basics and one portfolio project. Consistent practice beats collecting tools without depth."
          ],
          [
            "How should a beginner practise this?",
            "Use one real or demo feature, apply the concept deliberately, record expected and actual behavior, then review what risk you still have not covered."
          ]
        ],
        "quiz": {
          "q": "Which approach best matches this page on “A 90-Day Learning Roadmap”?",
          "options": [
            "Progress from testing fundamentals to web, API, SQL, automation basics and one portfolio project. Consistent practice beats collecting tools without depth.",
            "Skip evidence and rely only on intuition.",
            "Test only the easiest successful case and stop."
          ],
          "answer": 0
        }
      }
    ]
  },
  {
    "id": "english",
    "title": "English for Beginners",
    "shortTitle": "English for Beginners",
    "symbol": "E",
    "level": "Beginner",
    "description": "A 100-page step-by-step English course covering everyday grammar, vocabulary, speaking, pronunciation, listening, reading and writing.",
    "pageCount": 100,
    "chapters": [
      {
        "module": "Module 1 — Start Speaking English",
        "title": "How to Learn English as a Beginner",
        "intro": "English improves through repeated exposure, useful phrases and active practice. Aim to communicate clearly before trying to sound perfect.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "English improves through repeated exposure, useful phrases and active practice. Aim to communicate clearly before trying to sound perfect.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “How to Learn English as a Beginner,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Learn “Could you help me?” as a complete phrase and use it in three situations today.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “How to Learn English as a Beginner.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 1 takeaway: English improves through repeated exposure, useful phrases and active practice. Aim to communicate clearly before trying to sound perfect."
          }
        ],
        "qa": [
          [
            "What should I remember about how to learn english as a beginner?",
            "English improves through repeated exposure, useful phrases and active practice. Aim to communicate clearly before trying to sound perfect."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “How to Learn English as a Beginner”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "English Sounds and the Alphabet",
        "intro": "Knowing letter names is useful, but spoken English depends on sounds that do not always match spelling. Listen and imitate whole words.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Knowing letter names is useful, but spoken English depends on sounds that do not always match spelling. Listen and imitate whole words.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “English Sounds and the Alphabet,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "The letter A sounds different in “cat,” “cake” and “call,” so pronunciation must be learned from real words.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “English Sounds and the Alphabet.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 2 takeaway: Knowing letter names is useful, but spoken English depends on sounds that do not always match spelling. Listen and imitate whole words."
          }
        ],
        "qa": [
          [
            "What should I remember about english sounds and the alphabet?",
            "Knowing letter names is useful, but spoken English depends on sounds that do not always match spelling. Listen and imitate whole words."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “English Sounds and the Alphabet”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Greetings and Introductions",
        "intro": "Simple greetings, names and polite questions create the first building blocks of conversation. Practice natural short exchanges.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Simple greetings, names and polite questions create the first building blocks of conversation. Practice natural short exchanges.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Greetings and Introductions,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Hi, I’m Vinay. Nice to meet you. What’s your name?” is a complete beginner introduction.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Greetings and Introductions.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 3 takeaway: Simple greetings, names and polite questions create the first building blocks of conversation. Practice natural short exchanges."
          }
        ],
        "qa": [
          [
            "What should I remember about greetings and introductions?",
            "Simple greetings, names and polite questions create the first building blocks of conversation. Practice natural short exchanges."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Greetings and Introductions”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Talking About Yourself",
        "intro": "Start with high-frequency information: name, city, job, family, interests and routine. Reuse the same sentence patterns with new words.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Start with high-frequency information: name, city, job, family, interests and routine. Reuse the same sentence patterns with new words.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Talking About Yourself,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I live in Bengaluru. I work in software. I like travelling and watching movies.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Talking About Yourself.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 4 takeaway: Start with high-frequency information: name, city, job, family, interests and routine. Reuse the same sentence patterns with new words."
          }
        ],
        "qa": [
          [
            "What should I remember about talking about yourself?",
            "Start with high-frequency information: name, city, job, family, interests and routine. Reuse the same sentence patterns with new words."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Talking About Yourself”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Yes, No and Short Answers",
        "intro": "English often uses short answers with helping verbs rather than repeating the whole sentence.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "English often uses short answers with helping verbs rather than repeating the whole sentence.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Yes, No and Short Answers,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Do you work here?” — “Yes, I do.” “Is she ready?” — “No, she isn’t.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Yes, No and Short Answers.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 5 takeaway: English often uses short answers with helping verbs rather than repeating the whole sentence."
          }
        ],
        "qa": [
          [
            "What should I remember about yes, no and short answers?",
            "English often uses short answers with helping verbs rather than repeating the whole sentence."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Yes, No and Short Answers”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Polite Words",
        "intro": "Please, thank you, excuse me, sorry and you’re welcome make everyday English sound natural and respectful.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Please, thank you, excuse me, sorry and you’re welcome make everyday English sound natural and respectful.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Polite Words,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Excuse me, could you tell me where the station is?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Polite Words.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 6 takeaway: Please, thank you, excuse me, sorry and you’re welcome make everyday English sound natural and respectful."
          }
        ],
        "qa": [
          [
            "What should I remember about polite words?",
            "Please, thank you, excuse me, sorry and you’re welcome make everyday English sound natural and respectful."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Polite Words”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Numbers, Dates and Time",
        "intro": "Numbers appear in prices, phone numbers, dates, addresses and schedules. Practice saying them in meaningful situations.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Numbers appear in prices, phone numbers, dates, addresses and schedules. Practice saying them in meaningful situations.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Numbers, Dates and Time,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“My appointment is on August 21 at 3:30 p.m.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Numbers, Dates and Time.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 7 takeaway: Numbers appear in prices, phone numbers, dates, addresses and schedules. Practice saying them in meaningful situations."
          }
        ],
        "qa": [
          [
            "What should I remember about numbers, dates and time?",
            "Numbers appear in prices, phone numbers, dates, addresses and schedules. Practice saying them in meaningful situations."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Numbers, Dates and Time”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Common Classroom English",
        "intro": "Useful learning phrases help you keep conversations going when you do not understand.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Useful learning phrases help you keep conversations going when you do not understand.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Common Classroom English,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Could you repeat that?” “What does this word mean?” “How do you spell it?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Common Classroom English.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 8 takeaway: Useful learning phrases help you keep conversations going when you do not understand."
          }
        ],
        "qa": [
          [
            "What should I remember about common classroom english?",
            "Useful learning phrases help you keep conversations going when you do not understand."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Common Classroom English”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Building a Daily Habit",
        "intro": "A small routine of listening, speaking, reading and writing every day produces steady improvement.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A small routine of listening, speaking, reading and writing every day produces steady improvement.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Building a Daily Habit,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Spend five minutes describing your morning aloud instead of only memorizing vocabulary.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Building a Daily Habit.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 9 takeaway: A small routine of listening, speaking, reading and writing every day produces steady improvement."
          }
        ],
        "qa": [
          [
            "What should I remember about building a daily habit?",
            "A small routine of listening, speaking, reading and writing every day produces steady improvement."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Building a Daily Habit”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 1 — Start Speaking English",
        "title": "Think in Short English Chunks",
        "intro": "Avoid translating long sentences word by word. Build a bank of reusable English chunks you can combine quickly.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Avoid translating long sentences word by word. Build a bank of reusable English chunks you can combine quickly.",
              "Use the language immediately. Short useful sentences repeated in real contexts are more valuable than memorizing long grammar definitions. For “Think in Short English Chunks,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Chunks such as “I need to…,” “Can I…?” and “I’m looking for…” work in many situations.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Think in Short English Chunks.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 10 takeaway: Avoid translating long sentences word by word. Build a bank of reusable English chunks you can combine quickly."
          }
        ],
        "qa": [
          [
            "What should I remember about think in short english chunks?",
            "Avoid translating long sentences word by word. Build a bank of reusable English chunks you can combine quickly."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Think in Short English Chunks”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Nouns: People, Places and Things",
        "intro": "Nouns name people, places, things and ideas. Recognizing them helps you build basic sentence patterns.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Nouns name people, places, things and ideas. Recognizing them helps you build basic sentence patterns.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Nouns: People, Places and Things,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "In “The teacher opened the window,” teacher and window are nouns.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Nouns: People, Places and Things.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 11 takeaway: Nouns name people, places, things and ideas. Recognizing them helps you build basic sentence patterns."
          }
        ],
        "qa": [
          [
            "What should I remember about nouns: people, places and things?",
            "Nouns name people, places, things and ideas. Recognizing them helps you build basic sentence patterns."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Nouns: People, Places and Things”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Singular and Plural Nouns",
        "intro": "Most plural nouns add -s or -es, but common irregular forms must be learned separately.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Most plural nouns add -s or -es, but common irregular forms must be learned separately.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Singular and Plural Nouns,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "one book → two books; one child → two children.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Singular and Plural Nouns.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 12 takeaway: Most plural nouns add -s or -es, but common irregular forms must be learned separately."
          }
        ],
        "qa": [
          [
            "What should I remember about singular and plural nouns?",
            "Most plural nouns add -s or -es, but common irregular forms must be learned separately."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Singular and Plural Nouns”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Countable and Uncountable Nouns",
        "intro": "Countable nouns can use numbers; uncountable nouns are usually treated as a mass or idea. This affects articles and quantity words.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Countable nouns can use numbers; uncountable nouns are usually treated as a mass or idea. This affects articles and quantity words.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Countable and Uncountable Nouns,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“two apples” is natural, but we usually say “some water,” not “two waters” unless we mean two servings.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Countable and Uncountable Nouns.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 13 takeaway: Countable nouns can use numbers; uncountable nouns are usually treated as a mass or idea. This affects articles and quantity words."
          }
        ],
        "qa": [
          [
            "What should I remember about countable and uncountable nouns?",
            "Countable nouns can use numbers; uncountable nouns are usually treated as a mass or idea. This affects articles and quantity words."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Countable and Uncountable Nouns”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Subject Pronouns",
        "intro": "I, you, he, she, it, we and they replace subject nouns and prevent repetition.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "I, you, he, she, it, we and they replace subject nouns and prevent repetition.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Subject Pronouns,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Ravi is my friend. He lives nearby.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Subject Pronouns.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 14 takeaway: I, you, he, she, it, we and they replace subject nouns and prevent repetition."
          }
        ],
        "qa": [
          [
            "What should I remember about subject pronouns?",
            "I, you, he, she, it, we and they replace subject nouns and prevent repetition."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Subject Pronouns”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Object Pronouns",
        "intro": "Me, you, him, her, it, us and them are commonly used after verbs and prepositions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Me, you, him, her, it, us and them are commonly used after verbs and prepositions.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Object Pronouns,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“She called me.” “I spoke to them.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Object Pronouns.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 15 takeaway: Me, you, him, her, it, us and them are commonly used after verbs and prepositions."
          }
        ],
        "qa": [
          [
            "What should I remember about object pronouns?",
            "Me, you, him, her, it, us and them are commonly used after verbs and prepositions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Object Pronouns”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Possessive Adjectives",
        "intro": "My, your, his, her, its, our and their show possession before a noun.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "My, your, his, her, its, our and their show possession before a noun.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Possessive Adjectives,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“This is my phone.” “Their office is on the second floor.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Possessive Adjectives.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 16 takeaway: My, your, his, her, its, our and their show possession before a noun."
          }
        ],
        "qa": [
          [
            "What should I remember about possessive adjectives?",
            "My, your, his, her, its, our and their show possession before a noun."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Possessive Adjectives”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "Possessive Pronouns",
        "intro": "Mine, yours, his, hers, ours and theirs replace a noun phrase when ownership is already clear.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Mine, yours, his, hers, ours and theirs replace a noun phrase when ownership is already clear.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “Possessive Pronouns,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“This bag is mine. That one is yours.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Possessive Pronouns.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 17 takeaway: Mine, yours, his, hers, ours and theirs replace a noun phrase when ownership is already clear."
          }
        ],
        "qa": [
          [
            "What should I remember about possessive pronouns?",
            "Mine, yours, his, hers, ours and theirs replace a noun phrase when ownership is already clear."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Possessive Pronouns”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "A and An",
        "intro": "Use a or an with one non-specific countable noun. The choice depends on the following sound, not simply the written letter.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use a or an with one non-specific countable noun. The choice depends on the following sound, not simply the written letter.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “A and An,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“a university” begins with a /y/ sound; “an hour” begins with a vowel sound.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “A and An.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 18 takeaway: Use a or an with one non-specific countable noun. The choice depends on the following sound, not simply the written letter."
          }
        ],
        "qa": [
          [
            "What should I remember about a and an?",
            "Use a or an with one non-specific countable noun. The choice depends on the following sound, not simply the written letter."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “A and An”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "The",
        "intro": "Use the when the listener can identify the specific person or thing, or when context makes it unique.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use the when the listener can identify the specific person or thing, or when context makes it unique.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “The,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Close the door” works when both people know which door.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “The.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 19 takeaway: Use the when the listener can identify the specific person or thing, or when context makes it unique."
          }
        ],
        "qa": [
          [
            "What should I remember about the?",
            "Use the when the listener can identify the specific person or thing, or when context makes it unique."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “The”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 2 — Nouns, Pronouns and Articles",
        "title": "No Article",
        "intro": "English often uses no article for general plural nouns, many uncountable nouns and certain names or fixed expressions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "English often uses no article for general plural nouns, many uncountable nouns and certain names or fixed expressions.",
              "Notice how nouns and pronouns control articles, quantity words and sentence references. Build examples around things you actually talk about. For “No Article,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Books are useful.” “I drink coffee.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “No Article.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 20 takeaway: English often uses no article for general plural nouns, many uncountable nouns and certain names or fixed expressions."
          }
        ],
        "qa": [
          [
            "What should I remember about no article?",
            "English often uses no article for general plural nouns, many uncountable nouns and certain names or fixed expressions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “No Article”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "The Verb Be",
        "intro": "Be changes to am, is and are in the present. It connects subjects with descriptions, identities and locations.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Be changes to am, is and are in the present. It connects subjects with descriptions, identities and locations.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “The Verb Be,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I am tired.” “She is a doctor.” “They are at home.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “The Verb Be.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 21 takeaway: Be changes to am, is and are in the present. It connects subjects with descriptions, identities and locations."
          }
        ],
        "qa": [
          [
            "What should I remember about the verb be?",
            "Be changes to am, is and are in the present. It connects subjects with descriptions, identities and locations."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “The Verb Be”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Have and Has",
        "intro": "Have and has express possession, relationships, experiences and many common phrases.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Have and has express possession, relationships, experiences and many common phrases.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Have and Has,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have a car.” “She has two brothers.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Have and Has.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 22 takeaway: Have and has express possession, relationships, experiences and many common phrases."
          }
        ],
        "qa": [
          [
            "What should I remember about have and has?",
            "Have and has express possession, relationships, experiences and many common phrases."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Have and Has”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Present Simple",
        "intro": "Use the present simple for routines, habits, repeated actions and general facts.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use the present simple for routines, habits, repeated actions and general facts.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Present Simple,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I start work at nine.” “Water boils at 100°C.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Present Simple.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 23 takeaway: Use the present simple for routines, habits, repeated actions and general facts."
          }
        ],
        "qa": [
          [
            "What should I remember about present simple?",
            "Use the present simple for routines, habits, repeated actions and general facts."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Present Simple”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Present Simple: He, She and It",
        "intro": "With he, she and it, most present-simple verbs add -s or -es.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "With he, she and it, most present-simple verbs add -s or -es.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Present Simple: He, She and It,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“He works in a bank.” “She watches the news.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Present Simple: He, She and It.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 24 takeaway: With he, she and it, most present-simple verbs add -s or -es."
          }
        ],
        "qa": [
          [
            "What should I remember about present simple: he, she and it?",
            "With he, she and it, most present-simple verbs add -s or -es."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Present Simple: He, She and It”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Present Continuous",
        "intro": "Use am/is/are + verb-ing for actions happening now or around the present time.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use am/is/are + verb-ing for actions happening now or around the present time.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Present Continuous,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I am reading.” “They are working from home this week.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Present Continuous.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 25 takeaway: Use am/is/are + verb-ing for actions happening now or around the present time."
          }
        ],
        "qa": [
          [
            "What should I remember about present continuous?",
            "Use am/is/are + verb-ing for actions happening now or around the present time."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Present Continuous”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Present Simple vs Present Continuous",
        "intro": "Use simple for routine or fact and continuous for temporary or current activity.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use simple for routine or fact and continuous for temporary or current activity.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Present Simple vs Present Continuous,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I work in Bengaluru” describes a normal situation; “I am working from home today” describes today.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Present Simple vs Present Continuous.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 26 takeaway: Use simple for routine or fact and continuous for temporary or current activity."
          }
        ],
        "qa": [
          [
            "What should I remember about present simple vs present continuous?",
            "Use simple for routine or fact and continuous for temporary or current activity."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Present Simple vs Present Continuous”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Past Simple",
        "intro": "Use the past simple for completed actions at a finished time in the past.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use the past simple for completed actions at a finished time in the past.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Past Simple,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“We visited Mysuru last weekend.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Past Simple.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 27 takeaway: Use the past simple for completed actions at a finished time in the past."
          }
        ],
        "qa": [
          [
            "What should I remember about past simple?",
            "Use the past simple for completed actions at a finished time in the past."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Past Simple”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Regular and Irregular Past Verbs",
        "intro": "Regular verbs often add -ed; irregular verbs change differently and need practice.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Regular verbs often add -ed; irregular verbs change differently and need practice.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Regular and Irregular Past Verbs,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "work → worked; go → went; buy → bought.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Regular and Irregular Past Verbs.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 28 takeaway: Regular verbs often add -ed; irregular verbs change differently and need practice."
          }
        ],
        "qa": [
          [
            "What should I remember about regular and irregular past verbs?",
            "Regular verbs often add -ed; irregular verbs change differently and need practice."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Regular and Irregular Past Verbs”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Future With Will",
        "intro": "Will is common for predictions, instant decisions and promises.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Will is common for predictions, instant decisions and promises.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Future With Will,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I think it will rain.” “I’ll call you tonight.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Future With Will.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 29 takeaway: Will is common for predictions, instant decisions and promises."
          }
        ],
        "qa": [
          [
            "What should I remember about future with will?",
            "Will is common for predictions, instant decisions and promises."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Future With Will”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 3 — Verbs and Basic Tenses",
        "title": "Going To for Plans",
        "intro": "Be going to is common for intentions and plans already in mind, and for predictions based on present evidence.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Be going to is common for intentions and plans already in mind, and for predictions based on present evidence.",
              "Tense becomes easier when you connect grammar to time: routine, now, finished past and future plans. For “Going To for Plans,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I’m going to visit my parents this weekend.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Going To for Plans.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 30 takeaway: Be going to is common for intentions and plans already in mind, and for predictions based on present evidence."
          }
        ],
        "qa": [
          [
            "What should I remember about going to for plans?",
            "Be going to is common for intentions and plans already in mind, and for predictions based on present evidence."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Going To for Plans”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Basic Word Order",
        "intro": "A common English statement follows subject + verb + object or complement. Stable word order makes beginner speech clearer.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A common English statement follows subject + verb + object or complement. Stable word order makes beginner speech clearer.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Basic Word Order,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“She reads books.” not “Reads she books.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Basic Word Order.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 31 takeaway: A common English statement follows subject + verb + object or complement. Stable word order makes beginner speech clearer."
          }
        ],
        "qa": [
          [
            "What should I remember about basic word order?",
            "A common English statement follows subject + verb + object or complement. Stable word order makes beginner speech clearer."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Basic Word Order”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Making Negative Sentences",
        "intro": "Present-simple negatives usually use do not or does not; be uses not directly.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Present-simple negatives usually use do not or does not; be uses not directly.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Making Negative Sentences,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I don’t eat meat.” “She isn’t busy.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Making Negative Sentences.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 32 takeaway: Present-simple negatives usually use do not or does not; be uses not directly."
          }
        ],
        "qa": [
          [
            "What should I remember about making negative sentences?",
            "Present-simple negatives usually use do not or does not; be uses not directly."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Making Negative Sentences”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Yes/No Questions With Be",
        "intro": "Move am, is or are before the subject to form basic questions with be.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Move am, is or are before the subject to form basic questions with be.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Yes/No Questions With Be,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Are you ready?” “Is he at work?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Yes/No Questions With Be.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 33 takeaway: Move am, is or are before the subject to form basic questions with be."
          }
        ],
        "qa": [
          [
            "What should I remember about yes/no questions with be?",
            "Move am, is or are before the subject to form basic questions with be."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Yes/No Questions With Be”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Yes/No Questions With Do",
        "intro": "Use do or does before the subject for present-simple questions with most verbs.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use do or does before the subject for present-simple questions with most verbs.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Yes/No Questions With Do,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Do you drive?” “Does she speak Hindi?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Yes/No Questions With Do.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 34 takeaway: Use do or does before the subject for present-simple questions with most verbs."
          }
        ],
        "qa": [
          [
            "What should I remember about yes/no questions with do?",
            "Use do or does before the subject for present-simple questions with most verbs."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Yes/No Questions With Do”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Wh- Questions",
        "intro": "Question words such as what, where, when, why, who and how ask for specific information.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Question words such as what, where, when, why, who and how ask for specific information.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Wh- Questions,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Where do you live?” “Why are you late?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Wh- Questions.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 35 takeaway: Question words such as what, where, when, why, who and how ask for specific information."
          }
        ],
        "qa": [
          [
            "What should I remember about wh- questions?",
            "Question words such as what, where, when, why, who and how ask for specific information."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Wh- Questions”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "There Is and There Are",
        "intro": "Use there is and there are to say that something exists or is present.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use there is and there are to say that something exists or is present.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “There Is and There Are,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“There is a pharmacy near my house.” “There are two buses outside.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “There Is and There Are.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 36 takeaway: Use there is and there are to say that something exists or is present."
          }
        ],
        "qa": [
          [
            "What should I remember about there is and there are?",
            "Use there is and there are to say that something exists or is present."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “There Is and There Are”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "This, That, These and Those",
        "intro": "These demonstratives point to singular or plural things that are near or farther away in context.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "These demonstratives point to singular or plural things that are near or farther away in context.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “This, That, These and Those,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“This book” is singular and near; “those buildings” is plural and farther away.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “This, That, These and Those.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 37 takeaway: These demonstratives point to singular or plural things that are near or farther away in context."
          }
        ],
        "qa": [
          [
            "What should I remember about this, that, these and those?",
            "These demonstratives point to singular or plural things that are near or farther away in context."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “This, That, These and Those”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Adjectives",
        "intro": "Adjectives describe nouns and usually come before a noun or after linking verbs such as be.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Adjectives describe nouns and usually come before a noun or after linking verbs such as be.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Adjectives,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“a quiet room” and “The room is quiet.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Adjectives.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 38 takeaway: Adjectives describe nouns and usually come before a noun or after linking verbs such as be."
          }
        ],
        "qa": [
          [
            "What should I remember about adjectives?",
            "Adjectives describe nouns and usually come before a noun or after linking verbs such as be."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Adjectives”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Adverbs of Frequency",
        "intro": "Always, usually, often, sometimes, rarely and never describe how often something happens.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Always, usually, often, sometimes, rarely and never describe how often something happens.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Adverbs of Frequency,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I usually walk after dinner.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Adverbs of Frequency.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 39 takeaway: Always, usually, often, sometimes, rarely and never describe how often something happens."
          }
        ],
        "qa": [
          [
            "What should I remember about adverbs of frequency?",
            "Always, usually, often, sometimes, rarely and never describe how often something happens."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Adverbs of Frequency”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 4 — Building Sentences and Questions",
        "title": "Connecting Ideas With And, But and Because",
        "intro": "Simple connectors let you combine thoughts and explain contrast or reason.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Simple connectors let you combine thoughts and explain contrast or reason.",
              "English word order is relatively fixed. Master a few reliable sentence and question patterns before adding complexity. For “Connecting Ideas With And, But and Because,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I wanted to go, but it was raining, so I stayed home.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Connecting Ideas With And, But and Because.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 40 takeaway: Simple connectors let you combine thoughts and explain contrast or reason."
          }
        ],
        "qa": [
          [
            "What should I remember about connecting ideas with and, but and because?",
            "Simple connectors let you combine thoughts and explain contrast or reason."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Connecting Ideas With And, But and Because”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Family and Relationships",
        "intro": "Learn family words together with sentence patterns for introducing people and describing relationships.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Learn family words together with sentence patterns for introducing people and describing relationships.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Family and Relationships,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“This is my sister. She lives in Chennai with her family.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Family and Relationships.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 41 takeaway: Learn family words together with sentence patterns for introducing people and describing relationships."
          }
        ],
        "qa": [
          [
            "What should I remember about family and relationships?",
            "Learn family words together with sentence patterns for introducing people and describing relationships."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Family and Relationships”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Home and Rooms",
        "intro": "Home vocabulary becomes useful when you practice location phrases and everyday actions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Home vocabulary becomes useful when you practice location phrases and everyday actions.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Home and Rooms,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“The keys are on the table in the living room.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Home and Rooms.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 42 takeaway: Home vocabulary becomes useful when you practice location phrases and everyday actions."
          }
        ],
        "qa": [
          [
            "What should I remember about home and rooms?",
            "Home vocabulary becomes useful when you practice location phrases and everyday actions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Home and Rooms”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Food and Drinks",
        "intro": "Learn food words with verbs such as eat, drink, cook, order, like and prefer.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Learn food words with verbs such as eat, drink, cook, order, like and prefer.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Food and Drinks,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I’d like a vegetable sandwich and a cup of tea, please.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Food and Drinks.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 43 takeaway: Learn food words with verbs such as eat, drink, cook, order, like and prefer."
          }
        ],
        "qa": [
          [
            "What should I remember about food and drinks?",
            "Learn food words with verbs such as eat, drink, cook, order, like and prefer."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Food and Drinks”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Shopping and Prices",
        "intro": "Useful shopping English includes sizes, quantities, prices, payment and comparison phrases.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Useful shopping English includes sizes, quantities, prices, payment and comparison phrases.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Shopping and Prices,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“How much is this?” “Do you have it in a larger size?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Shopping and Prices.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 44 takeaway: Useful shopping English includes sizes, quantities, prices, payment and comparison phrases."
          }
        ],
        "qa": [
          [
            "What should I remember about shopping and prices?",
            "Useful shopping English includes sizes, quantities, prices, payment and comparison phrases."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Shopping and Prices”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Clothes and Colours",
        "intro": "Combine clothing nouns with colours, sizes and simple opinions to make useful descriptions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Combine clothing nouns with colours, sizes and simple opinions to make useful descriptions.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Clothes and Colours,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I’m looking for a blue shirt in medium.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Clothes and Colours.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 45 takeaway: Combine clothing nouns with colours, sizes and simple opinions to make useful descriptions."
          }
        ],
        "qa": [
          [
            "What should I remember about clothes and colours?",
            "Combine clothing nouns with colours, sizes and simple opinions to make useful descriptions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Clothes and Colours”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Transport and Directions",
        "intro": "Travel vocabulary works best with movement verbs and location phrases.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Travel vocabulary works best with movement verbs and location phrases.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Transport and Directions,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Take the second left, then walk straight until you see the metro station.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Transport and Directions.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 46 takeaway: Travel vocabulary works best with movement verbs and location phrases."
          }
        ],
        "qa": [
          [
            "What should I remember about transport and directions?",
            "Travel vocabulary works best with movement verbs and location phrases."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Transport and Directions”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Health and the Body",
        "intro": "Basic health English helps you describe symptoms, duration and severity clearly.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Basic health English helps you describe symptoms, duration and severity clearly.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Health and the Body,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have had a sore throat for two days.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Health and the Body.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 47 takeaway: Basic health English helps you describe symptoms, duration and severity clearly."
          }
        ],
        "qa": [
          [
            "What should I remember about health and the body?",
            "Basic health English helps you describe symptoms, duration and severity clearly."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Health and the Body”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Weather",
        "intro": "Weather phrases often use it: it is hot, it is raining, it was cloudy.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Weather phrases often use it: it is hot, it is raining, it was cloudy.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Weather,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“It’s very humid today, but it may rain in the evening.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Weather.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 48 takeaway: Weather phrases often use it: it is hot, it is raining, it was cloudy."
          }
        ],
        "qa": [
          [
            "What should I remember about weather?",
            "Weather phrases often use it: it is hot, it is raining, it was cloudy."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Weather”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Work and Office Words",
        "intro": "Learn workplace nouns together with verbs used in meetings, files, deadlines and communication.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Learn workplace nouns together with verbs used in meetings, files, deadlines and communication.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Work and Office Words,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have a meeting at eleven, and I need to finish this report before lunch.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Work and Office Words.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 49 takeaway: Learn workplace nouns together with verbs used in meetings, files, deadlines and communication."
          }
        ],
        "qa": [
          [
            "What should I remember about work and office words?",
            "Learn workplace nouns together with verbs used in meetings, files, deadlines and communication."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Work and Office Words”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 5 — Everyday Vocabulary",
        "title": "Technology and the Internet",
        "intro": "Common technology English includes devices, accounts, files, apps, connections and actions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Common technology English includes devices, accounts, files, apps, connections and actions.",
              "Vocabulary sticks when learned with a verb, phrase and situation. Practice words inside complete sentences. For “Technology and the Internet,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Could you send me the link? I can’t open the attachment on my phone.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Technology and the Internet.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 50 takeaway: Common technology English includes devices, accounts, files, apps, connections and actions."
          }
        ],
        "qa": [
          [
            "What should I remember about technology and the internet?",
            "Common technology English includes devices, accounts, files, apps, connections and actions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Technology and the Internet”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Speak Before You Feel Ready",
        "intro": "Waiting for perfect grammar delays fluency. Use short correct patterns and gradually increase complexity.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Waiting for perfect grammar delays fluency. Use short correct patterns and gradually increase complexity.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Speak Before You Feel Ready,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Say “I went to the market yesterday” confidently before attempting a long story.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Speak Before You Feel Ready.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 51 takeaway: Waiting for perfect grammar delays fluency. Use short correct patterns and gradually increase complexity."
          }
        ],
        "qa": [
          [
            "What should I remember about speak before you feel ready?",
            "Waiting for perfect grammar delays fluency. Use short correct patterns and gradually increase complexity."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Speak Before You Feel Ready”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Word Stress",
        "intro": "English words often have one syllable that is stronger than the others. Correct stress can matter more than a perfect accent.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "English words often have one syllable that is stronger than the others. Correct stress can matter more than a perfect accent.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Word Stress,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "PHOtograph and phoTOGraphy place the strongest stress differently.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Word Stress.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 52 takeaway: English words often have one syllable that is stronger than the others. Correct stress can matter more than a perfect accent."
          }
        ],
        "qa": [
          [
            "What should I remember about word stress?",
            "English words often have one syllable that is stronger than the others. Correct stress can matter more than a perfect accent."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Word Stress”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Sentence Stress",
        "intro": "Content words usually receive more stress than grammar words, helping listeners catch the main message.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Content words usually receive more stress than grammar words, helping listeners catch the main message.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Sentence Stress,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "In “I NEED the BLUE file,” need and blue may carry the strongest stress.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Sentence Stress.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 53 takeaway: Content words usually receive more stress than grammar words, helping listeners catch the main message."
          }
        ],
        "qa": [
          [
            "What should I remember about sentence stress?",
            "Content words usually receive more stress than grammar words, helping listeners catch the main message."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Sentence Stress”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "The Schwa Sound",
        "intro": "Unstressed vowels in English often reduce to a relaxed “uh” sound called schwa. It makes natural speech smoother.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Unstressed vowels in English often reduce to a relaxed “uh” sound called schwa. It makes natural speech smoother.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “The Schwa Sound,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "The first sound in “about” is commonly a schwa.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “The Schwa Sound.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 54 takeaway: Unstressed vowels in English often reduce to a relaxed “uh” sound called schwa. It makes natural speech smoother."
          }
        ],
        "qa": [
          [
            "What should I remember about the schwa sound?",
            "Unstressed vowels in English often reduce to a relaxed “uh” sound called schwa. It makes natural speech smoother."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “The Schwa Sound”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Final Sounds",
        "intro": "Clear final consonants help listeners distinguish tense, number and word meaning.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Clear final consonants help listeners distinguish tense, number and word meaning.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Final Sounds,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“work” and “worked” need different endings; dropping the final sound can hide the past tense.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Final Sounds.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 55 takeaway: Clear final consonants help listeners distinguish tense, number and word meaning."
          }
        ],
        "qa": [
          [
            "What should I remember about final sounds?",
            "Clear final consonants help listeners distinguish tense, number and word meaning."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Final Sounds”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Common Difficult Sound Pairs",
        "intro": "Practice sounds that are difficult in your first language by contrasting similar words.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Practice sounds that are difficult in your first language by contrasting similar words.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Common Difficult Sound Pairs,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Practice “ship/sheep,” “live/leave” or “vest/west” slowly and then in sentences.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Common Difficult Sound Pairs.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 56 takeaway: Practice sounds that are difficult in your first language by contrasting similar words."
          }
        ],
        "qa": [
          [
            "What should I remember about common difficult sound pairs?",
            "Practice sounds that are difficult in your first language by contrasting similar words."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Common Difficult Sound Pairs”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Contractions",
        "intro": "Contractions such as I’m, don’t, can’t and we’re are extremely common in natural conversation.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Contractions such as I’m, don’t, can’t and we’re are extremely common in natural conversation.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Contractions,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I’m not sure, but I’ll check” sounds natural and is easy to say.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Contractions.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 57 takeaway: Contractions such as I’m, don’t, can’t and we’re are extremely common in natural conversation."
          }
        ],
        "qa": [
          [
            "What should I remember about contractions?",
            "Contractions such as I’m, don’t, can’t and we’re are extremely common in natural conversation."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Contractions”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Polite Requests",
        "intro": "Could, would and can help soften requests. Tone and please also matter.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Could, would and can help soften requests. Tone and please also matter.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Polite Requests,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Could you send me the file when you have a moment, please?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Polite Requests.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 58 takeaway: Could, would and can help soften requests. Tone and please also matter."
          }
        ],
        "qa": [
          [
            "What should I remember about polite requests?",
            "Could, would and can help soften requests. Tone and please also matter."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Polite Requests”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Keeping a Conversation Going",
        "intro": "Use follow-up questions, short reactions and related comments so conversations do not stop after one answer.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use follow-up questions, short reactions and related comments so conversations do not stop after one answer.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Keeping a Conversation Going,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I went to Goa.” — “Nice! When did you go? How was the weather?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Keeping a Conversation Going.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 59 takeaway: Use follow-up questions, short reactions and related comments so conversations do not stop after one answer."
          }
        ],
        "qa": [
          [
            "What should I remember about keeping a conversation going?",
            "Use follow-up questions, short reactions and related comments so conversations do not stop after one answer."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Keeping a Conversation Going”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 6 — Speaking and Pronunciation",
        "title": "Repairing Communication",
        "intro": "When you do not understand, ask for repetition, clarification or a slower explanation instead of pretending.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "When you do not understand, ask for repetition, clarification or a slower explanation instead of pretending.",
              "Clear pronunciation is about being understood, not copying one accent. Rhythm, stress and confident repair phrases matter greatly. For “Repairing Communication,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Sorry, I didn’t catch the last part. Could you say it again more slowly?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Repairing Communication.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 60 takeaway: When you do not understand, ask for repetition, clarification or a slower explanation instead of pretending."
          }
        ],
        "qa": [
          [
            "What should I remember about repairing communication?",
            "When you do not understand, ask for repetition, clarification or a slower explanation instead of pretending."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Repairing Communication”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Listening for the Main Idea",
        "intro": "On the first listen, focus on topic, speakers and purpose rather than every word.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "On the first listen, focus on topic, speakers and purpose rather than every word.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Listening for the Main Idea,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "In an airport announcement, first identify the flight, gate and action required.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Listening for the Main Idea.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 61 takeaway: On the first listen, focus on topic, speakers and purpose rather than every word."
          }
        ],
        "qa": [
          [
            "What should I remember about listening for the main idea?",
            "On the first listen, focus on topic, speakers and purpose rather than every word."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Listening for the Main Idea”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Listening for Key Details",
        "intro": "A second listen can target names, numbers, times, reasons and actions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A second listen can target names, numbers, times, reasons and actions.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Listening for Key Details,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Write down the appointment time and location rather than trying to transcribe the whole call.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Listening for Key Details.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 62 takeaway: A second listen can target names, numbers, times, reasons and actions."
          }
        ],
        "qa": [
          [
            "What should I remember about listening for key details?",
            "A second listen can target names, numbers, times, reasons and actions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Listening for Key Details”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Using Context When Listening",
        "intro": "Known words, situation and speaker intent help you infer unfamiliar parts.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Known words, situation and speaker intent help you infer unfamiliar parts.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Using Context When Listening,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "At a restaurant, hearing “Would you like…?” before an unknown word suggests an offer or choice.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Using Context When Listening.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 63 takeaway: Known words, situation and speaker intent help you infer unfamiliar parts."
          }
        ],
        "qa": [
          [
            "What should I remember about using context when listening?",
            "Known words, situation and speaker intent help you infer unfamiliar parts."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Using Context When Listening”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Shadowing Practice",
        "intro": "Shadowing means listening to a short phrase and repeating it closely, copying rhythm and stress.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Shadowing means listening to a short phrase and repeating it closely, copying rhythm and stress.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Shadowing Practice,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Replay a ten-second dialogue and imitate one sentence three times.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Shadowing Practice.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 64 takeaway: Shadowing means listening to a short phrase and repeating it closely, copying rhythm and stress."
          }
        ],
        "qa": [
          [
            "What should I remember about shadowing practice?",
            "Shadowing means listening to a short phrase and repeating it closely, copying rhythm and stress."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Shadowing Practice”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Reading for Gist",
        "intro": "Skimming gives you the general purpose before detailed reading. Titles and first sentences are useful clues.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Skimming gives you the general purpose before detailed reading. Titles and first sentences are useful clues.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Reading for Gist,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Before reading an email closely, decide whether it is a request, update, invitation or complaint.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Reading for Gist.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 65 takeaway: Skimming gives you the general purpose before detailed reading. Titles and first sentences are useful clues."
          }
        ],
        "qa": [
          [
            "What should I remember about reading for gist?",
            "Skimming gives you the general purpose before detailed reading. Titles and first sentences are useful clues."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Reading for Gist”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Scanning for Information",
        "intro": "Scanning means looking quickly for a specific detail such as a date, price or name.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Scanning means looking quickly for a specific detail such as a date, price or name.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Scanning for Information,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "In a train schedule, search visually for your destination and departure time.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Scanning for Information.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 66 takeaway: Scanning means looking quickly for a specific detail such as a date, price or name."
          }
        ],
        "qa": [
          [
            "What should I remember about scanning for information?",
            "Scanning means looking quickly for a specific detail such as a date, price or name."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Scanning for Information”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Guessing Meaning From Context",
        "intro": "Do not stop for every unknown word. Nearby words can often show whether it describes a person, action, feeling or object.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Do not stop for every unknown word. Nearby words can often show whether it describes a person, action, feeling or object.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Guessing Meaning From Context,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“The road was slippery after the rain, so we drove slowly” makes the meaning of slippery easier to infer.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Guessing Meaning From Context.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 67 takeaway: Do not stop for every unknown word. Nearby words can often show whether it describes a person, action, feeling or object."
          }
        ],
        "qa": [
          [
            "What should I remember about guessing meaning from context?",
            "Do not stop for every unknown word. Nearby words can often show whether it describes a person, action, feeling or object."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Guessing Meaning From Context”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Reading Short News and Articles",
        "intro": "Short articles build vocabulary when you focus on recurring useful phrases instead of translating every line.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Short articles build vocabulary when you focus on recurring useful phrases instead of translating every line.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Reading Short News and Articles,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "After reading, summarize the article in three simple sentences using your own words.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Reading Short News and Articles.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 68 takeaway: Short articles build vocabulary when you focus on recurring useful phrases instead of translating every line."
          }
        ],
        "qa": [
          [
            "What should I remember about reading short news and articles?",
            "Short articles build vocabulary when you focus on recurring useful phrases instead of translating every line."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Reading Short News and Articles”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Reading Messages and Emails",
        "intro": "Everyday written English often has a clear purpose, request, deadline or action. Train yourself to identify them.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Everyday written English often has a clear purpose, request, deadline or action. Train yourself to identify them.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Reading Messages and Emails,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "In “Please confirm by Friday,” the key action is confirm and the deadline is Friday.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Reading Messages and Emails.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 69 takeaway: Everyday written English often has a clear purpose, request, deadline or action. Train yourself to identify them."
          }
        ],
        "qa": [
          [
            "What should I remember about reading messages and emails?",
            "Everyday written English often has a clear purpose, request, deadline or action. Train yourself to identify them."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Reading Messages and Emails”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 7 — Listening and Reading",
        "title": "Building Vocabulary From Reading",
        "intro": "Record useful words with a sentence, collocation or phrase, not as isolated translations.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Record useful words with a sentence, collocation or phrase, not as isolated translations.",
              "Listening and reading improve when you first seek meaning, then details. Do not translate every word. For “Building Vocabulary From Reading,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Learn “make a decision,” not only the word “decision.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Building Vocabulary From Reading.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 70 takeaway: Record useful words with a sentence, collocation or phrase, not as isolated translations."
          }
        ],
        "qa": [
          [
            "What should I remember about building vocabulary from reading?",
            "Record useful words with a sentence, collocation or phrase, not as isolated translations."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Building Vocabulary From Reading”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Writing Simple Sentences",
        "intro": "Start with one clear idea per sentence. Correct basic structure is more valuable than long complicated writing.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Start with one clear idea per sentence. Correct basic structure is more valuable than long complicated writing.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Writing Simple Sentences,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“The meeting starts at 10. I will join online.” is clear and effective.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Writing Simple Sentences.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 71 takeaway: Start with one clear idea per sentence. Correct basic structure is more valuable than long complicated writing."
          }
        ],
        "qa": [
          [
            "What should I remember about writing simple sentences?",
            "Start with one clear idea per sentence. Correct basic structure is more valuable than long complicated writing."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Writing Simple Sentences”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Capital Letters and Full Stops",
        "intro": "Basic punctuation makes writing easier to understand and more professional.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Basic punctuation makes writing easier to understand and more professional.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Capital Letters and Full Stops,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I live in India. My office is in Bengaluru.” uses capitals for sentence starts and proper names.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Capital Letters and Full Stops.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 72 takeaway: Basic punctuation makes writing easier to understand and more professional."
          }
        ],
        "qa": [
          [
            "What should I remember about capital letters and full stops?",
            "Basic punctuation makes writing easier to understand and more professional."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Capital Letters and Full Stops”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Commas and Lists",
        "intro": "Commas separate items and sometimes help organize introductory or connecting parts of a sentence.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Commas separate items and sometimes help organize introductory or connecting parts of a sentence.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Commas and Lists,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Please bring your ID, ticket, phone and charger.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Commas and Lists.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 73 takeaway: Commas separate items and sometimes help organize introductory or connecting parts of a sentence."
          }
        ],
        "qa": [
          [
            "What should I remember about commas and lists?",
            "Commas separate items and sometimes help organize introductory or connecting parts of a sentence."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Commas and Lists”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Writing a Short Paragraph",
        "intro": "A beginner paragraph can have one topic sentence followed by two or three supporting details.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A beginner paragraph can have one topic sentence followed by two or three supporting details.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Writing a Short Paragraph,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Start with “My daily routine is simple,” then add morning, work and evening details.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Writing a Short Paragraph.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 74 takeaway: A beginner paragraph can have one topic sentence followed by two or three supporting details."
          }
        ],
        "qa": [
          [
            "What should I remember about writing a short paragraph?",
            "A beginner paragraph can have one topic sentence followed by two or three supporting details."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Writing a Short Paragraph”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Text Messages",
        "intro": "Friendly messages can be brief, but complete words and clear timing prevent misunderstanding.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Friendly messages can be brief, but complete words and clear timing prevent misunderstanding.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Text Messages,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Hi, I’m running about 10 minutes late. I’ll meet you at the entrance.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Text Messages.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 75 takeaway: Friendly messages can be brief, but complete words and clear timing prevent misunderstanding."
          }
        ],
        "qa": [
          [
            "What should I remember about text messages?",
            "Friendly messages can be brief, but complete words and clear timing prevent misunderstanding."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Text Messages”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Writing Polite Requests",
        "intro": "In written requests, include context, the action you need and a polite close.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "In written requests, include context, the action you need and a polite close.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Writing Polite Requests,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Could you please share the updated report by 4 p.m.? Thank you.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Writing Polite Requests.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 76 takeaway: In written requests, include context, the action you need and a polite close."
          }
        ],
        "qa": [
          [
            "What should I remember about writing polite requests?",
            "In written requests, include context, the action you need and a polite close."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Writing Polite Requests”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Basic Email Structure",
        "intro": "A simple email usually has a clear subject, greeting, purpose, needed action and closing.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A simple email usually has a clear subject, greeting, purpose, needed action and closing.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Basic Email Structure,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Subject: Meeting time — “Hi Ana, Could we move tomorrow’s call to 3 p.m.? Thanks, Ravi.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Basic Email Structure.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 77 takeaway: A simple email usually has a clear subject, greeting, purpose, needed action and closing."
          }
        ],
        "qa": [
          [
            "What should I remember about basic email structure?",
            "A simple email usually has a clear subject, greeting, purpose, needed action and closing."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Basic Email Structure”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Writing About the Past",
        "intro": "Use past-time markers and past verbs consistently when describing completed events.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use past-time markers and past verbs consistently when describing completed events.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Writing About the Past,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Yesterday I visited my uncle. We had lunch and talked for two hours.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Writing About the Past.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 78 takeaway: Use past-time markers and past verbs consistently when describing completed events."
          }
        ],
        "qa": [
          [
            "What should I remember about writing about the past?",
            "Use past-time markers and past verbs consistently when describing completed events."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Writing About the Past”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Writing About Plans",
        "intro": "Use future forms and time expressions to explain upcoming actions clearly.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use future forms and time expressions to explain upcoming actions clearly.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Writing About Plans,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I’m going to travel on Friday. I’ll return on Monday morning.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Writing About Plans.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 79 takeaway: Use future forms and time expressions to explain upcoming actions clearly."
          }
        ],
        "qa": [
          [
            "What should I remember about writing about plans?",
            "Use future forms and time expressions to explain upcoming actions clearly."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Writing About Plans”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 8 — Writing Clearly",
        "title": "Editing Your Own Writing",
        "intro": "Review one layer at a time: meaning, sentence structure, verbs, articles, spelling and punctuation.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Review one layer at a time: meaning, sentence structure, verbs, articles, spelling and punctuation.",
              "Clear writing is built from clear sentences. Draft simply, then edit one type of mistake at a time. For “Editing Your Own Writing,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "After writing a message, read it once only for verb tense and once only for missing words.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Editing Your Own Writing.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 80 takeaway: Review one layer at a time: meaning, sentence structure, verbs, articles, spelling and punctuation."
          }
        ],
        "qa": [
          [
            "What should I remember about editing your own writing?",
            "Review one layer at a time: meaning, sentence structure, verbs, articles, spelling and punctuation."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Editing Your Own Writing”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "At a Restaurant",
        "intro": "Restaurant English includes asking for a table, ordering, making changes, checking ingredients and requesting the bill.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Restaurant English includes asking for a table, ordering, making changes, checking ingredients and requesting the bill.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “At a Restaurant,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Could I have the vegetable pasta without cheese, please?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “At a Restaurant.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 81 takeaway: Restaurant English includes asking for a table, ordering, making changes, checking ingredients and requesting the bill."
          }
        ],
        "qa": [
          [
            "What should I remember about at a restaurant?",
            "Restaurant English includes asking for a table, ordering, making changes, checking ingredients and requesting the bill."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “At a Restaurant”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "At a Hotel",
        "intro": "Practice check-in, room requests, problems, facilities and checkout phrases.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Practice check-in, room requests, problems, facilities and checkout phrases.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “At a Hotel,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have a reservation under Jain. Could I have a room on a higher floor if available?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “At a Hotel.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 82 takeaway: Practice check-in, room requests, problems, facilities and checkout phrases."
          }
        ],
        "qa": [
          [
            "What should I remember about at a hotel?",
            "Practice check-in, room requests, problems, facilities and checkout phrases."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “At a Hotel”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "At the Airport",
        "intro": "Airport English uses check-in, baggage, security, gate, boarding and delay vocabulary.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Airport English uses check-in, baggage, security, gate, boarding and delay vocabulary.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “At the Airport,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Excuse me, has the boarding gate for MH193 changed?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “At the Airport.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 83 takeaway: Airport English uses check-in, baggage, security, gate, boarding and delay vocabulary."
          }
        ],
        "qa": [
          [
            "What should I remember about at the airport?",
            "Airport English uses check-in, baggage, security, gate, boarding and delay vocabulary."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “At the Airport”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "Asking for Directions",
        "intro": "Use polite openers and confirm landmarks or distance when directions are complex.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Use polite openers and confirm landmarks or distance when directions are complex.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “Asking for Directions,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Excuse me, how do I get to the nearest metro station? Is it within walking distance?”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Asking for Directions.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 84 takeaway: Use polite openers and confirm landmarks or distance when directions are complex."
          }
        ],
        "qa": [
          [
            "What should I remember about asking for directions?",
            "Use polite openers and confirm landmarks or distance when directions are complex."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Asking for Directions”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "At a Doctor or Pharmacy",
        "intro": "Describe the symptom, location, duration and severity, and ask clear questions about instructions.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Describe the symptom, location, duration and severity, and ask clear questions about instructions.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “At a Doctor or Pharmacy,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have had a fever since last night. It reached 101 degrees this morning.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “At a Doctor or Pharmacy.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 85 takeaway: Describe the symptom, location, duration and severity, and ask clear questions about instructions."
          }
        ],
        "qa": [
          [
            "What should I remember about at a doctor or pharmacy?",
            "Describe the symptom, location, duration and severity, and ask clear questions about instructions."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “At a Doctor or Pharmacy”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "On a Phone Call",
        "intro": "Phone conversations need clear identification, repetition strategies and confirmation because visual cues are missing.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Phone conversations need clear identification, repetition strategies and confirmation because visual cues are missing.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “On a Phone Call,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“Hi, this is Ravi from ABC. I’m calling about tomorrow’s appointment.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “On a Phone Call.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 86 takeaway: Phone conversations need clear identification, repetition strategies and confirmation because visual cues are missing."
          }
        ],
        "qa": [
          [
            "What should I remember about on a phone call?",
            "Phone conversations need clear identification, repetition strategies and confirmation because visual cues are missing."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “On a Phone Call”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "In a Meeting",
        "intro": "Useful meeting phrases help you agree, disagree, clarify, interrupt politely and summarize action items.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Useful meeting phrases help you agree, disagree, clarify, interrupt politely and summarize action items.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “In a Meeting,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I agree with the first point, but I have a concern about the deadline.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “In a Meeting.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 87 takeaway: Useful meeting phrases help you agree, disagree, clarify, interrupt politely and summarize action items."
          }
        ],
        "qa": [
          [
            "What should I remember about in a meeting?",
            "Useful meeting phrases help you agree, disagree, clarify, interrupt politely and summarize action items."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “In a Meeting”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "Giving a Work Update",
        "intro": "A clear update says what is done, what is next and what is blocked.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A clear update says what is done, what is next and what is blocked.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “Giving a Work Update,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“The API testing is complete. I’m starting regression today. I’m blocked on one test account.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Giving a Work Update.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 88 takeaway: A clear update says what is done, what is next and what is blocked."
          }
        ],
        "qa": [
          [
            "What should I remember about giving a work update?",
            "A clear update says what is done, what is next and what is blocked."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Giving a Work Update”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "Job Interview Basics",
        "intro": "Prepare short answers about yourself, experience, skills, examples and motivation instead of memorizing long speeches.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Prepare short answers about yourself, experience, skills, examples and motivation instead of memorizing long speeches.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “Job Interview Basics,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have three years of support experience, and I enjoy solving customer problems calmly.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Job Interview Basics.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 89 takeaway: Prepare short answers about yourself, experience, skills, examples and motivation instead of memorizing long speeches."
          }
        ],
        "qa": [
          [
            "What should I remember about job interview basics?",
            "Prepare short answers about yourself, experience, skills, examples and motivation instead of memorizing long speeches."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Job Interview Basics”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 9 — English for Real Situations",
        "title": "Small Talk",
        "intro": "Small talk often uses safe topics such as weather, travel, food, workday and local events to build connection.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Small talk often uses safe topics such as weather, travel, food, workday and local events to build connection.",
              "Prepare language for situations you genuinely face. Rehearsed chunks free your attention for listening and thinking. For “Small Talk,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“How was your weekend?” can lead to a short friendly conversation before a meeting.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Small Talk.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 90 takeaway: Small talk often uses safe topics such as weather, travel, food, workday and local events to build connection."
          }
        ],
        "qa": [
          [
            "What should I remember about small talk?",
            "Small talk often uses safe topics such as weather, travel, food, workday and local events to build connection."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Small Talk”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Common Beginner Mistakes",
        "intro": "Notice high-frequency patterns such as missing articles, incorrect verb endings and direct translation, then fix one pattern at a time.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Notice high-frequency patterns such as missing articles, incorrect verb endings and direct translation, then fix one pattern at a time.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Common Beginner Mistakes,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Instead of “She go office,” practice “She goes to the office.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Common Beginner Mistakes.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 91 takeaway: Notice high-frequency patterns such as missing articles, incorrect verb endings and direct translation, then fix one pattern at a time."
          }
        ],
        "qa": [
          [
            "What should I remember about common beginner mistakes?",
            "Notice high-frequency patterns such as missing articles, incorrect verb endings and direct translation, then fix one pattern at a time."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Common Beginner Mistakes”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Prepositions of Time",
        "intro": "At, on and in are common for time: at for clock times, on for days/dates and in for months, years and longer periods.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "At, on and in are common for time: at for clock times, on for days/dates and in for months, years and longer periods.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Prepositions of Time,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“at 6 p.m.,” “on Monday,” “in August,” “in 2026.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Prepositions of Time.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 92 takeaway: At, on and in are common for time: at for clock times, on for days/dates and in for months, years and longer periods."
          }
        ],
        "qa": [
          [
            "What should I remember about prepositions of time?",
            "At, on and in are common for time: at for clock times, on for days/dates and in for months, years and longer periods."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Prepositions of Time”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Prepositions of Place",
        "intro": "At, in and on also express place in different ways, and common phrases need repeated exposure.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "At, in and on also express place in different ways, and common phrases need repeated exposure.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Prepositions of Place,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“at the station,” “in the room,” “on the table.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Prepositions of Place.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 93 takeaway: At, in and on also express place in different ways, and common phrases need repeated exposure."
          }
        ],
        "qa": [
          [
            "What should I remember about prepositions of place?",
            "At, in and on also express place in different ways, and common phrases need repeated exposure."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Prepositions of Place”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Can, Could, Should and Must",
        "intro": "Modal verbs express ability, possibility, advice, requests and obligation. Their meaning changes with context.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Modal verbs express ability, possibility, advice, requests and obligation. Their meaning changes with context.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Can, Could, Should and Must,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I can swim.” “Could you help me?” “You should rest.” “You must show ID.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Can, Could, Should and Must.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 94 takeaway: Modal verbs express ability, possibility, advice, requests and obligation. Their meaning changes with context."
          }
        ],
        "qa": [
          [
            "What should I remember about can, could, should and must?",
            "Modal verbs express ability, possibility, advice, requests and obligation. Their meaning changes with context."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Can, Could, Should and Must”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Comparatives and Superlatives",
        "intro": "Comparatives compare two things; superlatives identify the highest or lowest within a group.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Comparatives compare two things; superlatives identify the highest or lowest within a group.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Comparatives and Superlatives,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“This route is faster.” “That is the fastest route.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Comparatives and Superlatives.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 95 takeaway: Comparatives compare two things; superlatives identify the highest or lowest within a group."
          }
        ],
        "qa": [
          [
            "What should I remember about comparatives and superlatives?",
            "Comparatives compare two things; superlatives identify the highest or lowest within a group."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Comparatives and Superlatives”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Present Perfect: First Look",
        "intro": "The present perfect connects past experience or action with the present and commonly uses have/has + past participle.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "The present perfect connects past experience or action with the present and commonly uses have/has + past participle.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Present Perfect: First Look,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“I have visited Singapore twice.” The exact finished time is not stated.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Present Perfect: First Look.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 96 takeaway: The present perfect connects past experience or action with the present and commonly uses have/has + past participle."
          }
        ],
        "qa": [
          [
            "What should I remember about present perfect: first look?",
            "The present perfect connects past experience or action with the present and commonly uses have/has + past participle."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Present Perfect: First Look”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Phrasal Verbs for Beginners",
        "intro": "Many common verbs combine with particles to create new meanings. Learn them in complete examples.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Many common verbs combine with particles to create new meanings. Learn them in complete examples.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Phrasal Verbs for Beginners,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "“turn on the light,” “pick up the phone,” “find out the answer.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Phrasal Verbs for Beginners.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 97 takeaway: Many common verbs combine with particles to create new meanings. Learn them in complete examples."
          }
        ],
        "qa": [
          [
            "What should I remember about phrasal verbs for beginners?",
            "Many common verbs combine with particles to create new meanings. Learn them in complete examples."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Phrasal Verbs for Beginners”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Collocations",
        "intro": "Natural English often depends on words that commonly appear together. Learning these combinations improves fluency.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Natural English often depends on words that commonly appear together. Learning these combinations improves fluency.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Collocations,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "We usually say “make a mistake,” “take a break” and “do homework.”",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Collocations.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 98 takeaway: Natural English often depends on words that commonly appear together. Learning these combinations improves fluency."
          }
        ],
        "qa": [
          [
            "What should I remember about collocations?",
            "Natural English often depends on words that commonly appear together. Learning these combinations improves fluency."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Collocations”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Your 30-Day Speaking Challenge",
        "intro": "A structured challenge builds confidence through short daily recordings, repeated topics and gradual difficulty.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "A structured challenge builds confidence through short daily recordings, repeated topics and gradual difficulty.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Your 30-Day Speaking Challenge,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Day 1: introduce yourself for 30 seconds. Day 30: explain a recent experience for three minutes.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Your 30-Day Speaking Challenge.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 99 takeaway: A structured challenge builds confidence through short daily recordings, repeated topics and gradual difficulty."
          }
        ],
        "qa": [
          [
            "What should I remember about your 30-day speaking challenge?",
            "A structured challenge builds confidence through short daily recordings, repeated topics and gradual difficulty."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Your 30-Day Speaking Challenge”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      },
      {
        "module": "Module 10 — Fluency and Continued Learning",
        "title": "Your Next 90 Days",
        "intro": "Continue with daily input, weekly speaking, regular writing and targeted grammar review. Track what you can now do in real life.",
        "sections": [
          {
            "h": "Learn the pattern",
            "p": [
              "Continue with daily input, weekly speaking, regular writing and targeted grammar review. Track what you can now do in real life.",
              "Fluency grows through repetition, feedback and progressively harder tasks. Keep a record of what you can do, not only what you have studied. For “Your Next 90 Days,” read the examples aloud twice. Do not worry about speed; aim for a clear sentence that you can reuse with different words."
            ]
          },
          {
            "h": "Example in real English",
            "p": [
              "Choose one monthly goal such as handling a work meeting, a travel conversation or a five-minute presentation.",
              "Say the example once slowly, once at normal speed and once with one word changed to make the sentence true for you. This turns passive understanding into active language."
            ]
          },
          {
            "h": "Practice for five minutes",
            "p": [
              "Create three new examples for “Your Next 90 Days.” One should be about your daily life, one about work or study, and one about a future conversation you may actually have.",
              "Read your sentences aloud. If one feels too difficult, shorten it instead of translating a long sentence from your first language. Clear, reusable English is the goal."
            ]
          },
          {
            "callout": "Page 100 takeaway: Continue with daily input, weekly speaking, regular writing and targeted grammar review. Track what you can now do in real life."
          }
        ],
        "qa": [
          [
            "What should I remember about your next 90 days?",
            "Continue with daily input, weekly speaking, regular writing and targeted grammar review. Track what you can now do in real life."
          ],
          [
            "How can I make this part of my spoken English?",
            "Repeat one correct model sentence, change one detail at a time, and use the pattern in a real message or conversation the same day."
          ]
        ],
        "quiz": {
          "q": "What is the best way to practise “Your Next 90 Days”?",
          "options": [
            "Use a correct example, say it aloud and create your own versions.",
            "Memorize the title but avoid speaking.",
            "Translate a very long sentence word by word every time."
          ],
          "answer": 0
        }
      }
    ]
  }
];
