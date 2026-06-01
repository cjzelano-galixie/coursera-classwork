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
    throw new Error("scores must be an array");
  } else if (scores.length === 0) {
    return null;
  } else {
    let totalSum = 0;

    for (let i = 0; i < scores.length; ++i) {
      totalSum += scores[i];
    }
    let rawAverage = totalSum / scores.length;

    return Math.round(rawAverage * 100) / 100;
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
  if (user === null || typeof user !== "object" || Array.isArray(user)) {
    throw new Error("user must be an object");
  }
  let id = user.id;
  let name = normalizeName(user.name);
  let userScores = user["scores"];
  let scoreCount = 0;
  let avg = null;

  if (Array.isArray(userScores)) {
    scoreCount = userScores.length;
    avg = averageScore(userScores);
  }

  return {
    id: id,
    name: name,
    scoreCount: scoreCount,
    avg: avg,
  };
}
//4
// If not an array: throw new Error("userArray must be an array")
// Return userArray.map(buildUserSummary)Must use map().
function summarizeUsers(userArray) {
  if (!Array.isArray(userArray)) {
    throw new Error("userArray must be an array");
  }
  return userArray.map(buildUserSummary);
}
//5
// Use try/catch around summarizeUsers. Return:
// success: { ok: true, data: ... }
// error: { ok: false, error: "<message>" }
function safeSummarizeUsers(userArray) {
  try {
    const result = summarizeUsers(userArray);
    return {
      ok: true,
      data: result,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

//6
// If userArray not array: throw new Error("userArray must be an array")
// If id not number: throw new Error("id must be a number")
// Use find() to locate user by id; if not found: throw new Error("user not found")
// Return normalizeName(found.name)
function getUserDisplayNameById(userArray, id) {
  if (!Array.isArray(userArray)) {
    throw new Error("userArray must be an array");
  }
  if (typeof id !== "number") {
    throw new Error("id must be a number");
  }
  const found = userArray.find((user) => user.id === id);
  if (!found) {
    throw new Error("user not found");
  }
  return normalizeName(found.name);
}

// Part C answers:
// 1) typeof undefined = undefined
// 2) typeof null = object
// 3) Why treat "" differently than null/undefined in normalizeName (conceptually)?
// 3) Answer: Because the type of "" is a string and undefined and null are not the same type as "". Null and undefined represent an absence in data versus "" is an empty string/text type. Making sure to check all three will help with any missing records and uncompleted inputs so they are all safely normalized to "Unknown".

//Required Test Calls:
// console.log(normalizeName(" Ada ")); // expected: Ada
// console.log(normalizeName("   ")); // expected: Unknown
// console.log(normalizeName(null)); // expected: Unknown
// console.log(averageScore([10, 20, 30])); // expected: 20
// console.log(averageScore([])); // expected: null
// console.log(buildUserSummary(users[0])); // expected: { id: 101, name: 'Ada', scoreCount: 3, avg: 20 }
// console.log(buildUserSummary(users[3])); // expected: { id: 104, name: 'Unknown', scoreCount: 4, avg: 3 }
// console.log(safeSummarizeUsers(users).ok); // expected: true
// console.log(getUserDisplayNameById(users, 105)); // expected: Grace
// console.log(safeSummarizeUsers("not an array")); // expected: { ok: false, error: 'userArray must be an array' }
