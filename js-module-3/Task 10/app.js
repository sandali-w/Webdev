const numCandidates = Number(prompt("Enter the number of candidates:"));
const candidates = [];

for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}

const numVoters = Number(prompt("Enter the number of voters:"));

for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, who do you want to vote for? (Enter candidate name):`);
    
    let found = false;
    for (let j = 0; j < candidates.length; j++) {
        if (candidates[j].name === vote) {
            candidates[j].votes++;
            found = true;
            break;
        }
    }
    
    if (!found) {
        console.log("Empty or invalid vote recorded.");
    }
}

candidates.sort(function(a, b) {
    return b.votes - a.votes;
});

const winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("results:");
for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}