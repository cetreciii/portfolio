export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  gradient: string;
  emoji: string;
  keywords: [string, string, string];
  icon?: string;
  coverImage?: string;
  descriptionImages?: string[];
  sections: { heading?: string; quickRead?: string; body: string; category: "learn" | "attitude"; images?: string[] }[];
  moreInfoLink?: string;
  link?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "whoooshh",
    title: "Whoooshh",
    tagline: "A collaborative spatial drawing app for visionOS with immersive mode and SharePlay.",
    description: `Whoooshh is a simple drawing app for visionOS. That is my personal take on the market of drawing apps for Apple Vision Pro, but with a twist!

It is possible for multiple people to draw all together! It can happen locally, with the person being physically present in the room with you, or it could happen in a FaceTime call, with personas! All thanks to Share Play!

Drawings can be:
- **immersive**: people can draw in the air around them! They could draw a new flower in their garden, draw planets in their room or they can build a whole house and pretend to live in it!
- **on a canvas**: Whoooshh allows people to draw also on a white canvas, letting their creativity flow in the good old fashioned way! There are three sizes of canvas that can be selected such as "small", "medium" and "big".

![](/projects/whoooshh/PP_raw_4.jpg)
![](/projects/whoooshh/PP_raw_5.jpg)

But Whoooshh is not only drawing on blank canvas! You can download the iOS version of the app to take a picture or select one from your gallery and send it to your Vision Pro, directly in the app! It will become the background of the canvas and you can draw on that picture! Imagine taking a picture of a friend and drawing a hat or a beard on the face!

![](/projects/whoooshh/Product_Page_Screenshot_iOS_2.png)
![](/projects/whoooshh/Product_Page_Screenshot_iOS_3.png)`,
    year: "2026",
    role: "visionOS + iOS Dev",
    stack: ["visionOS", "SwiftUI", "MultipeerConnectivity", "SharePlay", "iOS"],
    gradient: "linear-gradient(135deg, #f0e8ff 0%, #ddd0ff 55%, #c8c0f8 100%)",
    emoji: "🌀",
    keywords: ["Multipeer Connectivity", "SharePlay", "Multi-platform"],
    icon: "/projects/whoooshh/App_Icon_visionOS_Glass.png",
    coverImage: "/projects/whoooshh/Banner.png",
    sections: [
      {
        body: `This is my second app where I wanted to implement the word "multi" two times!

MULTI platform and MULTI-peer connectivity!

The app is, in fact, divided into two target: a visionOS build and a iOS build. The iOS build is the companion for the visionOS and the reason is the following: from the iOS app, the user can take a picture or pick it from the gallery and then send it into the canvas on the visionOS build.

And the picture is sent by leveraging the native Apple's Multi-peer connectivity! No cloud uploading, everything is local and stays on the devices, without being routed in external servers.

The biggest lesson I take away from this project is, without a doubt, having learned how to manage a cross-platform app in Xcode, how to handle its deployment on App Store Connect, and its final shipment.`,
        category: "learn",
      },
      {
        body: `I wanted to create something that could create a joyful moment for people who are diving into the world of Spatial Computing for the first time and, more specifically, while building this app, I was thinking specifically about people who are going to walk my steps in the ARTE program of the Apple Developer Academy. And I wanted to give them a simple tool to try right away the Apple Vision Pro and have fun together!

So this app is for everyone, but it winks at anyone who will come after me and wants to start getting familiar with the Apple Vision Pro. Or, more simply, it's aimed at someone who has recently purchased the device!

It's my small present for who will come later! Hoping to pass them the same passion and commitment that I've had during the program, wishing them to achieve amazing results!`,
        category: "attitude",
      },
    ],
  },
  {
    slug: "roundeo",
    title: "Roundeo",
    tagline: "A free, open-source macOS tool that rounds video corners for Keynote demos.",
    description: `Roundeo is a simple app that I wanted to build to help people deal with a struggle that I had while designing my countless Keynote presentations: **adding rounded corners to videos**!

This simple and lightweight app has just two functions, but it performs them well:
- It rounds the corners of videos to fit perfectly within the edges of an overlay (which might depict a device frame);
- It allows adding a product bezel overlay.

This is very useful if you need to showcase a video of your app in a Keynote presentation and I really hope that it can be useful for people who go through this regularly!`,
    year: "2026",
    role: "macOS Dev",
    stack: ["SwiftUI", "AVFoundation", "macOS"],
    gradient: "linear-gradient(135deg, #ffe7e1 0%, #ffd6d8 55%, #ffdde8 100%)",
    emoji: "🎥",
    keywords: ["First macOS development", "Open source", "Different design logic"],
    icon: "/projects/roundeo/app-icon.png",
    coverImage: "/projects/roundeo/banner.png",
    descriptionImages: ["/projects/roundeo/screenshot-2.png"],
    sections: [
      {
        quickRead: `After this experience I can say that I've been exposed to three development design logics: **iOS**, **visionOS** and **macOS**.
- Mobile fixed screens with gestures;
- Extended Reality, gaze and proxemics;
- Resizable windows with plenty of space, mouse and keyboard.

This is my first macOS project. After developing only apps for iOS and visionOS, I pushed myself into developing something for another device.`,
        body: `I was already exposed to a different way of thinking and developing when discovering visionOS development, so i was kinda prepared to do the mental switch for macOS. The logic is different.
- On **iOS** we only have one screen with navigations, if we want to show content we have to juggle between different views that appear and disappear, with limited space. So it's about navigation. And also, in iOS we have a different way of interaction from macOS: touch. We have a touch screen that allows to interact with the app with gestures, taps, long presses.
- With **visionOS**, the experience becomes even more different and complex. In that environment, interaction is guided by gaze, sight, and spatial gestures. No taps on a screen, no scrolling. **The eyes observe, the hands confirm.** Furthermore, the content requires an additional consideration: proxemics. In visionOS and XR, very delicate variables come into play, as one **directly interacts with the user's visual cognition**.

And with macOS? Another paradigm shift!

No Navigation Stack, no spatial gestures. There is only a window that is always there. The user interacts with mouse and keyboard and I have to account for clicks, not taps or pinches!

Everything the user needs is always on the screen, no limited space. And moreover the window is resizable so I don't have to deal with a fixed space that the iPhone offers. But at the same time, my interface has to be ready to handle resizing.

It's different and I do not presume to have already understood everything about the logic behind macOS development, but i needed this jump in the void!`,
        category: "learn",
      },
      {
        body: `For the first time I open-sourced a project that is not educational.

I wanted to make this simple app from a struggle I've been having during my years at the Apple Developer Academy and I wanted to help other students that could face the same problem! For that reason I've decided to go completely open-source. The app is free on the App Store, but the entire codebase is out there public on GitHub under MIT license, ready to be cloned, modified and improved by anyone.

This is my small contribution for builders, makers and small developers that want to create something meaningful and curate also its appearance, by helping them design aesthetically pleasant demo videos.`,
        category: "attitude",
      },
    ],
    moreInfoLink: "https://www.notion.so/igor-tarantino/Roundeo-33715dcee2b880eaade1ec7116254b0a?source=copy_link",
    link: { label: "View on GitHub", href: "https://github.com/cetreciii/Roundeo" },
    secondaryLink: { label: "Download on App Store", href: "https://apps.apple.com/it/app/roundeo-round-corners-videos/id6761580158?mt=12" },
  },
  {
    slug: "liquid",
    title: "Liquid",
    tagline: "Helping people with dyscalculia pay confidently in cash - Swift Student Challenge 2026.",
    description: `Liquid is my submission for the Swift Student Challenge 2026! …but also this time, sadly, I was not selected as a winner!

It is an app designed to help people with dyscalculia when paying in cash, both when handing over the correct amount of money and when receiving change.

Dyscalculia is a neurodevelopmental learning disorder that affects the ability to process and understand mathematical concepts, thus also affecting the ability to spend money.

During my research I understood that people affected by dyscalculia have problems with payments, handling changes and understanding the value of money, leading to dangerous money management and delegating payments completely to digital methods.

With Liquid, I want to address all those problems, helping dyscalculic people to feel confident and safe, neutralizing the difficulties of the disorder to give them something that for me is super super powerful: **the choice of paying with any method they want, not with the one they can.**`,
    year: "2026",
    role: "Solo Design & Dev",
    stack: ["SwiftUI", "Sketch", "Pixelmator"],
    gradient: "linear-gradient(135deg, #dff1ff 0%, #cce8ff 55%, #b8deff 100%)",
    emoji: "💧",
    keywords: ["Desk research", "Digital drawing on iPad", "Studying financial cultures"],
    icon: "/projects/liquid/AppIcon_2_Light_Rounded.png",
    coverImage: "/projects/liquid/banner.png",
    descriptionImages: ["/projects/liquid/2.png"],
    sections: [
      {
        body: `This journey, honestly, was awesome.

I started thinking about the idea of helping dyscalculic people in payments for the first time in late November 2025 and started actually developing it from December 2025.

Since I wanted this concept to be also my submission for the Swift Student Challenge 2026, I made sure to be informed enough about the topic with some deep research, focusing mainly on the voice of people who are affected by dyscalculia, navigating through subreddits where people shared their struggles, difficulties and frustrations.

Liquid's development took **four months** and I learned a lot from it.

For example, I had to document myself about **financial culture** and how other countries currencies work, what is the circulation of banknotes of other currencies: which ones are used the most, and which ones are instead out of use? To make a product enjoyable for as many communities as possible, I had to put myself in the shoes of people who use a currency different from the one I'm used to, which is the euro.

It was so fun, I also asked people around the Apple Developer Academy to talk about their currencies and show me their money in order to understand and learn!

But that's not everything! For the first time, since I wanted to create something all by myself and wanted to give a style completely mine to the app, I combined **Pixelmator** (for hand-drawing complex details) with **Sketch** for the core structure of banknotes and coins!

All the assets of the money in the app are done by me and I'm super happy and proud of how they came out! That was my first time drawing assets for an app like that!`,
        category: "learn",
        images: [
          "/projects/liquid/Portfolio_-_EUR_Paper.png",
          "/projects/liquid/Portfolio_-_EUR_Coin.png",
          "/projects/liquid/Portfolio_-_USD_Paper.png",
          "/projects/liquid/Portfolio_-_USD_Coin.png",
          "/projects/liquid/Portfolio_-_JPY_Paper.png",
          "/projects/liquid/Portfolio_-_JPY_Coin.png",
        ],
      },
      {
        heading: "Care for details.",
        body: `I wanted everything to be exactly as I wanted.

Since the experience was designed to help people, I paid close attention to every detail:
- refining banknotes and coins for easy recognition (key to **replacing abstract math concepts**);
- creating a clear, visually pleasing interface that follows Liquid Glass design principles;
- writing a clear onboarding to let people understand how easy it is to use Liquid.`,
        category: "attitude",
      },
    ],
    moreInfoLink: "https://www.notion.so/igor-tarantino/Liquid-31815dcee2b8803793a3ecc3b5a1488d?source=copy_link",
    link: { label: "Download on App Store", href: "https://apps.apple.com/us/app/liquid-spending-made-simple/id6759966864" },
  },
  {
    slug: "gennit",
    title: "Gennit",
    tagline: "A food allergy party planner that makes hosting safe and inclusive.",
    description:
      "Gennit is an app designed to make organizing food parties easier by taking everyone's food allergies and intolerances into account. Hosts can create an event and share it with their guests, who can then add their allergy information. The app gathers all this data, helping the host plan and prepare dishes that safely avoid any ingredients that guests can't eat.",
    year: "2026",
    role: "Solo Dev",
    stack: ["SwiftUI", "CloudKit", "StoreKit", "In-App Purchases"],
    gradient: "linear-gradient(135deg, #e8f5e4 0%, #d6efdc 55%, #c8e6f0 100%)",
    emoji: "🍽️",
    keywords: ["CloudKit", "StoreKit", "In-app purchases"],
    icon: "/projects/gennit/AppIcon.png",
    coverImage: "/projects/gennit/banner.png",
    descriptionImages: [
      "/projects/gennit/Screenshot_6.png",
      "/projects/gennit/Screenshot_3.png",
      "/projects/gennit/Screenshot_2.png",
      "/projects/gennit/Screenshot_6 1.png",
    ],
    sections: [
      {
        body: `This experience has been very interesting for me because I started thinking about this concept one week before my birthday. I wanted to organize a very small party with my friend to celebrate the moment with some food, snacks and beverages but I was aware that some of my friends were allergic to certain foods. For that reason I wanted to acknowledge those intolerances and this idea came in my mind.

Just days before I was exposed to **CloudKit** fundamentals and learned about the possibilities of creating databases that could be shared among iCloud users.

Keeping those points in mind, I researched **CloudKit** further and, with the help of AI, understood how to implement this functionality in my project.

But I did not stop here! Since I'd never implemented monetary transactions in my apps before and had no exposure to the legislation behind them, I figured this app would let me offer services that would also give me a chance to learn that world.

And just like that I started following some tutorials about **StoreKit** and how to implement its API in my code.

Not only this, I also did learn how to set up my App Store Connect developer account to be able to receive money from in-app purchases (a lot of stuff to sign and to declare, but it was worth it).

Gennit, therefore, offers two plans.
- A **free plan** (maximum three simultaneous created or joined events);
- A **premium plan** (illimitate events and AI suggestions that take into account the intolerances of guests to suggest some recipes and foods for everyone to enjoy!)`,
        category: "learn",
      },
      {
        heading: "CURIOSITY!!",
        body: `This is how I'd sum up this experience. All the things I've learned, especially StoreKit, are tools that will add real value to my work, giving me a way to monetize it respectfully. Until now, I hadn't taken action on that and I am very happy to have investigated all of those topics thanks to… my birthday!

Even better, now I have a great reason to learn how the app market works, sharpen my ASO skills, and manage my app with revenue potential in mind.`,
        category: "attitude",
      },
    ],
    moreInfoLink: "https://www.notion.so/igor-tarantino/Gennit-32315dcee2b8808db2bff10a6dc85e66?source=copy_link",
    link: { label: "Download on App Store", href: "https://apps.apple.com/us/app/gennit-food-allergy-parties/id6760315666" },
  },
  {
    slug: "detective-dino",
    title: "Detective Dino",
    tagline: "An experimental mystery game powered by Apple Foundation Models on-device AI.",
    description: `Detective Dino is an experimental game that I started developing for fun.

It is about a detective dinosaur whose mission is to solve crimes and find the assassin. The details of the crime scene are asked to the user, who can invent them and create a story from his or her imagination:
- The time when the crime was perpetrated;
- The weather;
- The year;
- The season;
- The weapon of the murder;
- Any extra information to personalize even more the story.

After that, the magic happens: the on-device language model of Apple Intelligence creates a crime scene based on the information inserted by the user and also generates statements from three suspects who claim they're not guilty, each telling their version of events.

One of them, however, **is lying**, and the player must figure out who by comparing their statements to the story generated by Apple Intelligence. If the player accuses the real culprit, the case is solved and logged in the statistics.

The more cases you solve, the more points you earn to unlock the most prestigious badges (which activate after a set number of solved cases). These badges appear in the app's main menu and can be used to brag to your friends, proving your skill.

Come on, those are the basics of gaming, what's the point of winning if you cannot flex on others? 😏`,
    year: "2026",
    role: "Creative Dev",
    stack: ["SwiftUI", "Apple Foundation Models", "Apple Intelligence"],
    gradient: "linear-gradient(135deg, #fff3d6 0%, #ffe3b8 55%, #ffd4a0 100%)",
    emoji: "🦕",
    keywords: ["Apple Foundation Models", "Agentic coding", "Sense of progression"],
    icon: "/projects/detective-dino/AppIconComposer.png",
    descriptionImages: [
      "/projects/detective-dino/Screenshot_2.png",
      "/projects/detective-dino/Screenshot_3.png",
      "/projects/detective-dino/Screenshot_6.png",
      "/projects/detective-dino/Screenshot_4.png",
      "/projects/detective-dino/Screenshot_5.png",
    ],
    sections: [
      {
        body: `This was my very first attempt in experimenting with Apple Foundation Models, exploring the on-device elaboration. I've never tried it, in any occasion, but I got the idea after being exposed to it during a workshop.

Then it was a time my girlfriend was really focusing on crime stories and I wanted to build a small experience for her about solving cases and it struck me: "I can use Foundation Models to create an interactive story that always changes, avoiding hardcoded stories that are always the same".

And then I tried for the first time in my life **agentic coding**, discovering how much it is powerful and accurate the help of AI when it has access to the whole context of the codebase. This improved my workflow immensely, but at the same time I reflected on something:

it is so easy that if used without caution, it could dramatically lower the learning opportunities since it acts directly on the code, without the need of the developer to reason upon the syntax.

So to maximize the learning, the solution is to work with it as a companion, a dictionary, a support to my own ideas!`,
        category: "learn",
      },
      {
        heading: "Perseverance.",
        body: `The game is yet far to be perfect and that is the reason it is still on TestFlight, there are a lot of things to adjust and to understand such as:
- what is the best system prompt that I need to give Apple Intelligence to generate a coherent story that is being followed by the three testimonies?
- how do I let it know about the logical contraddictions that only the guilty suspect has to have?

So it's still a work in progress that constantly stimulates my curiosity.`,
        category: "attitude",
      },
    ],
  },
  {
    slug: "airchestra",
    title: "AirChestra",
    tagline: "A visionOS immersive experience with floating musical planets you can conduct.",
    description:
      "Airchestra is the first demo project carried out from my first experience with Spatial Computing. The app is a simple experience with some storytelling about a person that falls asleep and starts dreaming about floating planets that are the planets of different musical instruments: the planet of the strings (violin, cello, viola), the woodwinds planet (clarinet, flute), the percussion planet (timpani), and the brass planet (trumpet). The planets can be moved around in an immersive space. Every planet has its own melody and all together they play a song. The listener can also enter in the immersive view of each planet and find itself in the world of that specific planet.",
    year: "2025",
    role: "Spatial Computing",
    stack: ["visionOS", "RealityKit", "ARKit", "SwiftUI"],
    gradient: "linear-gradient(135deg, #e8f0ff 0%, #d0d8f8 55%, #c8d0ff 100%)",
    emoji: "🎼",
    keywords: ["Spatial Computing", "Team management", "Cognitive design"],
    icon: "/projects/airchestra/app_Icon_Airchestra.png",
    sections: [
      {
        body: "As I already said, this was my first experience with Spatial Computing. Until now, I did know nothing about how to code for visionOS and this experience gave me the possibility to understand how frameworks such as RealityKit and ARKit do assume a totally different meaning in an immersive space.",
        category: "learn",
        images: [
          "/projects/airchestra/IMG_0048.png",
          "/projects/airchestra/IMG_0047.png",
        ],
      },
      {
        body: `On top of that, we made our first steps in the concept of spatially design and think an experience. Normally, all of my previous projects have been designed for a flat screen, but with Spatial Computing and Extended Reality everything is different. The simple addiction of the Z axis changes everything because now we're interacting in a more critical way with the senses of the user.

The experience has to account for more caution about the cognitive load of the user and its perception of objects in space. We have to build the interface considering that the assets of an XR experience have to actually interact with the surrounding environment of the user, other than interacting with the cognitive system of the user itself.`,
        category: "learn",
        images: [
          "/projects/airchestra/IMG_0049.png",
          "/projects/airchestra/IMG_0050.png",
        ],
      },
      {
        body: "This project has been very important for me because not only I've encountered for the first time the spatial computing design and cognitive thinking, but also because I was in charge of managing the working team composed by 10 people. It has been a challenge to manage the work and facilitate the communication between the different \"departments\" of designers and coders with the aim of carrying out the most valuable learning experience for us.",
        category: "attitude",
      },
    ],
    link: { label: "Download on App Store", href: "https://apps.apple.com/it/app/airchestra/id6754012641" },
  },
  {
    slug: "neglect-rehab",
    title: "NeglectRehab",
    tagline: "A visionOS rehabilitation experience for spatial neglect, my ARTE Program submission.",
    description: "My ARTE Program 2025-2026 submission project!\n\nMore information on the project can be found clicking on the button below!",
    year: "2025",
    role: "Spatial Computing",
    stack: ["visionOS", "RealityKit", "SwiftUI"],
    gradient: "linear-gradient(135deg, #ffe7e1 0%, #ffd6d8 55%, #ffd9ec 100%)",
    emoji: "🧬",
    keywords: ["Spatial Computing", "Academic Research", "Rehab proposal"],
    icon: "/projects/neglect-rehab/NegelectRehab_App_Icon.png",
    descriptionImages: ["/projects/neglect-rehab/cd8afe7a-3f30-492c-9dc3-13afb9bff117.png"],
    sections: [],
    link: { label: "View project on Notion", href: "https://www.notion.so/igor-tarantino/Neglect-Rehab-Project-20115dcee2b8800d9e7ce5c49881626a?source=copy_link" },
  },
  {
    slug: "duidu",
    title: "Duidu",
    tagline: "An accessible drawing canvas that maps strokes to sound for visually impaired users.",
    description:
      "Duidu is an accessible drawing canvas. A very simple interface that holds a powerful vision: making drawing accessible for visually impaired people. The drawing is mapped through sound, stereo panning for horizontal strokes and pitch modulation for vertical strokes. This core feature, that we called \"Geometric Audio\", is critical to generate a mental map of the stroke. But this is not everything. Duidu also offers the opportunity to feel the drawing with a tactile experience: passing the finger on the strokes of the canvas enables the user to feel a vibration that simulates the tactile sensation of the raised drawing pads.",
    year: "2025",
    role: "Accessibility Dev",
    stack: ["SwiftUI", "CoreHaptics", "AVFoundation", "PencilKit"],
    gradient: "linear-gradient(135deg, #fdeaf5 0%, #f5d8ef 55%, #e8c8f5 100%)",
    emoji: "🎨",
    keywords: ["Simulated vibration", "Creativity for Visually Impaired", "Accessibility"],
    icon: "/projects/duidu/Duidu_App_Icon.png",
    descriptionImages: ["/projects/duidu/WhatsApp_Image_2025-06-04_at_15.47.15.jpeg"],
    sections: [
      {
        body: `Cooperation with humans. Thanks to this project I had the opportunity to communicate with associations (CIVES, Strachan) and to get in touch with the necessities of people. I did learn that what I do is very important and that our help can be so meaningful. Too many times we take for granted things that for some people could mean the world and a deep dive in this world has been a very insightful experience.

Then I had to think laterally. iPads do not have the vibration motors, so with my team we had to think for a solution. How do we merge the needed size of the iPad with the necessity of a vibration?

We found a solution. Go check it on the App Store!`,
        category: "learn",
      },
      {
        body: `We were listeners.
Developing for people that experience the world in a different manner than me needed a lot of care and sensibility. The team had to forget how it was to live like everyday and put ourselves in the shoes of people that do not have the possibility to see. So it has been useful to think like we were always in the wrong.
It has been complicated because we needed to re-think every single action that until that time we were doing naturally without thinking, we had to exit from the automatic way of living and doing things: something as easy as picking up a bottle to drink became our biggest challenge and listen to the guidance and help of the community of low-vision people has been a real blessing.
We were not developers, we were humans understanding how to live.`,
        category: "attitude",
      },
    ],
    link: { label: "Download on App Store", href: "https://apps.apple.com/it/app/duidu-accessible-drawing/id6746523814" },
  },
  {
    slug: "brainline",
    title: "BrainLine",
    tagline: "Exploring the brain through a train journey metaphor - Swift Student Challenge 2025",
    description:
      "My submission for the 2025 Swift Student Challenge! But I did not win! This project was built to spread knowledge across kids and young students who wanted to learn more about the brain and about the consequences of brain lesions while using the metaphor of buying a train ticket: the user can select the departing station (one of the five senses, where the perception begins) and then select the arrival station (where the experience of the world as we understand it in our complex way happens) and discover the path that the neural signal does passing through every critical brain region that is displayed metaphorically as a station. More than that, the user can report some \"hazards on track\" that are lesions to critical brain regions: this report, then, shows the user what happens when that particular brain region is damaged and what happens to the human perception of the world.",
    year: "2025",
    role: "Solo Design & Dev",
    stack: ["SwiftUI", "iPad", "Custom Design"],
    gradient: "linear-gradient(135deg, #e0eeff 0%, #d0e4f8 55%, #c4daf0 100%)",
    emoji: "🧠",
    keywords: ["Custom Design Experience", "Academic Research", "Storytelling"],
    icon: "/projects/brainline/BrainLine_App_Icon.png",
    descriptionImages: ["/projects/brainline/Brainline_Screenshot_1.png"],
    sections: [
      {
        body: `Solo project, so I handled all of the coding and design:
- custom design to test my abilities
- hand-drawn app icon, trying to learn how to draw in a better way
- simple data flow
- simple database management`,
        category: "learn",
        images: [
          "/projects/brainline/Brainline_Screenshot_3.png",
          "/projects/brainline/Brainline_Screenshot_2.png",
        ],
      },
      {
        body: "I created BrainLine as a way to merge two passions of mine: neuroscience and sharing knowledge. It was also driven by my desire to break away from conventions and challenge myself to build a fully custom interface that deliberately steps outside iOS's native design language.",
        category: "attitude",
      },
    ],
  },
  {
    slug: "nowhat",
    title: "Nowhat?",
    tagline: "An iOS idea organiser with prioritisation, my first App Store release.",
    description: `Nowhat is an organizer of ideas. It came to my mind when I asked myself "what if I need to write down an idea but I don't have pen and paper with me?". With Nowhat people can sketch their ideas writing text, drawing and uploading pictures to the canvas as reference to not forget about their inspiration. Key feature is the ability to prioritize the most important and urgent ideas to make them appear at the top of the main view.

This app taught me a lot about how to make an appealing App Store Product Page and how to perform good App Store Optimization.`,
    year: "2025",
    role: "Solo Dev & ASO",
    stack: ["SwiftUI", "PencilKit", "Localization"],
    gradient: "linear-gradient(135deg, #fff3d6 0%, #ffe3b8 55%, #ffd4c2 100%)",
    emoji: "💡",
    keywords: ["Data Management", "App Store Optimization Experience", "Product Page Designing"],
    icon: "/projects/nowhat/Nowhat_App_Icon_Light.png",
    descriptionImages: ["/projects/nowhat/20875d9c-7dd0-4f0a-92fc-f1ecbf308776.png"],
    sections: [
      {
        body: `Main takeaways of this experience:
- applied the best practices to localize the app in three different countries (app itself and product page)
- made the app full accessible for people with visual impairments
- produced a simple and essential iOS design for the app
- learned how to use the "PencilKit" framework and its main characteristics`,
        category: "learn",
        images: ["/projects/nowhat/65e6a577-ce80-427b-9b9b-5e1e7f4aeeda.png"],
      },
      {
        body: `I was full of doubts and fears about publishing an app on the Store, but I finally gathered the courage to begin the long journey starting from the basics: conceptualizing the app. Nowhat was born from my need to prioritize ideas.

After sketching the first wireframes, I started coding, and within weeks had a working MVP. Then came designing an appealing product page to highlight its features.

After two rejections from Apple's review team, approval finally came! The app could launch. Since then, I've kept improving it through user feedback. Publishing wasn't the finish line, it was just the beginning. The journey continues as long as my passion for the project lives.`,
        category: "attitude",
      },
    ],
    moreInfoLink: "https://www.notion.so/igor-tarantino/Nowhat-1e215dcee2b88065ab82ca94122d806c?source=copy_link",
    link: { label: "Download on App Store", href: "https://apps.apple.com/it/app/nowhat-ideas-organizer/id6744868925" },
  },
  {
    slug: "postars",
    title: "PoStars",
    tagline: "A stargazing app generating personalised event posters with creative coding.",
    description:
      "Postars is the perfect fusion of the beauty of space and the joy of observing cosmic events. Stargazers can discover upcoming celestial phenomena such as eclipses, meteor showers, and comets while accessing key details like weather conditions, event duration, peak visibility and other useful parameters. All this is delivered through an interface that generates personalized event posters, enhanced by creative coding elements that complement the posters' artistic style.",
    year: "2025",
    role: "Creative Coding",
    stack: ["SwiftUI", "Creative Coding", "REST APIs"],
    gradient: "linear-gradient(135deg, #e8e4ff 0%, #d4d0f8 55%, #c8d0ff 100%)",
    emoji: "⭐",
    keywords: ["Creative Coding", "Artistic Design", "Entering an already formed group"],
    icon: "/projects/postars/PoStars_App_Icon.png",
    sections: [
      {
        body: `During this project I handled a particular situation: I was inserted in an already existing group that had been developing the app for 1 month and a half.
- studied the research the team already did in the previous month
- aligned with the dynamics of the team
- blended my point of view with their
- offered an outsider point of view to enrich the project
- studied how to generate creative coding from data
- learned how to align to the style of the designers through coding`,
        category: "learn",
        images: ["/projects/postars/Screenshot_2025-06-01_at_20.01.23.png"],
      },
      {
        body: "The main challenge has been getting inside a group dynamic that was already established and formed. I studied everything they did until that point, understood their research, explored their process and slowly joined their group dynamics with sensitivity. Only after understanding the \"why's\" of their decisions, I started giving my advices. Thoughtful considerations that I formed observing their work from an external point of view. I think that this enriched our final product.",
        category: "attitude",
        images: ["/projects/postars/Screenshot_2025-06-01_at_20.02.47.png"],
      },
    ],
  },
  {
    slug: "route66",
    title: "Route66",
    tagline: "A personal design exercise exploring Apple's Human Interface Guidelines.",
    description:
      "This app is a personal exercise. It has no concrete use other than share my knowledge about what I've learned until that moment and practice about some design principles. I wanted to understand and put into practice the Apple's Human Interface Guidelines, improving my knowledge and understanding of those. The app is called Route 66 because learning is a journey that begins without knowing the destination.",
    year: "2024",
    role: "Design Exercise",
    stack: ["SwiftUI", "Accessibility", "Human Interface Guidelines"],
    gradient: "linear-gradient(135deg, #ffe3d6 0%, #ffd4b8 55%, #ffcfa0 100%)",
    emoji: "🛣️",
    keywords: ["Design exercise", "Leap into the not-comfortable zone", "Learning opportunity"],
    icon: "/projects/route66/Route66_App_Icon.png",
    descriptionImages: ["/projects/route66/Screenshot_2025-06-01_at_19.53.54.png"],
    sections: [
      {
        body: "Before that challenge I never had the opportunity to actually code accessibility options in any of my code. Thanks to this little project I learned that it is very easy and requires practically no effort to implement an experience that could be enjoyed by everyone. Then I took the chance to give more time to explore what I had under my eyes every days without thinking too much about it: Apple native iOS apps. I studied the logic, design, thinking behind the flow that looks so natural and took inspiration from that. You know, John Dewey says \"you learn by doing\" and that's exactly what I did here.",
        category: "learn",
      },
      {
        body: `I explored and deepened my knowledge about design.
- Deep dive into Apple's coding accessibility parameters.
- Explored Apple's Human Interface Guidelines
- Took inspiration from already existing apps such as "App Store" and "Settings" apple's native apps
- Deconstructed the style of native iOS
- Asked design mentors for help and explored their own visual style`,
        category: "attitude",
      },
    ],
  },
  {
    slug: "keep-the-memory",
    title: "Keep The Memory",
    tagline: "Helping families find their loved ones in Neapolitan cemeteries via GPS.",
    description:
      "Keep the Memory is an app designed for people who want to find the position of their deceased loved ones in the cemeteries. The app contains information about the name, surname, date of birth, date of death of the person and precise GPS position of the grave to help people quickly locate the people they love. We worked in collaboration with the Neapolitan local cemeteries asking the permission to use their databases (we used API calls). When not possible, we built our own mock-up databases going to cemeteries gathering data.",
    year: "2024",
    role: "Database & Research",
    stack: ["SwiftUI", "MapKit", "REST APIs"],
    gradient: "linear-gradient(135deg, #e4e9ff 0%, #d8d4ff 55%, #ecd8f5 100%)",
    emoji: "🕊️",
    keywords: ["Public relations", "Local community collaboration", "Database management"],
    icon: "/projects/keep-the-memory/KTM_App_Icon_1.png",
    descriptionImages: ["/projects/keep-the-memory/962021f7-4155-44d3-b658-cf48698ac0f3.png"],
    sections: [
      {
        body: `I worked on the database (coded and gathered data) and talked to people working in cemeteries.
- consulted with the cemetery management to gather data
- went to cemeteries to build custom and partial databases for testing
- got access to a central database of all public cemeteries in the city of Naples
- used API calls to connect to the central database`,
        category: "learn",
      },
      {
        body: "Had the opportunity to work with a wonderful team. Improved my communication and teamwork skills thanks to our enthusiasm. I fought against my shyness and went out of my comfort zone to talk with local actors of the community to collaborate with them. I learned a lot how to communicate with people outside of my team.",
        category: "attitude",
      },
    ],
  },
  {
    slug: "waddumean",
    title: "WADDUMEAN?",
    tagline: "Real-time gesture recognition that translates Neapolitan hand gestures for foreigners.",
    description:
      "Waddumean is an app for foreigners that come to Italy and want to fully dive into the diversity of the Italian and more specifically Neapolitan world. The app recognizes in real time the gestures done by people (while speaking) and tells the user the meaning of that particular gesture. For example: a person has its hand closed with all the fingers touching the thumb and moves it up and down. The app recognizes the gesture through the camera of the iPhone and translates the gesture with the sentence \"What do you mean?\" or \"What do you want?\".",
    year: "2024",
    role: "ML & Team Lead",
    stack: ["CoreML", "Vision", "SwiftUI", "AVFoundation"],
    gradient: "linear-gradient(135deg, #fff0d6 0%, #ffe3b8 55%, #ffd4a0 100%)",
    emoji: "🤌",
    keywords: ["Machine Learning", "Multi-cultural experience", "Advanced Swift frameworks"],
    icon: "/projects/waddumean/Waddumean_App_Icon.png",
    descriptionImages: ["/projects/waddumean/Screenshot_2025-06-01_at_19.34.19.png"],
    sections: [
      {
        body: `I managed the workflow and priorities of the team and dealt with programming. In particular:
- trained an ML Model to recognize the gestures with CoreML
- learned how to access to the camera feed of the iPhone
- divided the work of the team in small achievable objectives week after week
- motivated the team
- produced a mini short film to advertise the app`,
        category: "learn",
      },
      {
        body: `I measured myself with my project managing skills and learned to handle critical situations and to communicate in an effective way. Handled new members that arrived when the team was already formed.
Coding-side I had some difficulties in passing the data from the camera feed to the AI model. Solved this finding a workaround and talking to mentors asking for help.`,
        category: "attitude",
      },
    ],
  },
  {
    slug: "plantgogh",
    title: "PlantGogh",
    tagline: "An Arduino-connected plant that generates AI art from its own biological signals.",
    description: `An Arduino board connected to a plant that gathers:
- light intensity
- temperature
- electrical signals from the plant

All of those data are then fed to a generative AI that produces drawings (I used DreamStudio API) based upon the signals captured from the plant and the environment. For example: if the plant is placed in a bright and hot environment, the output of the generative AI could be an image of a desert.`,
    year: "2022",
    role: "Creative Tech",
    stack: ["C++", "Arduino", "Python", "DreamStudio API", "Android"],
    gradient: "linear-gradient(135deg, #e8f5e4 0%, #d6efdc 55%, #c4e0d0 100%)",
    emoji: "🌱",
    keywords: ["Thinking out of the box", "Team Conflict Management", "C++, Python and API calls"],
    icon: "/projects/plantgogh/0493f6a7-aac8-450f-bdf9-708701f68ecd.png",
    descriptionImages: ["/projects/plantgogh/Screenshot_2025-06-01_at_20.43.53.png"],
    sections: [
      {
        body: `I took ownership of the coding section of this project:
- Coded in C++ the Arduino board
- Coded an Android app to connect to the Arduino board and retrieve the generated image
- Translating digital and analog signals from the plant and the environment into language prompts to send to Midjourney
- Wrote API calls to send requests to DreamStudio Generative AI (sending prompts and retrieving images to display in the app.`,
        category: "learn",
        images: [
          "/projects/plantgogh/high_light_high_temperature.jpeg",
          "/projects/plantgogh/low_light_low_temperature.jpeg",
          "/projects/plantgogh/low_light_high_temperature.jpeg",
          "/projects/plantgogh/high_light_low_temperature.jpeg",
        ],
      },
      {
        body: "I knew basic info about API and Arduino, but did know little about coding. So I started researching through documentation, stack overflow community, YouTube tutorials to learn how to code in C++ and how to handle an Arduino board. In the end I was able to build a working prototype of the project.",
        category: "attitude",
        images: [
          "/projects/plantgogh/b318a146-89e9-4c76-b7d2-8c350e76d588.png",
          "/projects/plantgogh/2e0f1eaa-30c2-4685-a826-f4da97c98ef7.png",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
