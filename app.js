"use strict";

const STORAGE_KEY = "okPermitPractice.v1";
const PASSING_SCORE = 15;
const EXAM_SIZE = 20;
const MODULE_PASS_PERCENT = 75;

const modules = [
  {
    id: "getting-started",
    number: "01",
    title: "Permit and licensing basics",
    short: "Know what to study, what to bring, and what happens during testing.",
    reference: "Oklahoma Driver Manual, Chapters 1-3",
    sections: [
      { heading: "What the written test covers", body: "Class D written-test questions come from the Oklahoma Driver Manual. Expect traffic laws, road signs, safe-driving practices, and the effects of alcohol and drugs." },
      { heading: "Prepare before your visit", body: "Applicants should know the identification and residency documents required for their situation. Originals or certified documents may be required. A learner-permit applicant must provide a Social Security number, but the number does not appear on the license." },
      { heading: "After the test", body: "A failed written test requires at least a one-day wait before retesting. Learner-permit drivers must follow the restrictions printed on the permit and drive only with the required supervising driver." }
    ],
    keyFact: "REAL ID is a federal identification option. It is not an extra driving privilege and is not required simply to operate a vehicle."
  },
  {
    id: "signs-signals",
    number: "02",
    title: "Signs signals and markings",
    short: "Recognize sign shapes, signal meanings, railroad warnings, and lane markings.",
    reference: "Oklahoma Driver Manual, Chapter 4, pages 19-27",
    sections: [
      { heading: "Shape gives an early clue", body: "An octagon means stop. A downward-pointing triangle means yield. Diamond signs warn of changing road conditions. A round yellow sign warns that railroad tracks are ahead." },
      { heading: "Signals require judgment", body: "A steady red requires a stop. A flashing red is treated like a stop sign. A steady yellow warns that the light is changing; stop when you can do so safely before entering the intersection." },
      { heading: "Read the road surface", body: "Yellow lines separate traffic moving in opposite directions. White lines separate lanes moving in the same direction. Solid lines generally restrict crossing; broken lines permit it when the move is legal and safe." }
    ],
    keyFact: "A green light does not guarantee an empty intersection. Yield whenever doing so prevents a collision."
  },
  {
    id: "right-of-way",
    number: "03",
    title: "Right of way and school buses",
    short: "Decide when to yield at intersections, crossings, buses, and roadside incidents.",
    reference: "Oklahoma Driver Manual, Chapter 5, pages 28-30",
    sections: [
      { heading: "Intersections", body: "At a four-way stop, the first vehicle to enter has the right-of-way. When vehicles arrive at the same time, the driver on the left yields to the driver on the right." },
      { heading: "People and special vehicles", body: "Yield to pedestrians, especially blind pedestrians using a white cane or guide dog. Stop for a school bus displaying flashing red lights or its stop arm unless a listed divided-roadway exception applies." },
      { heading: "Move over or slow down", body: "When a stationary vehicle with flashing lights is on the roadside, move to a lane away from it when safe. If you cannot safely change lanes, slow down and proceed carefully." }
    ],
    keyFact: "Think of right-of-way as something to give, not something to take."
  },
  {
    id: "lanes-maneuvers",
    number: "04",
    title: "Lanes turns and passing",
    short: "Practice lane changes, expressway entry, turning, passing, and backing.",
    reference: "Oklahoma Driver Manual, Chapter 6, pages 31-38",
    sections: [
      { heading: "Before changing lanes", body: "Check mirrors, signal, look over your shoulder for the blind spot, and move only when the lane is clear. A signal communicates intent; it does not create a right-of-way." },
      { heading: "Expressway driving", body: "Use the acceleration lane to reach a safe speed and merge into a suitable gap. Keep a safe following distance and plan exits early. Slow down in the deceleration lane, not in the travel lane." },
      { heading: "Passing and backing", body: "Pass on the left when legal and safe. Never pass where your view is obstructed near intersections, railroad crossings, bridges, or hills. When backing, move slowly and look behind the vehicle throughout the maneuver." }
    ],
    keyFact: "Signal at least 100 feet before a turn or exit so other road users have time to react."
  },
  {
    id: "speed-stopping",
    number: "05",
    title: "Speed stopping and parking",
    short: "Apply the basic speed rule, following distance, emergency braking, and parking rules.",
    reference: "Oklahoma Driver Manual, Chapters 7-9, pages 39-48",
    sections: [
      { heading: "The basic speed rule", body: "A posted limit is the maximum under ideal conditions. Reduce speed for rain, fog, darkness, traffic, roadway width, visibility, and vehicle condition." },
      { heading: "Leave a safety cushion", body: "Use at least the three-second following rule in good conditions and increase to four seconds or more in poor conditions. Stopping distance includes perception, reaction, and braking." },
      { heading: "Park so the vehicle cannot roll", body: "Set the parking brake, select park or the proper gear, and position the wheels correctly on a hill. Parallel parking must be close to the curb and clear of prohibited areas." }
    ],
    keyFact: "At night, drive slowly enough to stop within the distance illuminated by your headlights."
  },
  {
    id: "sharing-road",
    number: "06",
    title: "Sharing the road",
    short: "Drive safely around pedestrians, bicycles, motorcycles, trucks, trains, and slow vehicles.",
    reference: "Oklahoma Driver Manual, Chapter 10, pages 49-57",
    sections: [
      { heading: "Smaller road users", body: "Pedestrians, bicyclists, and motorcyclists can be difficult to see. Check carefully before turning or opening a door. Give bicycles and motorcycles adequate space and never crowd them from a lane." },
      { heading: "Large vehicles", body: "Trucks have large blind spots and need extra room to turn. Do not linger beside a truck, cut closely in front, or assume its driver can see you." },
      { heading: "Railroads and slow vehicles", body: "Never drive around a lowered railroad gate. Slow-moving vehicles display an orange triangle and may enter or turn unexpectedly, especially in rural areas." }
    ],
    keyFact: "At a railroad crossing, a train always has the right-of-way and cannot stop quickly."
  },
  {
    id: "safe-driving",
    number: "07",
    title: "Safe driving and emergencies",
    short: "Manage visibility, distractions, bad weather, animals, floods, and crashes.",
    reference: "Oklahoma Driver Manual, Chapter 11, pages 58-62",
    sections: [
      { heading: "Stay alert", body: "Driving requires continuous attention. Put phones away, scan well ahead, check mirrors, and avoid driving when fatigue, medication, or emotion reduces concentration." },
      { heading: "Weather and emergencies", body: "Slow down before hazards. Avoid sudden steering or braking on slippery surfaces. Never enter water covering a roadway because depth and current are difficult to judge." },
      { heading: "After a crash", body: "Stop, protect the scene, help injured people, and exchange required information. Contact law enforcement when required and answer questions truthfully without arguing about blame." }
    ],
    keyFact: "If a trip is unsafe because of weather, delay it. Good judgment is part of safe driving."
  },
  {
    id: "alcohol-penalties",
    number: "08",
    title: "Alcohol drugs and penalties",
    short: "Understand impairment, implied consent, zero tolerance, and license consequences.",
    reference: "Oklahoma Driver Manual, Chapters 12-13, pages 63-73",
    sections: [
      { heading: "Impairment begins early", body: "Alcohol and other drugs reduce judgment, coordination, reaction time, and vision. Prescription and over-the-counter medicine can also make driving unsafe." },
      { heading: "Implied consent", body: "Driving in Oklahoma means agreeing to a requested test for alcohol concentration. Refusing a lawful test can lead to automatic loss of driving privileges." },
      { heading: "Under 21 means zero tolerance", body: "For drivers under 21, any measurable amount of alcohol can trigger license consequences. Marijuana and other impairing drugs remain unsafe and illegal to use while driving." }
    ],
    keyFact: "A BAC of 0.08 or more can support a DUI action, but a driver can be impaired and convicted at a lower concentration."
  }
];

const questions = [
  q("g1", "getting-started", "Where do the questions on Oklahoma's Class D written test come from?", ["Only local city ordinances", "The Oklahoma Driver Manual", "The vehicle owner's manual", "A federal highway handbook"], 1, "The manual states that questions on the Class D written test are taken from the Oklahoma Driver Manual.", "Chapter 1, What to Expect"),
  q("g2", "getting-started", "Which subjects should an applicant expect on the written test?", ["Traffic laws, safe driving, and the effects of alcohol or drugs", "Vehicle maintenance only", "Road-sign colors only", "Insurance pricing and vehicle sales"], 0, "The written test covers Oklahoma traffic laws, safe-driving practices, and laws and effects related to drugs and alcohol.", "Chapter 1, Written Test"),
  q("g3", "getting-started", "After failing the written test, how long must an applicant wait before retesting?", ["At least one day", "Seven days", "Thirty days", "There is no waiting period"], 0, "Oklahoma law requires at least a one-day wait after a failed written test.", "Chapter 1, Written Test"),
  q("g4", "getting-started", "Which document is generally acceptable as a primary form of identification?", ["An unsigned photocopy of a birth certificate", "A library card", "A certified U.S. birth certificate", "A handwritten note from a relative"], 2, "The manual lists an original or certified birth certificate as a primary identification document and states that ordinary photocopies are not acceptable.", "Chapter 1, What to Bring"),
  q("g5", "getting-started", "Who must normally accompany a learner-permit driver?", ["Any passenger who is 18 or older", "A licensed driver who is 21 or older and seated beside the learner", "Only a driving examiner", "Another learner-permit holder"], 1, "A learner permit is valid when the required licensed driver, who must be 21 or older, is seated beside the learner.", "Chapter 1, Types of Licenses"),
  q("g6", "getting-started", "What does adding REAL ID to an Oklahoma license primarily provide?", ["Permission to exceed posted speed limits", "A federal security credential for certain identification uses", "A waiver from the written test", "Commercial driving privileges"], 1, "REAL ID is a federal security credential used for activities such as domestic flights and access to certain federal facilities.", "Chapter 1, REAL ID"),

  q("s1", "signs-signals", "What does an eight-sided red sign mean?", ["Yield", "Railroad crossing", "Stop", "School zone"], 2, "The octagon shape is reserved for STOP signs.", "Chapter 4, Regulatory Signs"),
  q("s2", "signs-signals", "A diamond-shaped yellow sign usually does what?", ["Warns of a condition ahead", "Lists a legal speed limit", "Marks a hospital", "Shows a route number"], 0, "Diamond-shaped signs warn drivers about road conditions or hazards ahead.", "Chapter 4, Warning Signs"),
  q("s3", "signs-signals", "What should you do at a flashing red traffic signal?", ["Slow down without stopping", "Stop, then proceed when it is safe", "Speed up before it changes", "Treat it as a green light"], 1, "A flashing red signal is treated like a stop sign: stop and proceed only when it is safe.", "Chapter 4, Traffic Signals"),
  q("s4", "signs-signals", "What does a steady yellow signal mean?", ["The signal is about to turn red", "Cross traffic must stop forever", "You always have the right-of-way", "The road is closed"], 0, "A steady yellow signal warns that the light is changing to red. Stop if you can do so safely before entering the intersection.", "Chapter 4, Traffic Signals"),
  q("s5", "signs-signals", "What do yellow center lines generally separate?", ["Traffic moving in the same direction", "Traffic moving in opposite directions", "Parking areas from sidewalks", "Bicycle lanes from travel lanes"], 1, "Yellow lines generally separate traffic traveling in opposite directions.", "Chapter 4, Pavement Markings"),
  q("s6", "signs-signals", "What shape is the advance warning sign for a railroad crossing?", ["Round", "Octagonal", "Pentagonal", "Rectangular"], 0, "A round yellow sign warns that railroad tracks are ahead.", "Chapter 4, Railroad Warning Signs"),

  q("r1", "right-of-way", "At a four-way stop, which vehicle normally goes first?", ["The largest vehicle", "The vehicle that arrived first", "The vehicle turning left", "The fastest vehicle"], 1, "The vehicle that arrives at the intersection first normally has the right-of-way.", "Chapter 5, Right-of-Way at Intersections"),
  q("r2", "right-of-way", "Two vehicles arrive at an uncontrolled intersection at the same time. Who yields?", ["The driver on the right yields to the driver on the left", "The driver on the left yields to the driver on the right", "Both drivers accelerate", "The driver traveling straight always yields"], 1, "When vehicles arrive at the same time, the driver on the left yields to the driver on the right.", "Chapter 5, Right-of-Way at Intersections"),
  q("r3", "right-of-way", "When turning left at an intersection, you must yield to whom?", ["Only vehicles behind you", "Oncoming traffic and pedestrians", "No one when your signal is on", "Only large trucks"], 1, "A left-turning driver must yield to oncoming traffic and pedestrians before completing the turn.", "Chapter 5, Crossing an Intersection"),
  q("r4", "right-of-way", "You see a pedestrian using a white cane entering a crossing. What should you do?", ["Honk and continue", "Yield the right-of-way and stop as needed", "Pass closely before the pedestrian enters", "Wave the pedestrian back"], 1, "Drivers must yield to blind pedestrians, who may use a white cane or guide dog.", "Chapter 5, Yield to Blind Persons"),
  q("r5", "right-of-way", "A school bus ahead has flashing red lights and an extended stop arm. What should you do?", ["Pass slowly on the left", "Stop and remain stopped until the red lights stop flashing and the stop arm retracts", "Stop only if children are visible", "Honk before passing"], 1, "Drivers must stop for a bus that is loading or unloading passengers while its red lights are flashing or its stop arm is extended, unless a specific roadway exception applies.", "Chapter 5, School or Church Bus"),
  q("r6", "right-of-way", "You approach a roadside vehicle with flashing lights and cannot safely change lanes. What should you do?", ["Maintain speed", "Stop in your travel lane", "Slow down and proceed carefully", "Move closer to see the scene"], 2, "Oklahoma's Move Over law requires a lane change when safe or a slower, cautious approach when it is not.", "Chapter 5, Move Over Law"),

  q("l1", "lanes-maneuvers", "Before changing lanes, what is the safest sequence?", ["Signal and move immediately", "Check mirrors, signal, check the blind spot, then move when clear", "Honk, accelerate, and move", "Check only the rearview mirror"], 1, "Mirrors do not show every area. Signal and check the blind spot before moving into a clear lane.", "Chapter 6, Changing Lanes"),
  q("l2", "lanes-maneuvers", "How far in advance of a turn should you generally signal?", ["At least 25 feet", "At least 50 feet", "At least 100 feet", "Only after the turn begins"], 2, "The manual directs drivers to signal at least 100 feet before a turn or expressway exit.", "Chapter 6, Turning"),
  q("l3", "lanes-maneuvers", "What is the purpose of an expressway acceleration lane?", ["To stop and wait for an empty highway", "To reach a safe merging speed", "To pass vehicles on the shoulder", "To make a U-turn"], 1, "Use the acceleration lane to build speed and merge smoothly into a safe gap.", "Chapter 6, Expressway Driving"),
  q("l4", "lanes-maneuvers", "Where should you normally slow down when leaving an expressway?", ["In the travel lane before the exit", "In the deceleration lane or on the exit ramp", "On the shoulder after missing the exit", "In the acceleration lane"], 1, "Signal early, enter the deceleration lane, and reduce your speed there while obeying the ramp's speed limit.", "Chapter 6, Expressway Driving"),
  q("l5", "lanes-maneuvers", "When is passing near a hill or curve prohibited?", ["When your view is obstructed", "Only at night", "Only when a truck is ahead", "Whenever the road has two lanes"], 0, "Do not pass when a hill, curve, bridge, intersection, or similar condition blocks a clear view.", "Chapter 6, Passing"),
  q("l6", "lanes-maneuvers", "What is most important while backing?", ["Rely only on the backup camera", "Move quickly to clear the area", "Look behind and move slowly with full control", "Keep both hands off the wheel"], 2, "Backing limits visibility. Check behind the vehicle, continue looking, and move slowly under control.", "Chapter 6, Backing"),

  q("p1", "speed-stopping", "What does the basic speed rule require?", ["Always drive at the posted limit", "Drive at a reasonable speed for current conditions", "Match the fastest vehicle", "Drive ten miles below every limit"], 1, "Your speed must be reasonable for traffic, weather, visibility, road, and vehicle conditions, even when that means driving below the posted limit.", "Chapter 7, Basic Speed Rule"),
  q("p2", "speed-stopping", "What does a posted speed limit represent under ideal conditions?", ["A required minimum", "The maximum lawful speed", "A suggested average", "A limit only for new drivers"], 1, "A posted limit is the maximum under ideal conditions; drivers must slow down for hazards or poor conditions.", "Chapter 7, Speed Limits"),
  q("p3", "speed-stopping", "Which following-distance rule does the manual recommend in good conditions?", ["The one-second rule", "The two-second rule", "The three-second rule", "The ten-second rule"], 2, "The manual recommends at least the three-second rule and additional following distance in poor conditions.", "Chapter 8, Following"),
  q("p4", "speed-stopping", "Which three parts make up total stopping distance?", ["Acceleration, steering, and parking", "Perception, reaction, and braking", "Vision, signaling, and turning", "Weather, traffic, and road width"], 1, "A complete stop includes the distance traveled while perceiving danger, reacting, and braking.", "Chapter 8, Stopping Distances"),
  q("p5", "speed-stopping", "If your vehicle begins to hydroplane, what should you do first?", ["Accelerate sharply", "Slow down and avoid sudden control movements", "Turn the wheel back and forth", "Apply the parking brake"], 1, "Hydroplaning reduces the tires' contact with the road. Reduce speed smoothly and avoid sudden braking or steering.", "Chapter 8, Rainy Conditions"),
  q("p6", "speed-stopping", "When parking downhill beside a curb, where should the front wheels point?", ["Away from the curb", "Straight ahead", "Toward the curb", "Toward the centerline"], 2, "Point the wheels toward the curb so the curb can help stop the vehicle if it rolls.", "Chapter 9, Parking on a Hill"),

  q("h1", "sharing-road", "Why should a driver avoid lingering beside a large truck?", ["Trucks are required to speed up", "The driver's vehicle may be in a large blind spot", "Truck lanes are always illegal for cars", "Trucks cannot use mirrors"], 1, "Large trucks have substantial blind spots. Pass efficiently and avoid remaining beside them.", "Chapter 10, Trucks"),
  q("h2", "sharing-road", "How much roadway space is a motorcyclist entitled to use?", ["Only the shoulder", "One-half of a lane", "A full traffic lane", "Only marked motorcycle lanes"], 2, "A motorcycle is entitled to a full lane. Do not crowd or share the lane beside it.", "Chapter 10, Motorcycles"),
  q("h3", "sharing-road", "Before turning across a bicycle lane, what should a driver do?", ["Accelerate before a bicycle arrives", "Check carefully for bicyclists and yield as required", "Stop inside the bicycle lane", "Honk continuously"], 1, "Bicyclists can be easy to miss. Check mirrors and blind spots, and yield before crossing their path.", "Chapter 10, Bicycles"),
  q("h4", "sharing-road", "What does an orange triangular emblem on the rear of a vehicle indicate?", ["Hazardous materials", "A slow-moving vehicle", "A school bus", "A vehicle that may exceed the limit"], 1, "The orange slow-moving-vehicle emblem warns that the vehicle travels at a low speed.", "Chapter 10, Slow-Moving Vehicles"),
  q("h5", "sharing-road", "What should you do when railroad gates are lowered?", ["Drive around them if no train is visible", "Stop and wait until the gates rise and the way is clear", "Follow the vehicle ahead around the gate", "Stop on the tracks for a better view"], 1, "Never go around a lowered gate. Wait until it rises and verify that all tracks are clear.", "Chapter 10, Trains"),
  q("h6", "sharing-road", "Why should you leave extra room when a truck is turning?", ["Trucks may swing wide to complete a turn", "Trucks must stop halfway through every turn", "Truck signals do not work at intersections", "Trucks always turn from the shoulder"], 0, "Long vehicles may need to swing wide. Do not squeeze between a turning truck and the curb.", "Chapter 10, Trucks"),

  q("d1", "safe-driving", "What is the safest way to handle a phone while driving?", ["Hold it below the window line", "Use it only at red lights", "Put it away and focus on driving", "Read messages but do not answer"], 2, "A phone takes attention from driving. Put it away or pull over safely before using it.", "Chapter 11, Car Phone Safety"),
  q("d2", "safe-driving", "Why is driving through water covering the roadway dangerous?", ["Water always damages headlights", "You cannot reliably judge its depth or force", "It makes the speed limit increase", "It improves tire traction"], 1, "Floodwater depth and current are difficult to judge and can sweep a vehicle away.", "Chapter 11, Flood Dynamics"),
  q("d3", "safe-driving", "What should you do if bad weather makes a trip unsafe?", ["Drive faster to shorten the trip", "Delay the trip or stop in a safe place", "Follow another vehicle closely", "Use high beams in heavy fog"], 1, "Safe driving includes deciding not to continue when conditions are too dangerous.", "Chapter 11, Pay Attention"),
  q("d4", "safe-driving", "What is a warning sign of carbon monoxide inside a vehicle?", ["A headache or dizziness", "Improved concentration", "Tire vibration", "A bright dashboard"], 0, "Carbon monoxide can cause a headache, dizziness, weakness, and loss of consciousness. Ventilate the vehicle and stop using it if it has exhaust problems.", "Chapter 11, Carbon Monoxide"),
  q("d5", "safe-driving", "After a collision, what should a driver do?", ["Leave before traffic builds", "Stop, protect the scene, and provide required information", "Argue about who caused it", "Move injured people unless immediate danger exists"], 1, "Drivers must stop, assist safely, exchange required information, and contact authorities when required.", "Chapter 11, After a Crash"),
  q("d6", "safe-driving", "When an animal suddenly appears ahead, what is usually the safest response?", ["Swerve sharply into another lane", "Brake in a controlled manner while remaining in your lane when possible", "Close your eyes and hold the wheel", "Accelerate past the animal"], 1, "Sudden swerving can cause a more serious collision. Brake firmly while maintaining control and follow the safest available path.", "Chapter 11, Animals"),

  q("a1", "alcohol-penalties", "Under Oklahoma's zero-tolerance rule, what amount of alcohol can affect a driver under 21?", ["Only a BAC of 0.08 or higher", "Only a BAC of 0.05 or higher", "Any measurable amount", "Alcohol rules begin at age 25"], 2, "Drivers under 21 can face license consequences for any measurable amount of alcohol.", "Chapter 12, Zero Tolerance"),
  q("a2", "alcohol-penalties", "What does Oklahoma's implied-consent law mean?", ["Drivers may refuse every requested test without consequences", "Driving means agreeing to submit to a lawfully requested alcohol test", "Only commercial drivers may be tested", "A test is required before every trip"], 1, "By driving or being in actual physical control of a vehicle, a person agrees to submit to lawfully requested testing under the implied-consent law.", "Chapter 12, Implied Consent"),
  q("a3", "alcohol-penalties", "What can happen after a driver refuses a lawfully requested alcohol test?", ["Automatic revocation of driving privileges", "A free replacement license", "No consequences without a conviction", "A reduction in the vehicle's speed limit"], 0, "Refusal can trigger automatic revocation even if the person is not later convicted of DUI.", "Chapter 12, Implied Consent"),
  q("a4", "alcohol-penalties", "Which statement about prescription medicine is correct?", ["Prescription medicine never affects driving", "Warnings and side effects should be checked before driving", "Medicine is safe when mixed with alcohol", "Only illegal drugs impair drivers"], 1, "Prescription and over-the-counter medicine can cause drowsiness, nervousness, or other effects that make driving unsafe.", "Chapter 12, Other Drugs"),
  q("a5", "alcohol-penalties", "At what BAC does Oklahoma treat an adult driver as legally intoxicated for DUI purposes?", ["0.02", "0.05", "0.08", "0.15"], 2, "A BAC of 0.08 or more supports DUI action for an adult driver, while impairment and penalties may occur below that level.", "Chapter 12, DUI Penalties"),
  q("a6", "alcohol-penalties", "Which statement about marijuana and driving is correct?", ["Medical authorization makes impaired driving legal", "Marijuana can impair driving, and driving with a detectable level of it in the body is illegal", "Marijuana improves adjustment to glare", "Marijuana affects only new drivers"], 1, "The manual explains that marijuana impairs driving and that driving with a detectable level of it in the body is illegal.", "Chapter 12, Other Drugs"),
];

function q(id, module, prompt, choices, answer, explanation, reference) {
  return { id, module, prompt, choices, answer, explanation, reference };
}

const defaultState = {
  student: { firstName: "", lastName: "" },
  viewedModules: [],
  completedModules: [],
  moduleScores: {},
  examAttempts: [],
  missed: [],
  speechRate: 1,
  speechVoice: "",
  currentModule: modules[0].id
};

let state = loadState();
let quizSession = null;
let examTimer = null;
let toastTimer = null;
let speechPauseTimer = null;
let speechRunId = 0;

const main = document.getElementById("main-content");
const nameDialog = document.getElementById("name-dialog");
const nameForm = document.getElementById("name-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const speechRateSelect = document.getElementById("speech-rate");
const speechDialog = document.getElementById("speech-dialog");

document.addEventListener("DOMContentLoaded", init);

function init() {
  speechRateSelect.value = String(state.speechRate || 1);
  updateStudentUI();
  updateProgressUI();
  wireShell();
  route();
  if (!state.student.firstName || !state.student.lastName) openNameDialog(true);
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
}

function wireShell() {
  window.addEventListener("hashchange", route);
  document.querySelectorAll("[data-route]").forEach(link => link.addEventListener("click", closeSidebar));
  document.getElementById("menu-button").addEventListener("click", () => toggleSidebar(true));
  document.getElementById("sidebar-scrim").addEventListener("click", closeSidebar);
  document.getElementById("student-button").addEventListener("click", () => openNameDialog(false));
  document.getElementById("speech-settings-button").addEventListener("click", () => speechDialog.showModal());
  document.getElementById("stop-speech").addEventListener("click", stopSpeech);
  speechRateSelect.addEventListener("change", () => {
    state.speechRate = Number(speechRateSelect.value);
    saveState();
    stopSpeech();
    updateSpeechControllerStatus();
    toast("Reading speed updated.");
  });
  document.getElementById("test-voice").addEventListener("click", () => speakText("This is the current read aloud speed.", document.getElementById("speech-form")));
  nameForm.addEventListener("submit", event => {
    event.preventDefault();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    if (!firstName || !lastName) {
      document.getElementById("name-error").textContent = "Enter both your first and last name.";
      return;
    }
    state.student = { firstName, lastName };
    saveState();
    updateStudentUI();
    nameDialog.close();
    renderDashboard();
    toast("Your progress is ready to save on this device.");
  });
}

function openNameDialog(required) {
  firstNameInput.value = state.student.firstName || "";
  lastNameInput.value = state.student.lastName || "";
  document.getElementById("name-error").textContent = "";
  nameDialog.dataset.required = String(required);
  if (!nameDialog.open) nameDialog.showModal();
  setTimeout(() => firstNameInput.focus(), 50);
}

nameDialog.addEventListener("cancel", event => {
  if (nameDialog.dataset.required === "true") event.preventDefault();
});

function route() {
  stopSpeech();
  clearExamTimer();
  const raw = (location.hash || "#dashboard").slice(1);
  const [page, param] = raw.split("/");
  setCurrentNav(page === "module" ? "study" : page);
  if (page === "module") return renderModule(param || state.currentModule);
  if (page === "study") return renderStudy();
  if (page === "practice") return renderPracticeHome();
  if (page === "exam") return renderExamHome();
  if (page === "review") return renderReview();
  if (page === "results") return renderResults();
  renderDashboard();
}

function renderDashboard() {
  const nextModule = modules.find(module => !state.completedModules.includes(module.id)) || modules[0];
  const bestExam = Math.max(0, ...state.examAttempts.map(attempt => attempt.score));
  main.innerHTML = `
    <div class="page">
      <header class="page-header">
        <div><p class="eyebrow">Student dashboard</p><h1>Ready when you are, ${esc(state.student.firstName || "student")}.</h1><p class="lede">Study one topic at a time, practice until it sticks, then prove it with a 20-question mock permit test.</p></div>
        <button class="secondary-button" data-speak="#dashboard-summary">Read this page</button>
      </header>
      <div id="dashboard-summary" class="dashboard-grid">
        <section class="next-panel">
          <div>
            <p class="eyebrow">Recommended next</p>
            <h2>${esc(nextModule.title)}</h2>
            <p>${esc(nextModule.short)}</p>
            <div class="button-row"><a class="primary-button" href="#module/${nextModule.id}">${state.completedModules.includes(nextModule.id) ? "Review module" : "Start module"}</a><button class="secondary-button" data-speak="#dashboard-summary">Read aloud</button></div>
          </div>
          <img src="assets/road-study.svg" alt="Road signs and an open study manual">
        </section>
        <section class="stats" aria-label="Progress statistics">
          <div class="stat"><span>Modules mastered</span><strong>${state.completedModules.length}/8</strong></div>
          <div class="stat"><span>Best mock test</span><strong>${bestExam}/20</strong></div>
          <div class="stat"><span>Questions to review</span><strong>${state.missed.length}</strong></div>
          <div class="stat"><span>Mock tests taken</span><strong>${state.examAttempts.length}</strong></div>
        </section>
      </div>
      <div class="section-heading"><h2>Study modules</h2><a class="text-button" href="#study">View all modules</a></div>
      ${moduleCards()}
    </div>`;
  wireDynamic();
}

function renderStudy() {
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Eight focused topics</p><h1>Study modules</h1><p class="lede">Each module is short enough to finish in one sitting and includes a read-aloud lesson plus a six-question mastery check.</p></div><button class="secondary-button" data-speak=".page">Read this page</button></header>${moduleCards()}</div>`;
  wireDynamic();
}

function moduleCards() {
  return `<section class="module-grid">${modules.map(module => {
    const score = state.moduleScores[module.id]?.best || 0;
    const complete = state.completedModules.includes(module.id);
    return `<article class="module-card"><span class="module-number">MODULE ${module.number}</span><h3>${esc(module.title)}</h3><p>${esc(module.short)}</p><footer><span class="status-pill ${complete ? "complete" : ""}">${complete ? "Mastered" : score ? `${score}% best` : "Not started"}</span><a class="text-button" href="#module/${module.id}">${complete ? "Review" : "Open"}</a></footer></article>`;
  }).join("")}</section>`;
}

function renderModule(moduleId) {
  const module = modules.find(item => item.id === moduleId) || modules[0];
  state.currentModule = module.id;
  saveState();
  const lesson = module.sections.map(section => `<h2>${esc(section.heading)}</h2><p>${esc(section.body)}</p>`).join("");
  const score = state.moduleScores[module.id]?.best || 0;
  const unlocked = state.viewedModules.includes(module.id);
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Module ${module.number}</p><h1>${esc(module.title)}</h1><p class="lede">${esc(module.short)}</p></div><a class="secondary-button" href="#study">All modules</a></header><div class="module-layout"><article class="lesson-content" id="lesson-content">${module.id === "signs-signals" ? signGallery() : ""}${lesson}<div class="key-fact"><strong>Remember:</strong> ${esc(module.keyFact)}</div><p><small>Source: ${esc(module.reference)}</small></p><div class="lesson-finish"><h2>${unlocked ? "Lesson complete" : "Ready for the mastery check?"}</h2><p>${unlocked ? "This module's practice is unlocked. You can review the lesson at any time." : "Finish the lesson before opening its practice questions."}</p>${unlocked ? `<button class="primary-button" id="start-practice-from-lesson">Start module practice</button>` : `<button class="primary-button" id="finish-lesson">Finish lesson and unlock practice</button>`}</div></article><aside class="module-tools"><section class="tool-panel"><h3>Listen to the lesson</h3><p>Use Speech settings to choose a voice and speed. Reading stops when you leave this page.</p><div class="button-row" style="margin-top:12px"><button class="primary-button compact" data-speak="#lesson-content">Read aloud</button><button class="secondary-button compact" data-stop-speech>Stop</button></div></section><section class="tool-panel"><h3>Mastery check</h3><p>Score at least ${MODULE_PASS_PERCENT}% to mark this module complete. Current best: ${score}%.</p><button class="primary-button" id="start-module-practice" style="width:100%;margin-top:12px" ${unlocked ? "" : "disabled"}>${unlocked ? "Start 6 questions" : "Finish lesson to unlock"}</button></section><section class="tool-panel"><h3>Other modules</h3><div class="module-list">${modules.map(item => `<button data-open-module="${item.id}" class="${item.id === module.id ? "active" : ""}">${item.number} ${esc(item.title)}</button>`).join("")}</div></section></aside></div></div>`;
  wireDynamic();
  const startPractice = () => startQuiz("practice", questions.filter(item => item.module === module.id), module.id);
  document.getElementById("start-module-practice").addEventListener("click", startPractice);
  document.getElementById("start-practice-from-lesson")?.addEventListener("click", startPractice);
  document.getElementById("finish-lesson")?.addEventListener("click", () => {
    if (!state.viewedModules.includes(module.id)) state.viewedModules.push(module.id);
    saveState();
    renderModule(module.id);
    toast("Lesson complete. Module practice is now unlocked.");
  });
  document.querySelectorAll("[data-open-module]").forEach(button => button.addEventListener("click", () => { location.hash = `#module/${button.dataset.openModule}`; }));
}

function signGallery() {
  return `<figure class="sign-gallery" aria-label="Common road sign shapes"><div><span class="sign stop-sign">STOP</span><strong>Octagon</strong><small>Stop</small></div><div><span class="sign yield-sign">YIELD</span><strong>Triangle</strong><small>Yield</small></div><div><span class="sign warning-sign">!</span><strong>Diamond</strong><small>Warning</small></div><div><span class="sign rail-sign">X</span><strong>Round</strong><small>Railroad ahead</small></div><figcaption>Shape and color help you recognize a sign before you can read its words.</figcaption></figure>`;
}

function renderPracticeHome() {
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Practice by topic</p><h1>Choose a module</h1><p class="lede">Module practice unlocks after the lesson is finished. You receive an explanation after every answer, and missed questions are saved for review.</p></div><button class="secondary-button" data-speak=".page">Read this page</button></header>${practiceCards()}</div>`;
  main.querySelectorAll("[data-start-practice]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.startPractice;
    startQuiz("practice", questions.filter(item => item.module === id), id);
  }));
  wireDynamic();
}

function practiceCards() {
  return `<section class="module-grid">${modules.map(module => {
    const unlocked = state.viewedModules.includes(module.id);
    const score = state.moduleScores[module.id]?.best || 0;
    return `<article class="module-card"><span class="module-number">MODULE ${module.number}</span><h3>${esc(module.title)}</h3><p>${esc(module.short)}</p><footer><span class="status-pill ${unlocked ? "complete" : ""}">${unlocked ? score ? `${score}% best` : "Unlocked" : "Lesson required"}</span>${unlocked ? `<button class="text-button" data-start-practice="${module.id}">Practice</button>` : `<a class="text-button" href="#module/${module.id}">Study first</a>`}</footer></article>`;
  }).join("")}</section>`;
}

function renderExamHome() {
  const best = Math.max(0, ...state.examAttempts.map(attempt => attempt.score));
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Official-style simulation</p><h1>20-question mock test</h1><p class="lede">Answer 15 correctly to pass. You have 60 minutes. Explanations appear after you submit the whole test.</p></div><button class="secondary-button" data-speak=".page">Read this page</button></header><section class="next-panel"><div><p class="eyebrow">Your best score</p><h2>${best}/20</h2><p>The test draws questions from every module. Your result will be saved for the Classroom PDF.</p><div class="button-row"><button class="primary-button" id="start-exam">Begin mock test</button><a class="secondary-button" href="#study">Study first</a></div></div><img src="assets/road-study.svg" alt="Road signs and an open study manual"></section></div>`;
  document.getElementById("start-exam").addEventListener("click", () => startQuiz("exam", balancedExamQuestions(), null));
  wireDynamic();
}

function renderReview() {
  const reviewQuestions = state.missed.map(id => questions.find(item => item.id === id)).filter(Boolean);
  if (!reviewQuestions.length) {
    main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Personal review</p><h1>Review missed questions</h1></div></header><section class="empty-state"><div><img src="assets/road-study.svg" alt="Road signs and an open study manual"><h2>Nothing to review yet</h2><p>Questions answered incorrectly during practice or a mock test will appear here.</p><a class="primary-button" href="#practice">Start practicing</a></div></section></div>`;
    wireDynamic();
    return;
  }
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Personal review</p><h1>${reviewQuestions.length} question${reviewQuestions.length === 1 ? "" : "s"} to revisit</h1><p class="lede">Correct answers remove questions from this review list.</p></div><button class="primary-button" id="start-review">Begin review</button></header><section class="result-panel">${moduleBreakdown(reviewQuestions)}</section></div>`;
  document.getElementById("start-review").addEventListener("click", () => startQuiz("review", shuffle(reviewQuestions), null));
  wireDynamic();
}

function moduleBreakdown(items) {
  return `<table class="topic-table"><thead><tr><th>Topic</th><th>Questions to review</th></tr></thead><tbody>${modules.map(module => `<tr><td>${esc(module.title)}</td><td>${items.filter(item => item.module === module.id).length}</td></tr>`).join("")}</tbody></table>`;
}

function startQuiz(mode, items, moduleId) {
  stopSpeech();
  clearExamTimer();
  quizSession = { mode, moduleId, questions: mode === "exam" ? items : shuffle([...items]), index: 0, answers: {}, checked: {}, startedAt: Date.now(), secondsLeft: 3600 };
  renderQuiz();
  if (mode === "exam") startExamTimer();
}

function renderQuiz() {
  const session = quizSession;
  const item = session.questions[session.index];
  const selected = session.answers[item.id];
  const checked = session.checked[item.id];
  const isExam = session.mode === "exam";
  const letters = ["A", "B", "C", "D"];
  const module = modules.find(entry => entry.id === item.module);
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">${isExam ? "Mock permit test" : session.mode === "review" ? "Missed-question review" : esc(module.title)}</p><h1>${isExam ? `Question ${session.index + 1} of ${session.questions.length}` : `Practice question ${session.index + 1} of ${session.questions.length}`}</h1></div><button class="secondary-button" id="exit-quiz">Exit</button></header><div class="quiz-shell"><section class="question-panel" id="question-panel"><div class="question-topline"><span>${esc(module.title)}</span><button class="secondary-button compact" data-speak-question>Read question and answers</button></div><h2>${esc(item.prompt)}</h2><div class="answers">${item.choices.map((choice, index) => {
    const classes = ["answer-button"];
    if (checked && index === item.answer) classes.push("correct");
    if (checked && index === selected && index !== item.answer) classes.push("incorrect");
    return `<button class="${classes.join(" ")}" data-answer="${index}" ${checked ? "disabled" : ""} aria-pressed="${selected === index}"><span class="choice">${letters[index]}</span><span>${esc(choice)}</span></button>`;
  }).join("")}</div>${checked ? feedbackHtml(item, selected) : ""}<div class="quiz-actions"><button class="secondary-button" id="previous-question" ${session.index === 0 ? "disabled" : ""}>Previous</button>${isExam ? `<button class="primary-button" id="next-question">${session.index === session.questions.length - 1 ? "Review and submit" : "Next"}</button>` : checked ? `<button class="primary-button" id="next-question">${session.index === session.questions.length - 1 ? "Finish practice" : "Next question"}</button>` : `<button class="primary-button" id="check-answer" ${selected === undefined ? "disabled" : ""}>Check answer</button>`}</div></section><aside class="quiz-rail"><h3>Question progress</h3><div class="question-dots">${session.questions.map((question, index) => {
    const chosen = session.answers[question.id];
    const done = session.checked[question.id];
    const wrong = done && chosen !== question.answer;
    return `<button class="question-dot ${index === session.index ? "current" : ""} ${chosen !== undefined ? "answered" : ""} ${wrong ? "wrong" : ""}" data-question-index="${index}" aria-label="Go to question ${index + 1}">${index + 1}</button>`;
  }).join("")}</div>${isExam ? `<div class="timer"><span>Time remaining</span><strong id="exam-time">${formatTime(session.secondsLeft)}</strong></div>` : ""}<p class="privacy-note">Use Read question and answers whenever you need text-to-speech.</p></aside></div></div>`;

  document.getElementById("exit-quiz").addEventListener("click", () => {
    if (!isExam || confirm("Exit this mock test? Your unfinished attempt will not be saved.")) { quizSession = null; location.hash = isExam ? "#exam" : "#practice"; }
  });
  main.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
    session.answers[item.id] = Number(button.dataset.answer);
    renderQuiz();
    if (isExam) startExamTimer();
  }));
  main.querySelectorAll("[data-question-index]").forEach(button => button.addEventListener("click", () => { session.index = Number(button.dataset.questionIndex); renderQuiz(); if (isExam) startExamTimer(); }));
  document.getElementById("previous-question").addEventListener("click", () => { session.index--; renderQuiz(); if (isExam) startExamTimer(); });
  document.querySelector("[data-speak-question]").addEventListener("click", () => speakQuestion(item));
  const checkButton = document.getElementById("check-answer");
  if (checkButton) checkButton.addEventListener("click", () => checkCurrentAnswer());
  const nextButton = document.getElementById("next-question");
  if (nextButton) nextButton.addEventListener("click", () => {
    if (isExam && session.index === session.questions.length - 1) return reviewExam();
    if (!isExam && session.index === session.questions.length - 1) return finishPractice();
    session.index++;
    renderQuiz();
    if (isExam) startExamTimer();
  });
  wireDynamic();
}

function checkCurrentAnswer() {
  const session = quizSession;
  const item = session.questions[session.index];
  const selected = session.answers[item.id];
  if (selected === undefined) return;
  session.checked[item.id] = true;
  if (selected === item.answer) state.missed = state.missed.filter(id => id !== item.id);
  else if (!state.missed.includes(item.id)) state.missed.push(item.id);
  saveState();
  renderQuiz();
}

function feedbackHtml(item, selected) {
  const correct = selected === item.answer;
  return `<div class="feedback ${correct ? "correct" : "incorrect"}" id="answer-feedback"><h3>${correct ? "Correct" : "Not quite"}</h3><p>${esc(item.explanation)}</p><small>Review: ${esc(item.reference)}</small><button class="text-button" data-speak="#answer-feedback">Read explanation</button></div>`;
}

function finishPractice() {
  const session = quizSession;
  const correct = session.questions.filter(item => session.answers[item.id] === item.answer).length;
  const percent = Math.round((correct / session.questions.length) * 100);
  if (session.moduleId) {
    const previous = state.moduleScores[session.moduleId] || { best: 0, attempts: 0 };
    state.moduleScores[session.moduleId] = { best: Math.max(previous.best, percent), attempts: previous.attempts + 1 };
    if (percent >= MODULE_PASS_PERCENT && !state.completedModules.includes(session.moduleId)) state.completedModules.push(session.moduleId);
  }
  saveState();
  updateProgressUI();
  const mastered = percent >= MODULE_PASS_PERCENT;
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Practice complete</p><h1>${correct} of ${session.questions.length} correct</h1><p class="lede">${mastered ? "You reached the mastery target." : "Review the missed questions and try this topic again."}</p></div><button class="secondary-button" data-speak=".page">Read results</button></header><section class="result-panel"><div class="score-display"><strong>${percent}%</strong><span>${mastered ? "Mastered" : `Target: ${MODULE_PASS_PERCENT}%`}</span></div><div class="button-row"><a class="primary-button" href="${session.moduleId ? `#module/${session.moduleId}` : "#review"}">${session.moduleId ? "Return to module" : "Review again"}</a><a class="secondary-button" href="#practice">Choose another topic</a><a class="secondary-button" href="#exam">Try a mock test</a></div></section></div>`;
  quizSession = null;
  wireDynamic();
}

function reviewExam() {
  const unanswered = quizSession.questions.filter(item => quizSession.answers[item.id] === undefined).length;
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Before you submit</p><h1>Review your mock test</h1><p class="lede">${unanswered ? `${unanswered} question${unanswered === 1 ? " is" : "s are"} unanswered.` : "Every question has an answer."} You will see explanations after submission.</p></div></header><section class="result-panel"><div class="question-dots" style="max-width:420px">${quizSession.questions.map((item, index) => `<button class="question-dot ${quizSession.answers[item.id] !== undefined ? "answered" : ""}" data-review-index="${index}">${index + 1}</button>`).join("")}</div><div class="button-row" style="margin-top:20px"><button class="primary-button" id="submit-exam">Submit test</button><button class="secondary-button" id="return-exam">Return to questions</button></div></section></div>`;
  main.querySelectorAll("[data-review-index]").forEach(button => button.addEventListener("click", () => { quizSession.index = Number(button.dataset.reviewIndex); renderQuiz(); startExamTimer(); }));
  document.getElementById("return-exam").addEventListener("click", () => { renderQuiz(); startExamTimer(); });
  document.getElementById("submit-exam").addEventListener("click", submitExam);
  wireDynamic();
}

function submitExam() {
  clearExamTimer();
  const session = quizSession;
  const correct = session.questions.filter(item => session.answers[item.id] === item.answer).length;
  const passed = correct >= PASSING_SCORE;
  session.questions.forEach(item => {
    if (session.answers[item.id] === item.answer) state.missed = state.missed.filter(id => id !== item.id);
    else if (!state.missed.includes(item.id)) state.missed.push(item.id);
  });
  state.examAttempts.push({ score: correct, total: EXAM_SIZE, passed, date: new Date().toISOString() });
  saveState();
  updateProgressUI();
  const missedItems = session.questions.filter(item => session.answers[item.id] !== item.answer);
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Mock test complete</p><h1>${passed ? "Passing score" : "Keep studying"}</h1><p class="lede">You answered ${correct} of ${EXAM_SIZE} correctly. Oklahoma's practice target is ${PASSING_SCORE} correct answers.</p></div><button class="secondary-button" data-speak=".page">Read results</button></header><div class="results-grid"><section class="result-panel"><div class="score-display"><strong>${correct}/20</strong><span>${passed ? "Passed" : "Not yet passing"}</span></div><div class="button-row"><a class="primary-button" href="#review">Review missed</a><a class="secondary-button" href="#exam">Take another test</a><a class="secondary-button" href="#results">View all results</a></div></section><section class="result-panel"><h2>Topics to review</h2>${moduleBreakdown(missedItems)}</section></div><div class="section-heading"><h2>Answer explanations</h2></div>${missedItems.length ? missedItems.map(item => `<section class="feedback incorrect"><h3>${esc(item.prompt)}</h3><p>${esc(item.explanation)}</p><small>${esc(item.reference)}</small></section>`).join("") : `<section class="feedback correct"><h3>Excellent work</h3><p>You answered every question correctly.</p></section>`}</div>`;
  quizSession = null;
  wireDynamic();
}

function renderResults() {
  const best = Math.max(0, ...state.examAttempts.map(attempt => attempt.score));
  const latest = state.examAttempts.at(-1);
  main.innerHTML = `<div class="page"><header class="page-header"><div><p class="eyebrow">Classroom submission</p><h1>Results and completion report</h1><p class="lede">Download a PDF, then attach it to your Google Classroom assignment.</p></div><button class="secondary-button" data-speak=".page">Read this page</button></header><div class="results-grid"><section class="result-panel"><h2>${esc(fullName())}</h2><div class="score-display"><strong>${best}/20</strong><span>Best mock-test score</span></div><p>${state.completedModules.length} of 8 modules mastered · ${state.examAttempts.length} mock test${state.examAttempts.length === 1 ? "" : "s"} completed</p><div class="button-row"><button class="primary-button" id="download-report">Download results PDF</button><button class="secondary-button" id="print-results">Print</button></div><p class="privacy-note">The PDF contains your name, study progress, scores, and completion date. It does not contain an email address, password, permit number, or other personal data.</p></section><section class="result-panel"><h2>Current standing</h2><table class="topic-table"><tbody><tr><th>Latest mock test</th><td>${latest ? `${latest.score}/20` : "Not taken"}</td></tr><tr><th>Passing mock tests</th><td>${state.examAttempts.filter(item => item.passed).length}</td></tr><tr><th>Questions to review</th><td>${state.missed.length}</td></tr><tr><th>Course progress</th><td>${courseProgress()}%</td></tr></tbody></table></section></div><div class="section-heading"><h2>Module record</h2></div><section class="result-panel"><table class="topic-table"><thead><tr><th>Module</th><th>Status</th><th>Best score</th></tr></thead><tbody>${modules.map(module => `<tr><td>${esc(module.title)}</td><td>${state.completedModules.includes(module.id) ? "Mastered" : "In progress"}</td><td>${state.moduleScores[module.id]?.best ?? "—"}${state.moduleScores[module.id]?.best !== undefined ? "%" : ""}</td></tr>`).join("")}</tbody></table></section><div class="section-heading"><h2>Device controls</h2></div><section class="result-panel"><p>Progress is stored only in this browser. Reset it only after downloading any report you need.</p><button class="danger-button" id="reset-progress">Reset all progress</button></section></div>`;
  document.getElementById("download-report").addEventListener("click", downloadResultsPdf);
  document.getElementById("print-results").addEventListener("click", () => window.print());
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Reset all modules, scores, and missed questions for this student?")) return;
    const student = state.student;
    state = structuredClone(defaultState);
    state.student = student;
    saveState(); updateProgressUI(); renderResults(); toast("Progress reset.");
  });
  wireDynamic();
}

function wireDynamic() {
  installSpeechController();
  main.querySelectorAll("[data-speak]").forEach(button => button.addEventListener("click", () => {
    const element = document.querySelector(button.dataset.speak);
    if (element) speakElementSemantically(element);
  }));
  main.querySelectorAll("[data-stop-speech]").forEach(button => button.addEventListener("click", stopSpeech));
}

function installSpeechController() {
  const page = main.querySelector(".page");
  if (!page || page.querySelector(".screen-speech-controller")) return;
  const isQuestion = Boolean(quizSession && document.getElementById("question-panel"));
  const isLesson = Boolean(document.getElementById("lesson-content"));
  const controller = document.createElement("section");
  controller.className = "screen-speech-controller";
  controller.setAttribute("aria-label", "Text-to-speech controls");
  controller.innerHTML = `
    <div class="speech-controller-copy">
      <strong>Listen to ${isQuestion ? "this question" : isLesson ? "this lesson" : "this screen"}</strong>
      <span data-speech-status></span>
    </div>
    <div class="button-row">
      <button class="primary-button compact" type="button" data-screen-speak><span class="speaker-icon" aria-hidden="true">🔊</span> Read aloud</button>
      <button class="secondary-button compact" type="button" data-screen-stop>Stop</button>
      <button class="secondary-button compact" type="button" data-screen-settings>Reading speed</button>
    </div>`;
  page.prepend(controller);
  controller.querySelector("[data-screen-speak]").addEventListener("click", speakCurrentScreen);
  controller.querySelector("[data-screen-stop]").addEventListener("click", stopSpeech);
  controller.querySelector("[data-screen-settings]").addEventListener("click", () => speechDialog.showModal());
  updateSpeechControllerStatus();
}

function speakCurrentScreen() {
  if (quizSession && document.getElementById("question-panel")) {
    speakQuestion(quizSession.questions[quizSession.index]);
    return;
  }
  const target = document.getElementById("lesson-content") || main.querySelector(".page");
  if (!target) return;
  speakElementSemantically(target);
}

function updateSpeechControllerStatus() {
  const status = main.querySelector("[data-speech-status]");
  if (!status) return;
  status.textContent = `Device voice · ${Number(state.speechRate || 1)}× speed`;
}

function speakQuestion(item) {
  const letters = ["A", "B", "C", "D"];
  const text = `${item.prompt}. ${item.choices.map((choice, index) => `${letters[index]}. ${choice}.`).join(" ")}`;
  speakText(text, document.getElementById("question-panel"));
}

function speakElementSemantically(element) {
  const readable = element.cloneNode(true);
  readable.querySelectorAll(".screen-speech-controller, button, .privacy-note, [aria-hidden='true']").forEach(item => item.remove());
  const candidates = [...readable.querySelectorAll("h1, h2, h3, p, li, figcaption, th, td, .key-fact")];
  const segments = candidates.map(node => {
    const text = cleanSpeakText(node.innerText || node.textContent || "");
    if (!text) return null;
    if (/^H[1-3]$/.test(node.tagName)) return { text: ensureEnding(text), pauseBefore: 350, pauseAfter: 450, rateScale: 0.92, pitch: 1.03 };
    if (node.matches("li")) return { text: ensureEnding(text), pauseBefore: 80, pauseAfter: 260, rateScale: 1, pitch: 1 };
    if (node.matches("th")) return { text: ensureEnding(text), pauseBefore: 120, pauseAfter: 180, rateScale: 0.96, pitch: 1.02 };
    if (node.matches("td")) return { text: ensureEnding(text), pauseBefore: 40, pauseAfter: 240, rateScale: 1, pitch: 1 };
    if (node.matches(".key-fact")) return { text: ensureEnding(text), pauseBefore: 300, pauseAfter: 420, rateScale: 0.96, pitch: 1.02 };
    return { text: ensureEnding(text), pauseBefore: 100, pauseAfter: 300, rateScale: 1, pitch: 1 };
  }).filter(Boolean);
  if (!segments.length) segments.push({ text: ensureEnding(cleanSpeakText(readable.innerText)), pauseBefore: 0, pauseAfter: 0, rateScale: 1, pitch: 1 });
  speakSegments(segments, element);
}

function speakSegments(segments, element) {
  if (!("speechSynthesis" in window)) { toast("Read aloud is not supported in this browser."); return; }
  stopSpeech();
  const runId = ++speechRunId;
  let index = 0;
  element?.classList.add("speaking");
  const finish = () => element?.classList.remove("speaking");
  const advance = () => {
    if (runId !== speechRunId) return finish();
    if (index >= segments.length) return finish();
    const segment = segments[index++];
    speechPauseTimer = setTimeout(() => {
      if (runId !== speechRunId) return finish();
      const utterance = makeUtterance(segment.text, segment.rateScale, segment.pitch);
      utterance.onend = () => {
        if (runId !== speechRunId) return finish();
        speechPauseTimer = setTimeout(advance, segment.pauseAfter);
      };
      utterance.onerror = finish;
      window.speechSynthesis.speak(utterance);
    }, segment.pauseBefore);
  };
  advance();
}

function makeUtterance(text, rateScale = 1, pitch = 1) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = Math.max(0.5, Math.min(2, Number(state.speechRate || 1) * rateScale));
  utterance.pitch = pitch;
  utterance.lang = "en-US";
  return utterance;
}

function ensureEnding(text) { return /[.!?]$/.test(text) ? text : `${text}.`; }

function speakText(text, element) {
  if (!("speechSynthesis" in window)) { toast("Text-to-speech is not supported in this browser."); return; }
  stopSpeech();
  const runId = ++speechRunId;
  const utterance = makeUtterance(text);
  if (element) element.classList.add("speaking");
  utterance.onend = utterance.onerror = () => {
    if (runId === speechRunId) element?.classList.remove("speaking");
  };
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  speechRunId++;
  clearTimeout(speechPauseTimer);
  speechPauseTimer = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  document.querySelectorAll(".speaking").forEach(element => element.classList.remove("speaking"));
}

function startExamTimer() {
  clearExamTimer();
  examTimer = setInterval(() => {
    if (!quizSession || quizSession.mode !== "exam") return clearExamTimer();
    quizSession.secondsLeft = Math.max(0, quizSession.secondsLeft - 1);
    const display = document.getElementById("exam-time");
    if (display) display.textContent = formatTime(quizSession.secondsLeft);
    if (quizSession.secondsLeft === 0) { clearExamTimer(); submitExam(); }
  }, 1000);
}

function clearExamTimer() { if (examTimer) clearInterval(examTimer); examTimer = null; }
function formatTime(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`; }

function balancedExamQuestions() {
  const selected = [];
  modules.forEach(module => selected.push(...shuffle(questions.filter(item => item.module === module.id)).slice(0, 2)));
  const remaining = shuffle(questions.filter(item => !selected.some(chosen => chosen.id === item.id))).slice(0, EXAM_SIZE - selected.length);
  return shuffle([...selected, ...remaining]);
}

function downloadResultsPdf() {
  const lines = buildReportLines();
  const blob = buildSimplePdf(lines);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${safeFilename(fullName())}-Oklahoma-Permit-Practice-Results.pdf`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast("Results PDF downloaded. Attach it to your Classroom assignment.");
}

function buildReportLines() {
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "short" }).format(new Date());
  const best = Math.max(0, ...state.examAttempts.map(item => item.score));
  const code = reportCode();
  const lines = [
    "OKLAHOMA PERMIT PRACTICE - COMPLETION REPORT",
    "",
    `Student: ${ascii(fullName())}`,
    `Generated: ${ascii(date)}`,
    `Report code: ${code}`,
    "",
    "SUMMARY",
    `Course progress: ${courseProgress()}%`,
    `Modules mastered: ${state.completedModules.length} of 8`,
    `Mock tests completed: ${state.examAttempts.length}`,
    `Best mock-test score: ${best} of 20`,
    `Passing mock tests (15/20 or better): ${state.examAttempts.filter(item => item.passed).length}`,
    `Questions currently marked for review: ${state.missed.length}`,
    "",
    "MODULE RECORD"
  ];
  modules.forEach(module => {
    const bestScore = state.moduleScores[module.id]?.best;
    lines.push(`${module.number} ${ascii(module.title)} - ${state.completedModules.includes(module.id) ? "Mastered" : "In progress"}${bestScore === undefined ? "" : ` - Best ${bestScore}%`}`);
  });
  lines.push("", "MOCK TEST ATTEMPTS");
  if (!state.examAttempts.length) lines.push("No mock tests completed.");
  state.examAttempts.slice(-10).forEach((attempt, index) => {
    const when = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(attempt.date));
    lines.push(`${index + 1}. ${ascii(when)} - ${attempt.score}/20 - ${attempt.passed ? "Passing" : "Needs review"}`);
  });
  lines.push("", "This report was generated in the Oklahoma Permit Practice app.", "Progress is stored in the student's browser and was not sent to a server.");
  return lines;
}

function buildSimplePdf(lines) {
  const wrapped = lines.flatMap(line => wrapLine(ascii(line), 88));
  const pages = [];
  for (let i = 0; i < wrapped.length; i += 45) pages.push(wrapped.slice(i, i + 45));
  const fontObject = 3 + pages.length * 2;
  const objects = [];
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  const kids = pages.map((_, index) => `${3 + index * 2} 0 R`).join(" ");
  objects[2] = `<< /Type /Pages /Kids [${kids}] /Count ${pages.length} >>`;
  pages.forEach((pageLines, index) => {
    const pageObj = 3 + index * 2;
    const contentObj = pageObj + 1;
    const content = `BT\n/F1 11 Tf\n50 750 Td\n14 TL\n${pageLines.map(line => `(${pdfEscape(line)}) Tj\nT*\n`).join("")}ET`;
    objects[pageObj] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontObject} 0 R >> >> /Contents ${contentObj} 0 R >>`;
    objects[contentObj] = `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;
  });
  objects[fontObject] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 1; i < objects.length; i++) {
    offsets[i] = pdf.length;
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < objects.length; i++) pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function wrapLine(line, max) {
  if (!line) return [""];
  const words = line.split(/\s+/);
  const result = [];
  let current = "";
  words.forEach(word => {
    if ((current + " " + word).trim().length > max) { if (current) result.push(current); current = word; }
    else current = (current + " " + word).trim();
  });
  if (current) result.push(current);
  return result;
}

function pdfEscape(value) { return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)"); }
function ascii(value) { return String(value).normalize("NFKD").replace(/[^\x20-\x7E]/g, ""); }
function safeFilename(value) { return ascii(value).replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "") || "Student"; }
function reportCode() { return simpleHash(`${fullName()}|${state.completedModules.join(",")}|${state.examAttempts.map(item => item.score).join(",")}|${state.missed.length}`).toString(36).toUpperCase().padStart(7, "0").slice(-7); }
function simpleHash(value) { let hash = 2166136261; for (let i = 0; i < value.length; i++) { hash ^= value.charCodeAt(i); hash = Math.imul(hash, 16777619); } return hash >>> 0; }

function courseProgress() {
  const modulePart = (state.completedModules.length / modules.length) * 80;
  const examPart = state.examAttempts.some(item => item.passed) ? 20 : state.examAttempts.length ? 10 : 0;
  return Math.round(modulePart + examPart);
}

function updateProgressUI() {
  const progress = courseProgress();
  document.getElementById("sidebar-progress-value").textContent = `${progress}%`;
  document.getElementById("sidebar-progress-bar").style.width = `${progress}%`;
  document.getElementById("sidebar-progress-detail").textContent = `${state.completedModules.length} modules mastered${state.examAttempts.some(item => item.passed) ? " · Passing test recorded" : ""}`;
}

function updateStudentUI() {
  const name = fullName() || "Student";
  document.getElementById("student-name-display").textContent = name;
  document.getElementById("student-initials").textContent = `${state.student.firstName?.[0] || "S"}${state.student.lastName?.[0] || "T"}`.toUpperCase();
}

function setCurrentNav(page) {
  document.querySelectorAll(".sidebar nav a").forEach(link => {
    if (link.dataset.route === page) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function toggleSidebar(open) {
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("sidebar-scrim");
  sidebar.classList.toggle("open", open);
  scrim.hidden = !open;
}
function closeSidebar() { toggleSidebar(false); }

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...structuredClone(defaultState), ...saved, student: { ...defaultState.student, ...(saved?.student || {}) } };
  } catch { return structuredClone(defaultState); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateProgressUI(); }
function fullName() { return `${state.student.firstName || ""} ${state.student.lastName || ""}`.trim(); }
function shuffle(items) { for (let i = items.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; } return items; }
function cleanSpeakText(text) { return text.replace(/\s+/g, " ").replace(/\b0?\d\b/g, match => match).trim(); }
function esc(value) { return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char])); }
function toast(message) { const element = document.getElementById("toast"); element.textContent = message; element.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => element.classList.remove("show"), 3200); }
