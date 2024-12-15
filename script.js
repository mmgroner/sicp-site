/**
 * List was got from https://sicp.hexlet.io/exercises#subChapters1
 * 
 * I copied the HTML and regexed it into exercsies.out
 * 
 * This script parses into exercises.json
 */
const fs = require('fs');

const content = fs.readFileSync('exercises.out').toString()

const lines = content.split('\n');

const exercises = {};

for (const line of lines) {
    if (!line) {
        continue;
    }

    const exerciseNumberMatch = line.match(/\d\.\d\d?/);
    const exerciseTitleMatch = line.match(/\s[\w\s-]+$/);

    if (!exerciseNumberMatch) {
        throw new Error(`Regex on exercise number for ${line} failed`);
    }

    if (!exerciseTitleMatch) {
        throw new Error(`Regex on exercise title for ${line} failed`);
    }

    const exerciseNumber = exerciseNumberMatch[0].trim();
    const exerciseTitle = exerciseTitleMatch[0].trim();


    const chapter = exerciseNumber[0];

    if (!exercises[chapter]) {
        exercises[chapter] = [];
    }

    exercises[chapter].push({
        exerciseNumber,
        exerciseTitle
    });
}

fs.writeFileSync('exercises.json', JSON.stringify(exercises, null, 2));