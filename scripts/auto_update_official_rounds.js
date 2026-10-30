// Automated ESPN Official 14-Match Round Updater for GitHub Actions (Runs every 6 hours)
const fs = require('fs');
const path = require('path');

const TARGET_CONFIGS = [
  { sport: 'soccer', country: 'US', prefix: 'soccer/', leagues: ['usa.1', 'eng.1', 'esp.1', 'ita.1'], badgePrefix: 'Auto Round ' },
  { sport: 'soccer', country: 'UK', prefix: 'soccer/', leagues: ['eng.1', 'eng.2'], badgePrefix: 'Matchday Auto ' },
  { sport: 'soccer', country: 'JP', prefix: 'soccer/', leagues: ['jpn.1', 'eng.1'], badgePrefix: 'toto 自動対象回 ' },
  { sport: 'soccer', country: 'CN', prefix: 'soccer/', leagues: ['eng.1', 'esp.1', 'ita.1', 'ger.1'], badgePrefix: '足彩14场 自动期 ' },
  { sport: 'soccer', country: 'ES', prefix: 'soccer/', leagues: ['esp.1', 'eng.1'], badgePrefix: 'La Quiniela Auto ' },
  { sport: 'soccer', country: 'IT', prefix: 'soccer/', leagues: ['ita.1', 'eng.1'], badgePrefix: 'Totocalcio Auto ' },
  { sport: 'soccer', country: 'BR', prefix: 'soccer/', leagues: ['bra.1', 'eng.1', 'esp.1', 'ita.1'], badgePrefix: 'Loteca Auto ' },
  { sport: 'basketball', country: 'US', prefix: 'basketball/', leagues: ['nba'], badgePrefix: 'NBA Pool ' },
  { sport: 'football', country: 'US', prefix: 'football/', leagues: ['nfl'], badgePrefix: 'NFL Pool ' }
];

function ymd(ms) {
  const d = new Date(ms);
  const mo = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dy = String(d.getUTCDate()).padStart(2, '0');
  return `${d.getUTCFullYear()}${mo}${dy}`;
}

async function fetchDay(pathStr, dateStr) {
  try {
    const url = `https://site.api.espn.com/apis/site/v2/sports/${pathStr}/scoreboard?dates=${dateStr}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data.events || [];
  } catch (_e) {
    return [];
  }
}

async function main() {
  const outPath = path.join(__dirname, '..', 'official_rounds.json');
  let current = { version: new Date().toISOString().slice(0, 10), rounds: [] };
  try {
    current = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  } catch (_e) {}

  current.rounds = (current.rounds || []).filter(r => r && r.country !== 'KR');

  const now = Date.now();
  const days = [];
  for (let i = 0; i <= 5; i++) days.push(ymd(now + i * 86400000));

  const cache = {};
  for (const cfg of TARGET_CONFIGS) {
    const matches = [];
    const seen = new Set();
    for (const d of days) {
      if (matches.length >= 14) break;
      for (const lg of cfg.leagues) {
        if (matches.length >= 14) break;
        const key = `${cfg.prefix}${lg}|${d}`;
        if (!cache[key]) cache[key] = await fetchDay(`${cfg.prefix}${lg}`, d);
        for (const ev of cache[key]) {
          if (matches.length >= 14) break;
          if (seen.has(ev.id)) continue;
          const st = (ev.status && ev.status.type && ev.status.type.state) || '';
          if (st === 'post') continue;
          const comp = (ev.competitions && ev.competitions[0]) || {};
          const cs = comp.competitors || [];
          const h = cs.find(c => c.homeAway === 'home') || cs[0];
          const a = cs.find(c => c.homeAway === 'away') || cs[1];
          if (!h || !a || !h.team || !a.team) continue;
          seen.add(ev.id);
          const dt = new Date(ev.date);
          const dateFmt = `${String(dt.getUTCMonth() + 1).padStart(2, '0')}.${String(dt.getUTCDate()).padStart(2, '0')} ${String(dt.getUTCHours()).padStart(2, '0')}:${String(dt.getUTCMinutes()).padStart(2, '0')}`;
          matches.push({
            home: h.team.displayName,
            away: a.team.displayName,
            league: lg.toUpperCase(),
            date: dateFmt,
            status: 'OPEN'
          });
        }
      }
    }
    if (matches.length === 14) {
      const roundId = `${cfg.country}_${cfg.sport.toUpperCase().slice(0, 3)}_${days[0]}`;
      const existingIdx = current.rounds.findIndex(r => r.country === cfg.country && r.sport === cfg.sport);
      const roundObj = {
        sport: cfg.sport,
        country: cfg.country,
        id: roundId,
        roundNum: parseInt(days[0], 10),
        badge: `${cfg.badgePrefix}(${days[0].slice(4, 6)}.${days[0].slice(6, 8)})`,
        label: `${cfg.badgePrefix}14-Match Official Slate (${days[0]})`,
        deadline: `${days[0].slice(4, 6)}.${days[0].slice(6, 8)} Auto-Sync`,
        isPast: false,
        isUpcoming: false,
        statusTag: 'Active',
        matches
      };
      if (existingIdx === -1) {
        current.rounds.push(roundObj);
      }
    }
  }

  current.version = new Date().toISOString();
  fs.writeFileSync(outPath, JSON.stringify(current, null, 2) + '\n', 'utf8');
  console.log('Updated official_rounds.json:', current.rounds.length, 'rounds');
}

main().catch(err => {
  console.error(err);
  process.exit(0);
});
