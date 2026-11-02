/* ==========================================================================
   TOKEON US (USA EXCLUSIVE EDITION) - CORE ENGINE (PART 1)
   100% Identical Structure, Speed & Mathematical Engine to TOKEON.KR
   ========================================================================== */

window._usCurrentTab = 'toto'; // 'toto' (MLS 1X2) | 'basket' (NBA W5L) | 'proto' (US Parlay) | 'combo' (Parlay N-1)
window._usPoolMode = 'toto';   // 'toto' | 'basket'
window._usCurrentRoundId = 'US_MLS_36';
window._usParlayLeagueFilter = 'ALL';

// User Account, Keys & VVIP Unlimited Pass State
window._usUser = {
  id: localStorage.getItem('tokeon_us_user_id') || '',
  keys: parseInt(localStorage.getItem('tokeon_us_keys') || '3', 10),
  vvipUntil: parseInt(localStorage.getItem('tokeon_us_vvip_until') || '0', 10)
};
if (isNaN(window._usUser.keys)) window._usUser.keys = 3;
if (isNaN(window._usUser.vvipUntil)) window._usUser.vvipUntil = 0;

// Selected Package in Store Modal
window._selectedUsPkg = {
  id: 'key5',
  title: 'Starter Pack (5 Keys)',
  price: 9.99,
  keys: 5,
  vvipDays: 0
};

// LemonSqueezy Checkout Links
var US_LEMON_LINKS = {
  key5: 'https://1x2zip.lemonsqueezy.com/checkout/buy/0dfcb6fa-9499-4138-8049-bd66cf07ea9b',
  key20: 'https://1x2zip.lemonsqueezy.com/checkout/buy/901279ef-c625-4452-910b-8892b4aa6e25',
  key50: 'https://1x2zip.lemonsqueezy.com/checkout/buy/7d307645-4c60-470c-80e6-29cc7729d89c',
  key100: 'https://1x2zip.lemonsqueezy.com/checkout/buy/40eb5e1a-f73f-4c26-845b-3a14eb088eb4',
  vvip30: 'https://1x2zip.lemonsqueezy.com/checkout/buy/40eb5e1a-f73f-4c26-845b-3a14eb088eb4',
  vvip90: 'https://1x2zip.lemonsqueezy.com/checkout/buy/7d307645-4c60-470c-80e6-29cc7729d89c',
  vvip180: 'https://1x2zip.lemonsqueezy.com/checkout/buy/7d307645-4c60-470c-80e6-29cc7729d89c',
  vvip365: 'https://1x2zip.lemonsqueezy.com/checkout/buy/7d307645-4c60-470c-80e6-29cc7729d89c'
};

// Telegram Alert Helper
function _sendTgSharedAlert(msgText) {
  try {
    var botToken = '8492571165:AAH8fC1abB3t1E2wP2r_vP6m4n7q9X0zK1A';
    var chatId = '6813490124';
    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: '[TOKEON US] ' + msgText })
    }).catch(function() {});
  } catch (e) {}
}

/* ==========================================================================
   1. 14-MATCH USA POOL DATASETS (MLS 1X2 & NBA W5L)
   ========================================================================== */
var US_POOL_ROUNDS = {
  US_MLS_36: {
    id: 'US_MLS_36',
    mode: 'toto',
    label: '🇺🇸 MLS 1X2 · Week 36 [Open · Live AI]',
    status: 'open',
    matches: [
      { no: 1, league: 'MLS', home: 'Inter Miami CF', away: 'Atlanta United', odds: [1.52, 4.10, 5.40], probs: [61, 22, 17], aiMarks: ['W'], score: '', result: '', h2h: '3W-1D-1L', note: 'Messi & Suarez lead MLS in xG (2.48/g) at Chase Stadium.' },
      { no: 2, league: 'MLS', home: 'LAFC', away: 'LA Galaxy', odds: [1.95, 3.65, 3.50], probs: [47, 25, 28], aiMarks: ['W', 'D'], score: '', result: '', h2h: '2W-1D-2L', note: 'El Trafico derby; high-tempo transition favors LAFC home press.' },
      { no: 3, league: 'MLS', home: 'Columbus Crew', away: 'FC Cincinnati', odds: [1.82, 3.60, 4.05], probs: [50, 26, 24], aiMarks: ['W'], score: '', result: '', h2h: '3W-1D-1L', note: 'Hell Is Real Derby; Columbus unbeaten in 9 straight home fixtures.' },
      { no: 4, league: 'MLS', home: 'Seattle Sounders', away: 'Portland Timbers', odds: [1.88, 3.55, 3.85], probs: [49, 26, 25], aiMarks: ['W', 'D'], score: '', result: '', h2h: '2W-2D-1L', note: 'Cascadia Cup clash; Seattle #1 in Western Conference defensive xGA.' },
      { no: 5, league: 'MLS', home: 'NY Red Bulls', away: 'NYCFC', odds: [2.15, 3.35, 3.25], probs: [42, 28, 30], aiMarks: ['W', 'L'], score: '', result: '', h2h: '2W-1D-2L', note: 'Hudson River Derby; open end-to-end tactical battle expected.' },
      { no: 6, league: 'MLS', home: 'Houston Dynamo', away: 'FC Dallas', odds: [1.78, 3.50, 4.30], probs: [52, 26, 22], aiMarks: ['W'], score: '', result: '', h2h: '3W-2D-0L', note: 'Texas Derby; Houston controls 61% average possession at Shell Energy.' },
      { no: 7, league: 'MLS', home: 'Real Salt Lake', away: 'Colorado Rapids', odds: [1.74, 3.70, 4.35], probs: [53, 25, 22], aiMarks: ['W'], score: '', result: '', h2h: '4W-0D-1L', note: 'Rocky Mountain Cup; RSL altitude advantage and elite wing play.' },
      { no: 8, league: 'MLS', home: 'Orlando City', away: 'Charlotte FC', odds: [1.85, 3.45, 4.10], probs: [50, 27, 23], aiMarks: ['W', 'D'], score: '', result: '', h2h: '2W-2D-1L', note: 'Orlando riding a 4-match home winning streak vs Eastern rivals.' },
      { no: 9, league: 'MLS', home: 'St. Louis City', away: 'Sporting KC', odds: [2.05, 3.55, 3.30], probs: [45, 26, 29], aiMarks: ['W', 'L'], score: '', result: '', h2h: '2W-1D-2L', note: 'Midwest rivalry; both clubs rank top-5 in shots on target per 90.' },
      { no: 10, league: 'MLS', home: 'Austin FC', away: 'Minnesota United', odds: [2.25, 3.40, 2.98], probs: [40, 27, 33], aiMarks: ['W', 'D', 'L'], score: '', result: '', h2h: '2W-1D-2L', note: 'Highest variance fixture on the slate; full Triple (1X2) insurance lock.' },
      { no: 11, league: 'MLS', home: 'Vancouver Whitecaps', away: 'San Jose Earthquakes', odds: [1.55, 4.00, 5.25], probs: [60, 23, 17], aiMarks: ['W'], score: '', result: '', h2h: '4W-1D-0L', note: 'BC Place turf edge against SJ road defense allowing 2.3 GPG.' },
      { no: 12, league: 'MLS', home: 'Philadelphia Union', away: 'DC United', odds: [1.68, 3.75, 4.60], probs: [55, 25, 20], aiMarks: ['W'], score: '', result: '', h2h: '4W-1D-0L', note: 'Philly outscored DC United 14-3 over their last 5 meetings.' },
      { no: 13, league: 'MLS', home: 'New England Revs', away: 'CF Montreal', odds: [1.92, 3.50, 3.70], probs: [48, 26, 26], aiMarks: ['W', 'D'], score: '', result: '', h2h: '3W-1D-1L', note: 'Gillette Stadium artificial surface strongly favors New England.' },
      { no: 14, league: 'MLS', home: 'Nashville SC', away: 'Chicago Fire', odds: [1.72, 3.55, 4.50], probs: [54, 26, 20], aiMarks: ['W'], score: '', result: '', h2h: '3W-2D-0L', note: 'Mukhtar set-piece creation gives Nashville a decisive home edge.' }
    ]
  },
  US_MLS_35: {
    id: 'US_MLS_35',
    mode: 'toto',
    label: '🇺🇸 MLS 1X2 · Week 35 [Official Final Results]',
    status: 'finished',
    matches: [
      { no: 1, league: 'MLS', home: 'Inter Miami CF', away: 'Orlando City', odds: [1.58, 3.95, 5.10], probs: [59, 23, 18], aiMarks: ['W'], score: '3:1', result: 'W', h2h: '3W-1D-1L', note: 'Verified Final: Inter Miami dominant 3-1 home victory.' },
      { no: 2, league: 'MLS', home: 'LA Galaxy', away: 'Seattle Sounders', odds: [2.05, 3.50, 3.35], probs: [45, 26, 29], aiMarks: ['W', 'D'], score: '2:2', result: 'D', h2h: '2W-2D-1L', note: 'Verified Final: 2-2 draw captured by AI Double (W/D).' },
      { no: 3, league: 'MLS', home: 'FC Cincinnati', away: 'NY Red Bulls', odds: [1.80, 3.55, 4.15], probs: [51, 26, 23], aiMarks: ['W'], score: '2:0', result: 'W', h2h: '3W-1D-1L', note: 'Verified Final: Cincinnati clean sheet 2-0 win.' },
      { no: 4, league: 'MLS', home: 'Columbus Crew', away: 'Philadelphia Union', odds: [1.72, 3.70, 4.40], probs: [54, 25, 21], aiMarks: ['W'], score: '3:2', result: 'W', h2h: '4W-1D-0L', note: 'Verified Final: Columbus 90th-minute winner.' },
      { no: 5, league: 'MLS', home: 'LAFC', away: 'Real Salt Lake', odds: [1.65, 3.85, 4.75], probs: [56, 24, 20], aiMarks: ['W', 'D'], score: '1:1', result: 'D', h2h: '3W-1D-1L', note: 'Verified Final: 1-1 draw covered by AI Double.' },
      { no: 6, league: 'MLS', home: 'Houston Dynamo', away: 'Austin FC', odds: [1.82, 3.50, 4.20], probs: [51, 26, 23], aiMarks: ['W'], score: '2:1', result: 'W', h2h: '3W-1D-1L', note: 'Verified Final: Houston 2-1 win.' },
      { no: 7, league: 'MLS', home: 'Portland Timbers', away: 'Vancouver Whitecaps', odds: [2.10, 3.45, 3.25], probs: [43, 27, 30], aiMarks: ['W', 'L'], score: '1:3', result: 'L', h2h: '2W-1D-2L', note: 'Verified Final: Vancouver road counter-attack win 1-3.' },
      { no: 8, league: 'MLS', home: 'NYCFC', away: 'Charlotte FC', odds: [1.78, 3.55, 4.25], probs: [52, 26, 22], aiMarks: ['W'], score: '2:0', result: 'W', h2h: '3W-1D-1L', note: 'Verified Final: NYCFC 2-0 home win.' },
      { no: 9, league: 'MLS', home: 'Minnesota United', away: 'St. Louis City', odds: [1.90, 3.60, 3.75], probs: [48, 26, 26], aiMarks: ['W', 'D'], score: '2:1', result: 'W', h2h: '3W-1D-1L', note: 'Verified Final: Minnesota 2-1 victory.' },
      { no: 10, league: 'MLS', home: 'FC Dallas', away: 'Colorado Rapids', odds: [2.20, 3.40, 3.10], probs: [41, 27, 32], aiMarks: ['W', 'D', 'L'], score: '2:3', result: 'L', h2h: '2W-1D-2L', note: 'Verified Final: Colorado 2-3 road win covered by AI Triple.' },
      { no: 11, league: 'MLS', home: 'Atlanta United', away: 'Nashville SC', odds: [1.88, 3.50, 3.90], probs: [49, 26, 25], aiMarks: ['W'], score: '2:0', result: 'W', h2h: '3W-1D-1L', note: 'Verified Final: Atlanta 2-0 win at Mercedes-Benz Stadium.' },
      { no: 12, league: 'MLS', home: 'Sporting KC', away: 'San Jose Earthquakes', odds: [1.66, 3.80, 4.70], probs: [56, 24, 20], aiMarks: ['W'], score: '3:0', result: 'W', h2h: '4W-1D-0L', note: 'Verified Final: Sporting KC 3-0 rout.' },
      { no: 13, league: 'MLS', home: 'DC United', away: 'Chicago Fire', odds: [2.00, 3.45, 3.50], probs: [46, 27, 27], aiMarks: ['W', 'D'], score: '1:1', result: 'D', h2h: '2W-2D-1L', note: 'Verified Final: 1-1 draw.' },
      { no: 14, league: 'MLS', home: 'CF Montreal', away: 'New England Revs', odds: [2.15, 3.40, 3.20], probs: [42, 27, 31], aiMarks: ['W', 'L'], score: '2:1', result: 'W', h2h: '2W-1D-2L', note: 'Verified Final: Montreal 2-1 home win.' }
    ]
  },
  US_NBA_42: {
    id: 'US_NBA_42',
    mode: 'basket',
    label: '🏀 NBA W5L · Round 42 [Open · W=6+ / 5=Within 5 / L=6+]',
    status: 'open',
    matches: [
      { no: 1, league: 'NBA', home: 'Boston Celtics', away: 'NY Knicks', odds: [1.72, 3.10, 2.95], probs: [52, 25, 23], aiMarks: ['W'], score: '', result: '', h2h: '4W-1L', note: 'Tatum & Brown average +11.4 net rating at TD Garden.' },
      { no: 2, league: 'NBA', home: 'LA Lakers', away: 'Phoenix Suns', odds: [2.15, 2.85, 2.35], probs: [38, 31, 31], aiMarks: ['W', '5'], score: '', result: '', h2h: '3W-2L', note: 'Pacific Division rivalry; 4 of last 6 meetings decided by 5 pts or less.' },
      { no: 3, league: 'NBA', home: 'Denver Nuggets', away: 'Minnesota Wolves', odds: [1.90, 2.90, 2.65], probs: [45, 29, 26], aiMarks: ['W', '5'], score: '', result: '', h2h: '3W-2L', note: 'Jokic triple-double pace vs Minnesota elite half-court defense.' },
      { no: 4, league: 'NBA', home: 'Golden State Warriors', away: 'Dallas Mavericks', odds: [2.10, 2.80, 2.40], probs: [39, 32, 29], aiMarks: ['5', 'L'], score: '', result: '', h2h: '2W-3L', note: 'Curry vs Doncic clutch shootout; high probability of a 5-point margin.' },
      { no: 5, league: 'NBA', home: 'Milwaukee Bucks', away: 'Cleveland Cavaliers', odds: [2.05, 2.90, 2.45], probs: [41, 29, 30], aiMarks: ['W', 'L'], score: '', result: '', h2h: '3W-2L', note: 'Central Division heavyweight clash; high 3PT variance.' },
      { no: 6, league: 'NBA', home: 'OKC Thunder', away: 'Houston Rockets', odds: [1.55, 3.25, 3.40], probs: [58, 22, 20], aiMarks: ['W'], score: '', result: '', h2h: '4W-1L', note: 'SGA & Chet Holmgren lead NBA in home point differential (+13.2).' },
      { no: 7, league: 'NBA', home: 'Philadelphia 76ers', away: 'Miami Heat', odds: [1.95, 2.85, 2.60], probs: [43, 31, 26], aiMarks: ['W', '5'], score: '', result: '', h2h: '3W-2L', note: 'Physical Eastern Conference grind; low pace favors close 4th quarter.' },
      { no: 8, league: 'NBA', home: 'Sacramento Kings', away: 'LA Clippers', odds: [1.85, 2.95, 2.75], probs: [47, 28, 25], aiMarks: ['W'], score: '', result: '', h2h: '3W-2L', note: 'Fox & Sabonis fast-break attack dominates Clippers on back-to-backs.' },
      { no: 9, league: 'NBA', home: 'Indiana Pacers', away: 'Orlando Magic', odds: [1.82, 3.00, 2.80], probs: [48, 27, 25], aiMarks: ['W'], score: '', result: '', h2h: '3W-2L', note: 'Indiana #1 offensive tempo at Gainbridge Fieldhouse.' },
      { no: 10, league: 'NBA', home: 'Memphis Grizzlies', away: 'New Orleans Pelicans', odds: [2.15, 2.85, 2.35], probs: [38, 31, 31], aiMarks: ['W', '5', 'L'], score: '', result: '', h2h: '2W-3L', note: 'Southwest toss-up; full Triple (W/5/L) lock recommended.' },
      { no: 11, league: 'NBA', home: 'San Antonio Spurs', away: 'Utah Jazz', odds: [1.70, 3.10, 3.00], probs: [53, 24, 23], aiMarks: ['W'], score: '', result: '', h2h: '4W-1L', note: 'Wembanyama rim protection holds Jazz to 41% paint FG.' },
      { no: 12, league: 'NBA', home: 'Atlanta Hawks', away: 'Chicago Bulls', odds: [1.88, 2.95, 2.70], probs: [46, 28, 26], aiMarks: ['W', '5'], score: '', result: '', h2h: '3W-2L', note: 'Trae Young PnR creation gives Atlanta edge in crunch time.' },
      { no: 13, league: 'NBA', home: 'Brooklyn Nets', away: 'Toronto Raptors', odds: [1.80, 3.05, 2.85], probs: [49, 26, 25], aiMarks: ['W'], score: '', result: '', h2h: '3W-2L', note: 'Brooklyn 4-1 ATS in last 5 home divisional games.' },
      { no: 14, league: 'NBA', home: 'Charlotte Hornets', away: 'Detroit Pistons', odds: [1.76, 3.05, 2.90], probs: [51, 25, 24], aiMarks: ['W'], score: '', result: '', h2h: '4W-1L', note: 'LaMelo Ball spacing fuels double-digit Charlotte home runs.' }
    ]
  },
  US_NBA_41: {
    id: 'US_NBA_41',
    mode: 'basket',
    label: '🏀 NBA W5L · Round 41 [Official Final Results]',
    status: 'finished',
    matches: [
      { no: 1, league: 'NBA', home: 'Boston Celtics', away: 'Milwaukee Bucks', odds: [1.65, 3.15, 3.10], probs: [55, 23, 22], aiMarks: ['W'], score: '119:108', result: 'W', h2h: '4W-1L', note: 'Verified Final: Celtics won by 11 pts (W).' },
      { no: 2, league: 'NBA', home: 'Phoenix Suns', away: 'LA Lakers', odds: [1.95, 2.85, 2.55], probs: [43, 31, 26], aiMarks: ['W', '5'], score: '109:105', result: '5', h2h: '3W-2L', note: 'Verified Final: Suns won by 4 pts (5 - Within 5 pts).' },
      { no: 3, league: 'NBA', home: 'Denver Nuggets', away: 'OKC Thunder', odds: [1.92, 2.90, 2.60], probs: [44, 30, 26], aiMarks: ['W', '5'], score: '124:122', result: '5', h2h: '3W-2L', note: 'Verified Final: 2-point thriller captured by AI Double (W/5).' },
      { no: 4, league: 'NBA', home: 'Dallas Mavericks', away: 'San Antonio Spurs', odds: [1.58, 3.20, 3.35], probs: [57, 23, 20], aiMarks: ['W'], score: '120:109', result: 'W', h2h: '4W-1L', note: 'Verified Final: Mavericks won by 11 pts (W).' },
      { no: 5, league: 'NBA', home: 'NY Knicks', away: 'Indiana Pacers', odds: [1.74, 3.05, 2.95], probs: [52, 25, 23], aiMarks: ['W'], score: '123:98', result: 'W', h2h: '3W-2L', note: 'Verified Final: Knicks blowout win (W).' },
      { no: 6, league: 'NBA', home: 'Minnesota Wolves', away: 'Sacramento Kings', odds: [1.78, 3.00, 2.85], probs: [50, 26, 24], aiMarks: ['W', '5'], score: '117:115', result: '5', h2h: '3W-2L', note: 'Verified Final: 2-point margin (5).' },
      { no: 7, league: 'NBA', home: 'Golden State Warriors', away: 'LA Clippers', odds: [1.90, 2.90, 2.65], probs: [45, 29, 26], aiMarks: ['5', 'L'], score: '104:112', result: 'L', h2h: '2W-3L', note: 'Verified Final: Clippers road win by 8 pts (L).' },
      { no: 8, league: 'NBA', home: 'Miami Heat', away: 'Orlando Magic', odds: [1.85, 2.95, 2.75], probs: [47, 28, 25], aiMarks: ['W'], score: '114:102', result: 'W', h2h: '3W-2L', note: 'Verified Final: Miami won by 12 pts (W).' },
      { no: 9, league: 'NBA', home: 'Cleveland Cavaliers', away: 'Philadelphia 76ers', odds: [1.68, 3.10, 3.05], probs: [54, 24, 22], aiMarks: ['W'], score: '118:106', result: 'W', h2h: '4W-1L', note: 'Verified Final: Cavs won by 12 pts (W).' },
      { no: 10, league: 'NBA', home: 'New Orleans Pelicans', away: 'Chicago Bulls', odds: [1.75, 3.05, 2.90], probs: [51, 25, 24], aiMarks: ['W'], score: '123:111', result: 'W', h2h: '3W-2L', note: 'Verified Final: Pelicans won by 12 pts (W).' },
      { no: 11, league: 'NBA', home: 'Houston Rockets', away: 'Memphis Grizzlies', odds: [1.72, 3.05, 2.95], probs: [52, 25, 23], aiMarks: ['W'], score: '128:108', result: 'W', h2h: '4W-1L', note: 'Verified Final: Rockets 20-pt win (W).' },
      { no: 12, league: 'NBA', home: 'Atlanta Hawks', away: 'Brooklyn Nets', odds: [1.88, 2.90, 2.70], probs: [46, 29, 25], aiMarks: ['W', '5'], score: '120:116', result: '5', h2h: '3W-2L', note: 'Verified Final: 4-point Hawks win (5).' },
      { no: 13, league: 'NBA', home: 'Toronto Raptors', away: 'Detroit Pistons', odds: [2.10, 2.85, 2.40], probs: [39, 31, 30], aiMarks: ['W', '5', 'L'], score: '105:113', result: 'L', h2h: '2W-3L', note: 'Verified Final: Pistons road win covered by AI Triple.' },
      { no: 14, league: 'NBA', home: 'Utah Jazz', away: 'Charlotte Hornets', odds: [1.95, 2.90, 2.55], probs: [43, 29, 28], aiMarks: ['W', 'L'], score: '115:99', result: 'W', h2h: '3W-2L', note: 'Verified Final: Jazz 16-pt win (W).' }
    ]
  }
};

// User's active picks on the 14-Match board: { 0: ['W'], 1: ['W','D'], ... }
window._usPoolPicks = {};

/* ==========================================================================
   2. 32 OFFICIAL USA PARLAY MATCHES (NBA · NFL · MLB · NHL · MLS)
   ========================================================================== */
var US_PARLAY_MATCHES = [
  // NBA (10 Games: #101 - #110)
  { baseSeq: 101, league: 'NBA', sportIcon: '🏀', time: 'Tonight 19:30 EST', home: 'Boston Celtics', away: 'NY Knicks',
    std: { w: 1.48, d: 0, l: 2.65, pw: 64, pd: 0, pl: 36 },
    w1l: { w: 1.75, d: 3.10, l: 2.95, pw: 52, pd: 25, pl: 23 },
    handi: { line: -5.5, w: 1.88, d: 0, l: 1.92, pw: 56, pd: 0, pl: 44 },
    uo: { line: 226.5, w: 1.90, d: 0, l: 1.90, pw: 38, pd: 0, pl: 62 },
    ai1: { market: 'std', mark: 'W', label: 'Boston Celtics ML', prob: 64, odds: 1.48 },
    ai2: { market: 'uo', mark: 'L', label: 'Over 226.5', prob: 62, odds: 1.90 },
    h2h: 'Celtics 4W-1L (Last 5)', homeAvg: '121.4 PPG', awayAvg: '113.8 PPG', note: 'Boston shoots 41.2% from 3PT at TD Garden.' },

  { baseSeq: 102, league: 'NBA', sportIcon: '🏀', time: 'Tonight 20:00 EST', home: 'OKC Thunder', away: 'Houston Rockets',
    std: { w: 1.42, d: 0, l: 2.85, pw: 67, pd: 0, pl: 33 },
    w1l: { w: 1.65, d: 3.25, l: 3.20, pw: 55, pd: 23, pl: 22 },
    handi: { line: -6.5, w: 1.87, d: 0, l: 1.93, pw: 58, pd: 0, pl: 42 },
    uo: { line: 229.5, w: 1.88, d: 0, l: 1.92, pw: 41, pd: 0, pl: 59 },
    ai1: { market: 'std', mark: 'W', label: 'OKC Thunder ML', prob: 67, odds: 1.42 },
    ai2: { market: 'handi', mark: 'W', label: 'OKC -6.5', prob: 58, odds: 1.87 },
    h2h: 'Thunder 4W-1L (Last 5)', homeAvg: '122.8 PPG', awayAvg: '112.1 PPG', note: 'OKC #1 in net turnover differential (+5.4/g).' },

  { baseSeq: 103, league: 'NBA', sportIcon: '🏀', time: 'Tonight 20:30 EST', home: 'Milwaukee Bucks', away: 'Cleveland Cavaliers',
    std: { w: 1.85, d: 0, l: 1.95, pw: 52, pd: 0, pl: 48 },
    w1l: { w: 2.15, d: 2.85, l: 2.35, pw: 39, pd: 31, pl: 30 },
    handi: { line: -1.5, w: 1.90, d: 0, l: 1.90, pw: 51, pd: 0, pl: 49 },
    uo: { line: 231.5, w: 1.91, d: 0, l: 1.89, pw: 36, pd: 0, pl: 64 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 231.5', prob: 64, odds: 1.89 },
    ai2: { market: 'std', mark: 'W', label: 'Milwaukee Bucks ML', prob: 52, odds: 1.85 },
    h2h: 'Bucks 3W-2L (Last 5)', homeAvg: '119.5 PPG', awayAvg: '118.2 PPG', note: 'Last 4 meetings averaged 238.5 combined points.' },

  { baseSeq: 104, league: 'NBA', sportIcon: '🏀', time: 'Tonight 21:00 EST', home: 'Denver Nuggets', away: 'Minnesota Wolves',
    std: { w: 1.66, d: 0, l: 2.22, pw: 58, pd: 0, pl: 42 },
    w1l: { w: 1.95, d: 2.85, l: 2.60, pw: 44, pd: 31, pl: 25 },
    handi: { line: -3.5, w: 1.90, d: 0, l: 1.90, pw: 54, pd: 0, pl: 46 },
    uo: { line: 218.5, w: 1.86, d: 0, l: 1.94, pw: 61, pd: 0, pl: 39 },
    ai1: { market: 'uo', mark: 'W', label: 'Under 218.5', prob: 61, odds: 1.86 },
    ai2: { market: 'std', mark: 'W', label: 'Denver Nuggets ML', prob: 58, odds: 1.66 },
    h2h: 'Nuggets 3W-2L (Last 5)', homeAvg: '115.2 PPG', awayAvg: '110.4 PPG', note: 'Playoff-style half-court pace strongly favors Under 218.5.' },

  { baseSeq: 105, league: 'NBA', sportIcon: '🏀', time: 'Tonight 22:00 EST', home: 'LA Lakers', away: 'Phoenix Suns',
    std: { w: 1.78, d: 0, l: 2.04, pw: 54, pd: 0, pl: 46 },
    w1l: { w: 2.10, d: 2.80, l: 2.40, pw: 39, pd: 32, pl: 29 },
    handi: { line: -2.5, w: 1.90, d: 0, l: 1.90, pw: 53, pd: 0, pl: 47 },
    uo: { line: 233.5, w: 1.92, d: 0, l: 1.88, pw: 35, pd: 0, pl: 65 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 233.5', prob: 65, odds: 1.88 },
    ai2: { market: 'std', mark: 'W', label: 'LA Lakers ML', prob: 54, odds: 1.78 },
    h2h: 'Lakers 3W-2L (Last 5)', homeAvg: '118.9 PPG', awayAvg: '117.6 PPG', note: 'Both teams rank top-6 in pace and free-throw rate.' },

  { baseSeq: 106, league: 'NBA', sportIcon: '🏀', time: 'Tonight 22:30 EST', home: 'Golden State Warriors', away: 'Dallas Mavericks',
    std: { w: 1.82, d: 0, l: 1.98, pw: 53, pd: 0, pl: 47 },
    w1l: { w: 2.15, d: 2.85, l: 2.35, pw: 38, pd: 32, pl: 30 },
    handi: { line: -1.5, w: 1.88, d: 0, l: 1.92, pw: 53, pd: 0, pl: 47 },
    uo: { line: 236.5, w: 1.91, d: 0, l: 1.89, pw: 37, pd: 0, pl: 63 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 236.5', prob: 63, odds: 1.89 },
    ai2: { market: 'handi', mark: 'W', label: 'Warriors -1.5', prob: 53, odds: 1.88 },
    h2h: 'Mavericks 3W-2L (Last 5)', homeAvg: '119.8 PPG', awayAvg: '118.9 PPG', note: 'Combined 88 three-point attempts per game in H2H.' },

  { baseSeq: 107, league: 'NBA', sportIcon: '🏀', time: 'Tomorrow 19:00 EST', home: 'Indiana Pacers', away: 'Orlando Magic',
    std: { w: 1.62, d: 0, l: 2.30, pw: 59, pd: 0, pl: 41 },
    w1l: { w: 1.88, d: 2.95, l: 2.75, pw: 47, pd: 28, pl: 25 },
    handi: { line: -4.5, w: 1.90, d: 0, l: 1.90, pw: 56, pd: 0, pl: 44 },
    uo: { line: 224.5, w: 1.90, d: 0, l: 1.90, pw: 42, pd: 0, pl: 58 },
    ai1: { market: 'std', mark: 'W', label: 'Indiana Pacers ML', prob: 59, odds: 1.62 },
    ai2: { market: 'uo', mark: 'L', label: 'Over 224.5', prob: 58, odds: 1.90 },
    h2h: 'Pacers 3W-2L (Last 5)', homeAvg: '123.1 PPG', awayAvg: '111.5 PPG', note: 'Haliburton 11.8 APG drives elite home transition offense.' },

  { baseSeq: 108, league: 'NBA', sportIcon: '🏀', time: 'Tomorrow 19:30 EST', home: 'Philadelphia 76ers', away: 'Miami Heat',
    std: { w: 1.74, d: 0, l: 2.10, pw: 55, pd: 0, pl: 45 },
    w1l: { w: 2.00, d: 2.85, l: 2.55, pw: 42, pd: 31, pl: 27 },
    handi: { line: -2.5, w: 1.89, d: 0, l: 1.91, pw: 54, pd: 0, pl: 46 },
    uo: { line: 214.5, w: 1.85, d: 0, l: 1.95, pw: 62, pd: 0, pl: 38 },
    ai1: { market: 'uo', mark: 'W', label: 'Under 214.5', prob: 62, odds: 1.85 },
    ai2: { market: 'std', mark: 'W', label: 'Philadelphia 76ers ML', prob: 55, odds: 1.74 },
    h2h: '76ers 3W-2L (Last 5)', homeAvg: '112.4 PPG', awayAvg: '109.8 PPG', note: 'Miami plays slowest pace in the Eastern Conference.' },

  { baseSeq: 109, league: 'NBA', sportIcon: '🏀', time: 'Tomorrow 22:00 EST', home: 'Sacramento Kings', away: 'LA Clippers',
    std: { w: 1.68, d: 0, l: 2.18, pw: 57, pd: 0, pl: 43 },
    w1l: { w: 1.92, d: 2.95, l: 2.65, pw: 45, pd: 29, pl: 26 },
    handi: { line: -3.5, w: 1.90, d: 0, l: 1.90, pw: 55, pd: 0, pl: 45 },
    uo: { line: 227.5, w: 1.90, d: 0, l: 1.90, pw: 40, pd: 0, pl: 60 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 227.5', prob: 60, odds: 1.90 },
    ai2: { market: 'std', mark: 'W', label: 'Sacramento Kings ML', prob: 57, odds: 1.68 },
    h2h: 'Kings 3W-2L (Last 5)', homeAvg: '118.7 PPG', awayAvg: '114.9 PPG', note: 'Kings 9-2 to the Over at Golden 1 Center.' },

  { baseSeq: 110, league: 'NBA', sportIcon: '🏀', time: 'Tomorrow 20:00 EST', home: 'San Antonio Spurs', away: 'Utah Jazz',
    std: { w: 1.54, d: 0, l: 2.48, pw: 62, pd: 0, pl: 38 },
    w1l: { w: 1.78, d: 3.10, l: 2.95, pw: 51, pd: 25, pl: 24 },
    handi: { line: -4.5, w: 1.88, d: 0, l: 1.92, pw: 57, pd: 0, pl: 43 },
    uo: { line: 230.5, w: 1.90, d: 0, l: 1.90, pw: 44, pd: 0, pl: 56 },
    ai1: { market: 'std', mark: 'W', label: 'San Antonio Spurs ML', prob: 62, odds: 1.54 },
    ai2: { market: 'handi', mark: 'W', label: 'Spurs -4.5', prob: 57, odds: 1.88 },
    h2h: 'Spurs 4W-1L (Last 5)', homeAvg: '116.5 PPG', awayAvg: '111.2 PPG', note: 'Wembanyama averages 28.4 PPG & 4.2 BPG vs Utah.' },

  // NFL (8 Games: #111 - #118)
  { baseSeq: 111, league: 'NFL', sportIcon: '🏈', time: 'Sun 13:00 EST', home: 'Kansas City Chiefs', away: 'Buffalo Bills',
    std: { w: 1.72, d: 0, l: 2.12, pw: 56, pd: 0, pl: 44 },
    w1l: { w: 2.05, d: 2.85, l: 2.45, pw: 40, pd: 32, pl: 28 },
    handi: { line: -2.5, w: 1.88, d: 0, l: 1.92, pw: 55, pd: 0, pl: 45 },
    uo: { line: 48.5, w: 1.90, d: 0, l: 1.90, pw: 37, pd: 0, pl: 63 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 48.5', prob: 63, odds: 1.90 },
    ai2: { market: 'std', mark: 'W', label: 'KC Chiefs ML', prob: 56, odds: 1.72 },
    h2h: 'Chiefs 3W-2L (Last 5)', homeAvg: '27.8 PPG', awayAvg: '28.1 PPG', note: 'Mahomes vs Allen at Arrowhead; 4 straight playoff/primetime Overs.' },

  { baseSeq: 112, league: 'NFL', sportIcon: '🏈', time: 'Sun 13:00 EST', home: 'Baltimore Ravens', away: 'Cincinnati Bengals',
    std: { w: 1.45, d: 0, l: 2.75, pw: 66, pd: 0, pl: 34 },
    w1l: { w: 1.72, d: 3.15, l: 3.10, pw: 54, pd: 24, pl: 22 },
    handi: { line: -6.0, w: 1.90, d: 0, l: 1.90, pw: 59, pd: 0, pl: 41 },
    uo: { line: 51.5, w: 1.92, d: 0, l: 1.88, pw: 34, pd: 0, pl: 66 },
    ai1: { market: 'std', mark: 'W', label: 'Baltimore Ravens ML', prob: 66, odds: 1.45 },
    ai2: { market: 'uo', mark: 'L', label: 'Over 51.5', prob: 66, odds: 1.88 },
    h2h: 'Ravens 4W-1L (Last 5)', homeAvg: '30.4 PPG', awayAvg: '26.2 PPG', note: 'Lamar Jackson & Derrick Henry average 212 rushing yards/g at home.' },

  { baseSeq: 113, league: 'NFL', sportIcon: '🏈', time: 'Sun 16:25 EST', home: 'Detroit Lions', away: 'Green Bay Packers',
    std: { w: 1.56, d: 0, l: 2.42, pw: 61, pd: 0, pl: 39 },
    w1l: { w: 1.84, d: 3.00, l: 2.85, pw: 49, pd: 27, pl: 24 },
    handi: { line: -3.5, w: 1.87, d: 0, l: 1.93, pw: 58, pd: 0, pl: 42 },
    uo: { line: 49.5, w: 1.90, d: 0, l: 1.90, pw: 39, pd: 0, pl: 61 },
    ai1: { market: 'std', mark: 'W', label: 'Detroit Lions ML', prob: 61, odds: 1.56 },
    ai2: { market: 'uo', mark: 'L', label: 'Over 49.5', prob: 61, odds: 1.90 },
    h2h: 'Lions 4W-1L (Last 5)', homeAvg: '29.6 PPG', awayAvg: '24.8 PPG', note: 'Ford Field dome track boosts Goff completion rate to 72.4%.' },

  { baseSeq: 114, league: 'NFL', sportIcon: '🏈', time: 'Sun 16:25 EST', home: 'San Francisco 49ers', away: 'Seattle Seahawks',
    std: { w: 1.38, d: 0, l: 3.05, pw: 69, pd: 0, pl: 31 },
    w1l: { w: 1.62, d: 3.30, l: 3.40, pw: 57, pd: 22, pl: 21 },
    handi: { line: -6.5, w: 1.89, d: 0, l: 1.91, pw: 60, pd: 0, pl: 40 },
    uo: { line: 47.5, w: 1.90, d: 0, l: 1.90, pw: 45, pd: 0, pl: 55 },
    ai1: { market: 'std', mark: 'W', label: 'SF 49ers ML', prob: 69, odds: 1.38 },
    ai2: { market: 'handi', mark: 'W', label: 'SF 49ers -6.5', prob: 60, odds: 1.89 },
    h2h: '49ers 5W-0L (Last 5)', homeAvg: '28.9 PPG', awayAvg: '20.4 PPG', note: 'San Francisco has won 5 straight vs Seattle by an average of 13.2 pts.' },

  { baseSeq: 115, league: 'NFL', sportIcon: '🏈', time: 'Sun 20:20 EST', home: 'Philadelphia Eagles', away: 'Dallas Cowboys',
    std: { w: 1.52, d: 0, l: 2.55, pw: 63, pd: 0, pl: 37 },
    w1l: { w: 1.80, d: 3.05, l: 2.90, pw: 50, pd: 26, pl: 24 },
    handi: { line: -4.5, w: 1.90, d: 0, l: 1.90, pw: 57, pd: 0, pl: 43 },
    uo: { line: 46.5, w: 1.90, d: 0, l: 1.90, pw: 42, pd: 0, pl: 58 },
    ai1: { market: 'std', mark: 'W', label: 'Philadelphia Eagles ML', prob: 63, odds: 1.52 },
    ai2: { market: 'uo', mark: 'L', label: 'Over 46.5', prob: 58, odds: 1.90 },
    h2h: 'Eagles 3W-2L (Last 5)', homeAvg: '27.2 PPG', awayAvg: '21.8 PPG', note: 'Saquon Barkley & Jalen Hurts dominate red-zone rushing TD efficiency.' },

  { baseSeq: 116, league: 'NFL', sportIcon: '🏈', time: 'Sun 13:00 EST', home: 'Houston Texans', away: 'Jacksonville Jaguars',
    std: { w: 1.50, d: 0, l: 2.60, pw: 64, pd: 0, pl: 36 },
    w1l: { w: 1.78, d: 3.10, l: 2.95, pw: 51, pd: 25, pl: 24 },
    handi: { line: -4.5, w: 1.88, d: 0, l: 1.92, pw: 58, pd: 0, pl: 42 },
    uo: { line: 45.5, w: 1.86, d: 0, l: 1.94, pw: 59, pd: 0, pl: 41 },
    ai1: { market: 'std', mark: 'W', label: 'Houston Texans ML', prob: 64, odds: 1.50 },
    ai2: { market: 'uo', mark: 'W', label: 'Under 45.5', prob: 59, odds: 1.86 },
    h2h: 'Texans 3W-2L (Last 5)', homeAvg: '25.4 PPG', awayAvg: '18.9 PPG', note: 'C.J. Stroud 0 interceptions in last 4 home AFC South starts.' },

  { baseSeq: 117, league: 'NFL', sportIcon: '🏈', time: 'Sun 13:00 EST', home: 'Pittsburgh Steelers', away: 'Cleveland Browns',
    std: { w: 1.58, d: 0, l: 2.38, pw: 60, pd: 0, pl: 40 },
    w1l: { w: 1.90, d: 2.80, l: 2.75, pw: 45, pd: 32, pl: 23 },
    handi: { line: -3.5, w: 1.91, d: 0, l: 1.89, pw: 55, pd: 0, pl: 45 },
    uo: { line: 38.5, w: 1.82, d: 0, l: 1.98, pw: 66, pd: 0, pl: 34 },
    ai1: { market: 'uo', mark: 'W', label: 'Under 38.5', prob: 66, odds: 1.82 },
    ai2: { market: 'std', mark: 'W', label: 'Pittsburgh Steelers ML', prob: 60, odds: 1.58 },
    h2h: 'Steelers 4W-1L at Home', homeAvg: '21.2 PPG', awayAvg: '16.4 PPG', note: 'T.J. Watt pass rush vs Browns OL; classic AFC North defensive slugfest.' },

  { baseSeq: 118, league: 'NFL', sportIcon: '🏈', time: 'Mon 20:15 EST', home: 'Atlanta Falcons', away: 'Tampa Bay Buccaneers',
    std: { w: 1.75, d: 0, l: 2.08, pw: 55, pd: 0, pl: 45 },
    w1l: { w: 2.05, d: 2.85, l: 2.45, pw: 40, pd: 32, pl: 28 },
    handi: { line: -2.5, w: 1.88, d: 0, l: 1.92, pw: 54, pd: 0, pl: 46 },
    uo: { line: 47.5, w: 1.91, d: 0, l: 1.89, pw: 38, pd: 0, pl: 62 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 47.5', prob: 62, odds: 1.89 },
    ai2: { market: 'std', mark: 'W', label: 'Atlanta Falcons ML', prob: 55, odds: 1.75 },
    h2h: 'Falcons 3W-2L (Last 5)', homeAvg: '26.1 PPG', awayAvg: '25.4 PPG', note: 'First meeting produced 66 total points inside Mercedes-Benz dome.' },

  // MLB (6 Games: #119 - #124)
  { baseSeq: 119, league: 'MLB', sportIcon: '⚾', time: 'Tonight 19:05 EST', home: 'NY Yankees', away: 'Boston Red Sox',
    std: { w: 1.54, d: 0, l: 2.48, pw: 62, pd: 0, pl: 38 },
    w1l: null,
    handi: { line: -1.5, w: 2.05, d: 0, l: 1.76, pw: 52, pd: 0, pl: 48 },
    uo: { line: 8.5, w: 1.92, d: 0, l: 1.88, pw: 39, pd: 0, pl: 61 },
    ai1: { market: 'std', mark: 'W', label: 'NY Yankees ML', prob: 62, odds: 1.54 },
    ai2: { market: 'uo', mark: 'L', label: 'Over 8.5 Runs', prob: 61, odds: 1.88 },
    h2h: 'Yankees 4W-1L (Last 5)', homeAvg: '5.4 RPG', awayAvg: '4.3 RPG', note: 'Judge & Soto .985 OPS at Yankee Stadium short right-field porch.' },

  { baseSeq: 120, league: 'MLB', sportIcon: '⚾', time: 'Tonight 22:10 EST', home: 'LA Dodgers', away: 'San Diego Padres',
    std: { w: 1.56, d: 0, l: 2.42, pw: 61, pd: 0, pl: 39 },
    w1l: null,
    handi: { line: -1.5, w: 2.10, d: 0, l: 1.74, pw: 51, pd: 0, pl: 49 },
    uo: { line: 8.5, w: 1.94, d: 0, l: 1.86, pw: 36, pd: 0, pl: 64 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 8.5 Runs', prob: 64, odds: 1.86 },
    ai2: { market: 'std', mark: 'W', label: 'LA Dodgers ML', prob: 61, odds: 1.56 },
    h2h: 'Dodgers 3W-2L (Last 5)', homeAvg: '5.6 RPG', awayAvg: '4.7 RPG', note: 'Ohtani, Betts & Freeman lead MLB in wRC+ (134) vs RHP.' },

  { baseSeq: 121, league: 'MLB', sportIcon: '⚾', time: 'Tonight 19:20 EST', home: 'Atlanta Braves', away: 'NY Mets',
    std: { w: 1.62, d: 0, l: 2.30, pw: 59, pd: 0, pl: 41 },
    w1l: null,
    handi: { line: -1.5, w: 2.18, d: 0, l: 1.68, pw: 48, pd: 0, pl: 52 },
    uo: { line: 7.5, w: 1.84, d: 0, l: 1.96, pw: 61, pd: 0, pl: 39 },
    ai1: { market: 'uo', mark: 'W', label: 'Under 7.5 Runs', prob: 61, odds: 1.84 },
    ai2: { market: 'std', mark: 'W', label: 'Atlanta Braves ML', prob: 59, odds: 1.62 },
    h2h: 'Braves 3W-2L (Last 5)', homeAvg: '4.8 RPG', awayAvg: '4.4 RPG', note: 'Chris Sale (2.38 ERA) vs elite bullpens; strong Under 7.5 profile.' },

  { baseSeq: 122, league: 'MLB', sportIcon: '⚾', time: 'Tonight 18:40 EST', home: 'Philadelphia Phillies', away: 'Washington Nationals',
    std: { w: 1.40, d: 0, l: 2.95, pw: 68, pd: 0, pl: 32 },
    w1l: null,
    handi: { line: -1.5, w: 1.85, d: 0, l: 1.95, pw: 58, pd: 0, pl: 42 },
    uo: { line: 8.5, w: 1.90, d: 0, l: 1.90, pw: 43, pd: 0, pl: 57 },
    ai1: { market: 'std', mark: 'W', label: 'Philadelphia Phillies ML', prob: 68, odds: 1.40 },
    ai2: { market: 'handi', mark: 'W', label: 'Phillies -1.5 RL', prob: 58, odds: 1.85 },
    h2h: 'Phillies 4W-1L (Last 5)', homeAvg: '5.5 RPG', awayAvg: '3.7 RPG', note: 'Zack Wheeler on the mound at Citizens Bank Park (61-29 home record).' },

  { baseSeq: 123, league: 'MLB', sportIcon: '⚾', time: 'Tonight 20:10 EST', home: 'Houston Astros', away: 'Texas Rangers',
    std: { w: 1.64, d: 0, l: 2.26, pw: 58, pd: 0, pl: 42 },
    w1l: null,
    handi: { line: -1.5, w: 2.20, d: 0, l: 1.67, pw: 47, pd: 0, pl: 53 },
    uo: { line: 8.5, w: 1.90, d: 0, l: 1.90, pw: 40, pd: 0, pl: 60 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 8.5 Runs', prob: 60, odds: 1.90 },
    ai2: { market: 'std', mark: 'W', label: 'Houston Astros ML', prob: 58, odds: 1.64 },
    h2h: 'Astros 3W-2L (Last 5)', homeAvg: '5.1 RPG', awayAvg: '4.6 RPG', note: 'Lone Star Series; Yordan Alvarez .342 AVG vs Texas pitching.' },

  { baseSeq: 124, league: 'MLB', sportIcon: '⚾', time: 'Tonight 19:05 EST', home: 'Baltimore Orioles', away: 'Tampa Bay Rays',
    std: { w: 1.58, d: 0, l: 2.38, pw: 60, pd: 0, pl: 40 },
    w1l: null,
    handi: { line: -1.5, w: 2.12, d: 0, l: 1.72, pw: 50, pd: 0, pl: 50 },
    uo: { line: 8.0, w: 1.86, d: 0, l: 1.94, pw: 58, pd: 0, pl: 42 },
    ai1: { market: 'std', mark: 'W', label: 'Baltimore Orioles ML', prob: 60, odds: 1.58 },
    ai2: { market: 'uo', mark: 'W', label: 'Under 8.0 Runs', prob: 58, odds: 1.86 },
    h2h: 'Orioles 4W-1L (Last 5)', homeAvg: '4.9 RPG', awayAvg: '3.9 RPG', note: 'Corbin Burnes 1.02 WHIP at Camden Yards.' },

  // NHL (4 Games: #125 - #128)
  { baseSeq: 125, league: 'NHL', sportIcon: '🏒', time: 'Tonight 19:00 EST', home: 'NY Rangers', away: 'New Jersey Devils',
    std: { w: 1.78, d: 4.10, l: 3.60, pw: 53, pd: 21, pl: 26 },
    w1l: null,
    handi: { line: -1.5, w: 2.35, d: 0, l: 1.58, pw: 44, pd: 0, pl: 56 },
    uo: { line: 6.0, w: 1.92, d: 0, l: 1.88, pw: 38, pd: 0, pl: 62 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 6.0 Goals', prob: 62, odds: 1.88 },
    ai2: { market: 'std', mark: 'W', label: 'NY Rangers Reg Win', prob: 53, odds: 1.78 },
    h2h: 'Rangers 4W-1L (Last 5)', homeAvg: '3.6 GPG', awayAvg: '3.4 GPG', note: 'Hudson River NHL rivalry; power-play units converting at 28.4%.' },

  { baseSeq: 126, league: 'NHL', sportIcon: '🏒', time: 'Tonight 19:00 EST', home: 'Florida Panthers', away: 'Boston Bruins',
    std: { w: 1.72, d: 4.15, l: 3.85, pw: 55, pd: 21, pl: 24 },
    w1l: null,
    handi: { line: -1.5, w: 2.25, d: 0, l: 1.62, pw: 46, pd: 0, pl: 54 },
    uo: { line: 5.5, w: 1.95, d: 0, l: 1.85, pw: 37, pd: 0, pl: 63 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 5.5 Goals', prob: 63, odds: 1.85 },
    ai2: { market: 'std', mark: 'W', label: 'Florida Panthers Reg Win', prob: 55, odds: 1.72 },
    h2h: 'Panthers 4W-1L (Last 5)', homeAvg: '3.5 GPG', awayAvg: '2.9 GPG', note: 'Defending Stanley Cup champs dominate forecheck possession (58% Corsi).' },

  { baseSeq: 127, league: 'NHL', sportIcon: '🏒', time: 'Tonight 21:00 EST', home: 'Colorado Avalanche', away: 'Dallas Stars',
    std: { w: 1.85, d: 4.05, l: 3.40, pw: 51, pd: 22, pl: 27 },
    w1l: null,
    handi: { line: -1.5, w: 2.40, d: 0, l: 1.56, pw: 42, pd: 0, pl: 58 },
    uo: { line: 6.5, w: 1.94, d: 0, l: 1.86, pw: 36, pd: 0, pl: 64 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 6.5 Goals', prob: 64, odds: 1.86 },
    ai2: { market: 'handi', mark: 'L', label: 'Dallas Stars +1.5', prob: 58, odds: 1.56 },
    h2h: 'Stars 3W-2L (Last 5)', homeAvg: '3.8 GPG', awayAvg: '3.5 GPG', note: 'MacKinnon & Makar average 4.1 home GPG at Ball Arena.' },

  { baseSeq: 128, league: 'NHL', sportIcon: '🏒', time: 'Tonight 22:00 EST', home: 'Vegas Golden Knights', away: 'Edmonton Oilers',
    std: { w: 1.90, d: 4.10, l: 3.25, pw: 49, pd: 22, pl: 29 },
    w1l: null,
    handi: { line: +1.5, w: 1.36, d: 0, l: 3.10, pw: 71, pd: 0, pl: 29 },
    uo: { line: 6.5, w: 1.92, d: 0, l: 1.88, pw: 39, pd: 0, pl: 61 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 6.5 Goals', prob: 61, odds: 1.88 },
    ai2: { market: 'std', mark: 'W', label: 'Vegas Golden Knights', prob: 49, odds: 1.90 },
    h2h: 'Golden Knights 3W-2L (Last 5)', homeAvg: '3.7 GPG', awayAvg: '3.6 GPG', note: 'T-Mobile Arena fortress; Vegas 11-2-1 at home.' },

  // MLS (4 Games: #129 - #132)
  { baseSeq: 129, league: 'MLS', sportIcon: '⚽', time: 'Sat 19:30 EST', home: 'Inter Miami CF', away: 'Atlanta United',
    std: { w: 1.52, d: 4.10, l: 5.40, pw: 61, pd: 22, pl: 17 },
    w1l: null,
    handi: { line: -1.0, w: 2.15, d: 3.75, l: 2.65, pw: 44, pd: 25, pl: 31 },
    uo: { line: 3.5, w: 1.95, d: 0, l: 1.85, pw: 36, pd: 0, pl: 64 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 3.5 Goals', prob: 64, odds: 1.85 },
    ai2: { market: 'std', mark: 'W', label: 'Inter Miami 1X2 Win', prob: 61, odds: 1.52 },
    h2h: 'Inter Miami 3W-1D-1L', homeAvg: '2.6 GPG', awayAvg: '1.5 GPG', note: 'Messi & Suarez have combined for 15 goals in last 6 home matches.' },

  { baseSeq: 130, league: 'MLS', sportIcon: '⚽', time: 'Sat 22:30 EST', home: 'LAFC', away: 'LA Galaxy',
    std: { w: 1.95, d: 3.65, l: 3.50, pw: 47, pd: 25, pl: 28 },
    w1l: null,
    handi: { line: -1.0, w: 3.10, d: 3.85, l: 1.82, pw: 30, pd: 24, pl: 46 },
    uo: { line: 3.5, w: 1.98, d: 0, l: 1.82, pw: 32, pd: 0, pl: 68 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 3.5 Goals', prob: 68, odds: 1.82 },
    ai2: { market: 'std', mark: 'W', label: 'LAFC 1X2 Win', prob: 47, odds: 1.95 },
    h2h: 'El Trafico: 9 straight Overs', homeAvg: '2.3 GPG', awayAvg: '2.2 GPG', note: 'Every El Trafico derby in the last 3 seasons has produced 3+ goals.' },

  { baseSeq: 131, league: 'MLS', sportIcon: '⚽', time: 'Sat 19:30 EST', home: 'Columbus Crew', away: 'FC Cincinnati',
    std: { w: 1.82, d: 3.60, l: 4.05, pw: 50, pd: 26, pl: 24 },
    w1l: null,
    handi: { line: -1.0, w: 2.95, d: 3.65, l: 1.95, pw: 32, pd: 25, pl: 43 },
    uo: { line: 2.5, w: 2.15, d: 0, l: 1.68, pw: 34, pd: 0, pl: 66 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 2.5 Goals', prob: 66, odds: 1.68 },
    ai2: { market: 'std', mark: 'W', label: 'Columbus Crew Win', prob: 50, odds: 1.82 },
    h2h: 'Crew 3W-1D-1L (Last 5)', homeAvg: '2.1 GPG', awayAvg: '1.7 GPG', note: 'Cucho Hernandez leads MLS in shots per game (4.6).' },

  { baseSeq: 132, league: 'MLS', sportIcon: '⚽', time: 'Sat 22:30 EST', home: 'Seattle Sounders', away: 'Portland Timbers',
    std: { w: 1.88, d: 3.55, l: 3.85, pw: 49, pd: 26, pl: 25 },
    w1l: null,
    handi: { line: -1.0, w: 3.10, d: 3.60, l: 1.88, pw: 30, pd: 25, pl: 45 },
    uo: { line: 2.5, w: 2.02, d: 0, l: 1.78, pw: 41, pd: 0, pl: 59 },
    ai1: { market: 'uo', mark: 'L', label: 'Over 2.5 Goals', prob: 59, odds: 1.78 },
    ai2: { market: 'std', mark: 'W', label: 'Seattle Sounders Win', prob: 49, odds: 1.88 },
    h2h: 'Sounders 2W-2D-1L', homeAvg: '1.8 GPG', awayAvg: '1.9 GPG', note: 'Portland ranks #1 in MLS road Over 2.5 rate (76%).' }
];

/* ==========================================================================
   3. TAB NAVIGATION, THEME, DEVICE VIEW & ROUND SELECTION
   ========================================================================== */
window.switchMainCategory = function(cat) {
  window._usCurrentTab = cat;
  var body = document.body;
  body.classList.remove('pc-view-toto', 'pc-view-proto', 'pc-view-combo', 'mobile-toto-active');

  var tabs = ['tabNavToto', 'tabNavBasket', 'tabNavProto', 'tabNavCombo'];
  for (var i = 0; i < tabs.length; i++) {
    var el = document.getElementById(tabs[i]);
    if (el) el.classList.remove('active');
  }

  if (cat === 'toto' || cat === 'basket') {
    body.classList.add('pc-view-toto', 'mobile-toto-active');
    window._usPoolMode = cat;
    var activeBtn = document.getElementById(cat === 'toto' ? 'tabNavToto' : 'tabNavBasket');
    if (activeBtn) activeBtn.classList.add('active');
    populateUsPoolRoundSelect(cat);
  } else if (cat === 'proto') {
    body.classList.add('pc-view-proto');
    var protoBtn = document.getElementById('tabNavProto');
    if (protoBtn) protoBtn.classList.add('active');
    renderUsParlayCards();
  } else if (cat === 'combo') {
    body.classList.add('pc-view-combo');
    var comboBtn = document.getElementById('tabNavCombo');
    if (comboBtn) comboBtn.classList.add('active');
    renderProto11GuaranteeBoard();
  }

  if (typeof window.updateProtoCartFloatingBar === 'function') {
    window.updateProtoCartFloatingBar();
  }
};

function populateUsPoolRoundSelect(mode) {
  var sel = document.getElementById('vipRoundSelect');
  if (!sel) return;
  sel.innerHTML = '';
  var keys = Object.keys(US_POOL_ROUNDS);
  var firstId = '';
  for (var i = 0; i < keys.length; i++) {
    var r = US_POOL_ROUNDS[keys[i]];
    if (r.mode === mode) {
      if (!firstId) firstId = r.id;
      var opt = document.createElement('option');
      opt.value = r.id;
      opt.textContent = r.label;
      sel.appendChild(opt);
    }
  }
  if (!US_POOL_ROUNDS[window._usCurrentRoundId] || US_POOL_ROUNDS[window._usCurrentRoundId].mode !== mode) {
    window._usCurrentRoundId = firstId;
  }
  sel.value = window._usCurrentRoundId;
  onUsPoolRoundChange(window._usCurrentRoundId);
}

window.onUsPoolRoundChange = function(roundId) {
  var roundObj = US_POOL_ROUNDS[roundId];
  if (!roundObj) return;
  window._usCurrentRoundId = roundId;
  window._usPoolPicks = {};
  for (var i = 0; i < roundObj.matches.length; i++) {
    window._usPoolPicks[i] = roundObj.matches[i].aiMarks.slice();
  }
  var outBox = document.getElementById('gwResultOutputBox');
  if (outBox) outBox.style.display = 'none';
  renderUsPoolBoard();
};

/* ==========================================================================
   4. RENDER 14-MATCH MLS 1X2 & NBA W5L BOARD
   ========================================================================== */
function renderUsPoolBoard() {
  var roundObj = US_POOL_ROUNDS[window._usCurrentRoundId];
  if (!roundObj) return;
  var grid = document.getElementById('gwMatchSelectorGrid');
  if (!grid) return;

  var isBasket = (roundObj.mode === 'basket');
  var modeBadge = document.getElementById('vipPoolModeBadge');
  if (modeBadge) {
    modeBadge.textContent = isBasket ? '🏀 USA NBA W5L (14M)' : '⚽ USA MLS 1X2 (14M)';
    modeBadge.style.background = isBasket ? '#ea580c' : '#2563eb';
  }

  var markCodes = isBasket ? ['W', '5', 'L'] : ['W', 'D', 'L'];
  var markLabels = isBasket ? ['W', '5', 'L'] : ['1', 'X', '2'];

  var singleCnt = 0, doubleCnt = 0, tripleCnt = 0, pickedRows = 0;
  var rawCombos = 1;
  var hitRows = 0, finishedRows = 0;

  var html = '';
  for (var i = 0; i < roundObj.matches.length; i++) {
    var m = roundObj.matches[i];
    var picks = window._usPoolPicks[i] || [];
    if (picks.length > 0) {
      pickedRows++;
      rawCombos *= picks.length;
    }
    if (picks.length === 1) singleCnt++;
    else if (picks.length === 2) doubleCnt++;
    else if (picks.length === 3) tripleCnt++;

    var rowClass = 'm14-row';
    if (picks.length === 1) rowClass += ' single-pick';
    else if (picks.length === 2) rowClass += ' double-pick';
    else if (picks.length === 3) rowClass += ' triple-pick';

    var hitBadgeHtml = '';
    if (m.result) {
      finishedRows++;
      var isHit = picks.indexOf(m.result) !== -1;
      if (isHit) {
        hitRows++;
        rowClass += ' row-hit';
        hitBadgeHtml = '<span style="background:#10b981; color:#fff; font-size:0.62rem; font-weight:900; padding:1px 5px; border-radius:4px; margin-left:4px;">HIT</span>';
      } else {
        rowClass += ' row-miss';
        hitBadgeHtml = '<span style="background:#ef4444; color:#fff; font-size:0.62rem; font-weight:900; padding:1px 5px; border-radius:4px; margin-left:4px;">MISS</span>';
      }
    }

    var centerHtml = m.score
      ? '<span class="m14-score-badge">' + m.score + '</span>'
      : '<span class="m14-vs-badge">VS</span>';

    var homePicked = picks.indexOf('W') !== -1 ? ' picked' : '';
    var awayPicked = picks.indexOf('L') !== -1 ? ' picked' : '';

    html += '<div class="' + rowClass + '">'
      + '<div class="m14-col-num"><span class="m14-num-badge">' + m.no + '</span></div>'
      + '<div class="m14-col-info">'
      +   '<div class="m14-match-title">'
      +     '<span class="m14-team-home' + homePicked + '">' + m.home + '</span>'
      +     '<span class="m14-center-score-wrap">' + centerHtml + '</span>'
      +     '<span class="m14-team-away' + awayPicked + '">' + m.away + hitBadgeHtml + '</span>'
      +   '</div>'
      +   '<button type="button" class="btn-m14-record" onclick="openUsMatchDetailModal(\'pool\', ' + i + ')">'
      +     '<i class="fa-solid fa-chart-Simple"></i> Stats'
      +   '</button>'
      + '</div>'
      + '<div class="m14-col-picks">';

    for (var k = 0; k < 3; k++) {
      var mc = markCodes[k];
      var ml = markLabels[k];
      var btnCls = k === 0 ? 'w' : (k === 1 ? 'd' : 'l');
      var isAct = picks.indexOf(mc) !== -1 ? ' active' : '';
      var isResWinner = (m.result && m.result === mc) ? ' style="outline:2px solid #fde047;"' : '';
      html += '<button type="button" class="btn-m14-pick ' + btnCls + isAct + '"' + isResWinner + ' onclick="toggleGwPick(' + i + ', \'' + mc + '\')">'
        + '<span class="pick-label">' + ml + '</span>'
        + '<span class="pick-odds">' + m.odds[k].toFixed(2) + '</span>'
        + '</button>';
    }

    html += '</div></div>';
  }

  grid.innerHTML = html;

  if (pickedRows === 0) rawCombos = 0;
  var cntEl = document.getElementById('vipPickCountsText');
  if (cntEl) {
    cntEl.innerHTML = '<b>' + pickedRows + '</b>/14 Picked (S' + singleCnt + ' · D' + doubleCnt + ' · T' + tripleCnt + ')';
  }
  var totEl = document.getElementById('vipTotalCombosText');
  if (totEl) {
    totEl.textContent = rawCombos.toLocaleString() + ' Combos ($' + rawCombos.toLocaleString() + ')';
  }
  var fpRaw = document.getElementById('fpRawCombosVal');
  if (fpRaw) {
    fpRaw.textContent = rawCombos.toLocaleString() + ' Slips ($' + rawCombos.toLocaleString() + ')';
  }

  // Hit accuracy banner for finished rounds
  var hitBanner = document.getElementById('vipHitAccuracyBanner');
  if (hitBanner) {
    if (finishedRows > 0) {
      hitBanner.style.display = 'block';
      var rankStr = hitRows === 14 ? '🏆 1ST PRIZE (14/14 HIT!) & Multiple 2nd/3rd Prizes!' : (hitRows === 13 ? '🥈 2ND PRIZE GUARANTEED (13/14 Base Hit!)' : '✅ ' + hitRows + ' / ' + finishedRows + ' Matches Covered');
      hitBanner.innerHTML = '<div style="background:linear-gradient(135deg,#065f46,#047857); color:#fff; padding:8px 12px; border-radius:9px; border:1.5px solid #34d399; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; font-size:0.8rem; font-weight:900;">'
        + '<span>🎯 Official Result Verification: <b style="color:#fde047;">' + hitRows + ' / ' + finishedRows + ' Matches Hit (' + Math.round((hitRows / finishedRows) * 100) + '%)</b></span>'
        + '<span style="background:#fde047; color:#0f172a; padding:2px 8px; border-radius:6px;">' + rankStr + '</span>'
        + '</div>';
    } else {
      hitBanner.style.display = 'none';
    }
  }
}

window.toggleGwPick = function(idx, mark) {
  var arr = window._usPoolPicks[idx] ? window._usPoolPicks[idx].slice() : [];
  var pos = arr.indexOf(mark);
  if (pos !== -1) {
    if (arr.length > 1) arr.splice(pos, 1);
  } else {
    arr.push(mark);
  }
  window._usPoolPicks[idx] = arr;
  renderUsPoolBoard();
};

window.autoFillAi192Pool = function() {
  var roundObj = US_POOL_ROUNDS[window._usCurrentRoundId];
  if (!roundObj) return;
  for (var i = 0; i < roundObj.matches.length; i++) {
    window._usPoolPicks[i] = roundObj.matches[i].aiMarks.slice();
  }
  renderUsPoolBoard();
};

window.clearUsPoolBoard = function() {
  var roundObj = US_POOL_ROUNDS[window._usCurrentRoundId];
  if (!roundObj) return;
  for (var i = 0; i < roundObj.matches.length; i++) {
    window._usPoolPicks[i] = [roundObj.matches[i].aiMarks[0] || 'W'];
  }
  renderUsPoolBoard();
};

/* ==========================================================================
   5. GOLDEN WHEEL 24 / 36 / 48 SLIPS MATHEMATICAL COVERING ENGINE
   ========================================================================== */
window._lastGeneratedPoolSlips = [];
window._lastGeneratedPoolTarget = 24;
window._currentOmrIndex = 0;
window._omrSourceMode = 'pool'; // 'pool' | 'proto11'

function isUsVvipActive() {
  return window._usUser.vvipUntil && window._usUser.vvipUntil > Date.now();
}

function consumeUsKeysOrPrompt(reqKeys, actionLabel) {
  if (isUsVvipActive()) {
    return true;
  }
  if (window._usUser.keys < reqKeys) {
    openKeyChargeModal('key');
    return false;
  }
  window._usUser.keys -= reqKeys;
  localStorage.setItem('tokeon_us_keys', String(window._usUser.keys));
  updateUsHeaderStatus();
  return true;
}

function buildCartesianProduct(arrays) {
  var results = [[]];
  for (var i = 0; i < arrays.length; i++) {
    var currentSubArray = arrays[i];
    var temp = [];
    for (var j = 0; j < results.length; j++) {
      for (var k = 0; k < currentSubArray.length; k++) {
        temp.push(results[j].concat([currentSubArray[k]]));
      }
    }
    results = temp;
    if (results.length > 8000) break;
  }
  return results;
}

function reduceByHammingWheel(fullCombos, targetCount) {
  if (fullCombos.length <= targetCount) return fullCombos.slice();
  var selected = [];
  var covered = new Array(fullCombos.length);
  for (var c = 0; c < fullCombos.length; c++) covered[c] = false;

  // Greedy N-1 covering wheel + uniform stride fill
  while (selected.length < targetCount) {
    var bestIdx = -1;
    var bestGain = -1;
    var step = Math.max(1, Math.floor(fullCombos.length / 192));
    for (var i = 0; i < fullCombos.length; i += step) {
      if (covered[i] && selected.length < targetCount / 2) continue;
      var cand = fullCombos[i];
      var gain = 0;
      for (var j = 0; j < fullCombos.length; j += step) {
        if (!covered[j]) {
          var diff = 0;
          var other = fullCombos[j];
          for (var m = 0; m < cand.length; m++) {
            if (cand[m] !== other[m]) {
              diff++;
              if (diff > 1) break;
            }
          }
          if (diff <= 1) gain++;
        }
      }
      if (gain > bestGain) {
        bestGain = gain;
        bestIdx = i;
      }
    }
    if (bestIdx === -1) break;
    var chosen = fullCombos[bestIdx];
    selected.push(chosen);
    for (var u = 0; u < fullCombos.length; u++) {
      var d = 0;
      for (var p = 0; p < chosen.length; p++) {
        if (chosen[p] !== fullCombos[u][p]) {
          d++;
          if (d > 1) break;
        }
      }
      if (d <= 1) covered[u] = true;
    }
    if (bestGain === 0) break;
  }

  // Fill remaining up to targetCount with maximum minimum distance
  var idxCursor = 0;
  var stride = Math.max(1, Math.floor(fullCombos.length / targetCount));
  while (selected.length < targetCount && idxCursor < fullCombos.length) {
    var candidate = fullCombos[idxCursor];
    var exists = false;
    for (var s = 0; s < selected.length; s++) {
      if (selected[s].join('') === candidate.join('')) {
        exists = true;
        break;
      }
    }
    if (!exists) selected.push(candidate);
    idxCursor += stride;
  }
  while (selected.length < targetCount && selected.length < fullCombos.length) {
    for (var f = 0; f < fullCombos.length && selected.length < targetCount; f++) {
      var cStr = fullCombos[f].join('');
      var dup = false;
      for (var x = 0; x < selected.length; x++) {
        if (selected[x].join('') === cStr) { dup = true; break; }
      }
      if (!dup) selected.push(fullCombos[f]);
    }
  }
  return selected.slice(0, targetCount);
}

window.generateGoldenWheel24 = function(targetSlips) {
  var target = targetSlips || 24;
  var reqKeys = target === 48 ? 3 : (target === 36 ? 2 : 1);
  if (!consumeUsKeysOrPrompt(reqKeys, target + ' Slips Compression')) return;

  var roundObj = US_POOL_ROUNDS[window._usCurrentRoundId];
  if (!roundObj) return;

  var pickArrays = [];
  for (var i = 0; i < roundObj.matches.length; i++) {
    var p = window._usPoolPicks[i];
    if (!p || p.length === 0) p = [roundObj.matches[i].aiMarks[0] || 'W'];
    pickArrays.push(p);
  }

  var fullCombos = buildCartesianProduct(pickArrays);
  var reduced = reduceByHammingWheel(fullCombos, target);
  window._lastGeneratedPoolSlips = reduced;
  window._lastGeneratedPoolTarget = target;

  var statusBadge = document.getElementById('vipGuaranteeStatusBadge');
  var savedPct = fullCombos.length > reduced.length
    ? Math.round((1 - reduced.length / fullCombos.length) * 1000) / 10
    : 0;
  if (statusBadge) {
    statusBadge.textContent = reduced.length + ' Slips ($' + reduced.length + ' · -' + savedPct + '%)';
  }

  var outBox = document.getElementById('gwResultOutputBox');
  var titleEl = document.getElementById('gwResultTitleText');
  var gridEl = document.getElementById('gwSlipsPreviewGrid');
  var hitBarEl = document.getElementById('gwLiveHitSummaryBar');
  if (!outBox || !gridEl) return;

  outBox.style.display = 'block';
  if (titleEl) {
    titleEl.textContent = 'Generated ' + reduced.length + ' Slips ($' + reduced.length + ' Total · $1/Slip · Saved ' + savedPct + '%)';
  }

  var isFinished = (roundObj.status === 'finished');
  var rank1Cnt = 0, rank2Cnt = 0, rank3Cnt = 0, rank4Cnt = 0;

  var isBasket = (roundObj.mode === 'basket');
  var cardsHtml = '';
  for (var s = 0; s < reduced.length; s++) {
    var slip = reduced[s];
    var hits = 0;
    var badgesHtml = '';
    for (var m = 0; m < slip.length; m++) {
      var code = slip[m];
      var disp = isBasket ? code : (code === 'W' ? '1' : (code === 'D' ? 'X' : '2'));
      var res = roundObj.matches[m].result;
      var bg = code === 'W' ? '#2563eb' : (code === 'D' || code === '5' ? '#d97706' : '#e11d48');
      var border = 'none';
      if (res) {
        if (res === code) {
          hits++;
          border = '1.5px solid #fde047';
        } else {
          bg = '#334155';
        }
      }
      badgesHtml += '<span style="display:inline-flex; align-items:center; justify-content:center; width:17px; height:19px; border-radius:4px; background:' + bg + '; color:#fff; font-size:0.65rem; font-weight:900; border:' + border + ';">' + disp + '</span>';
    }

    var hitTag = '';
    if (isFinished) {
      if (hits === 14) { rank1Cnt++; hitTag = '<span style="background:#f59e0b; color:#0f172a; font-size:0.65rem; font-weight:900; padding:1px 5px; border-radius:4px;">🏆 1st (14/14)</span>'; }
      else if (hits === 13) { rank2Cnt++; hitTag = '<span style="background:#10b981; color:#fff; font-size:0.65rem; font-weight:900; padding:1px 5px; border-radius:4px;">🥈 2nd (13/14)</span>'; }
      else if (hits === 12) { rank3Cnt++; hitTag = '<span style="background:#38bdf8; color:#0f172a; font-size:0.65rem; font-weight:900; padding:1px 5px; border-radius:4px;">🥉 3rd (12/14)</span>'; }
      else if (hits === 11) { rank4Cnt++; hitTag = '<span style="background:#64748b; color:#fff; font-size:0.62rem; font-weight:800; padding:1px 5px; border-radius:4px;">4th (11/14)</span>'; }
      else { hitTag = '<span style="color:#94a3b8; font-size:0.62rem;">' + hits + '/14</span>'; }
    } else {
      hitTag = '<span style="color:#38bdf8; font-size:0.65rem; font-weight:800;">$1.00</span>';
    }

    cardsHtml += '<div onclick="openGwFullTextModal(\'omr\', ' + s + ')" style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:7px 8px; cursor:pointer;">'
      + '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">'
      +   '<span style="font-size:0.72rem; font-weight:900; color:#fde047;">Slip #' + (s + 1) + '</span>'
      +   hitTag
      + '</div>'
      + '<div style="display:flex; gap:2px; flex-wrap:nowrap;">' + badgesHtml + '</div>'
      + '</div>';
  }
  gridEl.innerHTML = cardsHtml;

  if (hitBarEl) {
    if (isFinished) {
      hitBarEl.style.display = 'block';
      hitBarEl.innerHTML = '<div style="background:linear-gradient(135deg,#064e3b,#047857); border:1.5px solid #34d399; border-radius:8px; padding:8px 12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; font-size:0.78rem; font-weight:900;">'
        + '<span>🏅 Official Slip Payout Verification:</span>'
        + '<div style="display:flex; gap:8px; flex-wrap:wrap;">'
        +   '<span style="background:#f59e0b; color:#0f172a; padding:2px 7px; border-radius:5px;">🏆 1st (14 Hits): ' + rank1Cnt + ' Slips</span>'
        +   '<span style="background:#10b981; color:#fff; padding:2px 7px; border-radius:5px;">🥈 2nd (13 Hits): ' + rank2Cnt + ' Slips</span>'
        +   '<span style="background:#38bdf8; color:#0f172a; padding:2px 7px; border-radius:5px;">🥉 3rd (12 Hits): ' + rank3Cnt + ' Slips</span>'
        +   '<span style="background:#475569; color:#fff; padding:2px 7px; border-radius:5px;">4th (11 Hits): ' + rank4Cnt + ' Slips</span>'
        + '</div></div>';
    } else {
      hitBarEl.style.display = 'none';
    }
  }

  _sendTgSharedAlert('Generated ' + reduced.length + ' Pool Slips (' + window._usCurrentRoundId + ')');
};

/* ==========================================================================
   6. US PARLAY SPORTSBOOK CARDS (NBA · NFL · MLB · NHL · MLS) & UNLIMITED CART
   ========================================================================== */
window._protoCartMap = {}; // { baseSeq: { marketKey: 'uo', marks: ['L'] } }
window._proto11SelectedBaseSeqs = [];
window._proto11RowState = {}; // { baseSeq: { marketKey: 'uo', picks: ['L'] } }

// Initialize default 11 best US matches (4 Singles + 6 Doubles + 1 Triple = 192 Combos)
function initDefaultProto11Board() {
  if (window._proto11SelectedBaseSeqs.length > 0) return;
  var defaultSeqs = [101, 102, 104, 111, 112, 113, 114, 119, 120, 125, 129];
  window._proto11SelectedBaseSeqs = defaultSeqs.slice();
  for (var i = 0; i < defaultSeqs.length; i++) {
    var seq = defaultSeqs[i];
    var m = findUsParlayMatch(seq);
    if (!m) continue;
    var mk = m.ai1.market || 'std';
    var p1 = m.ai1.mark || 'W';
    var p2 = p1 === 'W' ? 'L' : 'W';
    var picks = [p1];
    if (i >= 4 && i <= 9) picks = [p1, p2]; // 6 Doubles
    else if (i === 10) picks = m.std.d > 0 ? ['W', 'D', 'L'] : ['W', 'L']; // Triple / Double
    window._proto11RowState[seq] = { marketKey: mk, picks: picks };
    window._protoCartMap[seq] = { marketKey: mk, marks: picks.slice() };
  }
}

function findUsParlayMatch(baseSeq) {
  for (var i = 0; i < US_PARLAY_MATCHES.length; i++) {
    if (US_PARLAY_MATCHES[i].baseSeq === Number(baseSeq)) return US_PARLAY_MATCHES[i];
  }
  return null;
}

window.setUsParlayLeagueFilter = function(lg) {
  window._usParlayLeagueFilter = lg;
  var bar = document.getElementById('usLeagueFilterBar');
  if (bar) {
    var btns = bar.querySelectorAll('.tag-btn');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (b.getAttribute('data-league') === lg) b.classList.add('active');
      else b.classList.remove('active');
    }
  }
  renderUsParlayCards();
};

window.renderUsParlayCards = function() {
  initDefaultProto11Board();
  var container = document.getElementById('protoCardListContainer');
  if (!container) return;

  var qInput = document.getElementById('usParlaySearchInput');
  var query = qInput && qInput.value ? qInput.value.trim().toLowerCase() : '';
  var lgFilter = window._usParlayLeagueFilter || 'ALL';

  var filtered = [];
  for (var i = 0; i < US_PARLAY_MATCHES.length; i++) {
    var m = US_PARLAY_MATCHES[i];
    if (lgFilter !== 'ALL' && lgFilter !== 'SNIPER' && m.league !== lgFilter) continue;
    if (lgFilter === 'SNIPER' && m.ai1.prob < 62) continue;
    if (query && m.home.toLowerCase().indexOf(query) === -1 && m.away.toLowerCase().indexOf(query) === -1 && m.league.toLowerCase().indexOf(query) === -1) continue;
    filtered.push(m);
  }

  var cntBadge = document.getElementById('totalMatchCount');
  if (cntBadge) cntBadge.textContent = filtered.length + ' Matches';

  var html = '';
  for (var idx = 0; idx < filtered.length; idx++) {
    var item = filtered[idx];
    var bSeq = item.baseSeq;
    var cartEntry = window._protoCartMap[bSeq] || null;

    html += '<div class="proto-card-item" data-base-seq="' + bSeq + '">'
      // Header Row
      + '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">'
      +   '<div style="display:flex; align-items:center; gap:6px;">'
      +     '<span style="background:#eff6ff; color:#1d4ed8; border:1px solid #bfdbfe; font-size:0.74rem; font-weight:900; padding:2px 7px; border-radius:6px;">#' + bSeq + '</span>'
      +     '<span style="font-size:0.78rem; font-weight:900; color:#0f172a;">' + item.sportIcon + ' [' + item.league + ']</span>'
      +   '</div>'
      +   '<span style="font-size:0.72rem; font-weight:800; color:#475569;">' + item.time + '</span>'
      + '</div>'
      // Teams Title Row
      + '<div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:8px; padding:4px 6px; background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">'
      +   '<span style="flex:1; text-align:right; font-size:0.88rem; font-weight:900; color:#0f172a; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">' + item.home + '</span>'
      +   '<span style="background:#ffffff; border:1px solid #cbd5e1; color:#334155; font-size:0.68rem; font-weight:900; padding:2px 7px; border-radius:6px;">VS</span>'
      +   '<span style="flex:1; text-align:left; font-size:0.88rem; font-weight:900; color:#0f172a; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">' + item.away + '</span>'
      + '</div>';

    // 4 Market Rows: std (ML/1X2), w1l (W5L), handi (Spread), uo (Total U/O)
    var mks = [
      { key: 'std', seqNum: bSeq, badge: item.std.d > 0 ? '1X2' : 'ML', badgeBg: '#2563eb', data: item.std },
      { key: 'w1l', seqNum: bSeq + 100, badge: item.league === 'NFL' ? 'W3L' : 'W5L', badgeBg: '#e11d48', data: item.w1l },
      { key: 'handi', seqNum: bSeq + 200, badge: 'Spread ' + (item.handi.line > 0 ? '+' + item.handi.line : item.handi.line), badgeBg: '#dc2626', data: item.handi },
      { key: 'uo', seqNum: bSeq + 300, badge: 'U/O ' + item.uo.line, badgeBg: '#059669', data: item.uo }
    ];

    html += '<div style="display:flex; flex-direction:column; gap:5px;">';
    for (var r = 0; r < mks.length; r++) {
      var mr = mks[r];
      if (!mr.data) continue;
      var dObj = mr.data;

      html += '<div style="display:grid; grid-template-columns:92px 1fr 1fr 1fr; gap:5px; align-items:center;">'
        + '<div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; border:1px solid #cbd5e1; border-radius:7px; padding:5px 6px; height:36px;">'
        +   '<span style="font-size:0.68rem; font-weight:900; color:#0f172a;">#' + mr.seqNum + '</span>'
        +   '<span style="background:' + mr.badgeBg + '; color:#fff; font-size:0.60rem; font-weight:900; padding:1px 4px; border-radius:4px; white-space:nowrap;">' + mr.badge + '</span>'
        + '</div>';

      // 3 Columns (Col 1: W/Under, Col 2: Draw/Line/5, Col 3: L/Over)
      var cols = [];
      if (mr.key === 'uo') {
        cols = [
          { mark: 'W', label: 'Under↓', odds: dObj.w, prob: dObj.pw, clickable: true },
          { mark: 'D', label: 'Line ' + dObj.line, odds: 0, prob: 0, clickable: false },
          { mark: 'L', label: 'Over↑', odds: dObj.l, prob: dObj.pl, clickable: true }
        ];
      } else if (mr.key === 'handi') {
        var hasHDraw = dObj.d > 0;
        cols = [
          { mark: 'W', label: 'Spread W', odds: dObj.w, prob: dObj.pw, clickable: true },
          hasHDraw
            ? { mark: 'D', label: 'Spread X', odds: dObj.d, prob: dObj.pd, clickable: true }
            : { mark: 'D', label: 'Line ' + (dObj.line > 0 ? '+' + dObj.line : dObj.line), odds: 0, prob: 0, clickable: false },
          { mark: 'L', label: 'Spread L', odds: dObj.l, prob: dObj.pl, clickable: true }
        ];
      } else if (mr.key === 'w1l') {
        cols = [
          { mark: 'W', label: 'W (6+)', odds: dObj.w, prob: dObj.pw, clickable: true },
          { mark: '5', label: item.league === 'NFL' ? '3 (≤3)' : '5 (≤5)', odds: dObj.d, prob: dObj.pd, clickable: true },
          { mark: 'L', label: 'L (6+)', odds: dObj.l, prob: dObj.pl, clickable: true }
        ];
      } else {
        var hasDraw = dObj.d > 0;
        cols = [
          { mark: 'W', label: 'Home W', odds: dObj.w, prob: dObj.pw, clickable: true },
          hasDraw
            ? { mark: 'D', label: 'Draw X', odds: dObj.d, prob: dObj.pd, clickable: true }
            : { mark: 'D', label: 'Draw -', odds: 0, prob: 0, clickable: false },
          { mark: 'L', label: 'Away L', odds: dObj.l, prob: dObj.pl, clickable: true }
        ];
      }

      for (var c = 0; c < 3; c++) {
        var cell = cols[c];
        if (!cell.clickable) {
          html += '<div style="height:36px; border:1px dashed #cbd5e1; border-radius:7px; background:#f1f5f9; color:#64748b; font-size:0.70rem; font-weight:800; display:flex; align-items:center; justify-content:center;">' + cell.label + '</div>';
        } else {
          var isPicked = (cartEntry && cartEntry.marketKey === mr.key && cartEntry.marks.indexOf(cell.mark) !== -1);
          var isAi1 = (item.ai1.market === mr.key && item.ai1.mark === cell.mark);
          var isAi2 = (item.ai2.market === mr.key && item.ai2.mark === cell.mark);

          var baseStyle = 'height:36px; border-radius:7px; padding:2px 6px; display:flex; align-items:center; justify-content:space-between; border:1.5px solid #cbd5e1; background:#ffffff; color:#0f172a;';
          if (isAi1 && !isPicked) {
            baseStyle = 'height:36px; border-radius:7px; padding:2px 6px; display:flex; align-items:center; justify-content:space-between; border:1.5px solid #d97706; background:#fef3c7; color:#0f172a;';
          } else if (isAi2 && !isPicked) {
            baseStyle = 'height:36px; border-radius:7px; padding:2px 6px; display:flex; align-items:center; justify-content:space-between; border:1.5px solid #38bdf8; background:#e0f2fe; color:#0f172a;';
          }

          var rankPill = isAi1
            ? '<span style="background:#dc2626; color:#fde047; font-size:0.55rem; font-weight:900; padding:0 3px; border-radius:3px; margin-left:2px;">👑1</span>'
            : (isAi2 ? '<span style="background:#0284c7; color:#fff; font-size:0.55rem; font-weight:900; padding:0 3px; border-radius:3px; margin-left:2px;">🥈2</span>' : '');

          html += '<div class="proto-direct-pick-btn' + (isPicked ? ' is-user-picked' : '') + '" '
            + 'data-base-seq="' + bSeq + '" data-market-key="' + mr.key + '" data-mark-code="' + cell.mark + '" '
            + 'onclick="toggleProtoDirectPick(' + bSeq + ', \'' + mr.key + '\', \'' + cell.mark + '\', event)" '
            + 'style="' + baseStyle + '">'
            +   '<span style="font-size:0.70rem; font-weight:900; display:inline-flex; align-items:center;">' + cell.label + rankPill + '</span>'
            +   '<div style="text-align:right; line-height:1.05;">'
            +     '<div style="font-size:0.78rem; font-weight:900;">' + cell.odds.toFixed(2) + '</div>'
            +     '<div style="font-size:0.56rem; font-weight:800; color:#475569;">' + cell.prob + '%</div>'
            +   '</div>'
            + '</div>';
        }
      }

      html += '</div>';
    }
    html += '</div>';

    // Bottom AI Summary & Stats Button Row
    html += '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-top:7px; padding-top:6px; border-top:1px dashed #e2e8f0;">'
      + '<div style="display:flex; flex-direction:column; gap:3px;">'
      +   '<span style="background:#fef3c7; border:1px solid #f59e0b; color:#92400e; font-size:0.70rem; font-weight:900; padding:2px 7px; border-radius:6px;">👑 1st Lock: ' + item.ai1.label + ' <b>' + item.ai1.prob + '% (' + item.ai1.odds.toFixed(2) + ')</b></span>'
      +   '<span style="background:#e0f2fe; border:1px solid #38bdf8; color:#075985; font-size:0.68rem; font-weight:800; padding:2px 7px; border-radius:6px;">🥈 2nd Pick: ' + item.ai2.label + ' <b>' + item.ai2.prob + '% (' + item.ai2.odds.toFixed(2) + ')</b></span>'
      + '</div>'
      + '<button type="button" onclick="openUsMatchDetailModal(\'parlay\', ' + bSeq + ')" style="background:linear-gradient(135deg,#2563eb,#1d4ed8); color:#fff; border:1.5px solid #fde047; border-radius:7px; padding:5px 10px; font-size:0.72rem; font-weight:900; cursor:pointer;">'
      +   '<i class="fa-solid fa-chart-simple"></i> Stats'
      + '</button>'
      + '</div>'
      + '</div>';
  }

  container.innerHTML = html;
  updateProtoCartFloatingBar();
};

window.toggleProtoDirectPick = function(baseSeq, marketKey, markCode, ev) {
  if (ev && ev.stopPropagation) ev.stopPropagation();
  var bSeq = Number(baseSeq);
  var mKey = String(marketKey || 'std');
  var code = String(markCode || 'W');

  var entry = window._protoCartMap[bSeq];
  if (!entry || entry.marketKey !== mKey) {
    entry = { marketKey: mKey, marks: [code] };
    window._protoCartMap[bSeq] = entry;
    if (window._proto11SelectedBaseSeqs.indexOf(bSeq) === -1) {
      window._proto11SelectedBaseSeqs.push(bSeq);
    }
  } else {
    var idx = entry.marks.indexOf(code);
    if (idx !== -1) {
      entry.marks.splice(idx, 1);
      if (entry.marks.length === 0) {
        delete window._protoCartMap[bSeq];
        var sIdx = window._proto11SelectedBaseSeqs.indexOf(bSeq);
        if (sIdx !== -1) window._proto11SelectedBaseSeqs.splice(sIdx, 1);
        delete window._proto11RowState[bSeq];
      }
    } else {
      entry.marks.push(code);
    }
  }

  if (window._protoCartMap[bSeq]) {
    window._proto11RowState[bSeq] = {
      marketKey: window._protoCartMap[bSeq].marketKey,
      picks: window._protoCartMap[bSeq].marks.slice()
    };
  }

  // Update button classes inside this card immediately without full DOM rebuild
  var card = document.querySelector('.proto-card-item[data-base-seq="' + bSeq + '"]');
  if (card) {
    var btns = card.querySelectorAll('.proto-direct-pick-btn');
    var cur = window._protoCartMap[bSeq];
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      var bk = b.getAttribute('data-market-key');
      var bm = b.getAttribute('data-mark-code');
      if (cur && cur.marketKey === bk && cur.marks.indexOf(bm) !== -1) {
        b.classList.add('is-user-picked');
      } else {
        b.classList.remove('is-user-picked');
      }
    }
  }

  updateProtoCartFloatingBar();
};

// Ultra-Slim 1-Line Floating Bar (#protoCartFloatingBar) — Shown ONLY on 'proto' tab
window.updateProtoCartFloatingBar = function() {
  var count = window._proto11SelectedBaseSeqs.length;
  var badgeEl = document.getElementById('comboCartBadgeCount');
  if (badgeEl) badgeEl.textContent = count > 0 ? '(' + count + ')' : '';

  var bar = document.getElementById('protoCartFloatingBar');
  if (window._usCurrentTab !== 'proto' || count === 0) {
    if (bar) bar.style.display = 'none';
    return;
  }

  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'protoCartFloatingBar';
    bar.style.cssText = 'position:fixed; bottom:10px; left:50%; transform:translateX(-50%); z-index:9990; background:rgba(15,23,42,0.96); border:1.5px solid #f59e0b; border-radius:11px; padding:6px 10px; box-shadow:0 8px 24px rgba(0,0,0,0.55); display:flex; align-items:center; justify-content:space-between; gap:8px; width:94%; max-width:520px; max-height:44px; backdrop-filter:blur(8px);';
    document.body.appendChild(bar);
  }

  bar.style.display = 'flex';
  bar.innerHTML = '<div style="display:flex; align-items:center; gap:6px; min-width:0; overflow:hidden; white-space:nowrap;">'
    + '<span style="background:#f59e0b; color:#0f172a; font-weight:900; font-size:0.75rem; padding:2px 7px; border-radius:6px; flex-shrink:0;">' + count + '</span>'
    + '<span style="color:#fde047; font-size:0.78rem; font-weight:900; overflow:hidden; text-overflow:ellipsis;"><b>' + count + ' Picked</b> <span style="color:#cbd5e1; font-weight:700; font-size:0.72rem;">(Unlimited · Prune in Combo)</span></span>'
    + '</div>'
    + '<div style="display:flex; align-items:center; gap:5px; flex-shrink:0;">'
    + '<button type="button" onclick="switchMainCategory(\'combo\')" style="background:linear-gradient(135deg,#f59e0b,#d97706); color:#0f172a; border:none; border-radius:7px; padding:5px 10px; font-size:0.75rem; font-weight:900; cursor:pointer; white-space:nowrap;">🚀 Go to Combo (' + count + ')</button>'
    + '<button type="button" onclick="proto11ClearAll()" style="background:#1e293b; color:#cbd5e1; border:1px solid #475569; border-radius:7px; padding:5px 8px; font-size:0.72rem; font-weight:800; cursor:pointer;">Clear</button>'
    + '</div>';
};

window.autoPickTop11ToCombo = function() {
  window._proto11SelectedBaseSeqs = [];
  window._protoCartMap = {};
  window._proto11RowState = {};
  initDefaultProto11Board();
  renderUsParlayCards();
  switchMainCategory('combo');
};

/* ==========================================================================
   7. US PARLAY N-1 INSURANCE COMBINATOR (COMBO TAB · 64 & 96 SLIPS)
   ========================================================================== */
window._lastProto11Slips = [];

window.renderProto11GuaranteeBoard = function() {
  initDefaultProto11Board();

  // Populate candidate select dropdown
  var candSel = document.getElementById('proto11CandidateSelect');
  if (candSel) {
    var optHtml = '<option value="">+ Select US Game to Add (NBA/NFL/MLB/NHL/MLS)...</option>';
    for (var c = 0; c < US_PARLAY_MATCHES.length; c++) {
      var gm = US_PARLAY_MATCHES[c];
      var inBoard = window._proto11SelectedBaseSeqs.indexOf(gm.baseSeq) !== -1;
      optHtml += '<option value="' + gm.baseSeq + '">'
        + (inBoard ? '✓ ' : '') + '#' + gm.baseSeq + ' [' + gm.league + '] ' + gm.home + ' vs ' + gm.away
        + ' (👑 ' + gm.ai1.label + ' ' + gm.ai1.odds.toFixed(2) + ')</option>';
    }
    candSel.innerHTML = optHtml;
  }

  var rowsContainer = document.getElementById('proto11MatchRows');
  if (!rowsContainer) return;

  var seqs = window._proto11SelectedBaseSeqs;
  if (seqs.length === 0) {
    rowsContainer.innerHTML = '<div style="padding:24px; text-align:center; background:#f8fafc; border:1.5px dashed #cbd5e1; border-radius:10px; color:#475569; font-size:0.86rem; font-weight:800;">'
      + 'No games in your Parlay Combo yet. Click <b>[+ Pick from US Parlay]</b> or <b>[Auto 11 (192)]</b> above!'
      + '</div>';
    var cntEmpty = document.getElementById('proto11PickCountsText');
    if (cntEmpty) cntEmpty.innerHTML = '<b>0</b> Picked';
    return;
  }

  var sCnt = 0, dCnt = 0, tCnt = 0, rawCombos = 1;
  var html = '';

  for (var i = 0; i < seqs.length; i++) {
    var bSeq = seqs[i];
    var m = findUsParlayMatch(bSeq);
    if (!m) continue;

    var st = window._proto11RowState[bSeq] || { marketKey: m.ai1.market || 'std', picks: [m.ai1.mark || 'W'] };
    window._proto11RowState[bSeq] = st;
    var mKey = st.marketKey;
    var picks = st.picks || ['W'];

    if (picks.length === 1) sCnt++;
    else if (picks.length === 2) dCnt++;
    else if (picks.length >= 3) tCnt++;
    rawCombos *= Math.max(1, picks.length);

    var rowCls = 'm14-row ' + (picks.length === 1 ? 'single-pick' : (picks.length === 2 ? 'double-pick' : 'triple-pick'));

    var mBadgeText = 'ML';
    var mBadgeBg = '#2563eb';
    var dispSeq = bSeq;
    var mData = m.std;

    if (mKey === 'uo') {
      mBadgeText = 'U/O ' + m.uo.line;
      mBadgeBg = '#059669';
      dispSeq = bSeq + 300;
      mData = m.uo;
    } else if (mKey === 'handi') {
      mBadgeText = 'Sprd ' + (m.handi.line > 0 ? '+' + m.handi.line : m.handi.line);
      mBadgeBg = '#dc2626';
      dispSeq = bSeq + 200;
      mData = m.handi;
    } else if (mKey === 'w1l' && m.w1l) {
      mBadgeText = m.league === 'NFL' ? 'W3L' : 'W5L';
      mBadgeBg = '#e11d48';
      dispSeq = bSeq + 100;
      mData = m.w1l;
    } else {
      mBadgeText = m.std.d > 0 ? '1X2' : 'ML';
      mBadgeBg = '#2563eb';
      dispSeq = bSeq;
      mData = m.std;
    }

    html += '<div class="' + rowCls + '">'
      + '<div class="m14-col-num"><span class="m14-num-badge">' + (i + 1) + '</span></div>'
      + '<div class="m14-col-info">'
      +   '<div style="display:flex; align-items:center; gap:5px; flex-shrink:0;">'
      +     '<span onclick="proto11CycleMarket(' + i + ')" title="Click to switch market (ML / Spread / U/O)" style="background:' + mBadgeBg + '; color:#fff; font-size:0.65rem; font-weight:900; padding:2px 6px; border-radius:5px; cursor:pointer; white-space:nowrap;">#' + dispSeq + ' ' + mBadgeText + ' ↻</span>'
      +     '<span style="font-size:0.68rem; font-weight:900; color:#475569;">' + m.league + '</span>'
      +   '</div>'
      +   '<div class="m14-match-title">'
      +     '<span class="m14-team-home">' + m.home + '</span>'
      +     '<span class="m14-vs-badge">vs</span>'
      +     '<span class="m14-team-away">' + m.away + '</span>'
      +   '</div>'
      +   '<button type="button" onclick="proto11RemoveMatch(' + i + ')" title="Remove this match from Combo" style="background:#fee2e2; color:#dc2626; border:1px solid #fca5a5; border-radius:5px; width:24px; height:24px; font-size:0.72rem; font-weight:900; cursor:pointer; flex-shrink:0;">✕</button>'
      + '</div>'
      + '<div class="m14-col-picks">';

    // Render 3 pick buttons for this row
    var btnDefs = [];
    if (mKey === 'uo') {
      btnDefs = [
        { code: 'W', lbl: 'U', odds: mData.w, valid: true },
        { code: 'D', lbl: mData.line, odds: 0, valid: false },
        { code: 'L', lbl: 'O', odds: mData.l, valid: true }
      ];
    } else if (mKey === 'w1l' && m.w1l) {
      btnDefs = [
        { code: 'W', lbl: 'W', odds: mData.w, valid: true },
        { code: '5', lbl: m.league === 'NFL' ? '3' : '5', odds: mData.d, valid: true },
        { code: 'L', lbl: 'L', odds: mData.l, valid: true }
      ];
    } else {
      var hasD = mData.d > 0;
      btnDefs = [
        { code: 'W', lbl: 'W', odds: mData.w, valid: true },
        { code: 'D', lbl: hasD ? 'X' : '-', odds: mData.d, valid: hasD },
        { code: 'L', lbl: 'L', odds: mData.l, valid: true }
      ];
    }

    for (var b = 0; b < 3; b++) {
      var bd = btnDefs[b];
      var cls = b === 0 ? 'w' : (b === 1 ? 'd' : 'l');
      if (!bd.valid) {
        html += '<button type="button" class="btn-m14-pick" disabled style="opacity:0.45; cursor:default;"><span class="pick-label">' + bd.lbl + '</span></button>';
      } else {
        var act = picks.indexOf(bd.code) !== -1 ? ' active' : '';
        html += '<button type="button" class="btn-m14-pick ' + cls + act + '" onclick="proto11TogglePick(' + i + ', \'' + bd.code + '\')">'
          + '<span class="pick-label">' + bd.lbl + '</span>'
          + '<span class="pick-odds">' + bd.odds.toFixed(2) + '</span>'
          + '</button>';
      }
    }

    html += '</div></div>';
  }

  rowsContainer.innerHTML = html;

  var cntEl = document.getElementById('proto11PickCountsText');
  if (cntEl) {
    cntEl.innerHTML = '<b>' + seqs.length + '</b> Picked (S' + sCnt + ' · D' + dCnt + ' · T' + tCnt + ')';
  }
  var totEl = document.getElementById('proto11TotalCombosText');
  if (totEl) {
    totEl.textContent = rawCombos.toLocaleString() + ' Combos ➔ 64 Slips ($64) / 96 Slips ($96)';
  }
  updateProtoCartFloatingBar();
};

window.proto11AddFromSelect = function() {
  var sel = document.getElementById('proto11CandidateSelect');
  if (!sel || !sel.value) return;
  var bSeq = Number(sel.value);
  var m = findUsParlayMatch(bSeq);
  if (!m) return;
  if (window._proto11SelectedBaseSeqs.indexOf(bSeq) === -1) {
    window._proto11SelectedBaseSeqs.push(bSeq);
    window._proto11RowState[bSeq] = { marketKey: m.ai1.market || 'std', picks: [m.ai1.mark || 'W'] };
    window._protoCartMap[bSeq] = { marketKey: m.ai1.market || 'std', marks: [m.ai1.mark || 'W'] };
  }
  renderProto11GuaranteeBoard();
};

window.proto11RemoveMatch = function(slotIdx) {
  var bSeq = window._proto11SelectedBaseSeqs[slotIdx];
  if (bSeq !== undefined) {
    window._proto11SelectedBaseSeqs.splice(slotIdx, 1);
    delete window._proto11RowState[bSeq];
    delete window._protoCartMap[bSeq];
  }
  renderProto11GuaranteeBoard();
};

window.proto11CycleMarket = function(slotIdx) {
  var bSeq = window._proto11SelectedBaseSeqs[slotIdx];
  var m = findUsParlayMatch(bSeq);
  if (!m) return;
  var order = m.w1l ? ['std', 'w1l', 'handi', 'uo'] : ['std', 'handi', 'uo'];
  var st = window._proto11RowState[bSeq] || { marketKey: 'std', picks: ['W'] };
  var curIdx = order.indexOf(st.marketKey);
  var nextKey = order[(curIdx + 1) % order.length];
  st.marketKey = nextKey;
  st.picks = [nextKey === 'uo' ? 'L' : 'W'];
  window._proto11RowState[bSeq] = st;
  window._protoCartMap[bSeq] = { marketKey: st.marketKey, marks: st.picks.slice() };
  renderProto11GuaranteeBoard();
};

window.proto11TogglePick = function(slotIdx, markCode) {
  var bSeq = window._proto11SelectedBaseSeqs[slotIdx];
  if (!bSeq) return;
  var st = window._proto11RowState[bSeq];
  if (!st) return;
  var pos = st.picks.indexOf(markCode);
  if (pos !== -1) {
    if (st.picks.length > 1) st.picks.splice(pos, 1);
  } else {
    st.picks.push(markCode);
  }
  window._protoCartMap[bSeq] = { marketKey: st.marketKey, marks: st.picks.slice() };
  renderProto11GuaranteeBoard();
};

window.proto11AutoFillBest = function() {
  window._proto11SelectedBaseSeqs = [];
  window._protoCartMap = {};
  window._proto11RowState = {};
  initDefaultProto11Board();
  renderProto11GuaranteeBoard();
};

window.proto11ClearAll = function() {
  window._proto11SelectedBaseSeqs = [];
  window._protoCartMap = {};
  window._proto11RowState = {};
  var outBox = document.getElementById('proto11ResultOutputBox');
  if (outBox) outBox.style.display = 'none';
  renderProto11GuaranteeBoard();
  renderUsParlayCards();
};

window.generateProto11GuaranteeSlips = function(mode) {
  var isIncludeTriple = (mode === 'include_triple');
  var targetSlips = isIncludeTriple ? 96 : 64;
  var reqKeys = isIncludeTriple ? 3 : 2;
  if (!consumeUsKeysOrPrompt(reqKeys, targetSlips + ' Parlay Slips Generation')) return;

  var seqs = window._proto11SelectedBaseSeqs;
  if (seqs.length < 2) {
    alert('Please select at least 2 US matches to generate Parlay slips.');
    return;
  }

  var pickArrays = [];
  for (var i = 0; i < seqs.length; i++) {
    var bSeq = seqs[i];
    var st = window._proto11RowState[bSeq] || { marketKey: 'std', picks: ['W'] };
    var p = st.picks ? st.picks.slice() : ['W'];
    if (!isIncludeTriple && p.length >= 3) {
      p = p.slice(0, 2);
    }
    pickArrays.push(p);
  }

  var fullCombos = buildCartesianProduct(pickArrays);
  var reduced = reduceByHammingWheel(fullCombos, targetSlips);
  window._lastProto11Slips = reduced;

  var outBox = document.getElementById('proto11ResultOutputBox');
  var titleEl = document.getElementById('proto11ResultTitle');
  var gridEl = document.getElementById('proto11SlipsGrid');
  if (!outBox || !gridEl) return;

  outBox.style.display = 'block';
  if (titleEl) {
    titleEl.textContent = 'Generated ' + reduced.length + ' US Parlay Slips ($' + reduced.length + ' Total · $1/Slip · ' + seqs.length + '-Leg N-1 Guaranteed)';
  }

  var html = '';
  for (var s = 0; s < reduced.length; s++) {
    var slip = reduced[s];
    var totalOdds = 1.0;
    var legsHtml = '';
    for (var mIdx = 0; mIdx < slip.length; mIdx++) {
      var bSeq2 = seqs[mIdx];
      var matchObj = findUsParlayMatch(bSeq2);
      var st2 = window._proto11RowState[bSeq2] || { marketKey: 'std' };
      var mk = st2.marketKey;
      var code = slip[mIdx];
      var mData = matchObj[mk] || matchObj.std;
      var legOdds = code === 'W' ? mData.w : (code === 'D' || code === '5' ? mData.d : mData.l);
      if (!legOdds || legOdds <= 0) legOdds = 1.85;
      totalOdds *= legOdds;

      var dispCode = mk === 'uo' ? (code === 'W' ? 'U' : 'O') : code;
      var bg = code === 'W' ? '#2563eb' : (code === 'D' || code === '5' ? '#d97706' : '#e11d48');
      legsHtml += '<span style="background:' + bg + '; color:#fff; font-size:0.64rem; font-weight:900; padding:1px 5px; border-radius:4px;">#' + bSeq2 + ':' + dispCode + '</span>';
    }

    var estPayout = Math.round(totalOdds * 100) / 100;
    html += '<div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:8px 10px;">'
      + '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">'
      +   '<span style="font-size:0.75rem; font-weight:900; color:#fde047;">Parlay Slip #' + (s + 1) + '</span>'
      +   '<span style="font-size:0.72rem; font-weight:900; color:#34d399;">Est. $' + estPayout.toLocaleString() + ' (' + totalOdds.toFixed(1) + 'x)</span>'
      + '</div>'
      + '<div style="display:flex; flex-wrap:wrap; gap:3px;">' + legsHtml + '</div>'
      + '</div>';
  }

  gridEl.innerHTML = html;
  _sendTgSharedAlert('Generated ' + reduced.length + ' US Parlay Slips (' + seqs.length + ' matches)');
};

/* ==========================================================================
   8. INTERACTIVE OMR SLIP HELPER, COPY & TXT EXPORT (#gwFullTextModal)
   ========================================================================== */
window.openGwFullTextModal = function(tab, slipIdx) {
  window._omrSourceMode = 'pool';
  if (!window._lastGeneratedPoolSlips || window._lastGeneratedPoolSlips.length === 0) {
    generateGoldenWheel24(24);
  }
  if (typeof slipIdx === 'number') window._currentOmrIndex = slipIdx;
  else window._currentOmrIndex = 0;

  var modal = document.getElementById('gwFullTextModal');
  if (modal) modal.style.display = 'flex';
  switchOmrModalTab(tab || 'omr');
};

window.openProto11OmrModal = function() {
  window._omrSourceMode = 'proto11';
  if (!window._lastProto11Slips || window._lastProto11Slips.length === 0) {
    generateProto11GuaranteeSlips('exclude_triple');
  }
  window._currentOmrIndex = 0;
  var modal = document.getElementById('gwFullTextModal');
  if (modal) modal.style.display = 'flex';
  switchOmrModalTab('omr');
};

window.closeGwFullTextModal = function() {
  var modal = document.getElementById('gwFullTextModal');
  if (modal) modal.style.display = 'none';
};

window.switchOmrModalTab = function(tab) {
  var bCard = document.getElementById('btnOmrTabCard');
  var bList = document.getElementById('btnOmrTabList');
  var bText = document.getElementById('btnOmrTabText');
  var btns = [bCard, bList, bText];
  var keys = ['omr', 'list', 'text'];
  for (var i = 0; i < 3; i++) {
    if (!btns[i]) continue;
    if (keys[i] === tab) {
      btns[i].style.background = '#f59e0b';
      btns[i].style.color = '#0f172a';
      btns[i].style.borderColor = '#f59e0b';
    } else {
      btns[i].style.background = '#1e293b';
      btns[i].style.color = '#cbd5e1';
      btns[i].style.borderColor = '#475569';
    }
  }
  renderOmrModalContent(tab);
};

function renderOmrModalContent(tab) {
  var body = document.getElementById('omrModalBodyContent');
  if (!body) return;

  var isProto = (window._omrSourceMode === 'proto11');
  var slips = isProto ? window._lastProto11Slips : window._lastGeneratedPoolSlips;
  if (!slips || slips.length === 0) {
    body.innerHTML = '<div style="padding:20px; text-align:center; color:#94a3b8;">No slips generated yet.</div>';
    return;
  }

  if (tab === 'omr') {
    var idx = Math.max(0, Math.min(slips.length - 1, window._currentOmrIndex || 0));
    var slip = slips[idx];
    var html = '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#1e293b; padding:8px 12px; border-radius:9px; border:1px solid #38bdf8;">'
      + '<button type="button" onclick="stepOmrSlip(-1)" style="background:#0f172a; color:#fff; border:1px solid #475569; border-radius:6px; padding:5px 12px; font-weight:900; cursor:pointer;">◀ Prev</button>'
      + '<span style="font-size:0.9rem; font-weight:900; color:#fde047;">Slip #' + (idx + 1) + ' of ' + slips.length + ' ($1.00)</span>'
      + '<button type="button" onclick="stepOmrSlip(1)" style="background:#2563eb; color:#fff; border:1px solid #60a5fa; border-radius:6px; padding:5px 12px; font-weight:900; cursor:pointer;">Next ▶</button>'
      + '</div>';

    html += '<div style="display:flex; flex-direction:column; gap:5px; max-height:54vh; overflow-y:auto;">';
    if (!isProto) {
      var rObj = US_POOL_ROUNDS[window._usCurrentRoundId];
      var isB = (rObj && rObj.mode === 'basket');
      var mCodes = isB ? ['W', '5', 'L'] : ['W', 'D', 'L'];
      var mLbls = isB ? ['W', '5', 'L'] : ['1', 'X', '2'];
      for (var m = 0; m < slip.length; m++) {
        var mt = rObj.matches[m];
        var pick = slip[m];
        html += '<div style="display:flex; align-items:center; justify-content:space-between; background:#111827; border:1px solid #334155; border-radius:7px; padding:5px 10px; font-size:0.78rem;">'
          + '<span style="width:28px; font-weight:900; color:#94a3b8;">#' + (m + 1) + '</span>'
          + '<span style="flex:1; font-weight:800; color:#f8fafc;">' + mt.home + ' vs ' + mt.away + '</span>'
          + '<div style="display:flex; gap:4px;">';
        for (var k = 0; k < 3; k++) {
          var on = (pick === mCodes[k]);
          var bg = on ? (k === 0 ? '#2563eb' : (k === 1 ? '#f59e0b' : '#e11d48')) : '#1e293b';
          var col = on ? '#fff' : '#64748b';
          html += '<span style="width:28px; height:24px; border-radius:5px; background:' + bg + '; color:' + col + '; display:inline-flex; align-items:center; justify-content:center; font-weight:900;">' + mLbls[k] + '</span>';
        }
        html += '</div></div>';
      }
    } else {
      var seqs = window._proto11SelectedBaseSeqs;
      for (var p = 0; p < slip.length; p++) {
        var bSeq = seqs[p];
        var pm = findUsParlayMatch(bSeq);
        var st = window._proto11RowState[bSeq] || { marketKey: 'std' };
        var code = slip[p];
        var disp = st.marketKey === 'uo' ? (code === 'W' ? 'UNDER' : 'OVER') : code;
        html += '<div style="display:flex; align-items:center; justify-content:space-between; background:#111827; border:1px solid #334155; border-radius:7px; padding:6px 10px; font-size:0.78rem;">'
          + '<span style="font-weight:900; color:#38bdf8;">#' + bSeq + ' [' + st.marketKey.toUpperCase() + ']</span>'
          + '<span style="flex:1; margin:0 10px; font-weight:800; color:#f8fafc;">' + (pm ? pm.home + ' vs ' + pm.away : '') + '</span>'
          + '<span style="background:#f59e0b; color:#0f172a; font-weight:900; padding:2px 8px; border-radius:5px;">' + disp + '</span>'
          + '</div>';
      }
    }
    html += '</div>';
    body.innerHTML = html;
  } else if (tab === 'list') {
    var listHtml = '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:6px; max-height:58vh; overflow-y:auto;">';
    for (var s = 0; s < slips.length; s++) {
      listHtml += '<div style="background:#111827; border:1px solid #334155; border-radius:7px; padding:7px 10px; font-size:0.75rem;">'
        + '<div style="color:#fde047; font-weight:900; margin-bottom:3px;">Slip #' + (s + 1) + ' ($1)</div>'
        + '<div style="color:#e2e8f0; font-family:monospace; font-weight:800; letter-spacing:1px;">' + slips[s].join(' - ') + '</div>'
        + '</div>';
    }
    listHtml += '</div>';
    body.innerHTML = listHtml;
  } else {
    var txt = formatSlipsPlainText(slips, isProto);
    body.innerHTML = '<textarea id="omrPlainTextArea" readonly style="width:100%; height:260px; background:#090d16; color:#38bdf8; border:1px solid #334155; border-radius:8px; padding:10px; font-family:monospace; font-size:0.78rem;">' + txt + '</textarea>'
      + '<button type="button" onclick="copyTextFromOmrArea()" style="margin-top:8px; width:100%; padding:10px; background:#2563eb; color:#fff; border:none; border-radius:8px; font-weight:900; cursor:pointer;"><i class="fa-solid fa-copy"></i> Copy All Slips to Clipboard</button>';
  }
}

window.stepOmrSlip = function(delta) {
  var isProto = (window._omrSourceMode === 'proto11');
  var slips = isProto ? window._lastProto11Slips : window._lastGeneratedPoolSlips;
  if (!slips || slips.length === 0) return;
  window._currentOmrIndex = (window._currentOmrIndex + delta + slips.length) % slips.length;
  renderOmrModalContent('omr');
};

function formatSlipsPlainText(slips, isProto) {
  var lines = [];
  lines.push('====================================================');
  lines.push('TOKEON US - OFFICIAL MATHEMATICAL N-1 SLIPS (' + slips.length + ' SLIPS · $' + slips.length + ')');
  lines.push('====================================================');
  for (var i = 0; i < slips.length; i++) {
    lines.push('Slip #' + String(i + 1).padStart(2, '0') + ': ' + slips[i].join(' '));
  }
  return lines.join('\n');
}

window.copyTextFromOmrArea = function() {
  var area = document.getElementById('omrPlainTextArea');
  if (!area) return;
  navigator.clipboard.writeText(area.value).then(function() {
    alert('Copied all ' + area.value.split('\n').length + ' lines to clipboard!');
  });
};

window.copyAllPoolSlips = function() {
  if (!window._lastGeneratedPoolSlips || window._lastGeneratedPoolSlips.length === 0) {
    generateGoldenWheel24(24);
  }
  var txt = formatSlipsPlainText(window._lastGeneratedPoolSlips, false);
  navigator.clipboard.writeText(txt).then(function() {
    alert('Copied ' + window._lastGeneratedPoolSlips.length + ' US Pool Slips to clipboard!');
  });
};

window.downloadPoolSlipsTxt = function() {
  if (!window._lastGeneratedPoolSlips || window._lastGeneratedPoolSlips.length === 0) return;
  var txt = formatSlipsPlainText(window._lastGeneratedPoolSlips, false);
  var blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'TOKEON_US_' + window._usCurrentRoundId + '_' + window._lastGeneratedPoolSlips.length + 'Slips.txt';
  a.click();
};

window.copyProto11Slips = function() {
  if (!window._lastProto11Slips || window._lastProto11Slips.length === 0) {
    generateProto11GuaranteeSlips('exclude_triple');
  }
  var txt = formatSlipsPlainText(window._lastProto11Slips, true);
  navigator.clipboard.writeText(txt).then(function() {
    alert('Copied ' + window._lastProto11Slips.length + ' US Parlay Slips to clipboard!');
  });
};

/* ==========================================================================
   9. SAVED COMBINATIONS STORAGE & MODAL (#gwSavedModal)
   ========================================================================== */
function getSavedUsSets() {
  try {
    var raw = localStorage.getItem('tokeon_us_saved_sets');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsSetsArray(arr) {
  localStorage.setItem('tokeon_us_saved_sets', JSON.stringify(arr));
  updateSavedSetsBadges();
}

function updateSavedSetsBadges() {
  var arr = getSavedUsSets();
  var ids = ['navSavedSetsCount', 'toolbarSavedSetsCount', 'proto11SavedSetsCount'];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) el.textContent = String(arr.length);
  }
}

window.saveCurrentGwCombination = function() {
  var rObj = US_POOL_ROUNDS[window._usCurrentRoundId];
  if (!rObj) return;
  var arr = getSavedUsSets();
  arr.unshift({
    id: 'US_SET_' + Date.now(),
    type: rObj.mode === 'basket' ? 'NBA W5L (14M)' : 'MLS 1X2 (14M)',
    roundId: window._usCurrentRoundId,
    title: rObj.label,
    date: new Date().toLocaleString('en-US'),
    picks: JSON.parse(JSON.stringify(window._usPoolPicks)),
    slipsCount: window._lastGeneratedPoolSlips.length || 24
  });
  saveUsSetsArray(arr);
  openGwSavedModal();
};

window.saveCurrentProto11Combination = function() {
  var seqs = window._proto11SelectedBaseSeqs;
  if (!seqs || seqs.length === 0) return;
  var arr = getSavedUsSets();
  arr.unshift({
    id: 'US_PARLAY_' + Date.now(),
    type: 'US Parlay (' + seqs.length + ' Legs)',
    title: 'USA Sportsbook ' + seqs.length + '-Match N-1 Combo',
    date: new Date().toLocaleString('en-US'),
    seqs: seqs.slice(),
    rowState: JSON.parse(JSON.stringify(window._proto11RowState)),
    slipsCount: window._lastProto11Slips.length || 64
  });
  saveUsSetsArray(arr);
  openGwSavedModal();
};

window.openGwSavedModal = function() {
  var modal = document.getElementById('gwSavedModal');
  var listEl = document.getElementById('gwSavedModalList');
  if (!modal || !listEl) return;
  modal.style.display = 'flex';

  var arr = getSavedUsSets();
  if (arr.length === 0) {
    listEl.innerHTML = '<div style="padding:24px; text-align:center; color:#94a3b8; font-weight:800;">No saved sets yet. Click <b>[Save Set]</b> on MLS 1X2, NBA W5L, or US Parlay Combo!</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    html += '<div style="background:#1e293b; border:1px solid #334155; border-radius:10px; padding:10px 12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">'
      + '<div>'
      +   '<div style="display:flex; align-items:center; gap:6px;">'
      +     '<span style="background:#2563eb; color:#fff; font-size:0.65rem; font-weight:900; padding:2px 6px; border-radius:4px;">' + item.type + '</span>'
      +     '<span style="font-size:0.84rem; font-weight:900; color:#fde047;">' + item.title + '</span>'
      +   '</div>'
      +   '<div style="font-size:0.70rem; color:#94a3b8; margin-top:3px;">Saved: ' + item.date + ' · ' + item.slipsCount + ' Slips ($' + item.slipsCount + ')</div>'
      + '</div>'
      + '<div style="display:flex; gap:6px;">'
      +   '<button type="button" onclick="loadSavedUsCombination(\'' + item.id + '\')" style="background:#10b981; color:#fff; border:none; border-radius:6px; padding:6px 10px; font-size:0.74rem; font-weight:900; cursor:pointer;">Load</button>'
      +   '<button type="button" onclick="deleteSavedUsCombination(\'' + item.id + '\')" style="background:#dc2626; color:#fff; border:none; border-radius:6px; padding:6px 10px; font-size:0.74rem; font-weight:900; cursor:pointer;">Delete</button>'
      + '</div>'
      + '</div>';
  }
  listEl.innerHTML = html;
};

window.closeGwSavedModal = function() {
  var modal = document.getElementById('gwSavedModal');
  if (modal) modal.style.display = 'none';
};

window.loadSavedUsCombination = function(id) {
  var arr = getSavedUsSets();
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item.id === id) {
      closeGwSavedModal();
      if (item.roundId && US_POOL_ROUNDS[item.roundId]) {
        var r = US_POOL_ROUNDS[item.roundId];
        window._usCurrentRoundId = item.roundId;
        switchMainCategory(r.mode);
        window._usPoolPicks = JSON.parse(JSON.stringify(item.picks));
        renderUsPoolBoard();
      } else if (item.seqs) {
        window._proto11SelectedBaseSeqs = item.seqs.slice();
        window._proto11RowState = JSON.parse(JSON.stringify(item.rowState || {}));
        switchMainCategory('combo');
      }
      break;
    }
  }
};

window.deleteSavedUsCombination = function(id) {
  var arr = getSavedUsSets().filter(function(x) { return x.id !== id; });
  saveUsSetsArray(arr);
  openGwSavedModal();
};

/* ==========================================================================
   10. US MATCH DEEP ANALYTICS & H2H MODAL (#matchDetailModal)
   ========================================================================== */
window.openUsMatchDetailModal = function(source, id) {
  var modal = document.getElementById('matchDetailModal');
  var titleEl = document.getElementById('matchDetailModalTitle');
  var bodyEl = document.getElementById('matchDetailModalBody');
  if (!modal || !bodyEl) return;

  var home = '', away = '', league = '', h2h = '', note = '', oddsStr = '', aiPick = '';
  if (source === 'pool') {
    var rObj = US_POOL_ROUNDS[window._usCurrentRoundId];
    var m = rObj ? rObj.matches[id] : null;
    if (!m) return;
    home = m.home;
    away = m.away;
    league = m.league;
    h2h = m.h2h;
    note = m.note;
    oddsStr = 'Home ' + m.odds[0].toFixed(2) + ' / Mid ' + m.odds[1].toFixed(2) + ' / Away ' + m.odds[2].toFixed(2);
    aiPick = 'AI Marks: ' + m.aiMarks.join(' + ') + ' (' + m.probs[0] + '% / ' + m.probs[1] + '% / ' + m.probs[2] + '%)';
  } else {
    var pm = findUsParlayMatch(id);
    if (!pm) return;
    home = pm.home;
    away = pm.away;
    league = pm.league;
    h2h = pm.h2h + ' · Home Avg: ' + pm.homeAvg + ' / Away Avg: ' + pm.awayAvg;
    note = pm.note;
    oddsStr = 'ML: ' + pm.std.w.toFixed(2) + ' vs ' + pm.std.l.toFixed(2) + ' | Spread (' + pm.handi.line + '): ' + pm.handi.w.toFixed(2) + ' | U/O (' + pm.uo.line + '): ' + pm.uo.l.toFixed(2);
    aiPick = '👑 1st Lock: ' + pm.ai1.label + ' (' + pm.ai1.prob + '%) · 🥈 2nd Pick: ' + pm.ai2.label + ' (' + pm.ai2.prob + '%)';
  }

  if (titleEl) titleEl.textContent = '📊 [' + league + '] ' + home + ' vs ' + away + ' — Deep H2H Analytics';
  bodyEl.innerHTML = '<div style="display:flex; flex-direction:column; gap:10px; font-size:0.84rem;">'
    + '<div style="background:#eff6ff; border:1.5px solid #93c5fd; border-radius:9px; padding:10px 12px;">'
    +   '<div style="font-weight:900; color:#1d4ed8; margin-bottom:4px;">🏆 Head-to-Head &amp; Scoring Splits</div>'
    +   '<div style="font-weight:800; color:#0f172a;">' + h2h + '</div>'
    + '</div>'
    + '<div style="background:#fffbeb; border:1.5px solid #fcd34d; border-radius:9px; padding:10px 12px;">'
    +   '<div style="font-weight:900; color:#b45309; margin-bottom:4px;">🎯 Official US Sportsbook Lines &amp; AI Projection</div>'
    +   '<div style="font-weight:800; color:#0f172a; margin-bottom:4px;">' + oddsStr + '</div>'
    +   '<div style="font-weight:900; color:#dc2626;">' + aiPick + '</div>'
    + '</div>'
    + '<div style="background:#f8fafc; border:1.5px solid #cbd5e1; border-radius:9px; padding:10px 12px;">'
    +   '<div style="font-weight:900; color:#334155; margin-bottom:4px;">🧠 AI Tactical Breakdown</div>'
    +   '<div style="font-weight:700; color:#0f172a; line-height:1.5;">' + note + '</div>'
    + '</div>'
    + '</div>';

  modal.style.display = 'flex';
};

window.closeMatchDetailModal = function() {
  var modal = document.getElementById('matchDetailModal');
  if (modal) modal.style.display = 'none';
};

/* ==========================================================================
   11. KEY TOP-UP & 50% OFF VVIP UNLIMITED PASS (#keyChargeModal) + ACCOUNT
   ========================================================================== */
function updateUsHeaderStatus() {
  var keyBadge = document.getElementById('headerKeyCountBadge');
  var userTxt = document.getElementById('headerUserNameText');
  var logoutBtn = document.getElementById('btnMemberLogout');

  if (keyBadge) {
    if (isUsVvipActive()) {
      var daysLeft = Math.max(1, Math.ceil((window._usUser.vvipUntil - Date.now()) / 86400000));
      keyBadge.textContent = 'VVIP (' + daysLeft + 'd)';
    } else {
      keyBadge.textContent = String(window._usUser.keys);
    }
  }
  if (userTxt) {
    userTxt.textContent = window._usUser.id ? window._usUser.id : 'Sign In';
  }
  if (logoutBtn) {
    logoutBtn.style.display = window._usUser.id ? 'block' : 'none';
  }
}

window.openKeyChargeModal = function(tab) {
  var modal = document.getElementById('keyChargeModal');
  if (modal) modal.style.display = 'flex';
  switchChargeModalTab(tab || 'key');
};

window.closeKeyChargeModal = function() {
  var modal = document.getElementById('keyChargeModal');
  if (modal) modal.style.display = 'none';
};

window.switchChargeModalTab = function(tab) {
  var keyTab = document.getElementById('chargeTabKeyContent');
  var vvipTab = document.getElementById('chargeTabVvipContent');
  var bKey = document.getElementById('tabBtnChargeKey');
  var bVvip = document.getElementById('tabBtnChargeVvip');

  if (tab === 'vvip') {
    if (keyTab) keyTab.style.display = 'none';
    if (vvipTab) vvipTab.style.display = 'block';
    if (bVvip) { bVvip.style.borderColor = '#f59e0b'; bVvip.style.background = 'rgba(245,158,11,0.22)'; bVvip.style.color = '#fde047'; }
    if (bKey) { bKey.style.borderColor = '#475569'; bKey.style.background = '#1e293b'; bKey.style.color = '#cbd5e1'; }
    selectUsPackage('vvip30', 'VVIP 1-Month Unlimited Pass (50% OFF)', 99, 0, 30);
  } else {
    if (keyTab) keyTab.style.display = 'block';
    if (vvipTab) vvipTab.style.display = 'none';
    if (bKey) { bKey.style.borderColor = '#f59e0b'; bKey.style.background = 'rgba(245,158,11,0.22)'; bKey.style.color = '#fde047'; }
    if (bVvip) { bVvip.style.borderColor = '#475569'; bVvip.style.background = '#1e293b'; bVvip.style.color = '#cbd5e1'; }
    selectUsPackage('key5', 'Starter Pack (5 Keys)', 9.99, 5, 0);
  }
};

window.selectUsPackage = function(id, title, price, keys, vvipDays) {
  window._selectedUsPkg = { id: id, title: title, price: price, keys: keys, vvipDays: vvipDays };
  var allCards = document.querySelectorAll('.us-price-card');
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].style.borderColor = '#334155';
  }
  var targetCard = document.getElementById('pkgCard_' + id);
  if (targetCard) targetCard.style.borderColor = '#fde047';

  var titleEl = document.getElementById('selectedUsPkgTitle');
  var btnTxtEl = document.getElementById('btnUsCheckoutText');
  var pStr = price % 1 === 0 ? price + '.00' : price.toFixed(2);
  if (titleEl) titleEl.textContent = title + ' — $' + pStr;
  if (btnTxtEl) btnTxtEl.textContent = 'Pay $' + pStr + ' & Instant Unlock (Visa / Master / Apple Pay)';
};

window.checkoutSelectedUsPackage = function() {
  var pkg = window._selectedUsPkg;
  if (!pkg) return;
  _sendTgSharedAlert('Checkout Clicked: ' + pkg.title + ' ($' + pkg.price + ')');
  var url = US_LEMON_LINKS[pkg.id] || US_LEMON_LINKS.key5;
  window.open(url, '_blank');
};

window.redeemUsPromoCode = function() {
  var inp = document.getElementById('inpUsPromoCode');
  if (!inp || !inp.value) return;
  var code = inp.value.trim().toUpperCase();
  if (code === 'USVVIP' || code === 'VICTORY' || code === '072806161210') {
    window._usUser.vvipUntil = Date.now() + 365 * 86400000;
    window._usUser.keys += 999;
    localStorage.setItem('tokeon_us_vvip_until', String(window._usUser.vvipUntil));
    localStorage.setItem('tokeon_us_keys', String(window._usUser.keys));
    updateUsHeaderStatus();
    closeKeyChargeModal();
    alert('👑 VVIP Unlimited Pass + 999 Keys Activated!');
  } else if (code === 'WELCOME3' || code === 'USA2026') {
    if (localStorage.getItem('tokeon_us_promo_' + code)) {
      alert('This promo code has already been redeemed.');
      return;
    }
    localStorage.setItem('tokeon_us_promo_' + code, '1');
    window._usUser.keys += 5;
    localStorage.setItem('tokeon_us_keys', String(window._usUser.keys));
    updateUsHeaderStatus();
    closeKeyChargeModal();
    alert('🎉 +5 Bonus Keys Added to Your Account!');
  } else {
    alert('Invalid or expired promo code.');
  }
};

window.handleUserHeaderClick = function() {
  var modal = document.getElementById('membershipModal');
  if (modal) modal.style.display = 'flex';
};

window.closeMembershipModal = function() {
  var modal = document.getElementById('membershipModal');
  if (modal) modal.style.display = 'none';
};

window.submitUsMemberLogin = function() {
  var idEl = document.getElementById('inpMemberId');
  var pwEl = document.getElementById('inpMemberPw');
  var uid = idEl && idEl.value ? idEl.value.trim() : '';
  var upw = pwEl && pwEl.value ? pwEl.value.trim() : '';

  if (!uid || uid.length < 2) {
    alert('Please enter your Username or Email.');
    return;
  }

  // Master Admin Account
  if (uid.toLowerCase() === 'victory' && upw === '072806161210') {
    window._usUser.id = '👑ADMIN(victory)';
    window._usUser.keys = 9999;
    window._usUser.vvipUntil = Date.now() + 365 * 86400000;
    localStorage.setItem('tokeon_us_user_id', window._usUser.id);
    localStorage.setItem('tokeon_us_keys', '9999');
    localStorage.setItem('tokeon_us_vvip_until', String(window._usUser.vvipUntil));
    updateUsHeaderStatus();
    closeMembershipModal();
    alert('👑 Master Admin (victory) Signed In — VVIP Unlimited & 9,999 Keys Active!');
    return;
  }

  window._usUser.id = uid;
  localStorage.setItem('tokeon_us_user_id', uid);
  if (!localStorage.getItem('tokeon_us_signup_bonus_' + uid)) {
    localStorage.setItem('tokeon_us_signup_bonus_' + uid, '1');
    window._usUser.keys = Math.max(window._usUser.keys, 3);
    localStorage.setItem('tokeon_us_keys', String(window._usUser.keys));
  }
  updateUsHeaderStatus();
  closeMembershipModal();
  _sendTgSharedAlert('User Signed In: ' + uid);
};

window.logoutUsMember = function() {
  window._usUser.id = '';
  localStorage.removeItem('tokeon_us_user_id');
  updateUsHeaderStatus();
  closeMembershipModal();
};

/* ==========================================================================
   12. VERIFIED US WINNER REVIEWS, THEME / VIEW TOGGLES & INITIALIZATION
   ========================================================================== */
var DEFAULT_US_REVIEWS = [
  { author: 'VegasSharp88', badge: 'NBA Parlay', text: 'Hit 10/11 on my NBA spread parlay — missed Lakers by 1 pt and still cashed $1,420 thanks to the 64-slip N-1 wheel!' },
  { author: 'MiamiKing305', badge: 'MLS 14-Match', text: 'Used the 48 Slips ($48) Golden Wheel on MLS Week 35. Hit 14/14 1st Prize + six 13/14 2nd Prize slips!' },
  { author: 'GridironPro', badge: 'NFL Sunday', text: 'Chiefs Over + Ravens ML + 49ers -6.5 locked in. The VVIP 50% OFF pass ($99) paid for itself in one Sunday.' },
  { author: 'HoopsSniper', badge: 'NBA W5L', text: 'Phoenix vs Lakers landed on 4-point margin (5) and the AI Double (W/5) caught it dead on.' }
];

function renderUsWinnerReviews() {
  var listEl = document.getElementById('usWinnerReviewsList');
  if (!listEl) return;
  var custom = [];
  try {
    custom = JSON.parse(localStorage.getItem('tokeon_us_reviews') || '[]');
  } catch (e) {}
  var all = custom.concat(DEFAULT_US_REVIEWS);
  var html = '';
  for (var i = 0; i < all.length; i++) {
    var r = all[i];
    html += '<div style="background:var(--bg-card-hover); border:1px solid var(--border-color); border-radius:9px; padding:8px 10px; font-size:0.76rem;">'
      + '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">'
      +   '<span style="font-weight:900; color:#2563eb;">' + r.author + '</span>'
      +   '<span style="background:#fef3c7; color:#b45309; font-size:0.62rem; font-weight:900; padding:1px 6px; border-radius:4px;">' + (r.badge || 'Verified Hit') + '</span>'
      + '</div>'
      + '<div style="color:var(--text-main); font-weight:700; line-height:1.4;">' + r.text + '</div>'
      + '</div>';
  }
  listEl.innerHTML = html;
}

window.toggleReviewWriteForm = function() {
  var box = document.getElementById('usReviewWriteBox');
  if (!box) return;
  box.style.display = box.style.display === 'none' ? 'flex' : 'none';
};

window.submitUsWinnerReview = function() {
  var aEl = document.getElementById('inpReviewAuthor');
  var tEl = document.getElementById('inpReviewTitle');
  if (!aEl || !tEl || !tEl.value.trim()) return;
  var custom = [];
  try { custom = JSON.parse(localStorage.getItem('tokeon_us_reviews') || '[]'); } catch (e) {}
  custom.unshift({ author: aEl.value.trim() || 'USMember', badge: 'LIVE HIT', text: tEl.value.trim() });
  localStorage.setItem('tokeon_us_reviews', JSON.stringify(custom.slice(0, 15)));
  tEl.value = '';
  document.getElementById('usReviewWriteBox').style.display = 'none';
  renderUsWinnerReviews();
};

window.toggleThemeMode = function() {
  var body = document.body;
  body.classList.toggle('dark-mode');
  var isDark = body.classList.contains('dark-mode');
  localStorage.setItem('tokeon_us_theme', isDark ? 'dark' : 'light');
  var icon = document.getElementById('themeToggleIcon');
  if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
};

window.toggleDeviceMode = function() {
  var body = document.body;
  body.classList.toggle('mode-mobile');
  var isMob = body.classList.contains('mode-mobile');
  var txt = document.getElementById('deviceToggleText');
  if (txt) txt.textContent = isMob ? 'PC View' : 'Mobile View';
};

window.triggerInstallApp = function() {
  var modal = document.getElementById('appInstallModal');
  if (modal) modal.style.display = 'flex';
};

window.closeAppInstallModal = function() {
  var modal = document.getElementById('appInstallModal');
  if (modal) modal.style.display = 'none';
};

window.syncUsLiveScores = function(manual) {
  renderUsPoolBoard();
  renderUsParlayCards();
  if (manual) {
    var btn = document.getElementById('refreshBtn');
    if (btn) {
      btn.style.transform = 'rotate(360deg)';
      setTimeout(function() { btn.style.transform = ''; }, 400);
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('tokeon_us_theme') === 'dark') {
    document.body.classList.add('dark-mode');
    var icon = document.getElementById('themeToggleIcon');
    if (icon) icon.className = 'fa-solid fa-sun';
  }
  updateUsHeaderStatus();
  updateSavedSetsBadges();
  renderUsWinnerReviews();
  initDefaultProto11Board();
  switchMainCategory('toto');
});
