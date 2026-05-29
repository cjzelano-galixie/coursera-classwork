//Starter Data:
const users = [
  { id: 101, name: " Ada ", scores: [10, 20, 30] },
  { id: 102, name: "", scores: [5, 0, 15] },
  { id: 103, name: null, scores: [7, 14] },
  { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },
  { id: 105, name: "Grace", scores: [] },
];

//1
// Return "Unknown" if value is null, undefined, or trims to "";
// else return value.trim(). Must use trim() and typeof at least once.
function normalizeName(value) {
  if (value === null || value === undefined) {
    return "Unknown";
  }
  if (typeof value !== "string" || value.trim() === "") {
    return "Unknown";
  }
  return value.trim();
}

//2
// If not an array: throw new Error("scores must be an array")
// If empty array: return null
// Else return average rounded to 2 decimals
// Must use Array.isArray() and Math.round() (or equivalent math rounding).
function averageScore(scores) {
  if (!Array.isArray(scores)) {
    throw new ReferenceError("Scores must be an array");
  } else if (scores.length === 0) {
    return null;
  } else {
    let totalSum = 0;

    for (let i = 0; i < scores.length; ++i) {
      totalSum += Math.round(scores[i]);
    }
    let rawAverage = totalSum / scores.length;

    return Number(rawAverage.toFixed(2));
  }
}

//3
// If not a non-null object: throw new Error("user must be an object")
// Return { id, name, scoreCount, avg } using the rules:
// name: normalizeName(user.name)
// scoreCount: number of scores; if missing/not array use 0
// avg: averageScore(scores); if missing/not array treat as empty → null
// Must use dot and bracket notation at least once each.
function buildUserSummary(user) {
  if (user !== null && user === "object" && !Array.isArray(user)) {
    return "User must be an object";
  }
  let id = user.id;
  let name = normalizeName(user.name);
  let userScores = user["scores"];
  let scoreCount = 0;
  if (Array.isArray(userScores)) {
    scoreCount = userScores.length;
  }
  let avg = averageScore(user.scores);

  let summary = "ID " + id + ", Name " + name + ", Score Count " + scoreCount;
  +", Avg Score " + avg;

  return summary;
}
//4
// If not an array: throw new Error("userArray must be an array")
// Return userArray.map(buildUserSummary)Must use map().
// summarizeUsers(userArray);

//5
// Use try/catch around summarizeUsers. Return:
// success: { ok: true, data: ... }
// error: { ok: false, error: "<message>" }
// safeSummarizeUsers(userArray);

//6
// If userArray not array: throw new Error("userArray must be an array")
// If id not number: throw new Error("id must be a number")
// Use find() to locate user by id; if not found: throw new Error("user not found")
// Return normalizeName(found.name)
// getUserDisplayNameById(userArray, id);

// Part C answers:
// 1) typeof undefined = ?
// 2) typeof null = ?
// 3) Why treat "" differently than null/undefined in normalizeName (conceptually)?

//Required Test Calls:
// console.log(normalizeName(" Ada ")); // expected: Ada
// console.log(normalizeName("   ")); // expected: Unknown
// console.log(normalizeName(null)); // expected: Unknown
// console.log(averageScore([10, 20, 30])); // expected: 20
// console.log(averageScore([])); // expected: null
console.log(buildUserSummary(users[0])); // expected:
console.log(buildUserSummary(users[3])); // expected:
// console.log(safeSummarizeUsers(users).ok);         // expected:
// console.log(getUserDisplayNameById(users, 105));   // expected:
// console.log(safeSummarizeUsers("not an array"));   // expected:
