// Show GitHub stars next to each entry and sort every list by stars.
// Usage: GITHUB_TOKEN=... node scripts/stars.mjs
import fs from 'node:fs';

const file = new URL('../readme.md', import.meta.url);
const token = process.env.GITHUB_TOKEN;

// `- [name](link) ⭐ 1.2k - Description.`
const itemRegex = /^- \[(?<name>[^\]]+)\]\((?<url>[^)]+)\)(?: ⭐ [\d.]+k?)? - (?<description>.*)$/;
const repoRegex = /^https:\/\/github\.com\/(?<repo>[^/]+\/[^/#?]+)\/?$/;

const formatStars = stars => stars >= 1000 ? `${(stars / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(stars);

async function fetchRepo(repo) {
	const response = await fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			accept: 'application/vnd.github+json',
			...(token && {authorization: `Bearer ${token}`}),
		},
	});

	if (response.status === 404) {
		console.warn(`${repo}: not found, listing it without stars`);
		return;
	}

	// Fail instead of writing a readme with missing stars, for example when rate limited.
	if (!response.ok) {
		throw new Error(`${repo}: HTTP ${response.status} ${await response.text()}`);
	}

	const {full_name: fullName, stargazers_count: stars} = await response.json();
	return {fullName, stars};
}

const lines = fs.readFileSync(file, 'utf8').split('\n');
let section;
let block = [];
const output = [];

async function flush() {
	if (block.length === 0) {
		return;
	}

	const items = [];
	for (const [index, line] of block.entries()) {
		const {name, url, description} = line.match(itemRegex).groups;
		const repo = url.match(repoRegex)?.groups.repo;
		const info = repo && await fetchRepo(repo);

		let link = url;
		if (info && info.fullName.toLowerCase() !== repo.toLowerCase()) {
			console.warn(`${repo}: renamed to ${info.fullName}`);
			link = `https://github.com/${info.fullName}`;
		}

		items.push({index, name, link, description, stars: info?.stars});
	}

	// Most stars first. Entries without stars (npm packages, websites) keep their order at the end.
	items.sort((a, b) => (b.stars ?? -1) - (a.stars ?? -1) || a.index - b.index);

	for (const {name, link, description, stars} of items) {
		const starsText = stars === undefined ? '' : ` ⭐ ${formatStars(stars)}`;
		output.push(`- [${name}](${link})${starsText} - ${description}`);
	}

	block = [];
}

for (const line of lines) {
	if (line.startsWith('## ')) {
		section = line.slice(3);
	}

	if (section !== 'Contents' && itemRegex.test(line)) {
		block.push(line);
		continue;
	}

	await flush();
	output.push(line);
}

await flush();
fs.writeFileSync(file, output.join('\n'));
